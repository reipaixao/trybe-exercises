function pali(w) {
  let reverse = w.split('').reverse().join('');
  if (reverse === w){
    return true;
  }
  else {
    return false;
  }
}
console.log(pali('rei'));
console.log(pali('rever'));

function maiorV(array){
  let indiceM = 0;
  for (let index in array){
    if (array[indiceM] < array[index]){
      indiceM = index;
    }
  }
  return indiceM;
}
console.log(maiorV([2, 3, 6, 7, 10, 1]));

function maiorNome(input){
  let maiorN = input[0];
  for (let index in input){
    if (maiorN.length < input[index].length){
      maiorN = input[index];
    }
  }
  return maiorN;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'RomualdoJr.']));












