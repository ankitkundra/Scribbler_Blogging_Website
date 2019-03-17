var fullBlock=document.getElementsByClassName("blogText")[0];
var blogTitle =document.getElementsByClassName("blogTite")[0];
document.getElementById("editButton").addEventListener("click",function(){
    var blog=document.getElementById("blogbody");
    document.getElementById("blogTitleNew").contentEditable="true";
    blog.contentEditable="true";
   document.getElementById("editButton").style.display="none";
    document.getElementById("saveButton").style.display="block";
    fullBlock.style.border="2px solid";
    blogTitle.style.border="2px solid deeppink";
});
document.getElementById("saveButton").addEventListener("click",function(){
    var blog=document.getElementById("blogbody");
    blog.contentEditable="false";
    document.getElementById("blogTitleNew").contentEditable="false";
    document.getElementById("editButton").style.display="block";
    document.getElementById("saveButton").style.display="none";
    var blog=document.getElementById("blogbody");
    blog.defaultValue+=blog.value;
    fullBlock.style.border="none";
    blogTitle.style.border="none";
                 });
 var numberOfClicks=0;
    function postLiked(){
        document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
        numberOfClicks += 1;
        if(numberOfClicks!=0){
            if (numberOfClicks==1){
                document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
            }
            else {
                document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
            }
            }
        }
function addComments(id){
        var enteredComment = id.value +'<br>';
        document.getElementById('mainCommentdivison').innerHTML += '<p id="commentPost">'+enteredComment+'</p>';   id.value=id.defaultValue;
    }
