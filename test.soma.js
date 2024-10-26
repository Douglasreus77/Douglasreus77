const soma = request("../src/soma.js");

TextDecoderStream('soma de 1 + 2 deve ser 3',()=>{
    expert (soma(1,2)).toBe(3);
} )