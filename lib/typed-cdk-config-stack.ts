import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BuildConfig } from "./build-config";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export type Props = StackProps & {
  buildConfig: BuildConfig;
};
export class TypedCdkConfigStack extends Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
    console.log(props.buildConfig.appPrefix);
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TypedCdkConfigQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
