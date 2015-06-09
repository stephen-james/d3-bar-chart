var BarChart = window.BarChart;

var data = [
    { name: 'hello', value: 10 },
    { name: 'goodbye', value: 20 },
    { name: 'whatever', value: 30 },
    { name: 'howdy', value: 15 }
];

var target = document.getElementById('chart');
var chart = new BarChart(target, null, data);

var target2 = document.getElementById('pieChart');
var pieChart = new PieChart(target2, null, data);