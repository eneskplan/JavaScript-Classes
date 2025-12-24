// <-- Destructing -->

// const person = {
//     name:"Enes Kaplan",
//     year:2002,
//     salary:45000,
//     showInfos: () => console.log("Bilgiler gösteriliyor...")
// }

// const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
// console.log(isim,yil,maas);

// bilgileriGoster();




// <-- Spread Operator -->

// const addNumbers = (a,b,c) => console.log(a+b+c);
// const numbers = [100,200,300];

// addNumbers(...numbers);





// <-- For in and For of -->
// for of döngüsü ile direkt objelerde değil de string gibi
// dizilerde içindeki valueler alınabilir 


//  const langs = ["Java","c++","php"];

// for(let i in langs){
//     console.log(langs[i])
// }

// for(let i of langs){
//     console.log(i)
// }