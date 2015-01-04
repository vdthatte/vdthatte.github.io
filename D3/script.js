var data=[
  {
  "name": "Top Level",
  "parent": "null",
  "children": [
    {
      "name": "Level 2: A",
      "parent": "Top Level",
      "children": [
        {
          "name": "Son of A",
          "parent": "Level 2: A"
        },
        {
          "name": "Daughter of A",
          "parent": "Level 2: A"
        }
      ]
    },
    {
      "name": "Level 2: B",
      "parent": "Top Level"
    }
  ]
}
]


var margin = {top: 20, right: 120, bottom: 20, left:120},
	width = 960 - margin.right - margin.left,
	height = 800 - margin.top - margin.bottom;

var i = 0;
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height,width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d){return[d.y, d.x]});

var svg = d3.select("body").append("svg")
	.attr("width", width + margin.right + magin.left)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.selectAll('#chart').selectAll('div')
	.data(myStyles){
	root = treeData[0];
	update(root);
})

function update(root){//use root instead?
	var nodes = tree.nodes(root).reverse,
		links = tree.links(nodes);

	nodes.forEach(function(d){ d.y = d.depth * 180; });

	var nodes = svg.selectAll("g.node")
		.data(nodes, function(d){return d.id || (d.id = ++1);});

	var nodeEnter = node.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d){
			return "translate(" + d.y + "," + d.x + ")"; });

	nodeEnter.append("circle")
		.attr("r", 10)
		.style("fill", "#fff");

	nodeEnter.append("text")
		.attr("x", function(d){
			return d.children || d._childesn ? -13 : 13; })
		.attr("dy", ".35em")
		.attr("text-anchor", function(d){
			return d.children || d._children ? "end" : "start"; })
		.text(function(d){return d.name;})
		.style("fill-opacity", 1);

	var link = svg.selectAll("path.link")
		.data(links, function(d){return d.target.id;});

	link.enter().insert("path", "g")
		.attr("class", "link")
		.attr("d", diagonal);
		})
		

