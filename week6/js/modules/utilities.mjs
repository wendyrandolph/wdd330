//Clear function 


function resetList() { 
clear.addEventListener("click", function () { 
    localStorage.clear(); 
    location.reload(); 
});
}




export { resetList };