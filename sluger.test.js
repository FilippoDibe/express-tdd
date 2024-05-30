const { test, expect } = require("@jest/globals");
const createSlug = require('./sluger');

// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () =>{
    const result = createSlug("/prova 1", []);
    expect(typeof result).toBe("string");
});
// - createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const result = createSlug("/TITOLO TUTTO IN MAIUSCOLO",[]);
    expect(result).toBe(result.toLowerCase());
})
// - createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -',() => {
    const result = createSlug("/TITOLO CON ", []);
    expect(result).not.toContain(" ");
    expect(result).toContain("-");
})
// - createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () =>{
    const existingSlugs = ["titolo-esempio-1"];
    const result = createSlug("titolo esempio 1", existingSlugs);
    expect(result).toBe("titolo-esempio-1-1");
})
// - createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato",() =>{
    expect(() => createSlug("", [])).toThrow();
    expect(() => createSlug(null, [])).toThrow();
    expect(() => createSlug("/", [])).toThrow();
})
// - createSlug dovrebbe lanciare un errore se manca l'array dei post
test('createSlug dovrebbe lanciare un errore se manca l\'array dei post', () => {
    expect(() => createSlug("Example Title", null)).toThrow();
});