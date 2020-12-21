// Autogenerated API client for: Amazon Data Lifecycle Manager

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class DLM {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(DLM.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-01-12",
    "endpointPrefix": "dlm",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Amazon DLM",
    "serviceFullName": "Amazon Data Lifecycle Manager",
    "serviceId": "DLM",
    "signatureVersion": "v4",
    "signingName": "dlm",
    "uid": "dlm-2018-01-12"
  };

  async createLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & CreateLifecyclePolicyRequest,
  ): Promise<CreateLifecyclePolicyResponse> {
    const body: jsonP.JSONObject = {
      ExecutionRoleArn: params["ExecutionRoleArn"],
      Description: params["Description"],
      State: params["State"],
      PolicyDetails: fromPolicyDetails(params["PolicyDetails"]),
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateLifecyclePolicy",
      requestUri: "/policies",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "PolicyId": "s",
      },
    }, await resp.json());
  }

  async deleteLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & DeleteLifecyclePolicyRequest,
  ): Promise<DeleteLifecyclePolicyResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteLifecyclePolicy",
      method: "DELETE",
      requestUri: cmnP.encodePath`/policies/${params["PolicyId"]}/`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getLifecyclePolicies(
    {abortSignal, ...params}: RequestConfig & GetLifecyclePoliciesRequest = {},
  ): Promise<GetLifecyclePoliciesResponse> {
    const query = new URLSearchParams;
    for (const item of params["PolicyIds"] ?? []) {
      query.append("policyIds", item?.toString() ?? "");
    }
    if (params["State"] != null) query.set("state", params["State"]?.toString() ?? "");
    for (const item of params["ResourceTypes"] ?? []) {
      query.append("resourceTypes", item?.toString() ?? "");
    }
    for (const item of params["TargetTags"] ?? []) {
      query.append("targetTags", item?.toString() ?? "");
    }
    for (const item of params["TagsToAdd"] ?? []) {
      query.append("tagsToAdd", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetLifecyclePolicies",
      method: "GET",
      requestUri: "/policies",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policies": [toLifecyclePolicySummary],
      },
    }, await resp.json());
  }

  async getLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & GetLifecyclePolicyRequest,
  ): Promise<GetLifecyclePolicyResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetLifecyclePolicy",
      method: "GET",
      requestUri: cmnP.encodePath`/policies/${params["PolicyId"]}/`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policy": toLifecyclePolicy,
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = {
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["TagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["ResourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateLifecyclePolicy(
    {abortSignal, ...params}: RequestConfig & UpdateLifecyclePolicyRequest,
  ): Promise<UpdateLifecyclePolicyResponse> {
    const body: jsonP.JSONObject = {
      ExecutionRoleArn: params["ExecutionRoleArn"],
      State: params["State"],
      Description: params["Description"],
      PolicyDetails: fromPolicyDetails(params["PolicyDetails"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateLifecyclePolicy",
      method: "PATCH",
      requestUri: cmnP.encodePath`/policies/${params["PolicyId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateLifecyclePolicyRequest {
  ExecutionRoleArn: string;
  Description: string;
  State: SettablePolicyStateValues;
  PolicyDetails: PolicyDetails;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteLifecyclePolicyRequest {
  PolicyId: string;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePoliciesRequest {
  PolicyIds?: string[] | null;
  State?: GettablePolicyStateValues | null;
  ResourceTypes?: ResourceTypeValues[] | null;
  TargetTags?: string[] | null;
  TagsToAdd?: string[] | null;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePolicyRequest {
  PolicyId: string;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateLifecyclePolicyRequest {
  PolicyId: string;
  ExecutionRoleArn?: string | null;
  State?: SettablePolicyStateValues | null;
  Description?: string | null;
  PolicyDetails?: PolicyDetails | null;
}

// refs: 1 - tags: named, output
export interface CreateLifecyclePolicyResponse {
  PolicyId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteLifecyclePolicyResponse {
}

// refs: 1 - tags: named, output
export interface GetLifecyclePoliciesResponse {
  Policies?: LifecyclePolicySummary[] | null;
}

// refs: 1 - tags: named, output
export interface GetLifecyclePolicyResponse {
  Policy?: LifecyclePolicy | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateLifecyclePolicyResponse {
}

// refs: 2 - tags: input, named, enum
export type SettablePolicyStateValues =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface PolicyDetails {
  PolicyType?: PolicyTypeValues | null;
  ResourceTypes?: ResourceTypeValues[] | null;
  TargetTags?: Tag[] | null;
  Schedules?: Schedule[] | null;
  Parameters?: Parameters | null;
  EventSource?: EventSource | null;
  Actions?: Action[] | null;
}
function fromPolicyDetails(input?: PolicyDetails | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PolicyType: input["PolicyType"],
    ResourceTypes: input["ResourceTypes"],
    TargetTags: input["TargetTags"]?.map(x => fromTag(x)),
    Schedules: input["Schedules"]?.map(x => fromSchedule(x)),
    Parameters: fromParameters(input["Parameters"]),
    EventSource: fromEventSource(input["EventSource"]),
    Actions: input["Actions"]?.map(x => fromAction(x)),
  }
}
function toPolicyDetails(root: jsonP.JSONValue): PolicyDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "PolicyType": (x: jsonP.JSONValue) => cmnP.readEnum<PolicyTypeValues>(x),
      "ResourceTypes": [(x: jsonP.JSONValue) => cmnP.readEnum<ResourceTypeValues>(x)],
      "TargetTags": [toTag],
      "Schedules": [toSchedule],
      "Parameters": toParameters,
      "EventSource": toEventSource,
      "Actions": [toAction],
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type PolicyTypeValues =
| "EBS_SNAPSHOT_MANAGEMENT"
| "IMAGE_MANAGEMENT"
| "EVENT_BASED_POLICY"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type ResourceTypeValues =
| "VOLUME"
| "INSTANCE"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}
function fromTag(input?: Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface Schedule {
  Name?: string | null;
  CopyTags?: boolean | null;
  TagsToAdd?: Tag[] | null;
  VariableTags?: Tag[] | null;
  CreateRule?: CreateRule | null;
  RetainRule?: RetainRule | null;
  FastRestoreRule?: FastRestoreRule | null;
  CrossRegionCopyRules?: CrossRegionCopyRule[] | null;
  ShareRules?: ShareRule[] | null;
}
function fromSchedule(input?: Schedule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    CopyTags: input["CopyTags"],
    TagsToAdd: input["TagsToAdd"]?.map(x => fromTag(x)),
    VariableTags: input["VariableTags"]?.map(x => fromTag(x)),
    CreateRule: fromCreateRule(input["CreateRule"]),
    RetainRule: fromRetainRule(input["RetainRule"]),
    FastRestoreRule: fromFastRestoreRule(input["FastRestoreRule"]),
    CrossRegionCopyRules: input["CrossRegionCopyRules"]?.map(x => fromCrossRegionCopyRule(x)),
    ShareRules: input["ShareRules"]?.map(x => fromShareRule(x)),
  }
}
function toSchedule(root: jsonP.JSONValue): Schedule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "CopyTags": "b",
      "TagsToAdd": [toTag],
      "VariableTags": [toTag],
      "CreateRule": toCreateRule,
      "RetainRule": toRetainRule,
      "FastRestoreRule": toFastRestoreRule,
      "CrossRegionCopyRules": [toCrossRegionCopyRule],
      "ShareRules": [toShareRule],
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface CreateRule {
  Interval?: number | null;
  IntervalUnit?: IntervalUnitValues | null;
  Times?: string[] | null;
  CronExpression?: string | null;
}
function fromCreateRule(input?: CreateRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Interval: input["Interval"],
    IntervalUnit: input["IntervalUnit"],
    Times: input["Times"],
    CronExpression: input["CronExpression"],
  }
}
function toCreateRule(root: jsonP.JSONValue): CreateRule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Interval": "n",
      "IntervalUnit": (x: jsonP.JSONValue) => cmnP.readEnum<IntervalUnitValues>(x),
      "Times": ["s"],
      "CronExpression": "s",
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type IntervalUnitValues =
| "HOURS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface RetainRule {
  Count?: number | null;
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
}
function fromRetainRule(input?: RetainRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Count: input["Count"],
    Interval: input["Interval"],
    IntervalUnit: input["IntervalUnit"],
  }
}
function toRetainRule(root: jsonP.JSONValue): RetainRule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Count": "n",
      "Interval": "n",
      "IntervalUnit": (x: jsonP.JSONValue) => cmnP.readEnum<RetentionIntervalUnitValues>(x),
    },
  }, root);
}

// refs: 15 - tags: input, named, enum, output
export type RetentionIntervalUnitValues =
| "DAYS"
| "WEEKS"
| "MONTHS"
| "YEARS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface FastRestoreRule {
  Count?: number | null;
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
  AvailabilityZones: string[];
}
function fromFastRestoreRule(input?: FastRestoreRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Count: input["Count"],
    Interval: input["Interval"],
    IntervalUnit: input["IntervalUnit"],
    AvailabilityZones: input["AvailabilityZones"],
  }
}
function toFastRestoreRule(root: jsonP.JSONValue): FastRestoreRule {
  return jsonP.readObj({
    required: {
      "AvailabilityZones": ["s"],
    },
    optional: {
      "Count": "n",
      "Interval": "n",
      "IntervalUnit": (x: jsonP.JSONValue) => cmnP.readEnum<RetentionIntervalUnitValues>(x),
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface CrossRegionCopyRule {
  TargetRegion: string;
  Encrypted: boolean;
  CmkArn?: string | null;
  CopyTags?: boolean | null;
  RetainRule?: CrossRegionCopyRetainRule | null;
}
function fromCrossRegionCopyRule(input?: CrossRegionCopyRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TargetRegion: input["TargetRegion"],
    Encrypted: input["Encrypted"],
    CmkArn: input["CmkArn"],
    CopyTags: input["CopyTags"],
    RetainRule: fromCrossRegionCopyRetainRule(input["RetainRule"]),
  }
}
function toCrossRegionCopyRule(root: jsonP.JSONValue): CrossRegionCopyRule {
  return jsonP.readObj({
    required: {
      "TargetRegion": "s",
      "Encrypted": "b",
    },
    optional: {
      "CmkArn": "s",
      "CopyTags": "b",
      "RetainRule": toCrossRegionCopyRetainRule,
    },
  }, root);
}

// refs: 6 - tags: input, named, interface, output
export interface CrossRegionCopyRetainRule {
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
}
function fromCrossRegionCopyRetainRule(input?: CrossRegionCopyRetainRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Interval: input["Interval"],
    IntervalUnit: input["IntervalUnit"],
  }
}
function toCrossRegionCopyRetainRule(root: jsonP.JSONValue): CrossRegionCopyRetainRule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Interval": "n",
      "IntervalUnit": (x: jsonP.JSONValue) => cmnP.readEnum<RetentionIntervalUnitValues>(x),
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface ShareRule {
  TargetAccounts: string[];
  UnshareInterval?: number | null;
  UnshareIntervalUnit?: RetentionIntervalUnitValues | null;
}
function fromShareRule(input?: ShareRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TargetAccounts: input["TargetAccounts"],
    UnshareInterval: input["UnshareInterval"],
    UnshareIntervalUnit: input["UnshareIntervalUnit"],
  }
}
function toShareRule(root: jsonP.JSONValue): ShareRule {
  return jsonP.readObj({
    required: {
      "TargetAccounts": ["s"],
    },
    optional: {
      "UnshareInterval": "n",
      "UnshareIntervalUnit": (x: jsonP.JSONValue) => cmnP.readEnum<RetentionIntervalUnitValues>(x),
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface Parameters {
  ExcludeBootVolume?: boolean | null;
  NoReboot?: boolean | null;
}
function fromParameters(input?: Parameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ExcludeBootVolume: input["ExcludeBootVolume"],
    NoReboot: input["NoReboot"],
  }
}
function toParameters(root: jsonP.JSONValue): Parameters {
  return jsonP.readObj({
    required: {},
    optional: {
      "ExcludeBootVolume": "b",
      "NoReboot": "b",
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface EventSource {
  Type: EventSourceValues;
  Parameters?: EventParameters | null;
}
function fromEventSource(input?: EventSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    Parameters: fromEventParameters(input["Parameters"]),
  }
}
function toEventSource(root: jsonP.JSONValue): EventSource {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<EventSourceValues>(x),
    },
    optional: {
      "Parameters": toEventParameters,
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type EventSourceValues =
| "MANAGED_CWE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface EventParameters {
  EventType: EventTypeValues;
  SnapshotOwner: string[];
  DescriptionRegex: string;
}
function fromEventParameters(input?: EventParameters | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    EventType: input["EventType"],
    SnapshotOwner: input["SnapshotOwner"],
    DescriptionRegex: input["DescriptionRegex"],
  }
}
function toEventParameters(root: jsonP.JSONValue): EventParameters {
  return jsonP.readObj({
    required: {
      "EventType": (x: jsonP.JSONValue) => cmnP.readEnum<EventTypeValues>(x),
      "SnapshotOwner": ["s"],
      "DescriptionRegex": "s",
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type EventTypeValues =
| "shareSnapshot"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface Action {
  Name: string;
  CrossRegionCopy: CrossRegionCopyAction[];
}
function fromAction(input?: Action | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    CrossRegionCopy: input["CrossRegionCopy"]?.map(x => fromCrossRegionCopyAction(x)),
  }
}
function toAction(root: jsonP.JSONValue): Action {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "CrossRegionCopy": [toCrossRegionCopyAction],
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface CrossRegionCopyAction {
  Target: string;
  EncryptionConfiguration: EncryptionConfiguration;
  RetainRule?: CrossRegionCopyRetainRule | null;
}
function fromCrossRegionCopyAction(input?: CrossRegionCopyAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Target: input["Target"],
    EncryptionConfiguration: fromEncryptionConfiguration(input["EncryptionConfiguration"]),
    RetainRule: fromCrossRegionCopyRetainRule(input["RetainRule"]),
  }
}
function toCrossRegionCopyAction(root: jsonP.JSONValue): CrossRegionCopyAction {
  return jsonP.readObj({
    required: {
      "Target": "s",
      "EncryptionConfiguration": toEncryptionConfiguration,
    },
    optional: {
      "RetainRule": toCrossRegionCopyRetainRule,
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface EncryptionConfiguration {
  Encrypted: boolean;
  CmkArn?: string | null;
}
function fromEncryptionConfiguration(input?: EncryptionConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Encrypted: input["Encrypted"],
    CmkArn: input["CmkArn"],
  }
}
function toEncryptionConfiguration(root: jsonP.JSONValue): EncryptionConfiguration {
  return jsonP.readObj({
    required: {
      "Encrypted": "b",
    },
    optional: {
      "CmkArn": "s",
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type GettablePolicyStateValues =
| "ENABLED"
| "DISABLED"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicySummary {
  PolicyId?: string | null;
  Description?: string | null;
  State?: GettablePolicyStateValues | null;
  Tags?: { [key: string]: string | null | undefined } | null;
  PolicyType?: PolicyTypeValues | null;
}
function toLifecyclePolicySummary(root: jsonP.JSONValue): LifecyclePolicySummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "PolicyId": "s",
      "Description": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<GettablePolicyStateValues>(x),
      "Tags": x => jsonP.readMap(String, String, x),
      "PolicyType": (x: jsonP.JSONValue) => cmnP.readEnum<PolicyTypeValues>(x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicy {
  PolicyId?: string | null;
  Description?: string | null;
  State?: GettablePolicyStateValues | null;
  StatusMessage?: string | null;
  ExecutionRoleArn?: string | null;
  DateCreated?: Date | number | null;
  DateModified?: Date | number | null;
  PolicyDetails?: PolicyDetails | null;
  Tags?: { [key: string]: string | null | undefined } | null;
  PolicyArn?: string | null;
}
function toLifecyclePolicy(root: jsonP.JSONValue): LifecyclePolicy {
  return jsonP.readObj({
    required: {},
    optional: {
      "PolicyId": "s",
      "Description": "s",
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<GettablePolicyStateValues>(x),
      "StatusMessage": "s",
      "ExecutionRoleArn": "s",
      "DateCreated": "d",
      "DateModified": "d",
      "PolicyDetails": toPolicyDetails,
      "Tags": x => jsonP.readMap(String, String, x),
      "PolicyArn": "s",
    },
  }, root);
}
