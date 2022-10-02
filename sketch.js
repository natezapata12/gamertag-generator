// Gamertag Generator
let name1 = ["Fresh", "Stumpy", "Chunky", "Sexy", "Purple", "Wiggly", "Mammoth", "Bloody", "Mr", "Mrs", "Small", "Big", "Happy", "Sad", "Jolly", "Serious", "Skinny", "Fat", "Average", "Weird", "Cursed", "Lovely", "Flying", "Flaming", "Speedy", "Shmunky", "Awesome", "Epic", "Exciting", "Ultimate", "Random", "Lil", "Masculine", "Young", "Big", "Strawberry", "Milky", "Fitted"]

let name2 = ["Pig", "Pancakes", "Doggo", "Whale", "Fish", "Banana", "Butterfly", "Scallop", "Duck", "Goose", "Bean", "Tortilla", "Flower", "Motorcycle", "Blade", "Kitty", "Shepard", "Cow", "Rockstar", "Avocado", "Broccoli", "Skateboard", "Mango", "Lemon", "Cabbage", "Sponge", "Plant", "Chopstick", "Violin", "Dunky", "Donut", "Raisin", "Loaf", "Man", "Lady" ]

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);

  // console.log(name1[int(random(name1.length))]);

}

function draw() {

}

function mousePressed(){
  background(220)
  randomIndex = int(random(name1.length));
  text(name1[randomIndex], 50, 50);

  randomIndex = int(random(name2.length));
  text(name2[randomIndex], 108, 50);
}
