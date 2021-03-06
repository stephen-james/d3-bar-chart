var d3 = require('d3');
require('d3-tip')(d3);
var _ = require('underscore');

var PieChart = function PieChart(target, options, data) {

    this.DEFAULT_OPTIONS = {
        layout: {
            width: 400,
            height: 400,
            margin: {
                top: 30,
                right: 30,
                bottom: 30,
                left: 30
            }
        },
        segments: {
            value: 'value',
            label: 'name'
        },
        behavior: {
            transition: 1000
        }
    };

    this.target = target;

    this.data = data;

    this.options = _.extend({}, this.DEFAULT_OPTIONS, options);

    this.fn = {};

    this.computed = {};

    this.init();

};

PieChart.prototype = {
    init: function () {
        this._initHelpers();
        this.draw();
    },

    _createChart: function () {
        var self = this;
        var computed = self.computed;
        var layout = self.options.layout;
        var svg = d3.select(self.target);
        var chart;

        chart = svg.append('svg')
            .attr('width', computed.outerWidth)
            .attr('height', computed.outerHeight)
            .append('g')
            .attr('transform', 'translate(' + computed.outerWidth / 2 + ', ' + computed.outerHeight / 2 + ')');

        return chart;
    },

    _initHelpers: function () {
        var self = this;
        var layout = self.options.layout;

        self.fn.value = function(d) {
            return d[self.options.segments.value];
        };

        self.fn.label = function(d) {

            console.log(d);

            return d[self.options.segments.label];
        };

        var innerWidth = layout.width - layout.margin.left - layout.margin.right;
        var innerHeight = layout.height - layout.margin.top - layout.margin.bottom;

        self.computed = {
            innerWidth: innerWidth,
            innerHeight: innerHeight,
            outerWidth: layout.width,
            outerHeight: layout.height,
            radius: Math.min(innerWidth, innerHeight) / 2
        };
    },

    draw: function () {
        var self = this;
        var computed = self.computed;
        var layout = self.options.layout;
        var behavior = self.options.behavior;
        var chart = this._createChart();
        var data = self.data;
        var color = d3.scale.category20b();

        var arc = d3.svg.arc().outerRadius(computed.radius);
        var pie = d3.layout.pie();

        pie.value(self.fn.value)
            .sort(null);

        var path = chart.selectAll('path');

        var pieTip = d3.tip()
            .attr('class', 'bar-tooltip')
            .offset([-10, 0])
            .html(function(d) {
                return '<span class="label">' + self.fn.label(d.data) + '</span>:&nbsp;<span class="value">' + self.fn.value(d.data) + '</span>';
            });

        chart.call(pieTip);

        path.data(pie(data))
            .enter()
            .append('path')
            .attr('class', 'pie-segment')
            .attr('d', arc)
            .attr('fill', function(d) {
                return color(d.data[self.options.segments.label]);
            })
            .on('mouseover', pieTip.show)
            .on('mouseout', pieTip.hide);
    }
};

window.PieChart = PieChart;

module.exports = PieChart;