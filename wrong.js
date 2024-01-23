const logoText = document.querySelector(".logo-text");
      logoText.style.color = "black";

      const headerObj = document.querySelector("header");
      headerObj.style.justifyContent = "flex-start";
      headerObj.style.borderBottom = "1px solid lightgray";

      const recipeName = document.querySelector("#recipe-name");
      recipeName.innerText = "Frozen Cheesecake"

      const clockIcon = document.querySelector("div.time-container").firstChild;
      clockIcon.classList.add("material-icons") 
     
      const clockTime = clockIcon.parentElement.lastChild;
      clockTime.innerText = "60 min";

      const cakeImg = document.querySelector("img");
      cakeImg.src = "assets/frozen-cheesecake-slice.jpg"

      const ingredientsContainer = document.querySelector(".ingredients-container");
      ingredientsContainer.style.backgroundColor = "#f9f9f9";

      const bottomList = document.querySelector(".ingredients-list-bottom");
      bottomList.removeChild(bottomList.firstElementChild);
      const itemOne = document.createElement("li");
      itemOne.innerText = "15st digistivetex";
      bottomList.appendChild(itemOne);
      const itemTwo =  document.createElement("li");
      itemTwo.innerText = "Lite smör";
      bottomList.appendChild(itemTwo)

      const pasteList = document.querySelector(".ingredients-list-paste");
      pasteList.children[2].innerText = "3tsk vaniljsocker";
      pasteList.insertAdjacentHTML("beforeend","<li>400g naturell philadelphiaost</li>")

      const instructionsHeader = document.querySelector(".instructions-container h3")
      instructionsHeader.classList.remove("shadow");

      const instructionsList = document.querySelector("ol.instructions-list");
      instructionsList.children[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke."
      instructionsList.children[8].innerText = "Ställ in i frysen över natten.";