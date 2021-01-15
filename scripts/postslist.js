

function showDeleteModal(postid) {
    document.getElementById('deleteModal').style.display = 'block';
    document.getElementById('ok').addEventListener('click', function()
    {
        document.getElementById(postid).style.display = 'none';
        document.getElementById('deleteModal').style.display = 'none';
    })
}
function hideDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

