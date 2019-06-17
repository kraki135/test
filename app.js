

 var trigerr = document.querySelector('.triger');
 var mainNav = document.querySelector('#main');   
 




trigerr.addEventListener("click", function() {
    if (trigerr.style.display === "none") {
     /*consol.log("triger none - klik triger? imposible");*/
    } else {
      /*consol.log("triger widoczny- działa?");*/
     if (mainNav.style.display === "grid") {
          mainNav.style.display = "none";
          trigerr.style.color = 'green';
    } else {
      mainNav.style.display = "grid";
        trigerr.style.color = 'red';
    }
    }
   

    });

    mainNav.addEventListener('click', function() {
        
      if (trigerr.style.display === "none") {  
      /*consol.log("triger none - klik menu i się chowa? imposible");*/
      }else {
       /*consol.log("menu niewidoczne- nie działa?");*/
        if (mainNav.style.display === "grid") {
          mainNav.style.display = "none";
            trigerr.style.color = 'green';
        } else {
          mainNav.style.display = "grid";
            trigerr.style.color = 'red';
        }
      }
     
    
    });

    /*
    else if (mainNav.style.display === "grid" || trigerr.style.color === "red") {
      mainNav.style.display = "none";
        trigerr.style.color = 'green';
    }
    */


  /*
  GŁÓWNE
     trigerr.addEventListener("click", function() {
    
    if (mainNav.style.display === "none" || trigerr.style.color === "green") {
        mainNav.style.display = "grid";
        trigerr.style.color = 'red';
      } else if (mainNav.style.display === "grid" || trigerr.style.color === "red") {
        mainNav.style.display = "none";
        trigerr.style.color = 'green';
      }
});


      mainNav.addEventListener('click', function() {
        
       if (mainNav.style.display === "grid") {
        mainNav.style.display = "none";
        trigerr.style.color = 'green';
      } else {
        mainNav.style.display = "grid";
        this.style.color = 'red';
      }
      });
  
  
  
  */


/*
document.addEventListener('DOMContentLoaded', function() {
   if(trigerr.style.display !== "none") {       
        mainNav.style.display = "none";
        trigerr.style.color = 'green';
   } else if(trigerr.style.display === "none"){
        mainNav.style.display = "grid";
        trigerr.style.display = "none";
   }
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
   if(trigerr.style.display === "none") {       
        mainNav.style.display = "grid";
   }
});
*/
