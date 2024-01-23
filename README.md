# DOM Manipulation

## Part 1
Getting data from the DOM.
In this exercise you will try and get some data from the provided recipe website.
Use the appropriate methods and properties available to you to get the correct data from the "correct" recipe. All answers should be saved in some variable and logged to the console. 
### Question 1:

What is the name of the recipe?

```js
const recipeName = document.getElementById("recipe-name");
console.log(recipeName.innerText); 
// Output: Frozen Cheescake
```

In this code snippet, we use `document.getElementById("recipe-name")` to select the element with the ID "recipe-name" (assuming that's the ID of the recipe name element). We then use `innerText` to retrieve and log the text content of the recipe name to the console.
### Question 2:

What HTML tag is used to display the Recipe name?

```js
const htmlTagRecipeName = recipeName.tagName;
console.log(htmlTagRecipeName); 
// Output: H1
```

### Question 3:

What is the font size of the paragraph tag with the class "description"?

```js
const description = document.querySelector("p.description");
const computedStyles = window.getComputedStyle(description);
console.log(computedStyles.fontSize); // Output: 16px
```

### Question 4:

What is the value of the alt attribute on the image?

```js
const image = document.querySelector("img");
console.log(image.getAttribute("alt")); // Output: Slice of Frozen Cheescake
```

### Question 5:

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

### Question 6:

How many ingredients does the paste have?

```js
const pasteIngredients = document.querySelector("ul.ingredients-list-paste");
console.log(pasteIngredients.childElementCount); 
// Output: 5
```

### Question 7:

What is the fourth element in the list containing the ingredients for the paste?

```js
const fourthIngredient = pasteIngredients.children.item(3).innerText;
console.log(fourthIngredient); 
// Output: 400g naturell philadelphiaost
```

### Question 8:

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

## Part 2

### Question 1
The logo text of the site has the wrong color. Change it to the correct one.

```javascript
const logoText = document.querySelector(".logo-text");
logoText.style.color = "black";
```

### Question 2
The alignment of the elements inside the header element is wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

```javascript
const headerObj = document.querySelector("header");
headerObj.style.justifyContent = "flex-start";
```

### Question 3
The header has a border at the bottom, but it has the wrong color. Change it to the correct one.

```javascript
headerObj.style.borderBottom = "1px solid lightgray";
```

### Question 4
The recipe name is wrong, change it to the correct one.

```javascript
const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = "Frozen Cheesecake"
```

### Question 5
The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.

```javascript
const clockIcon = document.querySelector("div.time-container").firstChild;
clockIcon.classList.add("material-icons") 
```

### Question 6
The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

```javascript
const clockTime = clockIcon.parentElement.lastChild;
clockTime.innerText = "60 min";
```

### Question 7
The src path to the image is wrong, or at least it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.

```javascript
const cakeImg = document.querySelector("img");
cakeImg.src = "assets/frozen-cheesecake-slice.jpg"
```

### Question 8
The background color of the ingredients list container is wrong. Fix it.

```javascript
const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";
```

### Question 9
The ingredients are divided into two parts, one for the bottom and one for the paste. In the list of the ingredients at the bottom, there is a text instead of two list items. Remove the text and add those two list items.

```javascript
const bottomList = document.querySelector(".ingredients-list-bottom");
bottomList.removeChild(bottomList.firstElementChild);
const itemOne = document.createElement("li");
itemOne.innerText = "15st digistivetex";
bottomList.appendChild(itemOne);
const itemTwo =  document.createElement("li");
itemTwo.innerText = "Lite smör";
bottomList.appendChild(itemTwo)
```

### Question 10
The third ingredient in the list of ingredients for the paste is wrong. Change that specific ingredient to the correct one.

```javascript
const pasteList = document.querySelector(".ingredients-list-paste");
pasteList.children[2].innerText = "3tsk vaniljsocker";
```

### Question 11
There is also a missing ingredient in the list of ingredients for the paste. Look and see what it is and add that one to the end of the list.

```javascript
pasteList.insertAdjacentHTML("beforeend","<li>400g naturell philadelphiaost</li>")
```

### Question 12
The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

```javascript
const instructionsHeader = document.querySelector(".instructions-container h3")
instructionsHeader.classList.remove("shadow");
```

### Question 13
Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

```javascript
const instructionsList = document.querySelector("ol.instructions-list");
instructionsList.children[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
instructionsList.children[8].innerText = "Ställ in i frysen över natten.";
```
