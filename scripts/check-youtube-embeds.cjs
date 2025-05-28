const fs = require("fs");
const axios = require("axios");
const path = require("path");

const tutorialsPath = path.join(__dirname, "src/data/tutorials.json");
const tutorials = JSON.parse(fs.readFileSync(tutorialsPath, "utf-8"));

async function checkYouTubeEmbed(url) {
  // Convert embed URL to watch URL for oEmbed
  const match = url.match(/\/embed\/([\w-]+)/);
  if (!match) return false;
  const videoId = match[1];
  const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
  try {
    await axios.get(oEmbedUrl);
    return true;
  } catch (e) {
    return false;
  }
}

(async () => {
  let allValid = true;
  let invalidLinks = [];
  for (const section of Object.values(tutorials)) {
    for (const tutorial of section) {
      if (tutorial.videoUrl) {
        const valid = await checkYouTubeEmbed(tutorial.videoUrl);
        if (!valid) {
          allValid = false;
          invalidLinks.push({ id: tutorial.id, url: tutorial.videoUrl });
          console.log(`Invalid or unembeddable: ${tutorial.id} -> ${tutorial.videoUrl}`);
        }
      }
    }
  }
  if (allValid) {
    console.log("All YouTube links are valid and embeddable!");
  } else {
    console.log(`\n${invalidLinks.length} invalid/unembeddable links found.`);
    invalidLinks.forEach((link) => {
      console.log(`- ${link.id}: ${link.url}`);
    });
  }
})();
