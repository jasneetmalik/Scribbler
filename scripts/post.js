var postid = window.location.hash.substring(1);
window.onload = function () {
    document.getElementById(postid).style.display='flex';
}
function toggleEdit() {
    var postDesc = document.getElementById('postDesc1');
    var buttonText = document.getElementById('edit-save');
    if (postDesc.isContentEditable) {
        postDesc.contentEditable = 'false';
        buttonText.innerHTML = 'Edit<i class="fas fa-edit"></i>';
    } else {
        postDesc.contentEditable = 'true';
        buttonText.innerHTML = 'Save';
    }
}
