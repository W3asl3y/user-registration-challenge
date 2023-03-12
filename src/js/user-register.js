/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

// Get reference to all elements in register tab
const registerTab = document.getElementsByClassName("register");

// Get reference to all elements in userList tab
const userTabs = document.getElementsByClassName("users");

/* --- Nav references --- */

const navRegTab = document.getElementById("register-tab-button");
const navUserTabs = document.getElementById("users-tab-button");

/* --- Form field references --- */

const form = document.getElementById("register-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

/* --- Table list reference --- */

const userList = document.getElementById("user-list");

/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

let users = [];

//first function
function createUser() {
  const newUser = {
    firstname: firstname.value,
    lastname: lastname.value,
    username: username.value,
    email: email.value,
    password: password.value,
  };
  users.push(newUser);
  firstname.value = "";
  lastname.value = "";
  username.value = "";
  email.value = "";
  password.value = "";
  navUserTabs.click(); // programmatically switch to user tab
}

//second function
function createUserElement(user) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>Username:</strong><span> ${user.username}</span>
    <strong>Full Name:</strong><span> ${user.firstname} ${user.lastname}</span>
    <strong>Email:</strong><span> ${user.email}</span>
    <strong>Password:</strong><span> ${user.password}</span>
  `;
  li.addEventListener("dblclick", () => {
    li.remove(); // delete user element when double-clicked
    users = users.filter((u) => u.username !== user.username); // delete user from users array
  });
  return li;
}

//third function
function populateUserList(users) {
  userList.innerHTML = "";
  for (const user of users) {
    const userElement = createUserElement(user);
    userList.appendChild(userElement);
  }
}

/* ----------------------------------------------------
    Event Listeners and Interactivity
---------------------------------------------------- */

navRegTab.addEventListener("click", () => {
//   registerTab.style.display = "block";
//   userTabs.style.display = "none";
});

navUserTabs.addEventListener("click", () => {
//   registerTab.style.display = "none";
//   userTabs.style.display = "block";
  populateUserList(users);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createUser();
});

console.log(users);