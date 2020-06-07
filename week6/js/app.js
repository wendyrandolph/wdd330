//app.js
import {
     num
    , upDateTotal
    , toDoList
} from './modules/ls.mjs';

import {
    resetList
} from './modules/utilities.mjs';

//--------SELECT ELEMENTS --------------------------------------//


const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const all = document.querySelector(".all"); 
const active = document.querySelector(".active"); 
const allCompleted = document.querySelector(".completed");
const total = document.getElementById("num");
const addItem = document.querySelector(".addButton");
const li = document.getElementById("li#JOB"); 
const value = document.getElementById(".value"); 
//-----------------CREATE VARIABLES FOR ITEMS --------------------//
let id,
job;

//---------------------------------------------------------------//
 
//-------------------CREATE CLASSES TO TOGGLE-------------------// 

const NO = false;
const YES = true;


const CHECK = "far fa-check-square";
const UNCHECK = "far fa-square";



const DONE = job ? CHECK : UNCHECK; 
const LINE = job ? "lineThrough" : " ";
const DELETE = "far fa-trash-alt";
const JOB = job ? YES : NO; 

//-----------Get Item from LOCAL STORAGE ---------------------------//
/*let data = localStorage.getItem("TODO");

//--------------Check for empty data in local storage-----------------//


    if (data) {
        toDoList = JSON.parse(data);
        id = toDoList.length; //set id to the last number in the list 
            //if it's empty then this is what it should do. 
    } else {
        toDoList = [];
        id = 0;
        done = false;
        loadList(toDoList); //load list to the user
    }


function loadList(toDoList) {
    forEach()

*/

//----------Clear Local Storage  ---------------------------------//
clear.addEventListener("click", function () {
    resetList();
});



 

    // ----------------Show Today's Date -----------------------------//

    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    
    dateElement.innerHTML = today.toLocaleDateString("en-us", options);


//------Create "Classes" to Toggle on and off ---------///

    
    //------------------"add a todo" function -----------------------//
    function addToDo(name, id, job, trash, clicked) {
        if (trash === true) { return; }

        const item = `<li class = "item" id="${JOB}"><span class="check"><i class = "far ${DONE}" ></i></span>
         <p id = "item ${LINE}">${name}</p> 
         <span id="trash"><i class="far ${DELETE}" ></i></span>
         </li>`;
    
        const position = "beforeend";
    

        list.insertAdjacentHTML(position, item);

}
    //----------UPDATE ARRAY WITH NEW ITEMS ---------------//
    
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            //grab a new todo from input 
        
              let newItem = input.value;
     
                if (newItem) {
                    addToDo(newItem, 0, false, false, $(JOB));
                    
                }
        
                input.value = " "; //Clear the input value
            

            toDoList.push({
                name: newItem,
                id: 0,
                job: false,
                trash: false,
                clicked: $(JOB)
            });
            id++; 
        upDateTotal();
    }
});     
    localStorage.setItem("TODO", JSON.stringify(toDoList));
    

    // -------------Check Off Specific Todos By Clicking --------------// 

 
$("ul").on("click", "li", function () {
    let element = event.target;
    let newTotal;
 
    $(this).toggleClass("lineThrough");
    $(this).find("i").toggleClass("far fa-check-square  far fa-square" );
    $(JOB).toggleClass(YES | NO);
    let newVal = value,
        curVal,
        a,
        b; 
    
    
     
    
    if ("p#item == lineThrough") { 
        a = toDoList.length - 1; 
        b = a - 1; 
        total.innerHTML = b; 
    } else("li") { 
        newTotal = toDoList.length - 1; 
        curVal = newTotal + 1;
        total.innerHTML = curVal; 
    }

     

       
}); 
        
 



    //--------------------REMOVE A TO DO ---------------//

    $("ul").on("click", "span#trash", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            event.stopPropagation();
            toDoList.splice(toDoList.length - 1);
        
            upDateTotal();
        });
        //store item on local storage
        localStorage.setItem("TODO", JSON.stringify(toDoList));
    
        //show the number of tasks
   
    });
   
    //---------------Filter the Completed List -----///


    allCompleted.addEventListener("click", function () {
        let clickedToDos = toDoList.filter(t => t.clicked == true);
        let newList = list; 
        clickedToDos.push(); 
        newList = clickedToDos;
        return clickedToDos.push(); 
        
  
    });
    //--------ACTIVE BUTTON CLICK -----------///
    active.addEventListener("click", function () {
  
        let activeToDos = toDoList.filter(t => t.clicked == false );
        console.log(activeToDos);  
    });

    //---------------------SHOW ALL Tasks BUTTON CLICK ------------//    
    all.addEventListener("click", function () {
        // show all tasks 
        
         let newArray = toDoList.filter(t => t.clicked && !t.clicked);
        console.log(newArray);
    })


    // ------ Working Add Button --------------------/////
    addItem.addEventListener("click", function () {
        let id;
        
     let newItem = input.value;
        id = id++; 
         
        if (newItem) {
            addToDo(newItem, id, bool, bool, $(JOB));
            id++;
        }
        
        input.value = " "; //Clear the input value

        toDoList.push({
            name: newItem,
            id: 0,
            job: false,
            trash: false,
            clicked: $(JOB)
        });
        
        upDateTotal();
    });


