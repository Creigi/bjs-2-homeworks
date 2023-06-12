"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4 * a * c;
  if (discr == 0) {
    arr[0] = (-b) / (2 * a);
  } else if (discr > 0) {
    arr[0] = (-b + Math.sqrt(discr) )/(2*a);
    arr[1] = (-b - Math.sqrt(discr) )/(2*a);
  }   
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  let tmpPercent = percent / 100;
  let monthPercent = tmpPercent / 12;
  let credit = amount - contribution;
  let monthPay = credit * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent), countMonths) - 1))));  
  return Math.round((monthPay * countMonths) * 100) / 100;                                     
}