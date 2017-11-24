/*
 * jQuery blueberryCharts Plugin
 * https://github.com/iseries/blueberryCharts.js
 *
 * Copyright 2017, iseries
 * https://github.com/iseries
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function($, window, document, undefined) {

    /**
     * The plugin constructor
     * @param {DOM Element} element The DOM element where plugin is applied
     * @param {Object} options Options passed to the constructor
     */
    function BlueberryChart(element, options) {
        // Store a reference to the source element
        this.el = element;
        // Store a jQuery reference to the source element
        this.$el = $(element);
        // Set the instance options extending the plugin defaults and
        // the options passed by the user
        this.options = $.extend({}, $.fn['blueberryChart'].defaults, options);
        // Initialize the plugin instance
        this.init();
        this.destroy();
    }

    /**
     * Plugin prototype
     */
    BlueberryChart.prototype = {

        /**
         * Initialize the plugin instance
         */
        init: function() {

            // the element
            const blueberryEl = $(this)[0];

            // get settings
            var chartData = $(blueberryEl)[0].options['chartData'];
            var chartColors = $(blueberryEl)[0].options['lineColors'];
            var chartShowDots = $(blueberryEl)[0].options['showDots'];
            var chartShowLines = $(blueberryEl)[0].options['showLines'];

            // create html line container
            $($(this)[0].options['chartData']).each(function(index) {
                $(blueberryEl.$el).append("<div class=\"blueberryLine\"><div class=\"blueberryPoints\"></div></div>");
            });

            // create points
            $($(blueberryEl.$el).find('.blueberryPoints')).each(function(index) {
                var lineEl = $(this);
                var countAllData = $(chartData[index]).length;
                var coordinates = []
                var counter = 0;

                var lineColor = chartColors[index];

                console.log(chartShowDots);


                    $(chartData[index]).each(function (index) {

                        var x1Val = ((100 * (index + 1 / 3)) / countAllData);
                        var y1 = 100 - this;
                        var x1 = x1Val;

                        if (chartShowDots === true) {
                            $(lineEl).append("<div class=\"blueberryPoint\" style=\"background-color: " + lineColor + "; bottom: " + this + "%; left: " + x1Val + "%;\"><div class=\"blueberryTooltip\" style=\"background-color: " + lineColor + ";\">" + this + "</div></div></div>");
                        }
                        // fill the coordinates for lines
                        coordinates[counter] = [x1, y1];
                        // add +1 to counter
                        counter++;

                    });


                if(chartShowLines === true) {
                    var c1 = 0;
                    var d = chartData[index].length - 1;

                    $(chartData[index]).each(function(index) {
                        if(d != index) {
                            var x1 = coordinates[c1][0];
                            var y1 = coordinates[c1][1];
                            var x2 = coordinates[c1+1][0];
                            var y2 = coordinates[c1+1][1];

                            $(lineEl).append("<svg id=\"line" + index + "\" style=\"width:100%;height:100%;\"><line x1=\"" + x1 + "%\" y1=\"" + y1 + "%\" x2=\"" + x2 + "%\" y2=\"" + y2 + "%\" style=\"stroke: " + lineColor + ";stroke-width: 2;\"></line></svg>");
                        }
                        // add +1 to counter
                        c1++;
                    });
                }
            });
        },

        /**
         * Destroy the instance
         */
        destroy: function() {
            // nothing yet
        }
    };

    $.fn['blueberryChart'] = function(options) {
        var args = arguments;

        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + 'blueberryChart')) {
                    $.data(this, 'plugin_' + 'blueberryChart', new BlueberryChart(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            if (Array.prototype.slice.call(args, 1).length == 0 && $.inArray(options, $.fn['blueberryChart'].getters) != -1) {
                var instance = $.data(this[0], 'plugin_' + 'blueberryChart');
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                return this.each(function() {
                    var instance = $.data(this, 'plugin_' + 'blueberryChart');
                    if (instance instanceof BlueberryChart && typeof instance[options] === 'function') {
                        instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                    }
                });
            }
        }
    };

    /**
     * Default options
     */
    $.fn['blueberryChart'].defaults = {
        chartData: [
            [0, 20, 33, 10, 54, 90, 70, 84, 95, 100],
            [0, 30, 23, 20, 44, 60, 10, 50, 10, 40]
        ],
        chartLables: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        showLines: true,
        showDots: false,
        lineColors: ['#FF5252', '#777777']
    };
})(jQuery, window, document);