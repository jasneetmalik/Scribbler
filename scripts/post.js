var likeCount = 0;

//The Post ID is passed from PostsList so that only the post selected by user is displayed
var postid = window.location.hash.substring(1); 
window.onload = function () {
    document.getElementById(postid).style.display='flex';
}

//Function to toggle between Edit and Save for the selected post
function toggleEdit(postDescId, editsave, titleId) {
    var postDesc = document.getElementById(postDescId);
    var buttonText = document.getElementById(editsave);
    var title = document.getElementById(titleId);
    if (postDesc.isContentEditable) {
        postDesc.contentEditable = 'false';
        title.contentEditable = 'false';
        buttonText.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    } else {
        postDesc.contentEditable = 'true';
        title.contentEditable = 'true';
        buttonText.innerHTML = 'Save';
    }
}
//Function to display the number of likes for the post
function showLikeCount() {
    likeCount++;
    document.getElementById('noOfLikes').innerHTML = likeCount + " person likes this";
    document.getElementById('likeButton').innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';

}
//Function to add a comment to the post
function addComment() {
    var allComments = document.getElementById('allComments');
    var comment = document.getElementById('comment');
    allComments.innerHTML = '<textarea readonly cols="110" rows="2" class="allComments">' + comment.value + '</textarea>' + allComments.innerHTML;
    comment.value="";
}