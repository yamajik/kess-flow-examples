import { Component } from "kess-flow";

export default class Combiner extends Component {
  in1 = "in1";
  in2 = "in2";
  out1 = "out1";

  async process({ input, output }) {
    if (!(await input.has(this.in1)) || !(await input.has(this.in2))) return;
    const result = {
      time: await input.get(this.in1),
      count: await input.get(this.in2)
    };
    await output.send({ [this.out1]: result });
    console.log(this.constructor.name, this.id, "process", ":", {
      result
    });
  }
}
