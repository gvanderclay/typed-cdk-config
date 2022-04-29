#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { TypedCdkConfigStack } from "../lib/typed-cdk-config-stack";
import { getConfig } from "../lib/build-config";

const app = new cdk.App();
const buildConfig = getConfig(app);
new TypedCdkConfigStack(app, "TypedCdkConfigStack", {
  buildConfig,
});
