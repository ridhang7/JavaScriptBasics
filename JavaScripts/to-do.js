let ToDoListLocator = document.querySelector(".js-TodoList");
let todo = JSON.parse(localStorage.getItem("todo")) || [];

document.querySelector('.js-todo-add').addEventListener('click', ()=> {
  addToList();
});

renderToDoList();

function addToList() {
  const todoTaskLocator = document.querySelector(".to-do");
  const name = todoTaskLocator.value;
  const toDoDateLocator = document.querySelector(".to-do-Date");
  const dueDate = toDoDateLocator.value;
  if (todoTaskLocator.value != "") {
    todo.push({ name, dueDate });
    localStorage.setItem("todo", JSON.stringify(todo));
    todoTaskLocator.value = "";
    toDoDateLocator.value = "";
  } else {
    alert("enter value in todo task");
  }

  console.log(JSON.parse(localStorage.getItem("todo")));
  ToDoListLocator.innerHTML = "";
  renderToDoList();
}

function deleteFromToDoList() {
  todo = [];
  localStorage.setItem("todo", JSON.stringify(todo));
  console.log(JSON.parse(localStorage.getItem("todo")));
  ToDoListLocator.innerHTML = "";
}

function renderToDoList() {
  ToDoListLocator.innerHTML = "";
  localStorage.setItem("todo", JSON.stringify(todo));
  
  /* forEach() method
  todo.forEach(function (todoObject, index) { 
  */
  for (let index = 0; index < todo.length; index++) {
    const todoObject = todo[index];
    console.log(todoObject);
    //object destructing
    const { name, dueDate } = todoObject;
    ToDoListLocator.innerHTML =
      ToDoListLocator.innerHTML +
      `<div>${name}</div> 
              <div>${dueDate}</div>
              <button class='js-todoDeleteItem'
              > Delete 
              </button>`;
  };

  document.querySelectorAll('.js-todoDeleteItem').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => { 
      todo.splice (index,1);
      renderToDoList();
    })
    
  });
}

// 
