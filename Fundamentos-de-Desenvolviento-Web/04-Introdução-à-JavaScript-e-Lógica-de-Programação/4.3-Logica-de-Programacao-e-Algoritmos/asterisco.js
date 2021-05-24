let n = 1;
let index = 0;
let index2 = 0;
let asterisco ="*"
let linha = " "
if (n>=1) {
  for (index = 0; index < n; index += 1){
    linha = linha + asterisco
  }
  for (index2 = 0; index2 < n; index2 =+ 1){
    console.log(linha);
  }
}
else {
  console.log("O valor atribuído deve ser maior que zero")
}

