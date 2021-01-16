var postid = window.location.hash.substring(1);
window.onload = function () {
    document.getElementById(postid).style.display='flex';
}
