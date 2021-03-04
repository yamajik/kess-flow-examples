import * as fs from "fs";

const [src, dist, code] = process.argv.slice(2);

const graph = JSON.parse(fs.readFileSync(src).toString());
const codeString = fs.readFileSync(code).toString();
Object.values(graph.processes).forEach((node: any) => {
  node.metadata.def.code = codeString;
});
fs.writeFileSync(dist, JSON.stringify(graph));
