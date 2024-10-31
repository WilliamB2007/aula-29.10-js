// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

//Exemplos de uso:
console.log(parOuImpar(4));
console.log(parOuImpar(7));

// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
  
  //Exemplos de uso:
  console.log(maiorDeTres(5, 10, 7));

// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".

function verificaIdade(idade) {
    if (idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }

// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

//Exemplos de uso:
console.log(classificaNota(8));
console.log(classificaNota(6));
console.log(classificaNota(4));

// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.

function diaDaSemana(numero) {
    switch (numero) {
      case 1:
        return "Domingo";
      case 2:
        return "Segunda-feira";
      case 3:
        return "Terça-feira";
      case 4:
        return "Quarta-feira";
      case 5:
        return "Quinta-feira";
      case 6:
        return "Sexta-feira";
      case 7:
        return "Sábado";
      default:
        return "Número inválido. Por favor, insira um número de 1 a 7.";
    }
  }

// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".

function classificaAnimal(animal) {
    switch (animal.toLowerCase()) {
        case 'cachorro':
        case 'gato':
            return 'Mamífero';
        case 'passarinho':
            return 'Ave';
        case 'lagarto':
            return 'Anfíbio';
        case 'salmão':
            return 'Peixe';
        default:
            return 'Animal não reconhecido';
    }
}

//Exemplos de uso:
console.log(classificaAnimal('cachorro')); // Mamífero
console.log(classificaAnimal('passarinho')); // Ave
console.log(classificaAnimal('salmão')); // Peixe
console.log(classificaAnimal('lagarto')); // Anfíbio

// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

function calculadora(num1, num2, operacao) {
    switch (operacao.toLowerCase()) {
        case 'soma':
            return num1 + num2;
        case 'subtração':
        case 'subtracao':  // Aceitando acentuação e sem acento
            return num1 - num2;
        case 'multiplicação':
        case 'multiplicacao':  // Aceitando acentuação e sem acento
            return num1 * num2;
        case 'divisão':
        case 'divisao':  // Aceitando acentuação e sem acento
            if (num2 === 0) {
                return 'Erro: divisão por zero';
            }
            return num1 / num2;
        default:
            return 'Operação não reconhecida';
    }
}

//Exemplos de uso:
console.log(calculadora(10, 5, 'soma'));          // 15
console.log(calculadora(10, 5, 'subtração'));     // 5
console.log(calculadora(10, 5, 'multiplicação')); // 50
console.log(calculadora(10, 5, 'divisão'));       // 2
console.log(calculadora(10, 0, 'divisão'));

// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.
function listaParOuImpar(numeros) {
    return numeros.map(numero => (numero % 2 === 0 ? "Par" : "Ímpar"));
}

//Exemplos de uso:
const numeros = [1, 2, 3, 4, 5, 6];
console.log(listaParOuImpar(numeros));

// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    if (horario >= 0 && horario < 12) {
        return `Bom dia, ${nome}!`;
    } else if (horario >= 12 && horario < 18) {
        return `Boa tarde, ${nome}!`;
    } else if (horario >= 18 && horario <= 23) {
        return `Boa noite, ${nome}!`;
    } else {
        return "Horário inválido.";
    }
}

//Exemplos de uso:
console.log(mensagemBoasVindas("João", 10)); // Bom dia, João!
console.log(mensagemBoasVindas("Maria", 15)); // Boa tarde, Maria!
console.log(mensagemBoasVindas("Carlos", 20)); // Boa noite, Carlos!
console.log(mensagemBoasVindas("Ana", 25));

// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).

function classificaFilme(nome, nota){
    if(nota >= 8){
        console.log(`${nome} recebeu nota ${nota} e eh excelente`)
    } else if (nota < 8 && nota >= 5){
        console.log(`${nome} recebeu nota ${nota} e eh bom`)
    } else {
        console.log(`${nome} recebeu nota ${nota} e eh ruim`)
    }
}

//Exemplos de uso:
classificaFilme("Gente Grande", 10)
classificaFilme("Madame Teia", 1.5)