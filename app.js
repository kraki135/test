

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


      mainNav.addEventListener('click', function() {
        
       if (mainNav.style.display === "grid") {
        mainNav.style.display = "none";
        trigerr.style.color = 'green';
      } else {
        mainNav.style.display = "grid";
        this.style.color = 'red';
      }
      });


window.addEventListener('DOMContentLoaded', function() {
mainNav.style.display = "none";
        trigerr.style.color = 'green';
});
