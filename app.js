 var trigerr = document.querySelector('.triger');
 var mainNav = document.querySelector('#main');   
 


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
