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
}(window.skpui = window.skpui || {}));
