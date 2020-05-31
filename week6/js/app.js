//app.js
import {
    toDoList,
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
const line = document.getElementById("li");


//-----------------CREATE VARIABLES FOR ITEMS --------------------//
let LIST = [], 
    id = 0, 
    newArray, 
    done = false, 
    trash = false;    
//---------------------------------------------------------------//
upDateTotal(); 
//-------------------CREATE CLASSES TO TOGGLE-------------------// 

const CHECK = "far fa-trash-alt"; 
const UNCHECK = "far fa-square";
const LINE_THROUGH = ".lineThrough";
const DELETE = "far fa-trash-alt";

//-----------Get Item from LOCAL STORAGE ---------------------------//
let data = localStorage.getItem("TODO");

//--------------Check for empty data in local storage-----------------//


    if (data) {
        newArray = JSON.parse(data);
        id = newArray.length; //set id to the last number in the list 
         
        //if it's empty then this is what it should do. 
    } else {
        newArray = [];
        id = 0;
        done = false;
        loadList(newArray); //load list to the user
    }

function loadList(toDoList) {
        toDoList.forEach(function (item) {
            addToDo(item.name, item.id, item.done, item.trash);
        });
}


//----------Clear Local Storage  ---------------------------------//
clear.addEventListener("click", function () {
    resetList();
});


 

// ----------------Show Today's Date -----------------------------//

const options = {weekday: "long", month: "short", day: "numeric"}; 
const today = new Date(); 
    
dateElement.innerHTML = today.toLocaleDateString("en-us", options); 




//------------------"add a todo" function -----------------------//
function addToDo(toDo, id, job, trash) {
    if("trash" === true) { return; }

    const DONE = done ? CHECK: UNCHECK;
    const LINE = done ? LINE_THROUGH : " ";

    const item = `<li class = "item"><span class="check"><i class = "far ${DONE}" job = "complete" id="${id}"></i></span>
         <p id = "item ${LINE}">${toDo}</p> 
         <span id="trash"><i class="far ${DELETE}" job="delete" id="${id}"></i></span>
         </li>`;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
 
}

 

//----------UPDATE ARRAY WITH NEW ITEMS ---------------//
 
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        //grab a new todo from input 
        const newItem = input.value;
     
        if (newItem) {
            addToDo(newItem, id, false, false);
        }
        
        input.value = " "; //Clear the input value

        toDoList.push({
            name: newItem,
            id: 0,
            done: false,
            trash: false
        });
    }
       
    
    id++; 
    
    upDateTotal();
});
      
      localStorage.setItem("TODO", JSON.stringify(toDoList));
    

// -------------Check Off Specific Todos By Clicking ---------------//


    $("ul").on("click", "li", "span#check", function () {
        $(this).toggleClass("lineThrough");
        $(this).find("i").toggleClass('CHECK UNCHECK');
         
    });

// ------ REMOVE A TO DO ELEMENT ------------------// 
list.addEventListener("click", function (event) {
    const element = event.target;

});
//--------------------REMOVE A TO DO ---------------//

$("ul").on("click", "span#trash", function (event) {
     $(this).parent().fadeOut(500, function () {
            $(this).remove();
           
        });
        
        event.stopPropagation();
    });
    //store item on local storage
     toDoList.splice(toDoList.length, +1); 
localStorage.setItem("TODO", JSON.stringify(toDoList));
    
upDateTotal(); 
   

//show the number of tasks to be completed
   

function upDateTotal() {
    var num = 0;
    var newNum = toDoList.length;
    var newTotal = num + newNum - 1; 
    total.innerHTML = newTotal; 
    
}     
//---------------Filter the Completed List -----///
 // Don't show a false ID to this bouncer.
  
allCompleted.addEventListener("click", function () {
   
    function bouncer(arr) {
        var a = item; 
        var b = "LINE_THROUGH"; 
            // Don't show a false ID to this bouncer.
              function a(b) {
                if(typeof(b) === 'boolean' && !b) {
                  return new Boolean(b);
                }
              }
          
              arr = arr.filter(a);
              return arr;
          }
          
     
  
});

   




    
   
    

      


 //-----------------------------------------------------------------//
/*
    $("ul").on("click", "span#trash", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
            
        });
        
  
      
       
       
    });
    */