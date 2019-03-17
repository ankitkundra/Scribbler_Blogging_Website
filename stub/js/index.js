var CreatePostBtn=document.getElementById("createPost");

var CreatePostModal=document.getElementById("createPostModal");

var close3 =document.getElementById("close3");
var closebut =document.getElementById("closeButton");

CreatePostBtn.onclick = function(){
    console.log("CPbtnworking");
    CreatePostModal.style.display ="block";
}

close3.onclick = function(){
    CreatePostModal.style.display ="none";
}
closebut.onclick = function(){
    CreatePostModal.style.display ="none";
}

window.onclick = function(event) {
    if (event.target == CreatePostModal) {
    CreatePostModal.style.display = "none";
  }
}


