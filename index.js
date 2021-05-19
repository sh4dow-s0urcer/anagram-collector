console.log("start");
const initial_time = Date.now();
const words = require("fs").readFileSync("./resources/wordlist_custom.txt").toString().split("\n");

let max_anagrams = 0;
let max_ana_words;
let ana_t_number = 0;

const anagrams = new Map();

