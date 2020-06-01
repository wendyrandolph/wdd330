

// -------------Variables for this Module --------------//
let newItem; 
const total = document.getElementById("num");
const CHECK = "far fa-check-square";

 let    currentNum,
        currentValue = currentNum,
        newTotal,
        num, 
        numA, 
        newNum; 

//------ Show number of tasks as they get added ------------//
function upDateTotal() {
    num = 0;
    newNum = toDoList.length;
    newTotal = num + newNum - 1;
    total.innerHTML = newTotal + " " + 'tasks. '
    //check();
}
//---- I need some way to change the count depending 
//on the click being CHECK or UNCHECK-- -//


/*function check() {
    if (CHECK) {
        var b = newTotal - 1;
        currentNum = total.innerHTML = b + " " + 'tasks left';
    } else if (!CHECK) {
        var a = newTotal + 1;
        currentNum = total.innerHTML = a + " " + 'tasks left.';
    }
}
    */





let toDo = {
    name: " " ,
    id: 0,
    done: false,
   trash: false, 
};
let toDoList = [toDo];


export { upDateTotal, toDoList};



