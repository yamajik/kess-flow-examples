import { Component } from "kess-flow";

export default class TestV2 extends Component {
  timer: NodeJS.Timeout;
  from = "in1";

  async setup({ output }) {
    this.timer = setInterval(() => {
      console.log(this.constructor.name, this.id, "setup", ":", {
        out1: { node: this.id }
      });
      output.send({ out1: { node: this.id } });
    }, 1000);
  }

  async process({ input }) {
    if (!input.hasData(this.from)) return;
    console.log(
      this.constructor.name,
      this.id,
      "process",
      ":",
      await input.getData(this.from)
    );
  }

  async teardown() {
    super.teardown();
    clearInterval(this.timer);
  }
}
