const math = require('mathjs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a massa da partícula em kg: ", function(massa) {
  rl.question("Digite a velocidade da partícula em m/s: ", function(velocidade) {
    let momento = massa * velocidade;
    let energia = math.sqrt((massa * (3 * 10 ** 8) ** 2) ** 2 + momento ** 2);
    console.log("A energia total da partícula é de: " + energia + " J");
    rl.close();
  });
});
