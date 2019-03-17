function showDeleteModal() {
     
     var DeleteModal = document.getElementById('deleteModal');

     /*trashicon.onclick = function () {*/
     DeleteModal.style.display = "block";

     window.onclick = function (event) {
         if (event.target == DeleteModal) {
             DeleteModal.style.display = "none";
         }
     }
 }
document.getElementById("nobutton").addEventListener("click",function(){
    var modal = document.getElementById('deleteModal');
    modal.style.display="";
});