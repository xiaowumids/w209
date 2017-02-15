d3.csv("ChromeBrowsing.csv", function(data) {
	console.log(data);
	var w = 1000;
	var h = 335;
	var barPadding = 1;
	var svg = d3.select("body")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
	var rect = svg.selectAll("rect")
				    .data(data)
				    .enter()
	var texts = svg.selectAll("text")
					.data(data)
					.enter();
	rect.append("rect")
	    .attr("x", function(d,i) {
	    	return i * (w / data.length);
	    })
	    .attr("y", function(d) {
	    	return h - d.TabsOpened - 20;
	    })
	    .attr("width", w / data.length - barPadding)
	    .attr("height", function(d) {
	    	return d.TabsOpened;
	    })
	    .attr("fill", function(d) {
	    	return "rgb(255, " + (d.TabsOpened) + ", 0)";
	    })
	rect.append("rect")
	    .attr("x", 0)
	    .attr("y", h - 18)
	    .attr("width", w)
	    .attr("height", 6)
	texts.append("text")
			.text(function(d) {
				return d.TabsOpened;
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d,i) {
				return i * (w / data.length) + (w / data.length - barPadding) / 2;
			})
			.attr("y", function(d) {
				return h - d.TabsOpened - 10;
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
	texts.append("text")
			.text(function(d) {
				return d.Date;
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d,i) {
				return i * (w / data.length) + (w / data.length - barPadding) / 2;
			})
			.attr("y", function(d) {
				return h;
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "10px")
	svg.selectAll("line")
		.data(data)
		.enter()
		.append("line")
		.attr("x1", 0)
		.attr("x2", function(d) {
			return data.length
		})
		.attr("y1", h - 20)
		.attr("y2", h - 20)
});