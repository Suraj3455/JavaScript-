let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean the House", "Take a Nap"];
while(input !== "quit" && input !== "q"){
    if(input === "list"){
       input = prompt("Enter a new todo");
       console.log("**********");
       for(let i = 0; i < todos.length; i++){
           console.log(`${i}: ${todos[i]}`);
       }
         console.log("**********");
    }else if(input === "new"){
        const newTodo = prompt("Enter a new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }else if(input === "delete"){
        const index = parseInt(prompt("Enter an index to delete"));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index");
        }
        const deleted = todos.splice(index, 1);
        console.log("Todo Deleted");
        console.log(index);

    }
}
console.log("OK, YOU QUIT THE APP");