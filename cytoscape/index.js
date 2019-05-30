console.log('here');

var nodes;
var edges;

function setupGraph() {
    nodes = [];
    edges = [];
    return null
}

function addNode (_, node) {
    nodes.push({data: {id: node, label: node.replace('.', '\n')}});
}

function addEdge (_, foo, bar) {
    edges.push({data: {source: foo, target: bar}});
}

function render () {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: 'dagre',
        //name: 'klay',
        klay: {
            direction: 'DOWN',
            spacing: 50
        }
      },

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(label)',
            'text-wrap': 'wrap',
            'text-opacity': 0.5,
            'text-valign': 'center',
            'text-halign': 'right',
            'text-margin-x': 5,
            'text-background-color': '#ffffff',
            'text-background-opacity': 0.5,
            'text-background-shape': 'roundrectangle',
            'background-color': '#11479e',
            'text-border-width': 1
          }
        },

        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'width': 2,
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
            'target-distance-from-node': 5
          }
        }
      ],

      elements: {
          nodes: nodes,
          edges: edges
      }

    });
}

renderGraph(
    setupGraph,
    addNode,
    addEdge,
    render,
    1000
);
