var nodes = {}

function setupGraph () {
    var graph = new Springy.Graph();
    return graph;
}

function addNode (graph, node) {
    if (!nodes[node]) {
        nodes[node] = graph.newNode({label: node});
    }
}

function addEdge (graph, foo, bar) {
    graph.newEdge(nodes[foo], nodes[bar]);
}

function render (graph) {
    $('#springy').springy({graph: graph})
}

renderGraph(
    setupGraph,
    addNode,
    addEdge,
    render,
    50
);


//console.log('here');

//$.ajax({
//    'type': 'GET',
//    'url': '../graph.json',
//    'dataType': 'json',
//    'success': function (data) {
//        console.log('graph loaded');
//        var graph = new Springy.Graph();

//        var edge_a, edge_b, json;
//        var nodes = [], edges = [];
//        for (let edge of data) {
//            edge_a = edge[0].replace('.', '_');
//            edge_b = edge[1].replace('.', '_');
//            if (! nodes.indexOf(edge_a)) {
//                nodes.push(edge_a)
//            }
//            edges.push([edge_a, edge_b]);
//        }
//        json = {"nodes": nodes, "edges": edges};
//        graph.loadJSON(json);
//        jQuery('#springydemo').springy({"graph": graph});
//    },
//    'error': function (jqXHR, textStatus, error) {
//        console.log('failure, graph not loaded');
//        console.log('is this page sitting behind a web server?');
//        console.log(jqXHR, textStatus, error);
//    }
//});


