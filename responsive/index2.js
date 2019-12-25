//console.log(document.body.clientWidth)
//console.log(document.body.clientHeight)
function myResponsiveComponent(container,props){
var svg=container.selectAll("svg").data([null]);
svg = svg.enter().append("svg").merge(svg).attr("width",props.width).attr("height",props.height)

var rect=svg.selectAll("rect").data([null]);
rect.enter().append("rect").merge(rect).attr("width",props.width).attr("height",props.height).attr("fill","green").attr("rx",100)
}

function render(){
    myResponsiveComponent(d3.select('body'),{"width":document.body.clientWidth,"height":document.body.clientHeight})
}
myResponsiveComponent(d3.select('body'),{"width":document.body.clientWidth,"height":document.body.clientHeight})
window.addEventListener("resize",()=>{
    render()
})
