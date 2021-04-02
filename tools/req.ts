import * as commander from "commander";
import * as request from "request-promise-native";
import * as fs from "fs";

const program = new commander.Command();

program
  .command("list")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/list`);
    console.log(res);
  });

program
  .command("get")
  .requiredOption("-i, --id <id>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/get`, {
      body: { id: opts.id },
      json: true
    });
    console.log(res);
  });

program
  .command("create")
  .requiredOption("-i, --id <id>")
  .requiredOption("-g, --graph <graph>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/create`, {
      body: {
        id: opts.id,
        graph: JSON.parse(fs.readFileSync(opts.graph).toString())
      },
      json: true
    });
    console.log(res);
  });

program
  .command("update")
  .requiredOption("-i, --id <id>")
  .requiredOption("-g, --graph <graph>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/update`, {
      body: {
        id: opts.id,
        graph: JSON.parse(fs.readFileSync(opts.graph).toString())
      },
      json: true
    });
    console.log(res);
  });

program
  .command("remove")
  .requiredOption("-i, --id <id>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/remove`, {
      body: {
        id: opts.id
      },
      json: true
    });
    console.log(res);
  });

program
  .command("start")
  .requiredOption("-i, --id <id>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/start`, {
      body: {
        id: opts.id
      },
      json: true
    });
    console.log(res);
  });

program
  .command("stop")
  .requiredOption("-i, --id <id>")
  .option("-u, --url <url>", "", "http://localhost:3000")
  .action(async opts => {
    const res = await request.put(`${opts.url}/Flow/stop`, {
      body: {
        id: opts.id
      },
      json: true
    });
    console.log(res);
  });

program.parse(process.argv);
