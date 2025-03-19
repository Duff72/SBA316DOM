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
    li.innerHTML = `<button style = "background: none; border: none" class = "listItem">${newItemText}</button>`;
    li.addEventListener("click", function (event) {
      event.preventDefault();
      if (li.firstChild.style.textDecoration != "line-through")
        li.firstChild.style.textDecoration = "line-through";
      else {
        li.firstChild.style.textDecoration = "none";
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

const registerButton = document.getElementById("registerButton");

const errorBox = document.getElementById("errorDisplay");

function showError(message) {
  errorBox.innerHTML = message;
  errorBox.style.display = "flex";
}

registerButton.addEventListener("click", function (event) {
  event.preventDefault();
  const usernameRegex = new RegExp(
    "^(?=.{4,})(?=(?:.*([A-Za-z0-9])))[A-Za-z0-9]+$"
  );
  const emailRegex = new RegExp(
    "^(?!.*@example.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
  );
  const passwordRegex = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );

  if (!usernameRegex.test(document.getElementById("usernameField").value)) {
    showError("Invalid username");
  } else {
    localStorage.setItem(
      "username",
      `${document.getElementById("usernameField").value.toLowerCase()}`
    );
  }

  if (!emailRegex.test(document.getElementById("emailField").value)) {
    showError("Invalid email address");
  } else {
    localStorage.setItem(
      "email",
      `${document.getElementById("emailField").value.toLowerCase()}`
    );
  }

  if (!passwordRegex.test(document.getElementById("passwordField").value)) {
    showError("Invalid password");
  } else {
    localStorage.setItem(
      "password",
      `${document.getElementById("passwordField").value}`
    );
  }

  if (
    document.getElementById("passwordField").value !=
    document.getElementById("passwordCheckField").value
  ) {
    showError("Passwords do not match");
  }
  if (document.getElementById("terms").checked == false) {
    showError("You must agree to the Terms of Use");
  }
});
