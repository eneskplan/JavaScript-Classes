const obj1 = {
  number1: 200,
  number2: 300,
};

const obj2 = {
  number1: 100,
  number2: 367,
};

function addNumbers(number3, number4) {
  console.log(this.number1 + this.number2 + number3 + number4);
}
// Call
// call methodu ile this kullanıcaksak hangi objeyi seçmemiz gerektiğini parametre olarak veriyoruz.
// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,500,700);

// Apply
// addNumbers.apply(obj1,[100,200]);

// Bind bize bir kopya fonksiyon üretiyor.

// function getNumbersTotal(number3, number4) {
//   return this.number1 + this.number2 + number3 + number4;
// }

// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);

// console.log(copyFunc1(100,200));