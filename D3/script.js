var bardata = [50,50,50,50,50,50,50, 50, 50,50];
var note = [100,200,300,400,500,600,700,800,900,1000];

 // defaults to 0 => sine

function note1(notes){
var context = new AudioContext() || webkitAudioContext(),
oscillator = context.createOscillator();
oscillator.type = 0;
oscillator.frequency.value = notes;
oscillator.connect(context.destination);
oscillator.start(0); // delay in seconds
oscillator.stop(0.25);
}


//for (var i=0; i < 50; i++) {
//    bardata.push(Math.round(Math.random()*100)+10)
//}

//bardata.sort(function compareNumbers(a,b) {
//    return a -b;
//});

var margin = { top: 30, right: 30, bottom: 40, left:50 }

var height = 800 - margin.top - margin.bottom,
    width = 1200 - margin.left - margin.right,
    barWidth = 50,
    barOffset = 5;

var tempColor;

var colors = d3.scale.linear()
.domain([0, bardata.length*.33, bardata.length*.66, bardata.length])
.range(['#B58929','#C61C6F', '#268BD2', '#85992C'])

var yScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([0, height]);

var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length))
        .rangeBands([0, width], 0.2)

var tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', 0)

var myChart = d3.select('#chart').append('svg')
    .style('background', '#404040')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate('+ margin.left +', '+ margin.top +')')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand())
        .attr('x', function(d,i) {
            return xScale(i);
        })
        .attr('height', 0)
        .attr('y', height)

    .on('mouseover', function(d,i) {

        tooltip.transition()
            .style('opacity', .9)

        tooltip.html(d)
            .style('left', (d3.event.pageX - 35) + 'px')
            .style('top',  (d3.event.pageY - 30) + 'px')


        tempColor = this.style.fill;
        d3.select(this)
            .style('opacity', .5)
            .style('fill', 'yellow')

        note1(note[i]);

    })

    .on('mouseout', function(d) {
        d3.select(this)
            .style('opacity', 1)
            .style('fill', tempColor)
    })

    //.data(notes).enter().on('mouseover', function(d){
      
    //})

//run another instnace here.
myChart.transition()
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('y', function(d) {
        return height - yScale(d);
    })
    .delay(function(d, i) {
        return i * 20;
    })
    .duration(1000)
    .ease('elastic')

var vGuideScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([height, 0])

//var vGuide = d3.select('svg').append('g')
//    vAxis(vGuide)
//    vGuide.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
//    vGuide.selectAll('path')
//        .style({ fill: 'none', stroke: "#000"})
//    vGuide.selectAll('line')
//        .style({ stroke: "#000"})

var hAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .tickValues(xScale.domain().filter(function(d, i) {
        return !(i % (bardata.length/5));
    }))

var hGuide = d3.select('svg').append('g')
    hAxis(hGuide)
    hGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
    hGuide.selectAll('path')
        .style({ fill: 'none', stroke: "#000"})
    hGuide.selectAll('line')
        .style({ stroke: "#000"})
//d3js sound library 

