

/**
 * function navMENU() {
 this.style.color = 'red';   
}

document.addEventListener("DOMContentLoaded", function(event) {
   var trigerr = document.querySelector('.triger');
    trigerr.addEventListener("click", function() {
    this.style.color = 'red';
});
});
 */

 var trigerr = document.querySelector('.triger');
 var mainNav = document.querySelector('#main');   
 
 
     trigerr.addEventListener("click", function() {
    
    if (mainNav.style.display === "none") {
        mainNav.style.display = "grid";
        this.style.color = 'red';
      } else {
        mainNav.style.display = "none";
        this.style.color = 'green';
      }
});

/**nie działa */
var item = document.querySelectorAll('.nav_itemA');

function eventHandler() {
    console.log('działa');
}

item.addEventListener("click", eventHandler(event));

/**
 * 
 * function navMENU() {
    for(var i=0;max = navItem.length-1; i++) {
        navItem[i].style.color = "black";
        }
        console.log('działa?');
}



var navItem = document.getElementsByClassName("nav_item");
navItem.addEventListener("click", navMENU);
nie działa heh
 */
    
    /**if (trigerr.style.display !== "none") { */
        
        
        /**
         * mainNav.style.display = "none";
        trigerr.style.color = 'green';
         */
        
      /**
       * } else {
        console.log('dupa - coś poszło nie tak');
      }
       */

