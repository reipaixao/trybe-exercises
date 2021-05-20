let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}
let soma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index]
}
console.log(soma)
let soma = 0;
let media =0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}
media = (soma / numbers.length);
console.log(media)

if (media > 20){
  console.log("Valor maior que 20")
}
else {
  console.log("Valor menor ou igual a 20")
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    contador += 1;
  }
}

if (contador == 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(contador);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

let array = [];
for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}
console.log(array);

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
};



