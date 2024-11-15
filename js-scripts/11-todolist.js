const todoList = [{
  name: 'make Dinner',
  dueDate: '2022-12-22'
},{
  name: 'wash Dishes',
  dueDate: '2022-12-22'
}];  

displayTodo();

function displayTodo(){
        let todoListHTML='';
      for(let i=0;i<todoList.length;i++) 
      {
        const todoObject = todoList[i];   //access elements
        const name = todoObject.name;
        const dueDate= todoObject.dueDate;
       // let { name, dueDate} = todoList;   //same as above 2 lines
        console.log(todoObject);
        let html = `
        <div class="list">${name}</div>
        <div class="list"> ${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          displayTodo();" class="delete-button">Delete</button>
     
        `;  //generating html in JS
        todoListHTML=todoListHTML+html;   //adds the paragaphs tags together
        console.log(todoListHTML);
        document.querySelector('.js-text').innerHTML=todoListHTML;
      }
}
//console.log(todoList);

function addTodo(){
  let addList = document.querySelector('.js-names');
  let name = addList.value; //to get value from the Text Box
  let dateInput = document.querySelector('.js-due-date');
  let dueDate= dateInput.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, 
    dueDate  //above 2 lines same 
  });  //add Elements 
  addList.value=''; //to remove value after adding items
  displayTodo() //to print the values 
  }


