function ExampleList(options) {
    this.lists = document.querySelectorAll(options.targetElement);
    this.activeIndex = 0;
    this.onChangeList = options.onChangeList;
}

ExampleList.prototype.init = function() {
    this.addHandler();
};

ExampleList.prototype.activeList = function(activeIndex) {
    this.activeIndex = activeIndex;

    this.lists.forEach(function(element, index) {
        if (activeIndex === index) {
            element.classList.add('active');
            element.querySelector('.badge').classList.remove('hide');
        } else {
            element.classList.remove('active');
            element.querySelector('.badge').classList.add('hide');
        }
    });

    if (typeof this.onChangeList === 'function') {
        this.onChangeList(this.activeIndex);
    }
};

ExampleList.prototype.addHandler = function() {
    var that = this;

    this.lists.forEach(function(element, index) {
        element.addEventListener('click', function(e) {
            e.preventDefault();

            that.activeList(index);
        });
    });
};


document.addEventListener('DOMContentLoaded', function() {
    var list1,
        list2;

    list1 = new ExampleList({
        targetElement: '#listGroup1 .list-group-item',
        onChangeList: function(index) {
            console.log(index);
        }
    });
    list1.init();

    list2 = new ExampleList({
        targetElement: '#listGroup2 .list-group-item',
        onChangeList: function(index) {
            console.log(index);
        }
    });
    list2.init();
});
