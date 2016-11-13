
// Pie chart
d3.pieChart = function (data, options) {
  var defaults = {
    type: 'pie',
    plot: 'pieChart',
    maxRatio: 0.8,
    innerRadius: 0,
    sort: null,
    labels: {
      show: false,
      data: function (d) { return d.label || d.name; }
    },
    legends: {
      show: true,
      data: function (d) { return d.label || d.name; }
    }
  };
  options.defaults = defaults;
  data = d3.parseData(data, options);
  options = d3.parseOptions(data, options);

  // Use the options
  var renderer = options.renderer;
  var canvas = options.canvas;
  var context = options.context;
  var width = options.width;
  var height = options.height;
  var sort = options.sort;
  var stroke = options.stroke;
  var strokeWidth = options.strokeWidth;
  var colorScheme = options.colorScheme;
  var maxRatio = options.maxRatio;
  var innerRadius = options.innerRadius;
  var outerRadius = options.outerRadius || (Math.min(width, height) / 2);
  if (typeof innerRadius === 'number' && typeof outerRadius === 'number') {
    innerRadius = Math.min(innerRadius, outerRadius * maxRatio);
  }

  // Shape and arcs
  var color = d3.scaleOrdinal(colorScheme);
  var arcs = d3.pie()
              .sort(sort)
              .value(function (d) { return d.value; })(data);
  var arc = d3.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius)
              .context(context);

  if (renderer === 'svg') {
    // Create the `svg` element
    var translate = 'translate(' + (width / 2) + ',' + (height / 2) + ')';
    var svg = canvas.append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .attr('transform', translate)
                    .attr('stroke', stroke)
                    .attr('stroke-width', strokeWidth);

    // Create the `g` elements
    var g = svg.selectAll('.arc')
               .data(arcs)
               .enter()
               .append('g')
               .attr('class', 'arc');

    // Create the `path` elements
    var path = g.append('path')
                .attr('d', arc)
                .attr('fill', function (d) { return color(d.value); });
  } else if (renderer === 'canvas') {
    context.translate(width / 2, height / 2);
    arcs.forEach(function (d, i) {
      context.beginPath();
      arc(d);
      context.fillStyle = colorScheme[i];
      context.fill();
    });

    if (stroke !== 'none') {
      context.beginPath();
      arcs.forEach(arc);
      context.strokeStyle = stroke;
      context.lineWidth = strokeWidth;
      context.stroke();
    }
  }
};
