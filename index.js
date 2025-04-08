const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    // All Website button default behevier disabled
  });
});

// Gmail sent Frontend to Backend functionality

const submit = document.querySelector("#submit");
const input = document.querySelector(".input");
let from;
// Create a gmail object
let obj = {
  gmail: "",
};
const handleSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") {
    // if input.value is empty than alert is work;
    alert("Please enter your email address");
  } else {
    obj.gmail = input.value;
    console.log(obj);
    input.value = "";
  }
};
submit.addEventListener("click", handleSubmit);

// notification functionality

let notifications = document.querySelector(".notifications");
let success = document.getElementById("buyBtn");
const learn = document.getElementById("learnBtn");

function createToast(type, icon, title, text, gmail) {
  let newToast = document.createElement("div");
  newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
  notifications.appendChild(newToast);
  newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}
success.onclick = function () {
  let type = "success";
  let icon = "fa-solid fa-circle-check";
  let title = "Thanks for buying!";
  let text = "BUYING SUCCESSFUL";
  createToast(type, icon, title, text);
};
learn.onclick = function () {
  let type = "learn";
  let icon = "fa-solid fa-circle-check";
  let title = "Learn more";
  let text = "LEARN MORE ABOUT OUR PRODUCTS";
  createToast(type, icon, title, text);
};

submit.onclick = function () {
  let type = "Gmail";
  let icon = "fa-solid fa-circle-check";
  let title = "Thanks for sharing gmail!";
  let text = "SHARING GMAIL SUCCESSFUL";
  let gmail = obj.gmail;
  createToast(type, icon, title, text, gmail);
};

// Toggle Button Functionality
const nav = document.querySelector("nav");
const toggle = document.querySelector("#toggle-btn");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
