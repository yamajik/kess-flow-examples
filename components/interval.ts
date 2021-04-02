import { Component } from "kess-flow";

export default class Interval extends Component {
  out1 = "out1";

  count: number;
  timer: NodeJS.Timeout;

  async setup(ctx) {
    await super.setup(ctx);
    this.count = 0;
    this.timer = setInterval(async () => {
      await ctx.output.send({ [this.out1]: ++this.count });
    }, 1000);
  }

  async teardown() {
    await super.teardown();
    clearInterval(this.timer);
    this.count = 0;
  }
}
