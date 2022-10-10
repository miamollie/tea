import * as cdk from "@aws-cdk/core";
import { ApiStack } from "../lib/api-stack";

describe("ApiStack", () => {
  it("synthesizes", () => {
    const app = new cdk.App();

    new ApiStack(app, "MyTestStack", {
      env: {
        region: "us-east-1",
        account: "111111111111",
      },
    });

    app.synth();
  });
});
