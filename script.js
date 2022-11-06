// ****Dom manipulation****

//1. getElelementById

const heading = document.getElementById("heading");
console.log(heading);

// 2. getElementsByTagName

const heading = document.getElementsByTagName("h1");
console.log(heading);

// 3. getElementsByClassName

const heading = document.getElementsByClassName("heading");
console.log(heading);

// 4. QuerySelector

const heading = document.querySelector("#heading");
console.log(heading);

// . QuerySelectorAll

const heading = document.querySelectorAll(".heading");
console.log(heading);

// ****Manipulation****

const heading = document.querySelector(".heading");
heading.innerHTML = "Web dev is Awesome";
heading.style.color = "red";
heading.style.fontSize = "100px";
heading.classList.add("title");
heading.classList.remove("heading");

// ****createElements*****

const heading = document.createElement("h1");
heading.innerHTML = "JAVASCRIPT IS AWESOME";
const parent = document.querySelector(".parent");
parent.appendChild(heading);

const subHeading = document.createElement("h3");
subHeading.innerHTML = "Web Dev is Awesome";
heading.insertAdjacentElement("beforebegin", subHeading);
console.log(heading);

// **** DOM EVENTS ****

const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");

button.addEventListener("click", function (event) {
  heading.style.color = "purple";
  heading.style.fontSize = "60px";
  console.log("button clicked", event);
});

// ******Bulb Example*******

const bulbSwitch = document.querySelector("#bulbSwitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", function () {
  console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "./pic_bulbon.gif";
    bulbSwitch.innerHTML = "Turn OFF";
  } else {
    bulb.src = "./pic_bulboff.gif";
    bulbSwitch.innerHTML = "Turn ON";
  }
});

// ****** fatch API through jsonplaceholder **********

const root = document.querySelector("#root");
const button = document.querySelector("button");

function creatItem(item) {
  // card
  const card = document.createElement("div");
  card.classList.add("card");

  // photos
  const photo = document.createElement("img");
  photo.src = item.thumbnailUrl;

  // Title
  const title = document.createElement("h4");
  title.innerHTML = item.title;
  card.appendChild(photo);
  card.appendChild(title);
  root.appendChild(card);
}

function displayImages(items) {
  items.forEach(function (item) {
    creatItem(item);
  });
}

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((items) => {
      displayImages(items);
    });
});
