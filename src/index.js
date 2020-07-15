document.addEventListener("DOMContentLoaded", () => {
  const ourForm = document.getElementById('create-task-form');
  const tasks = document.getElementById('tasks');
  const submitButton = document.getElementById('button');

  let selector = document.createElement('select');
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

  submitButton.insertAdjacentElement('beforebegin', selector);

  ourForm.addEventListener("submit", function(e){
    e.preventDefault();

    let newTaskLi = document.createElement('li');

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function(e){
      let taskLi = e.target.parentElement
      taskLi.remove();
    })
    
    newTaskLi.innerHTML = ourForm[0].value + ' ';
    newTaskLi.appendChild(deleteButton);
    newTaskLi.style.color = ourForm[1].value
    tasks.appendChild(newTaskLi);
  })
});



// // document.getElementsByTagName('BUTTON').addEventListener("click", function(e){
//   let clickedDeleteButton = document.getElementsByClassName(e.target.className)[className]
//   clickedDeleteButton.addEventListener("click", function(e){
//     liTask = clickedDeleteButton.parentNode
//     liTask.remove
  
//   })
  
  
// // })
