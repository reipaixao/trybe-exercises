let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
};
console.log('Bem vinda,' , info.personagem);

info.recorrente = 'Sim';
info2.recorrente = 'Sim';

console.log(info);

for (chave in info) {
  console.log(chave);
}

for (chave in info) {
  console.log(info[chave]);
}


for (let chave in info) {
  if(info[chave] === info.recorrente && info[chave] === 'Sim' && info2[chave] === 'Sim'){
    console.log('Ambos recorrentes')
  }
  else {
    console.log(info[chave], 'e', info2[chave]);
  }
}
