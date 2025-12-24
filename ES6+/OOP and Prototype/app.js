function Employee(name, age) {
  this.name = name;
  this.age = age;
}

//Prototype'a bu fonksiyona yazmamızın sebebi her nesne oluştuğunda tekrardan bu fonksiyon bellekte oluşmasın.
Employee.prototype.showInfos = function () {
  console.log("İsim: " + this.name + " Yas: " + this.age);
};

let emp1 = new Employee("Enes", 23);
emp1.showInfos();
