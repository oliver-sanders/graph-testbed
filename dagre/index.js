function setupGraph() {
    var graph = new dagreD3.graphlib.Graph({compound:true})
      .setGraph({})
      .setDefaultEdgeLabel(function() { return {}; });
    return graph;
}

function addNode(graph, node) {
    graph.setNode(node, {label: node});
}

function addEdge(graph, foo, bar) {
    graph.setEdge(foo, bar);
}

function render(graph) {
    // Create the renderer
    var render = new dagreD3.render();

    // Set up an SVG group so that we can translate the final graph.
    var svg = d3.select("svg"),
        svgGroup = svg.append("g");

    // Run the renderer. This is what draws the final graph.
    render(d3.select("svg g"), graph);
}

renderGraph(
    setupGraph,
    addNode,
    addEdge,
    render,
    500
);
