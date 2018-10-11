//global variables
var animal = [new Monkey(), new Dog(), new Fish()];
var names = ["Ty", "Ted", "Teddy"];


//zoo animals
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

//setting up functions
function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random()* maxIndex);
}

function generateRandomName() {
	var randomIndex = generateRandomIndex(names.length);
  return names[randomIndex];
}

function generateRandomAge() {
  var randomIndex = generateRandomIndex(5);
  return randomIndex;
}

function generateRandomAnimal() {
  var randomIndex = generateRandomIndex(animal.length);
  var randomAnimal = animal[randomIndex];

  if (randomAnimal instanceof Monkey) {
    return new Monkey(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Dog) {
    return new Dog(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Fish) {
    return new Fish(generateRandomName(), generateRandomAge());
  }
}

//call upon load
$(document).ready(function() {
    var animal = generateRandomAnimal();
    $("#properties").text(animal.name + "  " + animal.age + " years old");
    $("#images").attr("src", animal.image);
});




