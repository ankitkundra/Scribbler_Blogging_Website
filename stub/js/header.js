var SignInBtn=document.getElementById("btn1");

var SignInModal=document.getElementById("SignInModal");

var close1 =document.getElementById("close1");

SignInBtn.onclick = function(){
    console.log("btnworking");
    SignInModal.style.display ="block";
}

close1.onclick = function(){
    SignInModal.style.display ="none";
}

window.onclick = function(event) {
  if (event.target == SignInModal) {
    SignInModal.style.display = "none";
  }
  else if (event.target == SignUpModal) {
    SignUpModal.style.display = "none";
  }
}

var SignUpBtn=document.getElementById("btn2");

var SignUpModal=document.getElementById("SignUpModal");

var close2 =document.getElementById("close2");

SignUpBtn.onclick = function(){
    console.log("btnworking");
    SignUpModal.style.display ="block";
}

close2.onclick = function(){
    SignUpModal.style.display ="none";
}

function showModal(){
    console.log("modal changed");
    SignUpModal.style.display ="block";
    SignInModal.style.display ="none";
}