document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// let submitButton = document.getElementById('button');
const ourForm = document.getElementById('create-task-form');
const tasks = document.getElementById('tasks');

let selector = document.createElement('SELECT');
selector.setAttribute("id", "selector");

let red = document.createElement('option');
red.setAttribute("value", "red");
red.innerHTML = "High Priority";
selector.appendChild(red);

let yellow = document.createElement('option');
yellow.setAttribute("value", "yellow");
yellow.innerHTML = "Medium Priority";
selector.appendChild(yellow);

let green = document.createElement('option');
green.setAttribute("value", "green");
green.innerHTML = "Low Priority";
selector.appendChild(green);

ourForm.appendChild(selector);


let i = 0;

ourForm.addEventListener("submit", function(e){
  e.preventDefault();

  let newTaskLi = document.createElement('li');

  let deleteButton = document.createElement('BUTTON');
  deleteButton.innerHTML = "Delete";
  deleteButton.className = `delete ${i}`;
  i++;
  
  newTaskLi.innerHTML = ourForm.elements[0].value + ' ';
  newTaskLi.appendChild(deleteButton);
  tasks.appendChild(newTaskLi);
})

document.addEventListener("click", function(e){
  let clickedDeleteButton = document.getElementsByClassName(e.target.className)
  clickedDeleteButton.addEventListener("click", function(e){
    liTask = clickedDeleteButton.parent
  
  })
  
  
})
