// const form = document.querySelector(".todo_form");
// const list = document.querySelector(".todo_list");
// const LS_KEY = "TODO";
// const todoList = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

// form.addEventListener("submit", handlerSubmit);
// list.addEventListener("click", handlerTaskAction);

// if (todoList.length) {
//   list.insertAdjacentHTML("beforeend", createTodoListMarkup(todoList));
// }

// function handlerTaskAction(evt) {
//   if (evt.target.classList.contains("js_done")) {
//     markDone(evt.target);
//   } else if (evt.target.classList.contains("js_remove")) {
//     markRemove(evt.target);
//   }
// }

// function markDone(element) {
//   const listElement = element.closest(".todo_list_item");
//   listElement.classList.add("mark-done");
//   const taskID = Number(listElement.dataset.id);
//   const currentTask = todoList.find((element) => element.id === taskID);
//   currentTask.done = true;
//   localStorage.setItem(LS_KEY, JSON.stringify(todoList));
//   element.remove();
// }

// function markRemove(element) {}

// function createTodoListMarkup(arr) {
//   return arr
//     .map(
//       ({ description, priority, done }) => `
//       <li class="todo_list_item ${done ? "mark-done" : ""}">
//         <p class="item_description">${description}</p>
//         <p class="item_priority">${priority}</p>
//         ${
//           done ? "" : '<button type="button" class="js_done">Mark Done</button>'
//         }
//         <button type="button" class="js_remove">Remove</button>
//       </li>`
//     )
//     .join("");
// }

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   const formValues = {
//     id: Date.now(),
//   };
//   [...evt.currentTarget.elements].forEach(
//     ({ name, value }) => name && value && (formValues[name] = value)
//   );
//   list.insertAdjacentHTML("beforeend", markup(formValues));
//   todoList.push(formValues);
//   localStorage.setItem(LS_KEY, JSON.stringify(todoList));
// }

// function markup({ description, priority, id }) {
//   return `
//     <li data-id=${id} class="todo_list_item">
//         <p class="item_description">${description}</p>
//         <p class="item_priority">${priority}</p>
//         <button type="button" class="js_done">Mark Done</button>
//         <button type="button" class="js_remove">Remove</button>
//       </li>`;
// }
