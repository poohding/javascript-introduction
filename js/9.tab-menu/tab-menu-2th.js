(function(skpui) {
    skpui.util = {
        /**
         * ### skpui.util.findIndex(elements, element)
         * Returns the index of the element in the given elements.
         * - param {HTMLElement[]} elements
         * - param {HTMLElement} element
         * - returns {Number} index
         */
        findIndex: function(elements, element) {
            return Array.prototype.indexOf.call(elements, element);
        },
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
}(window.skpui = window.skpui || {}));
