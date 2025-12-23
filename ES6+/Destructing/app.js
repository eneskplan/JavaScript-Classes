const person = {
    name:"Enes Kaplan",
    year:2002,
    salary:45000,
    showInfos: () => console.log("Bilgiler gösteriliyor...")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
console.log(isim,yil,maas);

bilgileriGoster();
