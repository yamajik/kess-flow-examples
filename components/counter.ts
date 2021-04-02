import { Component } from "kess-flow";

export default class Timer extends Component {
  in1 = "in1";
  out1 = "out1";

  count: number;

  async setup(ctx) {
    await super.setup(ctx);
    this.count = 0;
  }

  async process({ input, output }) {
    if (!(await input.has(this.in1))) return;
    this.count++;
    await output.send({ [this.out1]: this.count });
    console.log(this.constructor.name, this.id, "process", ":", {
      count: this.count
    });
  }
}
