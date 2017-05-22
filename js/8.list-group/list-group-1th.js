document.addEventListener('DOMContentLoaded', function() {
    var lists = document.querySelectorAll('#listGroup1 .list-group-item');

    lists.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log(this);
        });
    });
});
