var letsCookButton = document.querySelector('.confirm-selection');
var sideButton = document.querySelector('#sideButton');
var mainDishButton = document.querySelector('#mainDishButton');
var dessertButton = document.querySelector('#dessertButton');
var entireMealButton = document.querySelector('#entireMealButton');

var generatedRecipe = document.querySelector('.generated-recipe');
var cookpotImage = document.querySelector('.cookpot-image');
var italicText = document.querySelector('.italic-text');

letsCookButton.addEventListener('click', generateRecipe);


function generateRecipe() {
  cookpotImage.classList.add('hidden');
  italicText.classList.remove('hidden');
  generatedRecipe.classList.remove('hidden');
  if (sideButton.checked) {
    generateSideDish();
  } else if (mainDishButton.checked) {
    console.log('main dish checked');
  } else if (dessertButton.checked) {
    console.log('dessert button checked');
  } else if (entireMealButton.checked) {
    console.log('entire meal checked');
  } else {
    console.log('no selection');
  }
};

function generateSideDish() {
  generatedRecipe.innerHTML = `
  <h2>${sides[getRandomIndex(sides)]}</h2>
  `
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


var sides = [
  'mashed potatoes',
  'pommes frites',
  'roasted brussel sprouts',
  'macaroni',
  'cole slaw',
  'baked beans',
  'corn on the cob',
  'sweet potatoes',
  'an entire fried bicycle',
  'a wedge salad',
  'mozzarella sticks',
  'gazpacho',
  'edamame',
  'potato salad',
  'tempura vegetables',
  'a baked potato',
  'fried zucchini',
  'fried pickles',
  'samosas',
  'ceviche',
  'a dill pickle',
  'miso soup'
];

var mainDishes = [
  'Chicken wings',
  'Nachos',
  'Japanese curry',
  'Chicken korma',
  'Chicken tikka masala',
  'Saag paneer',
  'Pork cutlet',
  'A club sandwich',
  'Margherita Pizza',
  'A hamburger',
  'Tacos al pastor',
  'Tacos de birria',
  'Menudo',
  'Quesadillas',
  'An everlasting gobstopper',
  'Filet mignon',
  'A Reuben sandwich',
  'A fried chicken sandwich',
  'Lobster',
  'Crab cakes',
  'Okonomiyaki',
  'A knuckle sandwich'
];

var desserts = [
  'tiramisu',
  'red bean mochi',
  'ice cream mochi',
  'a chocolate chip cookie',
  'vanilla ice cream',
  'cookies and cream ice cream',
  'a churro',
  'bananas foster',
  'an ice cream sundae',
  'cherry cobbler',
  'blueberry cobbler',
  'German chocolate cake',
  'spumoni ice cream',
  'student loan forgiveness',
  'sweet, sweet revenge',
  'chocolate mousse',
  'carrot cake',
  'pineapple upside-down cake'
];
