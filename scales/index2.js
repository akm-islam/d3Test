var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];
//console.log("Maximum is: ",d3.max(initialScaleData),"\nMinimum is: ",d3.min(initialScaleData))

// -----------------------scale linear
var scale=d3.scaleLinear().domain([10,100]).range([1,10])
console.log(scale(10))

// -----------------------ordinal scaling
var data = d3.range(0, 9); // range function creates a range of values from 0-8; upper bound is not included
console.log(data)
var colors=d3.scaleOrdinal(d3.schemeCategory10)
console.log(colors("blue"))

// -----------------------ordinal scaling