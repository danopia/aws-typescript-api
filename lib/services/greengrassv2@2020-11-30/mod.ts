// Autogenerated API client for: AWS IoT Greengrass V2

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as Base64 from "https://deno.land/std@0.91.0/encoding/base64.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";
function serializeBlob(input: string | Uint8Array | null | undefined) {
  if (input == null) return input;
  return Base64.encode(input);
}

export default class GreengrassV2 {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(GreengrassV2.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-11-30",
    "endpointPrefix": "greengrass",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "AWS GreengrassV2",
    "serviceFullName": "AWS IoT Greengrass V2",
    "serviceId": "GreengrassV2",
    "signatureVersion": "v4",
    "uid": "greengrassv2-2020-11-30"
  };

  async cancelDeployment(
    {abortSignal, ...params}: RequestConfig & s.CancelDeploymentRequest,
  ): Promise<s.CancelDeploymentResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "CancelDeployment",
      requestUri: cmnP.encodePath`/greengrass/v2/deployments/${params["deploymentId"]}/cancel`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "message": "s",
      },
    }, await resp.json());
  }

  async createComponentVersion(
    {abortSignal, ...params}: RequestConfig & s.CreateComponentVersionRequest = {},
  ): Promise<s.CreateComponentVersionResponse> {
    const body: jsonP.JSONObject = {
      inlineRecipe: serializeBlob(params["inlineRecipe"]),
      lambdaFunction: fromLambdaFunctionRecipeSource(params["lambdaFunction"]),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateComponentVersion",
      requestUri: "/greengrass/v2/createComponentVersion",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {
        "componentName": "s",
        "componentVersion": "s",
        "creationTimestamp": "d",
        "status": toCloudComponentStatus,
      },
      optional: {
        "arn": "s",
      },
    }, await resp.json());
  }

  async createDeployment(
    {abortSignal, ...params}: RequestConfig & s.CreateDeploymentRequest,
  ): Promise<s.CreateDeploymentResponse> {
    const body: jsonP.JSONObject = {
      targetArn: params["targetArn"],
      deploymentName: params["deploymentName"],
      components: jsonP.serializeMap(params["components"], x => fromComponentDeploymentSpecification(x)),
      iotJobConfiguration: fromDeploymentIoTJobConfiguration(params["iotJobConfiguration"]),
      deploymentPolicies: fromDeploymentPolicies(params["deploymentPolicies"]),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDeployment",
      requestUri: "/greengrass/v2/deployments",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "deploymentId": "s",
        "iotJobId": "s",
        "iotJobArn": "s",
      },
    }, await resp.json());
  }

  async deleteComponent(
    {abortSignal, ...params}: RequestConfig & s.DeleteComponentRequest,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteComponent",
      method: "DELETE",
      requestUri: cmnP.encodePath`/greengrass/v2/components/${params["arn"]}`,
      responseCode: 204,
    });
  }

  async deleteCoreDevice(
    {abortSignal, ...params}: RequestConfig & s.DeleteCoreDeviceRequest,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteCoreDevice",
      method: "DELETE",
      requestUri: cmnP.encodePath`/greengrass/v2/coreDevices/${params["coreDeviceThingName"]}`,
      responseCode: 204,
    });
  }

  async describeComponent(
    {abortSignal, ...params}: RequestConfig & s.DescribeComponentRequest,
  ): Promise<s.DescribeComponentResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeComponent",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/components/${params["arn"]}/metadata`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "arn": "s",
        "componentName": "s",
        "componentVersion": "s",
        "creationTimestamp": "d",
        "publisher": "s",
        "description": "s",
        "status": toCloudComponentStatus,
        "platforms": [toComponentPlatform],
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getComponent(
    {abortSignal, ...params}: RequestConfig & s.GetComponentRequest,
  ): Promise<s.GetComponentResponse> {
    const query = new URLSearchParams;
    if (params["recipeOutputFormat"] != null) query.set("recipeOutputFormat", params["recipeOutputFormat"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetComponent",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/components/${params["arn"]}`,
    });
    return jsonP.readObj({
      required: {
        "recipeOutputFormat": (x: jsonP.JSONValue) => cmnP.readEnum<s.RecipeOutputFormat>(x),
        "recipe": "a",
      },
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getComponentVersionArtifact(
    {abortSignal, ...params}: RequestConfig & s.GetComponentVersionArtifactRequest,
  ): Promise<s.GetComponentVersionArtifactResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetComponentVersionArtifact",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/components/${params["arn"]}/artifacts/${params["artifactName"].split("/")}`,
    });
    return jsonP.readObj({
      required: {
        "preSignedUrl": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async getCoreDevice(
    {abortSignal, ...params}: RequestConfig & s.GetCoreDeviceRequest,
  ): Promise<s.GetCoreDeviceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetCoreDevice",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/coreDevices/${params["coreDeviceThingName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "coreDeviceThingName": "s",
        "coreVersion": "s",
        "platform": "s",
        "architecture": "s",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.CoreDeviceStatus>(x),
        "lastStatusUpdateTimestamp": "d",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getDeployment(
    {abortSignal, ...params}: RequestConfig & s.GetDeploymentRequest,
  ): Promise<s.GetDeploymentResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetDeployment",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/deployments/${params["deploymentId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "targetArn": "s",
        "revisionId": "s",
        "deploymentId": "s",
        "deploymentName": "s",
        "deploymentStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentStatus>(x),
        "iotJobId": "s",
        "iotJobArn": "s",
        "components": x => jsonP.readMap(String, toComponentDeploymentSpecification, x),
        "deploymentPolicies": toDeploymentPolicies,
        "iotJobConfiguration": toDeploymentIoTJobConfiguration,
        "creationTimestamp": "d",
        "isLatestForTarget": "b",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listComponentVersions(
    {abortSignal, ...params}: RequestConfig & s.ListComponentVersionsRequest,
  ): Promise<s.ListComponentVersionsResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListComponentVersions",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/components/${params["arn"]}/versions`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "componentVersions": [toComponentVersionListItem],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listComponents(
    {abortSignal, ...params}: RequestConfig & s.ListComponentsRequest = {},
  ): Promise<s.ListComponentsResponse> {
    const query = new URLSearchParams;
    if (params["scope"] != null) query.set("scope", params["scope"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListComponents",
      method: "GET",
      requestUri: "/greengrass/v2/components",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "components": [toComponent],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listCoreDevices(
    {abortSignal, ...params}: RequestConfig & s.ListCoreDevicesRequest = {},
  ): Promise<s.ListCoreDevicesResponse> {
    const query = new URLSearchParams;
    if (params["thingGroupArn"] != null) query.set("thingGroupArn", params["thingGroupArn"]?.toString() ?? "");
    if (params["status"] != null) query.set("status", params["status"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListCoreDevices",
      method: "GET",
      requestUri: "/greengrass/v2/coreDevices",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "coreDevices": [toCoreDevice],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listDeployments(
    {abortSignal, ...params}: RequestConfig & s.ListDeploymentsRequest = {},
  ): Promise<s.ListDeploymentsResponse> {
    const query = new URLSearchParams;
    if (params["targetArn"] != null) query.set("targetArn", params["targetArn"]?.toString() ?? "");
    if (params["historyFilter"] != null) query.set("historyFilter", params["historyFilter"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListDeployments",
      method: "GET",
      requestUri: "/greengrass/v2/deployments",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "deployments": [toDeployment],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listEffectiveDeployments(
    {abortSignal, ...params}: RequestConfig & s.ListEffectiveDeploymentsRequest,
  ): Promise<s.ListEffectiveDeploymentsResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListEffectiveDeployments",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/coreDevices/${params["coreDeviceThingName"]}/effectiveDeployments`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "effectiveDeployments": [toEffectiveDeployment],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listInstalledComponents(
    {abortSignal, ...params}: RequestConfig & s.ListInstalledComponentsRequest,
  ): Promise<s.ListInstalledComponentsResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListInstalledComponents",
      method: "GET",
      requestUri: cmnP.encodePath`/greengrass/v2/coreDevices/${params["coreDeviceThingName"]}/installedComponents`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "installedComponents": [toInstalledComponent],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async resolveComponentCandidates(
    {abortSignal, ...params}: RequestConfig & s.ResolveComponentCandidatesRequest,
  ): Promise<s.ResolveComponentCandidatesResponse> {
    const body: jsonP.JSONObject = {
      platform: fromComponentPlatform(params["platform"]),
      componentCandidates: params["componentCandidates"]?.map(x => fromComponentCandidate(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ResolveComponentCandidates",
      requestUri: "/greengrass/v2/resolveComponentCandidates",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "resolvedComponentVersions": [toResolvedComponentVersion],
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["tagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromLambdaFunctionRecipeSource(input?: s.LambdaFunctionRecipeSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    lambdaArn: input["lambdaArn"],
    componentName: input["componentName"],
    componentVersion: input["componentVersion"],
    componentPlatforms: input["componentPlatforms"]?.map(x => fromComponentPlatform(x)),
    componentDependencies: jsonP.serializeMap(input["componentDependencies"], x => fromComponentDependencyRequirement(x)),
    componentLambdaParameters: fromLambdaExecutionParameters(input["componentLambdaParameters"]),
  }
}

function fromComponentPlatform(input?: s.ComponentPlatform | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    name: input["name"],
    attributes: input["attributes"],
  }
}
function toComponentPlatform(root: jsonP.JSONValue): s.ComponentPlatform {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "attributes": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function fromComponentDependencyRequirement(input?: s.ComponentDependencyRequirement | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    versionRequirement: input["versionRequirement"],
    dependencyType: input["dependencyType"],
  }
}

function fromLambdaExecutionParameters(input?: s.LambdaExecutionParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    eventSources: input["eventSources"]?.map(x => fromLambdaEventSource(x)),
    maxQueueSize: input["maxQueueSize"],
    maxInstancesCount: input["maxInstancesCount"],
    maxIdleTimeInSeconds: input["maxIdleTimeInSeconds"],
    timeoutInSeconds: input["timeoutInSeconds"],
    statusTimeoutInSeconds: input["statusTimeoutInSeconds"],
    pinned: input["pinned"],
    inputPayloadEncodingType: input["inputPayloadEncodingType"],
    execArgs: input["execArgs"],
    environmentVariables: input["environmentVariables"],
    linuxProcessParams: fromLambdaLinuxProcessParams(input["linuxProcessParams"]),
  }
}

function fromLambdaEventSource(input?: s.LambdaEventSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    topic: input["topic"],
    type: input["type"],
  }
}

function fromLambdaLinuxProcessParams(input?: s.LambdaLinuxProcessParams | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    isolationMode: input["isolationMode"],
    containerParams: fromLambdaContainerParams(input["containerParams"]),
  }
}

function fromLambdaContainerParams(input?: s.LambdaContainerParams | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    memorySizeInKB: input["memorySizeInKB"],
    mountROSysfs: input["mountROSysfs"],
    volumes: input["volumes"]?.map(x => fromLambdaVolumeMount(x)),
    devices: input["devices"]?.map(x => fromLambdaDeviceMount(x)),
  }
}

function fromLambdaVolumeMount(input?: s.LambdaVolumeMount | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    sourcePath: input["sourcePath"],
    destinationPath: input["destinationPath"],
    permission: input["permission"],
    addGroupOwner: input["addGroupOwner"],
  }
}

function fromLambdaDeviceMount(input?: s.LambdaDeviceMount | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    path: input["path"],
    permission: input["permission"],
    addGroupOwner: input["addGroupOwner"],
  }
}

function fromComponentDeploymentSpecification(input?: s.ComponentDeploymentSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    componentVersion: input["componentVersion"],
    configurationUpdate: fromComponentConfigurationUpdate(input["configurationUpdate"]),
    runWith: fromComponentRunWith(input["runWith"]),
  }
}
function toComponentDeploymentSpecification(root: jsonP.JSONValue): s.ComponentDeploymentSpecification {
  return jsonP.readObj({
    required: {},
    optional: {
      "componentVersion": "s",
      "configurationUpdate": toComponentConfigurationUpdate,
      "runWith": toComponentRunWith,
    },
  }, root);
}

function fromComponentConfigurationUpdate(input?: s.ComponentConfigurationUpdate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    merge: input["merge"],
    reset: input["reset"],
  }
}
function toComponentConfigurationUpdate(root: jsonP.JSONValue): s.ComponentConfigurationUpdate {
  return jsonP.readObj({
    required: {},
    optional: {
      "merge": "s",
      "reset": ["s"],
    },
  }, root);
}

function fromComponentRunWith(input?: s.ComponentRunWith | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    posixUser: input["posixUser"],
  }
}
function toComponentRunWith(root: jsonP.JSONValue): s.ComponentRunWith {
  return jsonP.readObj({
    required: {},
    optional: {
      "posixUser": "s",
    },
  }, root);
}

function fromDeploymentIoTJobConfiguration(input?: s.DeploymentIoTJobConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    jobExecutionsRolloutConfig: fromIoTJobExecutionsRolloutConfig(input["jobExecutionsRolloutConfig"]),
    abortConfig: fromIoTJobAbortConfig(input["abortConfig"]),
    timeoutConfig: fromIoTJobTimeoutConfig(input["timeoutConfig"]),
  }
}
function toDeploymentIoTJobConfiguration(root: jsonP.JSONValue): s.DeploymentIoTJobConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobExecutionsRolloutConfig": toIoTJobExecutionsRolloutConfig,
      "abortConfig": toIoTJobAbortConfig,
      "timeoutConfig": toIoTJobTimeoutConfig,
    },
  }, root);
}

