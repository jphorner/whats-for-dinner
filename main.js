var letsCookButton = document.querySelector('.confirm-selection');
var sideButton = document.querySelector('#sideButton');
var mainDishButton = document.querySelector('#mainDishButton');
var dessertButton = document.querySelector('#dessertButton');
var entireMealButton = document.querySelector('#entireMealButton');
var clearButton = document.querySelector('.clear-button');

var generatedRecipe = document.querySelector('.generated-recipe');
var cookpotImage = document.querySelector('.cookpot-image');
var italicText = document.querySelector('.italic-text');

letsCookButton.addEventListener('click', generateRecipe);
clearButton.addEventListener('click', clearSelection);

function clearSelection() {
  revertRecipeBox();
  uncheckButtons();
}

function generateRecipe() {
  hideDefaultElements();
  if (sideButton.checked) {
    generateSideDish();
  } else if (mainDishButton.checked) {
    generateMainDish();
  } else if (dessertButton.checked) {
    generateDessert();
  } else if (entireMealButton.checked) {
    generateEntireMeal();
  } else {
    italicText.classList.add('hidden');
    generatedRecipe.innerHTML = `<h2><i>Please select a meal option to continue.</i></h2>`
  }
};

function generateDessert() {
  generatedRecipe.innerHTML = `
  <h2>${desserts[getRandomIndex(desserts)]}!</h2>
  `
};

function generateEntireMeal() {
  generatedRecipe.innerHTML = `
  <h2>${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</h2>
  `
};

function generateMainDish() {
  generatedRecipe.innerHTML = `
  <h2>${mainDishes[getRandomIndex(mainDishes)]}!</h2>
  `
};

function generateSideDish() {
  generatedRecipe.innerHTML = `
  <h2>${sides[getRandomIndex(sides)]}!</h2>
  `
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideDefaultElements() {
  hide(cookpotImage);
  show(italicText);
  show(generatedRecipe);
  show(clearButton);
};

function revertRecipeBox() {
  show(cookpotImage);
  hide(italicText);
  hide(generatedRecipe);
  hide(clearButton);
}

function uncheckButtons() {
  sideButton.checked = false;
  mainDishButton.checked = false;
  dessertButton.checked = false;
  entireMealButton.checked = false;
}

/// HIDE & SHOW FUNCTIONS ///

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

/// DATA ARRAYS ///

var sides = [
  'Mashed Potatoes',
  'Pommes Frites',
  'Toasted Brussel Sprouts',
  'Macaroni',
  'Cole Slaw',
  'Baked Beans',
  'Corn on the Cob',
  'Sweet Potatoes',
  'An Entire Fried Bicycle',
  'A Wedge Salad',
  'Mozzarella Sticks',
  'Gazpacho',
  'Edamame',
  'Potato Salad',
  'Tempura Vegetables',
  'A Baked Potato',
  'Fried Zucchini',
  'Fried Pickles',
  'Samosas',
  'Ceviche',
  'A Dill Pickle',
  'Miso Soup'
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
  'Tiramisu',
  'Red Bean Mochi',
  'Ice Cream Mochi',
  'A chocolate chip cookie',
  'Vanilla ice cream',
  'Cookies and cream ice cream',
  'A churro',
  'Bananas foster',
  'An ice cream sundae',
  'Cherry cobbler',
  'Blueberry cobbler',
  'German chocolate cake',
  'Spumoni ice cream',
  'Sweet, sweet revenge',
  'Chocolate mousse',
  'Carrot cake',
  'Pineapple upside-down cake'
];
