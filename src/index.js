const list = app.appendChild(document.createElement("ul"));

const addButton = document.getElementById("addButton");
const alphabetize = document.getElementById("alphabetize");
const clearBtn = document.getElementById("clearBtn");
const listItem = document.querySelectorAll(".listItem");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const newItemText = document.getElementById("addItem").value;
  if (RegExp("^[a-zA-Z]+$").test(newItemText)) {
    const li = document.createElement("li");
    li.innerHTML = `<button style = "background: none" class = "listItem">${newItemText}</button>`;
    li.addEventListener("click", function (event) {
      event.preventDefault();
      if (li.firstChild.style.color != "red") li.firstChild.style.color = "red";
      else {
        li.firstChild.style.color = "black";
      }
    });

    list.appendChild(li);
    document.getElementById("addItem").value = "";
  } else {
    alert("Letters only please!");
  }
});

alphabetize.addEventListener("click", function (event) {
  event.preventDefault();
  const listItems = Array.from(list.getElementsByTagName("li"));
  listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));
  listItems.forEach((li) => list.appendChild(li));
});

clearBtn.addEventListener("click", function (event) {
  const allListItems = document.querySelectorAll("li");
  allListItems.forEach((item) => item.remove());
});