function fromIoTJobExecutionsRolloutConfig(input?: s.IoTJobExecutionsRolloutConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    exponentialRate: fromIoTJobExponentialRolloutRate(input["exponentialRate"]),
    maximumPerMinute: input["maximumPerMinute"],
  }
}
function toIoTJobExecutionsRolloutConfig(root: jsonP.JSONValue): s.IoTJobExecutionsRolloutConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "exponentialRate": toIoTJobExponentialRolloutRate,
      "maximumPerMinute": "n",
    },
  }, root);
}

function fromIoTJobExponentialRolloutRate(input?: s.IoTJobExponentialRolloutRate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    baseRatePerMinute: input["baseRatePerMinute"],
    incrementFactor: input["incrementFactor"],
    rateIncreaseCriteria: fromIoTJobRateIncreaseCriteria(input["rateIncreaseCriteria"]),
  }
}
function toIoTJobExponentialRolloutRate(root: jsonP.JSONValue): s.IoTJobExponentialRolloutRate {
  return jsonP.readObj({
    required: {
      "baseRatePerMinute": "n",
      "incrementFactor": "n",
      "rateIncreaseCriteria": toIoTJobRateIncreaseCriteria,
    },
    optional: {},
  }, root);
}

function fromIoTJobRateIncreaseCriteria(input?: s.IoTJobRateIncreaseCriteria | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    numberOfNotifiedThings: input["numberOfNotifiedThings"],
    numberOfSucceededThings: input["numberOfSucceededThings"],
  }
}
function toIoTJobRateIncreaseCriteria(root: jsonP.JSONValue): s.IoTJobRateIncreaseCriteria {
  return jsonP.readObj({
    required: {},
    optional: {
      "numberOfNotifiedThings": "n",
      "numberOfSucceededThings": "n",
    },
  }, root);
}

