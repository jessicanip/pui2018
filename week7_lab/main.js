//global variables
var animal = [new Monkey(), new Dog(), new Fish()];
var names = ["T", "Ted", "Teddy"];


//
function Monkey(name, age) {
  this.name = name;
  this.age = age;
  this.type = Monkey;
  this.image = "monkey.jpg";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = Dog;
  this.image = "dog.jpg";
}

function Fish(name, age) {
  this.name = name;
  this.age = age;
  this.type = Fish;
  this.image = "fish.jpg";
}


function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random()* maxIndex);
}

function generateRandomName() {
	return generateRandomIndex(name.length);
}