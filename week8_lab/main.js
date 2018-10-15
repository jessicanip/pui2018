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
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));

    var yesSaved = false;

    if (animal ==null) {
      $("#save-animal").text("Save Animal");
      animal = generateRandomAnimal();
    }
    else {
      $("#save-animal").text("Clear Animal");
      yesSaved = true;
    }

    $("#properties").text(animal.name + "  " + animal.age + " years old");
    $("#images").attr("src", animal.image);

    $("#save-animal").click(function() {
    //when we are clearing the animal
      if (yesSaved) 
      {
      // clear the animal from the local storage
        localStorage.removeItem("savedAnimal");

      // if this button was clicked, hide button and show message to user
        $("#save-animal").css("display", "none");
        $("#text").text("Cleared!");
        $("#text").css("display", "block");
      } 
    //when we are saving the animal
      else 
      {
      // save the animal to the local storage
        localStorage.setItem("savedAnimal", JSON.stringify(animal));

      // if this button was clicked, hide button and show message to user
        $("#save-animal").css("display", "none");
        $("#text").text("Saved!");
        $("#text").css("display", "block");
      }
    });

});



