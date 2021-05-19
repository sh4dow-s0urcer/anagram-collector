console.log("Begin analysis...");
const startingTime = Date.now();
const words = require("fs").readFileSync("./resources/wordlist_custom.txt").toString().split("\n");
const anagrams = new Map();

let max_anagrams = 0;
let max_anagr_words;
let anagr_t_number = 0;

for (let i = 0; i < words.length; i++) {
	const sortedWords = words[i].split('').sort().join("");
	const anagr = anagrams.get(sortedWords);
	if (anagr) anagr.push(words[i]);
	else anagrams.set(sortedWords, [words[i]]);
}