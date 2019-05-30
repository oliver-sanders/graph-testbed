function loadGraph(max_edges) {
    var nodes = [];
    var edges = [];
    $.ajax({
        'type': 'GET',
        //'url': '../complex.json',
        'url': '../simple.json',
        'async': false,
        'dataType': 'json',
        'success': function (data) {
            var count = 0;
            for (let edge of data) {
                if (count > max_edges) {
                    break;
                }
                edges.push([edge[0], edge[1]]);
                count += 1;
                if (nodes.indexOf(edge[0] == -1)) {
                    nodes.push(edge[0]);
                }
                if (nodes.indexOf(edge[1] == -1)) {
                    nodes.push(edge[1]);
                }
            }
        },
        'error': function (e) {
            console.log('Error, could not load graph');
            console.log(e);
            return
        }
    });
    return [nodes, edges];
}


function renderGraph(setupGraph, addNode, addEdge, render, count) {
    console.log('Loading graph');
    var startTime = new Date();
    var data = loadGraph(count);
    var nodes = data[0];
    var edges = data[1];
    console.log('   >', new Date() - startTime.getTime())

    console.log('Setting-Up graph');
    var startTime = new Date();
    var graph = setupGraph();
    console.log('   >', new Date() - startTime.getTime())

    console.log('Adding nodes');
    var startTime = new Date();
    for (let node of nodes) {
        //console.log('Adding node: ' + node);
        addNode(graph, node);
    }
    console.log('   >', new Date() - startTime.getTime())

    console.log('Adding edges');
    var startTime = new Date();
    for (let edge of edges) {
        //console.log('Adding edge: ' + edge[0] + ' => ' + edge[1]);
        addEdge(graph, edge[0], edge[1]);
    }
    console.log('   >', new Date() - startTime.getTime())

    console.log('Rendering');
    var startTime = new Date();
    if (render) {
        render(graph);
    }
    console.log('   >', new Date() - startTime.getTime())

    console.log('Done');
}
