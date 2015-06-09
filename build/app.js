(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBCYXJDaGFydCA9IHdpbmRvdy5CYXJDaGFydDtcblxudmFyIGRhdGEgPSBbXG4gICAgeyBuYW1lOiAnaGVsbG8nLCB2YWx1ZTogMTAgfSxcbiAgICB7IG5hbWU6ICdnb29kYnllJywgdmFsdWU6IDIwIH0sXG4gICAgeyBuYW1lOiAnd2hhdGV2ZXInLCB2YWx1ZTogMzAgfSxcbiAgICB7IG5hbWU6ICdob3dkeScsIHZhbHVlOiAxNSB9XG5dO1xuXG52YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0Jyk7XG52YXIgY2hhcnQgPSBuZXcgQmFyQ2hhcnQodGFyZ2V0LCBudWxsLCBkYXRhKTtcblxudmFyIHRhcmdldDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGllQ2hhcnQnKTtcbnZhciBwaWVDaGFydCA9IG5ldyBQaWVDaGFydCh0YXJnZXQyLCBudWxsLCBkYXRhKTsiXX0=
