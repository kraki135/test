 var trigerr = document.querySelector('.triger');
 var mainNav = document.querySelector('#main');   
 


/*
działające wcześniej start

trigerr.addEventListener("click", function() {
    if (trigerr.style.display === "none") {
    } else {
     if (mainNav.style.display === "grid") {
          mainNav.style.display = "none";
          trigerr.style.color = 'green';
    } else {
      mainNav.style.display = "grid";
        trigerr.style.color = 'red';
    }
    }
   

    },false);

mainNav.addEventListener('click', function() {
if (trigerr.style.display === "none") {
     
    } else {
     if (mainNav.style.display === "grid") {
          mainNav.style.display = "none";
          trigerr.style.color = 'green';
    } else {
      mainNav.style.display = "grid";
        trigerr.style.color = 'red';
    }
    }
},false);

koniec
*/
/*window.addEventListener('DOMContentLoaded', (event) => {*/
 document.addEventListener("DOMContentLoaded", function(event) {
    if (mainNav.style.display === "none") {
    trigerr.classList.toggle("activTRIG");
    }else {
    trigerr.classList.remove("activTRIG");
    }
});


trigerr.addEventListener("click", function() { 
 if(mainNav.style.display === "none") {
    mainNav.classList.toggle("activNAV");
    trigerr.classList.toggle("redADD");
 }else{
    mainNav.classList.remove("activNAV");
    trigerr.classList.remove("redADD");
 }
},false);
/*
świerze odkomentuj
mainNav.addEventListener('click', function() { 
    if(trigerr.className === "activTRIG") {
       if(trigerr.className === "redADD") {
          mainNav.classList.remove("activNAV");
          trigerr.classList.remove("redADD");
            }else {
             
                  }
    }else{
     
    }
},false);
*/

/*
    mainNav.addEventListener('click', function() {
        
      if (trigerr.style.display === "none") {  
      
      }else if(trigerr.style.display === "block"){
        if (mainNav.style.display === 'grid'){
           if(trigerr.style.color = 'red') { 
            mainNav.style.display = "none";
            trigerr.style.color = 'green';
                                           }  
                                             }
       
                                            }
     
    
                                             }); ost konfiguracja
*/
