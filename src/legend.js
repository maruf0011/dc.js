dc.legend = function () {
    var LABEL_GAP = 2;

    var _legend = {},
        _parent,
        _x = 0,
        _y = 0,
        _itemHeight = 7,
        _gap = 5;

    var _g;

    _legend.parent = function (p) {
        if (!arguments.length) return _parent;
        _parent = p;
        return _legend;
    };

    _legend.render = function () {
        _g = _parent.svg().append("g")
            .attr("class", "dc-legend")
            .attr("transform", "translate(" + _x + "," + _y + ")");

        var itemEnter = _g.selectAll('g.dc-legend-item')
            .data(_parent.legendables())
            .enter()
            .append("g")
            .attr("class", "dc-legend-item")
            .attr("transform", function (d, i) {
                return "translate(0," + i * legendItemHeight() + ")";
            });

        itemEnter
            .append("rect")
                .attr("width", _itemHeight)
                .attr("height", _itemHeight)
                .attr("fill", function(d){return d.color;});

        itemEnter.append("text")
                .text(function(d){return d.name;})
                .attr("x", _itemHeight + LABEL_GAP)
                .attr("y", _itemHeight);
    };

    function legendItemHeight() {
        return _gap + _itemHeight;
    }

    _legend.x = function (x) {
        if (!arguments.length) return _x;
        _x = x;
        return _legend;
    };

    _legend.y = function (y) {
        if (!arguments.length) return _y;
        _y = y;
        return _legend;
    };

    _legend.gap = function (gap) {
        if (!arguments.length) return _gap;
        _gap = gap;
        return _legend;
    };

    return _legend;
};
