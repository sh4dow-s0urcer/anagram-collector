console.log("Begin analysis...");
const startingTime = Date.now();
const words = require("fs").readFileSync("./resources/wordlist_custom.txt").toString().split("\n");
const anagrams = new Map();


let max_anagwords;
let max_anagnum = 0;
let anagr_total = 0;


console.log("Sort the words and seek them...");
for (let i = 0; i < words.length; i++) {
	const sortedWords = words[i].split('').sort().join("");
	const anagr = anagrams.get(sortedWords);
	if (anagr) anagr.push(words[i]);
	else anagrams.set(sortedWords, [words[i]]);
}


anagrams.forEach(word_index => {
	if (word_index.length > max_anagnum)
}