function fromIoTJobAbortConfig(input?: s.IoTJobAbortConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    criteriaList: input["criteriaList"]?.map(x => fromIoTJobAbortCriteria(x)),
  }
}
function toIoTJobAbortConfig(root: jsonP.JSONValue): s.IoTJobAbortConfig {
  return jsonP.readObj({
    required: {
      "criteriaList": [toIoTJobAbortCriteria],
    },
    optional: {},
  }, root);
}

function fromIoTJobAbortCriteria(input?: s.IoTJobAbortCriteria | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    failureType: input["failureType"],
    action: input["action"],
    thresholdPercentage: input["thresholdPercentage"],
    minNumberOfExecutedThings: input["minNumberOfExecutedThings"],
  }
}
function toIoTJobAbortCriteria(root: jsonP.JSONValue): s.IoTJobAbortCriteria {
  return jsonP.readObj({
    required: {
      "failureType": (x: jsonP.JSONValue) => cmnP.readEnum<s.IoTJobExecutionFailureType>(x),
      "action": (x: jsonP.JSONValue) => cmnP.readEnum<s.IoTJobAbortAction>(x),
      "thresholdPercentage": "n",
      "minNumberOfExecutedThings": "n",
    },
    optional: {},
  }, root);
}

function fromIoTJobTimeoutConfig(input?: s.IoTJobTimeoutConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    inProgressTimeoutInMinutes: input["inProgressTimeoutInMinutes"],
  }
}
function toIoTJobTimeoutConfig(root: jsonP.JSONValue): s.IoTJobTimeoutConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "inProgressTimeoutInMinutes": "n",
    },
  }, root);
}

