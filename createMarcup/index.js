import { students } from "./js/test.js";
console.log(students);

const list = document.querySelector(".list");

function createMarkup(arr) {
  return arr
    .map(
      ({ id, name, country, age }) =>
        `<li class="item">
          <h1 class="names">${name}</h1>
          <p class="ages">${age}</p>
          <p class="countrys">${country}</p>
          <p class="quontity">${id}</p>
        </li>`
    )
    .join("");
}
list.insertAdjacentHTML("beforeend", createMarkup(students));
