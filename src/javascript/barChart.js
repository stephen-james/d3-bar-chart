var d3 = require('d3');
var _ = require('underscore');

var BarChart = function BarChart(target, options, data) {

    this.DEFAULT_OPTIONS = {
        layout: {
            width: 400,
            height: 400,
            margin: {
                top: 20,
                right: 30,
                bottom: 30,
                left: 40
            },
            bar: {
                width: 40
            }
        },
        axes: {
            x: {
                field: 'name'
            },
            y: {
                field: 'value'
            }
        }
    };

    this.target = target;

    this.data = data;

    this.options = _.extend({}, this.DEFAULT_OPTIONS, options);

    this.fn = {};

    this.computed = {};

    this.init();

};

BarChart.prototype = {
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
            .attr('transform', 'translate(' + layout.margin.left + ', ' + layout.margin.top + ')');

        return chart;
    },

    _initHelpers: function () {
        var self = this;
        var layout = self.options.layout;

        self.fn.y = function(d) {
            return d[self.options.axes.y.field];
        };

        self.fn.x = function(d) {
            return d[self.options.axes.y.field];
        };

        self.computed = {
            innerWidth: layout.width - layout.margin.left - layout.margin.right,
            innerHeight: layout.height - layout.margin.top - layout.margin.bottom,
            outerWidth: layout.width,
            outerHeight: layout.height
        };
    },

    draw: function () {
        var self = this;
        var computed = self.computed;
        var layout = self.options.layout;
        var chart = this._createChart();
        var data = self.data;

        var barLabels = [];

        _.each(data, function(d) {
            barLabels.push(d[self.options.axes.x.field]);
        });

        var xScale = d3.scale.ordinal()
            .domain(barLabels)
            .rangeBands([0, computed.innerWidth]);

        var yScale = d3.scale.linear()
            .range([0, computed.innerHeight])
            .domain([d3.max(data, self.fn.y), 0]);

        var bar = chart.selectAll('g')
            .data(data)
            .enter().append('g')
            .attr('transform', function(d, i) {
                var dx = (computed.innerWidth / data.length * i) + (computed.innerWidth / data.length / 2) - (layout.bar.width / 2);
                var dy = 0;
                return 'translate(' + dx + ', ' + dy + ')';
            });

        var barRect = bar.append('rect')
            .attr('y', function(d) { return yScale(d.value); })
            .attr('width', layout.bar.width)
            .attr('class', 'bar');

        barRect
            .attr('height', 0)
            .transition()
            .duration(1000)
            .attr('height', function(d) { return computed.innerHeight - yScale(self.fn.y(d))});

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom');

        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + computed.innerHeight + ')')
            .call(xAxis);

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left');

        chart.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(0,0)')
            .call(yAxis);
    }
};

window.BarChart = BarChart;

module.exports = BarChart;