/**
 * # skpui
 */
(function(skpui) {
    'use strict';

    /**
     * ## skpui.util
     */
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

    /**
     * ## skpui.tab
     */
    skpui.tab = (function() {
        'use strict';

        /**
         * ### Tab(options)
         * Constructor. Create a new instance of skpui.tab
         * - param {Object} options - options for Tab.
         * - fires Tab.init()
         */
        function Tab(options) {
            this.opts = options || {};
            this.container = document.querySelector(this.opts.container);
            this.tabMenuItems = this.container.querySelectorAll('.nav > li');
            this.tabPanelItems = this.container.querySelectorAll('.tab-content > .tab-pane');
            this.activeIndex = this.opts.activeIndex || 0;
            this.activeClassName = 'active';

            this._init();
        }

        /**
         * #### Tab.activeTabMenu(activeIndex)
         * Public method. Activate the tab menu.
         * - param activeIndex
         * - fires Tab._toggleClassName(this.container, 'tab.change')
         */
        Tab.prototype.activeTabMenu = function(activeIndex) {
            this.activeIndex = activeIndex;
            this._toggleClassName(this.tabMenuItems, this.activeClassName);

            // triggering event.
            skpui.util.trigger(this.container, 'tab.change');
        };

        /**
         * ### Tab._activeTabPanel()
         * Private method. Activate the tab panel.
         * - fires Tab._toggleClassName(this.tabPanelItems, this.activeClassName)
         */
        Tab.prototype._activeTabPanel = function() {
            this._toggleClassName(this.tabPanelItems, this.activeClassName);

            // execute callback.
            if (typeof this.opts.onTabChange === 'function') {
                this.opts.onTabChange(this);
            }
        };

        /**
         * ### Tab._toggleClassName(elements, className)
         * Private method. Toggle className for a tab menu or panel defined by activeIndex.
         * - param {HTMLElement[]} elements - HTML elements for tab menu or panel.
         * - param {String} className - className for activate the tab menu or panel.
         */
        Tab.prototype._toggleClassName = function(elements, className) {
            elements.forEach(function(element, index) {
                if (this.activeIndex === index) {
                    element.classList.add(className);
                } else {
                    element.classList.remove(className);
                }
            }.bind(this));
        };

        /**
         * ### Tab._addHandler()
         * Private method. Adds event Handlers.
         */
        Tab.prototype._addHandler = function() {
            // Listen for clicking the tab menu.
            this.container.addEventListener('click', function(e) {
                var activeIndex;

                if (e.target.getAttribute('role') === 'tab') {
                    e.preventDefault();
                    activeIndex = skpui.util.findIndex(this.tabMenuItems, e.target.parentNode);
                    this.activeTabMenu(activeIndex);
                }
            }.bind(this));

            // Listen for the custom event.
            this.container.addEventListener('tab.change', function() {
                this._activeTabPanel();
            }.bind(this));
        };

        /**
         * ### Tab._init()
         * Private method. Initializes the Tab.
         * - description Adds event handlers
         * - activate the default tab.
         */
        Tab.prototype._init = function() {
            this._addHandler();
            this.activeTabMenu(this.activeIndex);
        };

        return Tab;
    }());
}(window.skpui = window.skpui || {}));
