import * as fs from "fs";
import * as commander from "commander";

const opts = new commander.Command()
  .option("-i, --input <src>")
  .option("-o, --output <dist>")
  .option("-c, --codes <node=code...>")
  .parse()
  .opts();

const graph = JSON.parse(fs.readFileSync(opts.input).toString());
opts.codes
  .map(i => i.split("="))
  .forEach(([node, code]) => {
    graph.processes[node].metadata.def.code = fs.readFileSync(code).toString();
  });
fs.writeFileSync(opts.output, JSON.stringify(graph));
