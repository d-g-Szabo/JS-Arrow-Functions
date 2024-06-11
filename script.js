//Write the following functions into arrow functions
//There is more than one possible solution
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//regular function
function greet(name) {
  return `Hello ${name}`;
}

//arrow function
const greet = (name) => {
  return `Hello ${name}`;
};

// can leave out the return keyword and curly braces and it will still work if you have only one line of code
const greet = (name) => `Hello ${name}`;

// regular function (event listener)
function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}

//arrow function
const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
};

form.addEventListener("submit", handleSubmit);

//regular function (event listener) – anonymous
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//arrow function
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

let count = 0;
button.addEventListener("click", () => (count += 1));

//regular function (forEach)
games.forEach(function (game) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//arrow function
games.forEach((game) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

// regular async
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// arrow async
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

//If you finish, try to rewrite some of your previous functions into arrow functions (for example, could you rewrite your endpoints into arrow functions?)
