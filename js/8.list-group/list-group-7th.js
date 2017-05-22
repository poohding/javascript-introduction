(function(skpui) {
    skpui.util = {
        /**
         * ### skpui.util.trigger(element, eventName)
         * Dispatch the event in the given element.
         * - param {HTMLElement} element
         * - param {String} eventName - Custom event name
         */
        trigger: function(element, eventName) {
            var event = new Event(eventName);

            element.dispatchEvent(event);
        }
    };

    skpui.listGroup = (function() {
        function ExampleList(options) {
            this.lists = document.querySelectorAll(options.targetElement);
            this.activeIndex = 0;
            this.onChangeList = options.onChangeList;
        }

        ExampleList.prototype.init = function() {
            this.addHandler();
        };

        ExampleList.prototype.showBadge = function(element) {
            element.querySelector('.badge').classList.remove('hide');
        };

        ExampleList.prototype.hideBadge = function(element) {
            element.querySelector('.badge').classList.add('hide');
        };

        ExampleList.prototype.activeList = function(activeIndex) {
            this.activeIndex = activeIndex;

            this.lists.forEach(function(element, index) {
                if (activeIndex === index) {
                    element.classList.add('active');
                    skpui.util.trigger(element, 'list.active');
                } else {
                    element.classList.remove('active');
                    skpui.util.trigger(element, 'list.deactive');
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

                element.addEventListener('list.active', function() {
                    that.showBadge(this);
                });

                element.addEventListener('list.deactive', function() {
                    that.hideBadge(this);
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

        return ExampleList;
    }());
}(window.skpui = window.skpui || {}));
