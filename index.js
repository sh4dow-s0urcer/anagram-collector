console.log("Commencing analysis...");
const startingTime = Date.now();
const words = require("fs").readFileSync("./resources/wordlist.txt").toString().split("\n");
const anagrams = new Map();

let max_anagnum = 0;
let max_anagwords;
let anagr_total = 0;


for (let i = 0; i < words.length; i++) {
	const sortedWords = words[i].split('').sort().join("");
	const anagr = anagrams.get(sortedWords)
	if (anagr) anagr.push(words[i]);
	else anagrams.set(sortedWords, [words[i]]);
}

anagrams.forEach(word_index => {
	if (word_index.length > max_anagnum) {
		max_anagnum = word_index.length;
		max_anagwords = word_index;
	}
	if (word_index.length > 1) anagr_total++;
});


const runtime = Date.now() - startingTime;

console.log("Total words: " + words.length);
console.log("Total anagrams: " + anagr_total);
console.log("Maximum anagrams found (" + max_anagwords.length + "): " + max_anagwords);
console.log("Computation time done in: " + runtime + " ms");