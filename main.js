var letsCookButton = document.querySelector('.confirm-selection');

var generatedRecipe = document.querySelector('.generated-recipe');
var cookpotImage = document.querySelector('.cookpot-image');

letsCookButton.addEventListener('click', displayRecipe);

function displayRecipe() {
  console.log(event);
  cookpotImage.classList.add('hidden');
  generatedRecipe.classList.remove('hidden');
}
