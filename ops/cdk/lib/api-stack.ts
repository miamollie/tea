import * as cdk from "@aws-cdk/core";
import {
  SpecRestApi,
  ApiDefinition,
  LambdaIntegration,
} from "@aws-cdk/aws-apigateway";
import { GoFunction } from "@aws-cdk/aws-lambda-go";
import { Runtime } from "@aws-cdk/aws-lambda";
import * as fs from "fs";

const LAMBDA_RUNTIME = Runtime.GO_1_X;
const LAMBDA_DEFAULT_TIMEOUT = cdk.Duration.seconds(15);
const LAMBDA_DEFAULT_MEMORY = 512; // megabytes
const CODE_SOURCE = "../../api/handler";
const API_SCHEMA = "../../api/spec/schema.yml";
const NEW_API_SCHEMA = "../../api/spec/schema.new.yml";
const ARN_PLACEHOLDER = "${API_LAMBDA_ARN}";

export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new GoFunction(this, "TeaLambdaHandler", {
      entry: CODE_SOURCE,
      runtime: LAMBDA_RUNTIME,
      timeout: LAMBDA_DEFAULT_TIMEOUT,
      memorySize: LAMBDA_DEFAULT_MEMORY,
    });
    // it's not the function arn, it's the "invoke arn"

    try {
      // const schemaString = fs.readFileSync(API_SCHEMA, "utf8");
      // const NEW_API_SCHEMA_STRING = schemaString.replace(
      //   ARN_PLACEHOLDER,
      //   handler.functionArn
      // );

      // fs.writeFileSync(NEW_API_SCHEMA, NEW_API_SCHEMA_STRING);


      const api = new SpecRestApi(this, "tea-api", {
        apiDefinition: ApiDefinition.fromAsset(NEW_API_SCHEMA),
      });

      // TODO grant the api permission to invoke the lambda?
      api.root.addProxy({
        defaultIntegration: new LambdaIntegration(handler),
      });
    } catch (err) {
      console.error(err);
    }
  }
}
