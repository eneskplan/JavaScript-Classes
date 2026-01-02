// async ile yazılan bir fonksiyon Promise döndürmek zorunda
// await sadece async function içinde çalışır
// async function test(data){ 
    
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve("bu bir değerdir.")
//         },2000)
//     })
//     let response = await promise;
//     return response;

// }

// test("Merhaba").then(response => console.log(response))


// async function testData(data){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen bir string deger girin."))
//             }
//         },3000)
//     })

//     const response = await promise;
//     return response;
// }

// testData(13).then(data=>console.log(data)).catch(err=>console.log(err))

async function getCurrency(url){
    const response = await fetch(url); // Response Object
    const data = await response.json(); // Json Object
    return data;
}

getCurrency("https://v6.exchangerate-api.com/v6/fc51eec1220ec8a5cb6b25c3/latest/USD")
.then(asd => console.log(asd)).catch(err=> console.log(err))