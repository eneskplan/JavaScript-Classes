function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve("Olumlu sonuc");
      // reject("Olumsuz sonuc");

      if (typeof data === "string") {
        // olumlu
        resolve(data);
      } else {
        // olumsuz
        reject(new Error("string bir değer girin."));
      }
    }, 5000);
  });
}
// resolve ile bir değer döndüğünde then blogu çalışacak
// then blogu içine bir tane callback function alıyor ve response yakalayabiliriz.

// getData("Merhaba").then(function(response){
//     console.log(response);
// })

// getData("Merhaba").catch(function(err){
//     console.log(err);
// })

// getData(24)
//   .then(function (response) {
//     console.log("Gelen bilgi : " + response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


// Promise Chain
function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen bir sayı giriniz."));
      }
    }, 3000);
  });
}

addTwo(5).then((response) => {
  console.log(response);
  return response + 2;
})
.then((response2)=>{
    console.log(response2)
}) // Promise yapılarında sadece bir tane catch kullanılır.
.catch((err)=>{console.log(err)})