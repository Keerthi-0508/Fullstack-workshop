
let btns = document.querySelectorAll(".btn");
let result = document.querySelector("p");

let count = 0;
let step = 1; 

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    let id = e.currentTarget.id;

    if (id === "one") {
      step = 1;
    }

    if (id === "five") {
      step = 5;
    }

    if (id === "ten") {
      step = 10;
    }

    if (id === "increase") {
      count = count + step;
    }

    if (id === "decrease") {
      if (count - step >= 0) {
        count = count - step;
      }
    }

    if (id === "reset") {
      count = 0;
    }

    result.textContent = count;
  });
});