//Run with Jest

const anagrams = require("./index")
const words = require("./index")

test("Retorna verdadero cuando el listado de palabras se carga exitosamente.", () => {
	expect(words).toBe("");
})