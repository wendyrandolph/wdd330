//app.js
import {
      upDateTotal
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
const li = document.getElementById(".item"); 

//-----------------CREATE VARIABLES FOR ITEMS --------------------//
let item,
    id,
    job, 
    attribute, 
    value, 
element;
 

const CHECK = "far fa-check-square";
const UNCHECK = "far fa-square";

const DONE = job ? CHECK : UNCHECK; 
const LINE = job ? lineThrough : " ";
const DELETE = "far fa-trash-alt";

//---------------------------------------------------------------//
 
//-------------------CREATE CLASSES TO TOGGLE-------------------// 



 



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
    function addToDo(name, id, job, trash) {
        if (trash === true) { return; }


      

        const item = `<li class = "item" name="todos" value="false"><span class="check"><i class = "far ${DONE}" value = "false" id="${id}" onclick=change()></i></span>
         <p id = "item ${LINE}">${name}</p> 
         <span id="trash"><i class="far ${DELETE}" ${job} id="${id}"></i></span>
         </li>`;
    
        const position = "beforeend";
    

        list.insertAdjacentHTML(position, item);

 
    }

 

    //----------UPDATE ARRAY WITH NEW ITEMS ---------------//
    
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            //grab a new todo from input 
        
                const newItem = input.value;
     
                if (newItem) {
                    addToDo(newItem, 0, false, false);
                    id++;
                }
        
                input.value = " "; //Clear the input value
            

            toDoList.push({
                name: newItem,
                id: 0,
                done: false,
                trash: false,
            });
  
        upDateTotal();
    }
});     
    localStorage.setItem("TODO", JSON.stringify(toDoList));
    

    // -------------Check Off Specific Todos By Clicking --------------// 

 
$("ul").on("click", "li", function (){
    element = event.target; 
     
    $(this).toggleClass("lineThrough");
    $(this).find("i").toggleClass("far fa-check-square  far fa-square ");
     
    upDateTotal(); 
 
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
        console.log("You clicked the Complete Button"); 
        
         
         
         
});
    //--------ACTIVE BUTTON CLICK -----------///
active.addEventListener("click", function () {
    
    
    let newItem;
    let newArray = [toDoList];
    newArray.map(function (job, id, toDoList){
   
        var b = newArray.slice({
            name: newItem,
            id: 0,
            done: false,
            trash: false,
        });
       console.log(b);  
});
});
  
    



    //---------------------SHOW ALL Tasks BUTTON CLICK ------------//    
    all.addEventListener("click", function () {
         // show all tasks 
        
        
        console.log(toDoList); 
    });


    // ------ Working Add Button --------------------/////
    addItem.addEventListener("click", function () {

        const newItem = input.value;
     
        if (newItem) {
            addToDo(newItem, id, false, false);
            id++;
        }
        
        input.value = " "; //Clear the input value

        toDoList.push({
            name: newItem,
            id: 1,
            done: false,
            trash: false
        });
        
        upDateTotal();
    });
 