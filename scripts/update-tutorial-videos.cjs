const fs = require("fs");
const path = require("path");

const videoLinks = {
  "heap-sort": "https://www.youtube.com/embed/HqPJF2L5h9U",
  "tim-sort": "https://www.youtube.com/embed/5KVH0vOx1Qw",
  "linear-search": "https://www.youtube.com/embed/JQhciTuD3E8",
  "jump-search": "https://www.youtube.com/embed/l8I5pFAct80",
  "fibonacci-search": "https://www.youtube.com/embed/GAafWFRGP7k",
  bridges: "https://www.youtube.com/embed/zj_aFVuUATM",
  "eulerian-path": "https://www.youtube.com/embed/8RErc0VXAo8",
  "hamiltonian-path": "https://www.youtube.com/embed/yhkAyk6IiD0",
  "johnson-s-algorithm": "https://www.youtube.com/embed/9wV1VxlfBlI",
  "ford-fulkerson-algorithm": "https://www.youtube.com/embed/1c5jk2ogGN4",
  "edmonds-karp-algorithm": "https://www.youtube.com/embed/RppuJYwlcI8",
  "dinic-s-algorithm": "https://www.youtube.com/embed/M6cm8UeeziI",
  "push-relabel-algorithm": "https://www.youtube.com/embed/i_sAVvVZ2sI",
  "hopcroft-karp-algorithm": "https://www.youtube.com/embed/lM5eIpF0xjA",
  "kuhn-s-algorithm": "https://www.youtube.com/embed/5S4Gd1j8n4I",
  "hungarian-algorithm": "https://www.youtube.com/embed/QGfn7JeXK54",
  "gale-shapley-algorithm": "https://www.youtube.com/embed/Qcv1IqHWAzg",
  "longest-common-subsequence": "https://www.youtube.com/embed/NPZn9jBrX8U",
  "matrix-chain-multiplication": "https://www.youtube.com/embed/prx1psByp7U",
  "rod-cutting": "https://www.youtube.com/embed/IRwVmTmN6go",
  "subset-sum-problem": "https://www.youtube.com/embed/IsvocB5BJhw",
  "partition-problem": "https://www.youtube.com/embed/n3LS2p7xoE8",
  "word-break-problem": "https://www.youtube.com/embed/WepWFGxiwRs",
  "palindrome-partitioning": "https://www.youtube.com/embed/WBgsABoClE0",
  "optimal-binary-search-tree": "https://www.youtube.com/embed/hgA4xxlVvfQ",
  "activity-selection": "https://www.youtube.com/embed/GJdiM-muYqc",
  "job-sequencing-problem": "https://www.youtube.com/embed/XZaJKRNyzf0",
  "fractional-knapsack": "https://www.youtube.com/embed/F_DDzYnxO14",
  "kmp-algorithm": "https://www.youtube.com/embed/V5-7GzOfADQ",
  "boyer-moore-algorithm": "https://www.youtube.com/embed/PHXAOKQk2dw",
  "z-algorithm": "https://www.youtube.com/embed/CpZh4eF8QBw",
  "manacher-s-algorithm": "https://www.youtube.com/embed/V-sEwsca1ak",
  "aho-corasick-algorithm": "https://www.youtube.com/embed/QXK2G2AzMTU",
  "suffix-automaton": "https://www.youtube.com/embed/V5-7GzOfADQ",
  "suffix-array": "https://www.youtube.com/embed/ZWlbhBjjwyA",
  "suffix-tree": "https://www.youtube.com/embed/V5-7GzOfADQ",
  "fenwick-tree": "https://www.youtube.com/embed/4SNzC4uNmTA",
  "segment-tree": "https://www.youtube.com/embed/ZBHKZF5w4YU",
  "sparse-table": "https://www.youtube.com/embed/0jWeUdxrGm4",
  "disjoint-set-union": "https://www.youtube.com/embed/0jWeUdxrGm4",
  "union-find": "https://www.youtube.com/embed/0jWeUdxrGm4",
  "huffman-coding": "https://www.youtube.com/embed/ptYUCjfNhJY",
};

const tutorialsPath = path.join(__dirname, "src/data/tutorials.json");
const tutorials = JSON.parse(fs.readFileSync(tutorialsPath, "utf-8"));

let updated = false;

for (const section of Object.values(tutorials)) {
  for (const tutorial of section) {
    if (videoLinks[tutorial.id]) {
      tutorial.videoUrl = videoLinks[tutorial.id];
      updated = true;
    }
  }
}

if (updated) {
  fs.writeFileSync(tutorialsPath, JSON.stringify(tutorials, null, 2));
  console.log("tutorials.json updated with new video URLs!");
} else {
  console.log("No matching tutorial IDs found in the mapping.");
}
