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

/*to się przyda 
 document.addEventListener("DOMContentLoaded", function() {
    trigerr.classList.remove("activTRIG"); console.log("removeactivTRIG");
    
});
*/


/*
świerze odkomentuj*/
trigerr.addEventListener("click", function() { 
 if(trigerr.style.color === 'green') {
    /*mainNav.classList.add("activNAV");
    trigerr.classList.add("redADD");*/
  trigerr.classList.add("redADD");
  console.log('kliknięto zielony');
 }else{ 
     console.log('kliknięto czerwony');
     trigerr.classList.remove("redADD");
      
      }/*else{
    mainNav.classList.remove("activNAV");
    trigerr.classList.remove("redADD");
 }*/
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
