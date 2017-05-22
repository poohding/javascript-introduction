function activeList(lists, activeIndex) {
    lists.forEach(function(element, index) {
        if (activeIndex === index) {
            element.classList.add('active');
            element.querySelector('.badge').classList.remove('hide');
        } else {
            element.classList.remove('active');
            element.querySelector('.badge').classList.add('hide');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var lists = document.querySelectorAll('#listGroup1 .list-group-item');

    lists.forEach(function(element, index) {
        element.addEventListener('click', function() {
            activeList(lists, index);
        });
    });
});
