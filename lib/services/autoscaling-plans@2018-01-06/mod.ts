// Autogenerated API client for: AWS Auto Scaling Plans

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class AutoScalingPlans {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(AutoScalingPlans.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-01-06",
    "endpointPrefix": "autoscaling-plans",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Auto Scaling Plans",
    "serviceId": "Auto Scaling Plans",
    "signatureVersion": "v4",
    "signingName": "autoscaling-plans",
    "targetPrefix": "AnyScaleScalingPlannerFrontendService",
    "uid": "autoscaling-plans-2018-01-06"
  };

  async createScalingPlan(
    {abortSignal, ...params}: RequestConfig & CreateScalingPlanRequest,
  ): Promise<CreateScalingPlanResponse> {
    const body: JSONObject = {...params,
    ApplicationSource: fromApplicationSource(params["ApplicationSource"]),
    ScalingInstructions: params["ScalingInstructions"]?.map(x => fromScalingInstruction(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateScalingPlan",
    });
    return prt.readObj({
      required: {
        "ScalingPlanVersion": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteScalingPlan(
    {abortSignal, ...params}: RequestConfig & DeleteScalingPlanRequest,
  ): Promise<DeleteScalingPlanResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteScalingPlan",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeScalingPlanResources(
    {abortSignal, ...params}: RequestConfig & DescribeScalingPlanResourcesRequest,
  ): Promise<DescribeScalingPlanResourcesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingPlanResources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ScalingPlanResources": [toScalingPlanResource],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeScalingPlans(
    {abortSignal, ...params}: RequestConfig & DescribeScalingPlansRequest = {},
  ): Promise<DescribeScalingPlansResponse> {
    const body: JSONObject = {...params,
    ApplicationSources: params["ApplicationSources"]?.map(x => fromApplicationSource(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingPlans",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ScalingPlans": [toScalingPlan],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getScalingPlanResourceForecastData(
    {abortSignal, ...params}: RequestConfig & GetScalingPlanResourceForecastDataRequest,
  ): Promise<GetScalingPlanResourceForecastDataResponse> {
    const body: JSONObject = {...params,
    StartTime: prt.serializeDate_unixTimestamp(params["StartTime"]),
    EndTime: prt.serializeDate_unixTimestamp(params["EndTime"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetScalingPlanResourceForecastData",
    });
    return prt.readObj({
      required: {
        "Datapoints": [toDatapoint],
      },
      optional: {},
    }, await resp.json());
  }

  async updateScalingPlan(
    {abortSignal, ...params}: RequestConfig & UpdateScalingPlanRequest,
  ): Promise<UpdateScalingPlanResponse> {
    const body: JSONObject = {...params,
    ApplicationSource: fromApplicationSource(params["ApplicationSource"]),
    ScalingInstructions: params["ScalingInstructions"]?.map(x => fromScalingInstruction(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateScalingPlan",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateScalingPlanRequest {
  ScalingPlanName: string;
  ApplicationSource: ApplicationSource;
  ScalingInstructions: ScalingInstruction[];
}

// refs: 1 - tags: named, input
export interface DeleteScalingPlanRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
}

// refs: 1 - tags: named, input
export interface DescribeScalingPlanResourcesRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeScalingPlansRequest {
  ScalingPlanNames?: string[] | null;
  ScalingPlanVersion?: number | null;
  ApplicationSources?: ApplicationSource[] | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetScalingPlanResourceForecastDataRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  ForecastDataType: ForecastDataType;
  StartTime: Date | number;
  EndTime: Date | number;
}

// refs: 1 - tags: named, input
export interface UpdateScalingPlanRequest {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ApplicationSource?: ApplicationSource | null;
  ScalingInstructions?: ScalingInstruction[] | null;
}

// refs: 1 - tags: named, output
export interface CreateScalingPlanResponse {
  ScalingPlanVersion: number;
}

// refs: 1 - tags: named, output
export interface DeleteScalingPlanResponse {
}

// refs: 1 - tags: named, output
export interface DescribeScalingPlanResourcesResponse {
  ScalingPlanResources?: ScalingPlanResource[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeScalingPlansResponse {
  ScalingPlans?: ScalingPlan[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetScalingPlanResourceForecastDataResponse {
  Datapoints: Datapoint[];
}

// refs: 1 - tags: named, output
export interface UpdateScalingPlanResponse {
}

// refs: 4 - tags: input, named, interface, output
export interface ApplicationSource {
  CloudFormationStackARN?: string | null;
  TagFilters?: TagFilter[] | null;
}
function fromApplicationSource(input?: ApplicationSource | null): JSONValue {
  if (!input) return input;
  return {...input,
    TagFilters: input["TagFilters"]?.map(x => fromTagFilter(x)),
  }
}
function toApplicationSource(root: JSONValue): ApplicationSource {
  return prt.readObj({
    required: {},
    optional: {
      "CloudFormationStackARN": "s",
      "TagFilters": [toTagFilter],
    },
  }, root);
}

// refs: 4 - tags: input, named, interface, output
export interface TagFilter {
  Key?: string | null;
  Values?: string[] | null;
}
function fromTagFilter(input?: TagFilter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toTagFilter(root: JSONValue): TagFilter {
  return prt.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Values": ["s"],
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface ScalingInstruction {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity: number;
  MaxCapacity: number;
  TargetTrackingConfigurations: TargetTrackingConfiguration[];
  PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification | null;
  CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification | null;
  ScheduledActionBufferTime?: number | null;
  PredictiveScalingMaxCapacityBehavior?: PredictiveScalingMaxCapacityBehavior | null;
  PredictiveScalingMaxCapacityBuffer?: number | null;
  PredictiveScalingMode?: PredictiveScalingMode | null;
  ScalingPolicyUpdateBehavior?: ScalingPolicyUpdateBehavior | null;
  DisableDynamicScaling?: boolean | null;
}
function fromScalingInstruction(input?: ScalingInstruction | null): JSONValue {
  if (!input) return input;
  return {...input,
    TargetTrackingConfigurations: input["TargetTrackingConfigurations"]?.map(x => fromTargetTrackingConfiguration(x)),
    PredefinedLoadMetricSpecification: fromPredefinedLoadMetricSpecification(input["PredefinedLoadMetricSpecification"]),
    CustomizedLoadMetricSpecification: fromCustomizedLoadMetricSpecification(input["CustomizedLoadMetricSpecification"]),
  }
}
function toScalingInstruction(root: JSONValue): ScalingInstruction {
  return prt.readObj({
    required: {
      "ServiceNamespace": toServiceNamespace,
      "ResourceId": "s",
      "ScalableDimension": toScalableDimension,
      "MinCapacity": "n",
      "MaxCapacity": "n",
      "TargetTrackingConfigurations": [toTargetTrackingConfiguration],
    },
    optional: {
      "PredefinedLoadMetricSpecification": toPredefinedLoadMetricSpecification,
      "CustomizedLoadMetricSpecification": toCustomizedLoadMetricSpecification,
      "ScheduledActionBufferTime": "n",
      "PredictiveScalingMaxCapacityBehavior": toPredictiveScalingMaxCapacityBehavior,
      "PredictiveScalingMaxCapacityBuffer": "n",
      "PredictiveScalingMode": toPredictiveScalingMode,
      "ScalingPolicyUpdateBehavior": toScalingPolicyUpdateBehavior,
      "DisableDynamicScaling": "b",
    },
  }, root);
}

// refs: 5 - tags: input, named, enum, output
export type ServiceNamespace =
| "autoscaling"
| "ecs"
| "ec2"
| "rds"
| "dynamodb"
;

function toServiceNamespace(root: JSONValue): ServiceNamespace | null {
  return ( false
    || root == "autoscaling"
    || root == "ecs"
    || root == "ec2"
    || root == "rds"
    || root == "dynamodb"
  ) ? root : null;
}

// refs: 5 - tags: input, named, enum, output
export type ScalableDimension =
| "autoscaling:autoScalingGroup:DesiredCapacity"
| "ecs:service:DesiredCount"
| "ec2:spot-fleet-request:TargetCapacity"
| "rds:cluster:ReadReplicaCount"
| "dynamodb:table:ReadCapacityUnits"
| "dynamodb:table:WriteCapacityUnits"
| "dynamodb:index:ReadCapacityUnits"
| "dynamodb:index:WriteCapacityUnits"
;

function toScalableDimension(root: JSONValue): ScalableDimension | null {
  return ( false
    || root == "autoscaling:autoScalingGroup:DesiredCapacity"
    || root == "ecs:service:DesiredCount"
    || root == "ec2:spot-fleet-request:TargetCapacity"
    || root == "rds:cluster:ReadReplicaCount"
    || root == "dynamodb:table:ReadCapacityUnits"
    || root == "dynamodb:table:WriteCapacityUnits"
    || root == "dynamodb:index:ReadCapacityUnits"
    || root == "dynamodb:index:WriteCapacityUnits"
  ) ? root : null;
}

// refs: 4 - tags: input, named, interface, output
export interface TargetTrackingConfiguration {
  PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification | null;
  CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification | null;
  TargetValue: number;
  DisableScaleIn?: boolean | null;
  ScaleOutCooldown?: number | null;
  ScaleInCooldown?: number | null;
  EstimatedInstanceWarmup?: number | null;
}
function fromTargetTrackingConfiguration(input?: TargetTrackingConfiguration | null): JSONValue {
  if (!input) return input;
  return {...input,
    PredefinedScalingMetricSpecification: fromPredefinedScalingMetricSpecification(input["PredefinedScalingMetricSpecification"]),
    CustomizedScalingMetricSpecification: fromCustomizedScalingMetricSpecification(input["CustomizedScalingMetricSpecification"]),
  }
}
function toTargetTrackingConfiguration(root: JSONValue): TargetTrackingConfiguration {
  return prt.readObj({
    required: {
      "TargetValue": "n",
    },
    optional: {
      "PredefinedScalingMetricSpecification": toPredefinedScalingMetricSpecification,
      "CustomizedScalingMetricSpecification": toCustomizedScalingMetricSpecification,
      "DisableScaleIn": "b",
      "ScaleOutCooldown": "n",
      "ScaleInCooldown": "n",
      "EstimatedInstanceWarmup": "n",
    },
  }, root);
}

// refs: 4 - tags: input, named, interface, output
export interface PredefinedScalingMetricSpecification {
  PredefinedScalingMetricType: ScalingMetricType;
  ResourceLabel?: string | null;
}
function fromPredefinedScalingMetricSpecification(input?: PredefinedScalingMetricSpecification | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toPredefinedScalingMetricSpecification(root: JSONValue): PredefinedScalingMetricSpecification {
  return prt.readObj({
    required: {
      "PredefinedScalingMetricType": toScalingMetricType,
    },
    optional: {
      "ResourceLabel": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type ScalingMetricType =
| "ASGAverageCPUUtilization"
| "ASGAverageNetworkIn"
| "ASGAverageNetworkOut"
| "DynamoDBReadCapacityUtilization"
| "DynamoDBWriteCapacityUtilization"
| "ECSServiceAverageCPUUtilization"
| "ECSServiceAverageMemoryUtilization"
| "ALBRequestCountPerTarget"
| "RDSReaderAverageCPUUtilization"
| "RDSReaderAverageDatabaseConnections"
| "EC2SpotFleetRequestAverageCPUUtilization"
| "EC2SpotFleetRequestAverageNetworkIn"
| "EC2SpotFleetRequestAverageNetworkOut"
;

function toScalingMetricType(root: JSONValue): ScalingMetricType | null {
  return ( false
    || root == "ASGAverageCPUUtilization"
    || root == "ASGAverageNetworkIn"
    || root == "ASGAverageNetworkOut"
    || root == "DynamoDBReadCapacityUtilization"
    || root == "DynamoDBWriteCapacityUtilization"
    || root == "ECSServiceAverageCPUUtilization"
    || root == "ECSServiceAverageMemoryUtilization"
    || root == "ALBRequestCountPerTarget"
    || root == "RDSReaderAverageCPUUtilization"
    || root == "RDSReaderAverageDatabaseConnections"
    || root == "EC2SpotFleetRequestAverageCPUUtilization"
    || root == "EC2SpotFleetRequestAverageNetworkIn"
    || root == "EC2SpotFleetRequestAverageNetworkOut"
  ) ? root : null;
}

// refs: 4 - tags: input, named, interface, output
export interface CustomizedScalingMetricSpecification {
  MetricName: string;
  Namespace: string;
  Dimensions?: MetricDimension[] | null;
  Statistic: MetricStatistic;
  Unit?: string | null;
}
function fromCustomizedScalingMetricSpecification(input?: CustomizedScalingMetricSpecification | null): JSONValue {
  if (!input) return input;
  return {...input,
    Dimensions: input["Dimensions"]?.map(x => fromMetricDimension(x)),
  }
}
function toCustomizedScalingMetricSpecification(root: JSONValue): CustomizedScalingMetricSpecification {
  return prt.readObj({
    required: {
      "MetricName": "s",
      "Namespace": "s",
      "Statistic": toMetricStatistic,
    },
    optional: {
      "Dimensions": [toMetricDimension],
      "Unit": "s",
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface MetricDimension {
  Name: string;
  Value: string;
}
function fromMetricDimension(input?: MetricDimension | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toMetricDimension(root: JSONValue): MetricDimension {
  return prt.readObj({
    required: {
      "Name": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 7 - tags: input, named, enum, output
export type MetricStatistic =
| "Average"
| "Minimum"
| "Maximum"
| "SampleCount"
| "Sum"
;

function toMetricStatistic(root: JSONValue): MetricStatistic | null {
  return ( false
    || root == "Average"
    || root == "Minimum"
    || root == "Maximum"
    || root == "SampleCount"
    || root == "Sum"
  ) ? root : null;
}

// refs: 3 - tags: input, named, interface, output
export interface PredefinedLoadMetricSpecification {
  PredefinedLoadMetricType: LoadMetricType;
  ResourceLabel?: string | null;
}
function fromPredefinedLoadMetricSpecification(input?: PredefinedLoadMetricSpecification | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toPredefinedLoadMetricSpecification(root: JSONValue): PredefinedLoadMetricSpecification {
  return prt.readObj({
    required: {
      "PredefinedLoadMetricType": toLoadMetricType,
    },
    optional: {
      "ResourceLabel": "s",
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type LoadMetricType =
| "ASGTotalCPUUtilization"
| "ASGTotalNetworkIn"
| "ASGTotalNetworkOut"
| "ALBTargetGroupRequestCount"
;

function toLoadMetricType(root: JSONValue): LoadMetricType | null {
  return ( false
    || root == "ASGTotalCPUUtilization"
    || root == "ASGTotalNetworkIn"
    || root == "ASGTotalNetworkOut"
    || root == "ALBTargetGroupRequestCount"
  ) ? root : null;
}

// refs: 3 - tags: input, named, interface, output
export interface CustomizedLoadMetricSpecification {
  MetricName: string;
  Namespace: string;
  Dimensions?: MetricDimension[] | null;
  Statistic: MetricStatistic;
  Unit?: string | null;
}
function fromCustomizedLoadMetricSpecification(input?: CustomizedLoadMetricSpecification | null): JSONValue {
  if (!input) return input;
  return {...input,
    Dimensions: input["Dimensions"]?.map(x => fromMetricDimension(x)),
  }
}
function toCustomizedLoadMetricSpecification(root: JSONValue): CustomizedLoadMetricSpecification {
  return prt.readObj({
    required: {
      "MetricName": "s",
      "Namespace": "s",
      "Statistic": toMetricStatistic,
    },
    optional: {
      "Dimensions": [toMetricDimension],
      "Unit": "s",
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type PredictiveScalingMaxCapacityBehavior =
| "SetForecastCapacityToMaxCapacity"
| "SetMaxCapacityToForecastCapacity"
| "SetMaxCapacityAboveForecastCapacity"
;

function toPredictiveScalingMaxCapacityBehavior(root: JSONValue): PredictiveScalingMaxCapacityBehavior | null {
  return ( false
    || root == "SetForecastCapacityToMaxCapacity"
    || root == "SetMaxCapacityToForecastCapacity"
    || root == "SetMaxCapacityAboveForecastCapacity"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type PredictiveScalingMode =
| "ForecastAndScale"
| "ForecastOnly"
;

function toPredictiveScalingMode(root: JSONValue): PredictiveScalingMode | null {
  return ( false
    || root == "ForecastAndScale"
    || root == "ForecastOnly"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type ScalingPolicyUpdateBehavior =
| "KeepExternalPolicies"
| "ReplaceExternalPolicies"
;

function toScalingPolicyUpdateBehavior(root: JSONValue): ScalingPolicyUpdateBehavior | null {
  return ( false
    || root == "KeepExternalPolicies"
    || root == "ReplaceExternalPolicies"
  ) ? root : null;
}

// refs: 1 - tags: input, named, enum
export type ForecastDataType =
| "CapacityForecast"
| "LoadForecast"
| "ScheduledActionMinCapacity"
| "ScheduledActionMaxCapacity"
;


// refs: 1 - tags: output, named, interface
export interface ScalingPlanResource {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  ScalingPolicies?: ScalingPolicy[] | null;
  ScalingStatusCode: ScalingStatusCode;
  ScalingStatusMessage?: string | null;
}
function toScalingPlanResource(root: JSONValue): ScalingPlanResource {
  return prt.readObj({
    required: {
      "ScalingPlanName": "s",
      "ScalingPlanVersion": "n",
      "ServiceNamespace": toServiceNamespace,
      "ResourceId": "s",
      "ScalableDimension": toScalableDimension,
      "ScalingStatusCode": toScalingStatusCode,
    },
    optional: {
      "ScalingPolicies": [toScalingPolicy],
      "ScalingStatusMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ScalingPolicy {
  PolicyName: string;
  PolicyType: PolicyType;
  TargetTrackingConfiguration?: TargetTrackingConfiguration | null;
}
function toScalingPolicy(root: JSONValue): ScalingPolicy {
  return prt.readObj({
    required: {
      "PolicyName": "s",
      "PolicyType": toPolicyType,
    },
    optional: {
      "TargetTrackingConfiguration": toTargetTrackingConfiguration,
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type PolicyType =
| "TargetTrackingScaling"
;
function toPolicyType(root: JSONValue): PolicyType | null {
  return ( false
    || root == "TargetTrackingScaling"
  ) ? root : null;
}

// refs: 1 - tags: output, named, enum
export type ScalingStatusCode =
| "Inactive"
| "PartiallyActive"
| "Active"
;
function toScalingStatusCode(root: JSONValue): ScalingStatusCode | null {
  return ( false
    || root == "Inactive"
    || root == "PartiallyActive"
    || root == "Active"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface ScalingPlan {
  ScalingPlanName: string;
  ScalingPlanVersion: number;
  ApplicationSource: ApplicationSource;
  ScalingInstructions: ScalingInstruction[];
  StatusCode: ScalingPlanStatusCode;
  StatusMessage?: string | null;
  StatusStartTime?: Date | number | null;
  CreationTime?: Date | number | null;
}
function toScalingPlan(root: JSONValue): ScalingPlan {
  return prt.readObj({
    required: {
      "ScalingPlanName": "s",
      "ScalingPlanVersion": "n",
      "ApplicationSource": toApplicationSource,
      "ScalingInstructions": [toScalingInstruction],
      "StatusCode": toScalingPlanStatusCode,
    },
    optional: {
      "StatusMessage": "s",
      "StatusStartTime": "d",
      "CreationTime": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ScalingPlanStatusCode =
| "Active"
| "ActiveWithProblems"
| "CreationInProgress"
| "CreationFailed"
| "DeletionInProgress"
| "DeletionFailed"
| "UpdateInProgress"
| "UpdateFailed"
;
function toScalingPlanStatusCode(root: JSONValue): ScalingPlanStatusCode | null {
  return ( false
    || root == "Active"
    || root == "ActiveWithProblems"
    || root == "CreationInProgress"
    || root == "CreationFailed"
    || root == "DeletionInProgress"
    || root == "DeletionFailed"
    || root == "UpdateInProgress"
    || root == "UpdateFailed"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface Datapoint {
  Timestamp?: Date | number | null;
  Value?: number | null;
}
function toDatapoint(root: JSONValue): Datapoint {
  return prt.readObj({
    required: {},
    optional: {
      "Timestamp": "d",
      "Value": "n",
    },
  }, root);
}
