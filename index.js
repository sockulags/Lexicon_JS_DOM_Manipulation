const recipeName = document.getElementById("recipe-name");
console.log(recipeName.innerText)

const htmlTagRecipeName = recipeName.tagName;
console.log(htmlTagRecipeName)

const description = document.querySelector("p.description");
const computedStyles = window.getComputedStyle(description);
console.log(computedStyles.fontSize)
const image = document.querySelector("img");
console.log(image.getAttribute("alt"));

const imageInfo = {
  url: image.getAttribute("src"),
  width: image.width,
  height: image.height
}

console.log(imageInfo);

const pasteIngredients = document.querySelector("ul.ingredients-list-paste");
console.log(pasteIngredients.childElementCount);
const fourthIngredient = pasteIngredients.children.item(4).innerText;
console.log(fourthIngredient);
const instructionsList = document.querySelector("ol.instructions-list");
const instructions = [];
console.log(instructionsList)
for(let i = 0; i < instructionsList.children.length; i++){
  const instruction = {
    order: i+1,
    text: instructionsList.children[i].innerText
  }
  instructions.push(instruction)
}
console.log(instructions)