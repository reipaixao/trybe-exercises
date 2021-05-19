let a = 15;
let b = 7;

adição = (a+b);
subtração = (a-b);
multiplicação = (a*b);
divisão = (a/b);
módulo = (a%b);

console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(módulo);

let a1 = 12;
let a2 = 11;

if (a1 > a2) {
  console.log(a1)
}
else {
  console.log(a2)
}

let a3 = 18;
let a4 = 17;
let a5 = 19;

if (a3 > a4) {
  if (a3 >a5) {
    console.log(a3)
  }
  else {
    console.log(a5)
  }
}
else if (a4 > a5) {
  console.log(a4)
}
else {
  console.log(a5)
}

let num = 0

if (num > 0) {
  console.log("positivo")
}
else if (num < 0) {
  console.log("negativo")
}
else {
  console.log("zero")
}

let L1 = 60
let L2 = 10
let L3 = 110
let tri;

if (L1>0 && L2>0 &&L3>0) {
  if ((L1 + L2 + L3) == 180){
    tri = true;
    console.log(tri)
  }

  else {
  tri = false;
  console.log(false)  
}
}
else {
  console.log("Todos os ângulos devem conter valores positivos")
}

let peça = "Peão".toLowerCase();

switch (peça) {
  
  case "rei":
    console.log("horizontal, vertical e diagonal sendo uma casa de cada vez");
    break;
  
  case "rainha":
    console.log("ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
    break;
  
  case "bispo":
    console.log("ao longo da diagonal");
    break;
  
  case "cavalo":
    console.log("em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
  
  case "torre":
    console.log("vertical ou horizontal, mas não pode pular outras peças.");
    break;
  
  case "peão":
    console.log("uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo");
    break;
  
  default:
    console.log("Peça inválida")
    }

    let nota = 101

    if (nota < 0 || nota > 100) {
      console.log("A nota não é válida")
    }
    else if (nota >= 90){
      console.log("Conceito A")
    }
    else if (nota >= 80){
      console.log("Conceito B")
    }
    else if (nota >= 70){
      console.log("Conceito C")
    }
    else if (nota >= 60){
      console.log("Conceito D")
    }
    else if (nota >= 50){
      console.log("Conceito E")
    }
    else {
      console.log("Conceito F")
    }

    var par1 = 13
    var par2 = 30
    var par3 = -5
    
    if (par1%2 == 0 || par2%2 == 0 || par3%2 == 0){
      console.log(true);
    }
    else {
      console.log(false);
    }

    var impar1 = 10
    var impar2 = 33
    var impar3 = 50
    
    if (impar1%2 != 0 || impar2%2 != 0 || impar3%2 != 0){
      console.log(true);
    }
    else {
      console.log(false);
    }

    var custo = 44;
    var venda = 100;
    var custoTotal = custo*1.2;
    
    if (custo <=0 || venda <=0){
      console.log("Os valores não são válidos")
    }
    else {
      console.log("O lucro da operação é de " + (venda - custoTotal))
    }

var salario = 6500
var INSS;
var IR;
var salarioBase;
var salarioLiquido;

if (salario <=0){
  console.log("O salario não pode ser menor ou igual a 0")
}
else if (salario <= 1556.94){
  salarioBase = salario - (salario*0.08);
  salarioLiquido = salarioBase
}
else if (salario >= 1556.95 && salario <= 2594.92){
  
  salarioBase = salario - (salario*.09);
  
  if (salarioBase <= 1903,98){
  
    salarioLiquido = salarioBase
  }
  else {
    salarioLiquido = (salarioBase)-((salarioBase*0.075) - 142.80)
  }
}

else if (salario >= 2594.93 && salario <= 5189.82){
  
    salarioBase = salario - (salario*.11);
    
    if (salarioBase <= 2826.65){
    
      salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80)
    }

    else if (salarioBase <= 3751.05) {
      
      salarioLiquido = salarioBase - ((salarioBase*0.15) - 354.80)
    }    
    else {

      salarioLiquido = salarioBase-((salarioBase*0.225) - 636.13)
    }
}

else if (salario >= 5189.82) {
  
  salarioBase = salario - 570.88;

  if (salarioBase <= 4664.68) {
    
    salarioLiquido = salarioBase - ((salarioBase*0.225) - 636.13)

  }
  else {
    salarioLiquido = salarioBase - ((salarioBase*0.27) - 869.36)

  }
}


console.log(salarioLiquido)