function fromDeploymentPolicies(input?: s.DeploymentPolicies | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    failureHandlingPolicy: input["failureHandlingPolicy"],
    componentUpdatePolicy: fromDeploymentComponentUpdatePolicy(input["componentUpdatePolicy"]),
    configurationValidationPolicy: fromDeploymentConfigurationValidationPolicy(input["configurationValidationPolicy"]),
  }
}
function toDeploymentPolicies(root: jsonP.JSONValue): s.DeploymentPolicies {
  return jsonP.readObj({
    required: {},
    optional: {
      "failureHandlingPolicy": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentFailureHandlingPolicy>(x),
      "componentUpdatePolicy": toDeploymentComponentUpdatePolicy,
      "configurationValidationPolicy": toDeploymentConfigurationValidationPolicy,
    },
  }, root);
}

function fromDeploymentComponentUpdatePolicy(input?: s.DeploymentComponentUpdatePolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timeoutInSeconds: input["timeoutInSeconds"],
    action: input["action"],
  }
}
function toDeploymentComponentUpdatePolicy(root: jsonP.JSONValue): s.DeploymentComponentUpdatePolicy {
  return jsonP.readObj({
    required: {},
    optional: {
      "timeoutInSeconds": "n",
      "action": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentComponentUpdatePolicyAction>(x),
    },
  }, root);
}

