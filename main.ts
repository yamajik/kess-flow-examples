import { TranspileNetwork, Graph } from "kess-flow";

const graphs = process.argv.slice(2).map(Graph.load);
const network = new TranspileNetwork();
network.start();

function switchGraph(i) {
  network.updateFromGraph(graphs[i]);
  setTimeout(() => {
    if (i < graphs.length - 1) {
      switchGraph(i + 1);
    } else {
      switchGraph(0);
    }
  }, 5000);
}

switchGraph(0);
