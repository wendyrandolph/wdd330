

// -------------Variables for this Module --------------//
let newItem; 
const total = document.getElementById("num");
const CHECK = "far fa-check-square";

let currentNum,
    currentValue = currentNum,
    num,
    newTotal,
    value,
    newNum;
  
    //------ Show number of tasks as they get added ------------//
    function upDateTotal() {
        num = 0;
        newNum = toDoList.length;
        let curNum;

        if (JOB == YES) {
            newTotal = newNum + num - 2;
            curNum = newTotal;
        } else if (JOB == NO) {
            newTotal = newNum + num - 1;
            curNum = newTotal;
        }
    
        total.innerHTML = curNum + " " + 'tasks. ';
    }


        //check();
//---- I need some way to change the count depending 
//on the click being CHECK or UNCHECK-- -//

const NO = false;
const YES = true;
const JOB = value ? YES : NO;




let toDo = {
    name: newItem ,
    id: 0,
    job: false,
    trash: false,
    value: $(JOB)
};
let toDoList = [toDo];


export { num, upDateTotal, toDoList};



