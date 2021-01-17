

function showDeleteModal(postid) {
    document.getElementById('deleteModal').style.display = 'block';
    document.getElementById('ok').addEventListener('click', addOK);
    document.getElementById('cancel').addEventListener('click', cancel);
    function addOK()
    {
        document.getElementById(postid).style.display = 'none';
        document.getElementById('deleteModal').style.display = 'none';
    }
    function cancel() {
        document.getElementById('deleteModal').style.display = 'none';
        document.getElementById('ok').removeEventListener('click',addOK);
    }
}

function redirectToPost(postid) {
    location.href= 'post.html'+ '#' + postid;
}

