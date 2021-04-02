import { Component } from "kess-flow";

export default class Timer extends Component {
  in1 = "in1";
  out1 = "out1";

  async process({ input, output }) {
    if (!input.has(this.in1)) return;
    const time = new Date().toISOString();
    output.send({ [this.out1]: time });
    console.log(this.constructor.name, this.id, "process", ":", { time });
  }
}
