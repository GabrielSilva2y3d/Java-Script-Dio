/*Faça um programa para calcular o valor de uma viagem

Você precisa de 3 variaveis, Sendo elas

1 - Preço do combustivel
2 - Gasto médio de combustivel por KM
3 - Distancia da viagem em KM

*/ 

const precoCombustivel = 7.29;
const gastoMedioLitroPorKm = 3;
let distanciaEmKm = 200;

const valorGasto = precoCombustivel * (distanciaEmKm/gastoMedioLitroPorKm);

console.log('O valor gasto na viagem foi de R$' + valorGasto.toFixed(2))