function navMENU() {
 this.style.color = "green";   
}
document.addEventListener("DOMContentLoaded", function(event) {
   var trigerr = document.querySelector('.triger');
    trigerr.addEventListener("click", navMENU());
    
    
});
