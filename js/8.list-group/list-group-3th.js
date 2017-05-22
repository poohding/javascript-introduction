//*
var exampleList = {
    init: function(targetElement) {
        this.lists = document.querySelectorAll(targetElement);
        this.addHandler();
    },
    activeList: function(activeIndex) {
        this.lists.forEach(function(element, index) {
            if (activeIndex === index) {
                element.classList.add('active');
                element.querySelector('.badge').classList.remove('hide');
            } else {
                element.classList.remove('active');
                element.querySelector('.badge').classList.add('hide');
            }
        });
    },
    addHandler: function() {
        var that = this;

        this.lists.forEach(function(element, index) {
            element.addEventListener('click', function(e) {
                e.preventDefault();

                that.activeList(index);
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    exampleList.init('#listGroup1 .list-group-item');
});
/*/

//*
var exampleList = (function() {
    var initVar = {},
        activeList,
        addHandler,
        initialize;

    activeList = function(activeIndex) {
        initVar.lists.forEach(function(element, index) {
            if (activeIndex === index) {
                element.classList.add('active');
                element.querySelector('.badge').classList.remove('hide');
            } else {
                element.classList.remove('active');
                element.querySelector('.badge').classList.add('hide');
            }
        });
    };

    initialize = function(targetElement) {
        initVar.lists = document.querySelectorAll(targetElement);
        addHandler();
    };

    addHandler = function() {
        initVar.lists.forEach(function(element, index) {
            element.addEventListener('click', function(e) {
                e.preventDefault();

                activeList(index);
            });
        });
    };

    return {
        init: initialize
    };
}());

document.addEventListener('DOMContentLoaded', function() {
    exampleList.init('#listGroup1 .list-group-item');
});
//*/
