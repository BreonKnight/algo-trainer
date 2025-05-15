const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ICON_SIZES = {
  mac: [16, 32, 64, 128, 256, 512, 1024],
  win: [16, 32, 48, 64, 128, 256],
  linux: [512],
};

const ROOT_DIR = path.join(__dirname, "..");
const BUILD_DIR = path.join(ROOT_DIR, "build");
const ICONS_DIR = path.join(BUILD_DIR, "icons");
const SOURCE_SVG = path.join(BUILD_DIR, "icon.svg");

// Create icons directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Generate PNG for Linux
console.log("Generating PNG icon for Linux...");
execSync(
  `convert -background none -resize 512x512 ${SOURCE_SVG} ${path.join(ICONS_DIR, "icon.png")}`
);

// Generate ICO for Windows
console.log("Generating ICO icon for Windows...");
const winSizes = ICON_SIZES.win.map((size) => {
  const tempFile = path.join(ICONS_DIR, `icon-${size}.png`);
  execSync(`convert -background none -resize ${size}x${size} ${SOURCE_SVG} ${tempFile}`);
  return tempFile;
});
execSync(`convert ${winSizes.join(" ")} ${path.join(ICONS_DIR, "icon.ico")}`);
winSizes.forEach((file) => fs.unlinkSync(file));

// Generate ICNS for macOS
console.log("Generating ICNS icon for macOS...");
const iconset = path.join(ICONS_DIR, "icon.iconset");
if (!fs.existsSync(iconset)) {
  fs.mkdirSync(iconset);
}

ICON_SIZES.mac.forEach((size) => {
  const scale1x = path.join(iconset, `icon_${size}x${size}.png`);
  const scale2x = path.join(iconset, `icon_${size / 2}x${size / 2}@2x.png`);

  execSync(`convert -background none -resize ${size}x${size} ${SOURCE_SVG} ${scale1x}`);
  if (size >= 32) {
    execSync(`cp ${scale1x} ${scale2x}`);
  }
});

execSync(`iconutil -c icns -o ${path.join(ICONS_DIR, "icon.icns")} ${iconset}`);
execSync(`rm -rf ${iconset}`);

console.log("Icon generation complete! Icons are available in the build/icons directory:");
console.log("- macOS: icon.icns");
console.log("- Windows: icon.ico");
console.log("- Linux: icon.png");
