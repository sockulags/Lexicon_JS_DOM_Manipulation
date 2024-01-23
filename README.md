# Lexicon_JS_DOM_Manipulation
Getting data from the DOM.
In this exercise you will try and get some data from the provided recipe website.
Use the appropriate methods and properties available to you to get the correct data from the "correct" recipe. All answers should be saved in some variable and logged to the console. 
## Question 1:

What is the name of the recipe?

```js
const recipeName = document.getElementById("recipe-name");
console.log(recipeName.innerText); 
// Output: Frozen Cheescake
```

In this code snippet, we use `document.getElementById("recipe-name")` to select the element with the ID "recipe-name" (assuming that's the ID of the recipe name element). We then use `innerText` to retrieve and log the text content of the recipe name to the console.
## Question 2:

What HTML tag is used to display the Recipe name?

```js
const htmlTagRecipeName = recipeName.tagName;
console.log(htmlTagRecipeName); 
// Output: H1
```

## Question 3:

What is the font size of the paragraph tag with the class "description"?

```js
const description = document.querySelector("p.description");
const computedStyles = window.getComputedStyle(description);
console.log(computedStyles.fontSize); // Output: 16px
```

## Question 4:

What is the value of the alt attribute on the image?

```js
const image = document.querySelector("img");
console.log(image.getAttribute("alt")); // Output: Slice of Frozen Cheescake
```

## Question 5:

What are the dimensions and the URL of the image? Create an object that looks like this, and log it to the console:

```js
const imageInfo = {
  url: image.getAttribute("src"),
  width: image.width,
  height: image.height,
};

console.log(imageInfo); 
/* Output: 
{
    url: 'assets/frozen-cheesecake-slice.jpg', 
    width: 91,
    height: 601
}
*/
```

## Question 6:

How many ingredients does the paste have?

```js
const pasteIngredients = document.querySelector("ul.ingredients-list-paste");
console.log(pasteIngredients.childElementCount); 
// Output: 5
```

## Question 7:

What is the fourth element in the list containing the ingredients for the paste?

```js
const fourthIngredient = pasteIngredients.children.item(3).innerText;
console.log(fourthIngredient); 
// Output: 400g naturell philadelphiaost
```

## Question 8:

Create an array of objects from the instructions. Each element in the array should be an object that looks like this:

```js
const instructionsList = document.querySelector("ol.instructions-list");
const instructions = [];

for (let i = 0; i < instructionsList.children.length; i++) {
  const instruction = {
    order: i + 1,
    text: instructionsList.children[i].innerText,
  };
  instructions.push(instruction);
}
```

