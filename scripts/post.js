var likeCount = 0;
var postid = window.location.hash.substring(1);
window.onload = function () {
    document.getElementById(postid).style.display='flex';
}
function toggleEdit(postDescId) {
    var postDesc = document.getElementById(postDescId);
    var buttonText = document.getElementById('edit-save');
    if (postDesc.isContentEditable) {
        postDesc.contentEditable = 'false';
        buttonText.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    } else {
        postDesc.contentEditable = 'true';
        buttonText.innerHTML = 'Save';
    }
}

function showLikeCount() {
    likeCount++;
    document.getElementById('noOfLikes').innerHTML = likeCount + " person likes this";
    document.getElementById('likeButton').innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';

}
function addComment() {
    var allComments = document.getElementById('allComments');
    var comment = document.getElementById('comment');
    allComments.innerHTML = '<textarea readonly cols="110" rows="2" class="allComments">' + comment.value + '</textarea>' + allComments.innerHTML;
    comment.value="";
}