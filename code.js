var todos = ["Buy New Turtle"]; 

var input = prompt("What Would You Like To Do")

while(input !== "quit"){
    //handle input

if (input === "list"){
    listTodos();
}else if(input === "new") {
    addTodo(); 
} else if(input === "delete"){
   deleteTodo();
}
function listTodos(){
    console.log("*******")
    todos.forEach(function(todo, i){
        
        todos.indexOf(todo);
        console.log(i + ": " + todo)


    });
    console.log("********")
}
function addTodo(){

    var newTodo = prompt("Enter new Todo");

    todos.push(newTodo);
    console.log("Added new list item")
}
function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
}
    //ask again for a new input
    input = prompt("What Would You Like To Do")
}
console.log("Ok you quit the app!")