function fromDeploymentConfigurationValidationPolicy(input?: s.DeploymentConfigurationValidationPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timeoutInSeconds: input["timeoutInSeconds"],
  }
}
function toDeploymentConfigurationValidationPolicy(root: jsonP.JSONValue): s.DeploymentConfigurationValidationPolicy {
  return jsonP.readObj({
    required: {},
    optional: {
      "timeoutInSeconds": "n",
    },
  }, root);
}

function fromComponentCandidate(input?: s.ComponentCandidate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    componentName: input["componentName"],
    componentVersion: input["componentVersion"],
    versionRequirements: input["versionRequirements"],
  }
}

function toCloudComponentStatus(root: jsonP.JSONValue): s.CloudComponentStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "componentState": (x: jsonP.JSONValue) => cmnP.readEnum<s.CloudComponentState>(x),
      "message": "s",
      "errors": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toComponentVersionListItem(root: jsonP.JSONValue): s.ComponentVersionListItem {
  return jsonP.readObj({
    required: {},
    optional: {
      "componentName": "s",
      "componentVersion": "s",
      "arn": "s",
    },
  }, root);
}

function toComponent(root: jsonP.JSONValue): s.Component {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "componentName": "s",
      "latestVersion": toComponentLatestVersion,
    },
  }, root);
}

function toComponentLatestVersion(root: jsonP.JSONValue): s.ComponentLatestVersion {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "componentVersion": "s",
      "creationTimestamp": "d",
      "description": "s",
      "publisher": "s",
      "platforms": [toComponentPlatform],
    },
  }, root);
}

function toCoreDevice(root: jsonP.JSONValue): s.CoreDevice {
  return jsonP.readObj({
    required: {},
    optional: {
      "coreDeviceThingName": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.CoreDeviceStatus>(x),
      "lastStatusUpdateTimestamp": "d",
    },
  }, root);
}

function toDeployment(root: jsonP.JSONValue): s.Deployment {
  return jsonP.readObj({
    required: {},
    optional: {
      "targetArn": "s",
      "revisionId": "s",
      "deploymentId": "s",
      "deploymentName": "s",
      "creationTimestamp": "d",
      "deploymentStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentStatus>(x),
      "isLatestForTarget": "b",
    },
  }, root);
}

function toEffectiveDeployment(root: jsonP.JSONValue): s.EffectiveDeployment {
  return jsonP.readObj({
    required: {
      "deploymentId": "s",
      "deploymentName": "s",
      "targetArn": "s",
      "coreDeviceExecutionStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.EffectiveDeploymentExecutionStatus>(x),
      "creationTimestamp": "d",
      "modifiedTimestamp": "d",
    },
    optional: {
      "iotJobId": "s",
      "iotJobArn": "s",
      "description": "s",
      "reason": "s",
    },
  }, root);
}

function toInstalledComponent(root: jsonP.JSONValue): s.InstalledComponent {
  return jsonP.readObj({
    required: {},
    optional: {
      "componentName": "s",
      "componentVersion": "s",
      "lifecycleState": (x: jsonP.JSONValue) => cmnP.readEnum<s.InstalledComponentLifecycleState>(x),
      "lifecycleStateDetails": "s",
      "isRoot": "b",
    },
  }, root);
}

function toResolvedComponentVersion(root: jsonP.JSONValue): s.ResolvedComponentVersion {
  return jsonP.readObj({
    required: {},
    optional: {
      "arn": "s",
      "componentName": "s",
      "componentVersion": "s",
      "recipe": "a",
    },
  }, root);
}
