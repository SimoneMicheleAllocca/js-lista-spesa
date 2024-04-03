// alert("Ciao");

const shoppingList = ["latte", "formaggio", "pasta", "uova","banane","mele"]
 let listElem = document.querySelector(".shopping-list");


 let i = 0;
let result = "";
 while (i < shoppingList.length){
     const curItem = shoppingList[i];
     console.log(curItem);
    i++

    result += `<li>${curItem}</li>`;
}

listElem.innerHTML = result;
