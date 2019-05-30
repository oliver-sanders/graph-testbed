# Graph Engine Testbed

Different graph engines are implemented in each directory.

Each engine has a JS interface so they can all plug into the same data source
which comes from `graph.js`.

## The Engines

* [cytoscape](cytoscape/index.html)
* [dagre](dagre/index.html)
* [springy](springy/index.html)

## To Run

Open the `index.html` file in each directory.

You will need to view these files through a web server otherwise the browser
will block you from loading the graph files due to cross-site-scripting.

## To Profile

Open your browser console, timings will be written here.

## To View A Custom Graph

To generate a JSON file from a .dot file (as output by cylc graph) you can
do something along the lines of this:

```bash
echo [ > graph.json; grep '\->' graph.dot | sed 's/\[.*//; s/ \->/,/g; s/^\t*//; s/^/\[/; s/ *$//; s/$/\],/' >> graph.json; echo ] >> graph.json
# remove final comma
```
