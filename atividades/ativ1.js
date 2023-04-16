
/*  4.	Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
 e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva
  o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
  mantidas as taxas de crescimento. */
  function calcularAnos() {
    var a = 80000;
    var b = 200000;
    var taxaA = 0.03;
    var taxaB = 0.015;
    var anos = 0;
  
    while (a < b) {
      a = a + a * taxaA;
      b = b + b * taxaB;
      anos++;
    }
  
    return anos;
  }
  
  var anosNecessarios = calcularAnos();
  console.log("São necessários " + anosNecessarios + " anos para a população do país A ultrapassar ou igualar a população do país B.");
  