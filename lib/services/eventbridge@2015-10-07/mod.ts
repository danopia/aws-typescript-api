// Autogenerated API client for: Amazon EventBridge

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class EventBridge {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(EventBridge.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2015-10-07",
    "endpointPrefix": "events",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon EventBridge",
    "serviceId": "EventBridge",
    "signatureVersion": "v4",
    "targetPrefix": "AWSEvents",
    "uid": "eventbridge-2015-10-07"
  };

  async activateEventSource(
    {abortSignal, ...params}: RequestConfig & ActivateEventSourceRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ActivateEventSource",
    });
  }

  async createEventBus(
    {abortSignal, ...params}: RequestConfig & CreateEventBusRequest,
  ): Promise<CreateEventBusResponse> {
    const body: JSONObject = {...params,
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateEventBus",
    });
    return prt.readObj({
      required: {},
      optional: {
        "EventBusArn": "s",
      },
    }, await resp.json());
  }

  async createPartnerEventSource(
    {abortSignal, ...params}: RequestConfig & CreatePartnerEventSourceRequest,
  ): Promise<CreatePartnerEventSourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreatePartnerEventSource",
    });
    return prt.readObj({
      required: {},
      optional: {
        "EventSourceArn": "s",
      },
    }, await resp.json());
  }

  async deactivateEventSource(
    {abortSignal, ...params}: RequestConfig & DeactivateEventSourceRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeactivateEventSource",
    });
  }

  async deleteEventBus(
    {abortSignal, ...params}: RequestConfig & DeleteEventBusRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteEventBus",
    });
  }

  async deletePartnerEventSource(
    {abortSignal, ...params}: RequestConfig & DeletePartnerEventSourceRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeletePartnerEventSource",
    });
  }

  async deleteRule(
    {abortSignal, ...params}: RequestConfig & DeleteRuleRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteRule",
    });
  }

  async describeEventBus(
    {abortSignal, ...params}: RequestConfig & DescribeEventBusRequest = {},
  ): Promise<DescribeEventBusResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEventBus",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Name": "s",
        "Arn": "s",
        "Policy": "s",
      },
    }, await resp.json());
  }

  async describeEventSource(
    {abortSignal, ...params}: RequestConfig & DescribeEventSourceRequest,
  ): Promise<DescribeEventSourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeEventSource",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "CreatedBy": "s",
        "CreationTime": "d",
        "ExpirationTime": "d",
        "Name": "s",
        "State": toEventSourceState,
      },
    }, await resp.json());
  }

  async describePartnerEventSource(
    {abortSignal, ...params}: RequestConfig & DescribePartnerEventSourceRequest,
  ): Promise<DescribePartnerEventSourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribePartnerEventSource",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "Name": "s",
      },
    }, await resp.json());
  }

  async describeRule(
    {abortSignal, ...params}: RequestConfig & DescribeRuleRequest,
  ): Promise<DescribeRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Name": "s",
        "Arn": "s",
        "EventPattern": "s",
        "ScheduleExpression": "s",
        "State": toRuleState,
        "Description": "s",
        "RoleArn": "s",
        "ManagedBy": "s",
        "EventBusName": "s",
      },
    }, await resp.json());
  }

  async disableRule(
    {abortSignal, ...params}: RequestConfig & DisableRuleRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisableRule",
    });
  }

  async enableRule(
    {abortSignal, ...params}: RequestConfig & EnableRuleRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "EnableRule",
    });
  }

  async listEventBuses(
    {abortSignal, ...params}: RequestConfig & ListEventBusesRequest = {},
  ): Promise<ListEventBusesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEventBuses",
    });
    return prt.readObj({
      required: {},
      optional: {
        "EventBuses": [toEventBus],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listEventSources(
    {abortSignal, ...params}: RequestConfig & ListEventSourcesRequest = {},
  ): Promise<ListEventSourcesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListEventSources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "EventSources": [toEventSource],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPartnerEventSourceAccounts(
    {abortSignal, ...params}: RequestConfig & ListPartnerEventSourceAccountsRequest,
  ): Promise<ListPartnerEventSourceAccountsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPartnerEventSourceAccounts",
    });
    return prt.readObj({
      required: {},
      optional: {
        "PartnerEventSourceAccounts": [toPartnerEventSourceAccount],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listPartnerEventSources(
    {abortSignal, ...params}: RequestConfig & ListPartnerEventSourcesRequest,
  ): Promise<ListPartnerEventSourcesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListPartnerEventSources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "PartnerEventSources": [toPartnerEventSource],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRuleNamesByTarget(
    {abortSignal, ...params}: RequestConfig & ListRuleNamesByTargetRequest,
  ): Promise<ListRuleNamesByTargetResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRuleNamesByTarget",
    });
    return prt.readObj({
      required: {},
      optional: {
        "RuleNames": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRules(
    {abortSignal, ...params}: RequestConfig & ListRulesRequest = {},
  ): Promise<ListRulesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRules",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Rules": [toRule],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async listTargetsByRule(
    {abortSignal, ...params}: RequestConfig & ListTargetsByRuleRequest,
  ): Promise<ListTargetsByRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTargetsByRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Targets": [toTarget],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putEvents(
    {abortSignal, ...params}: RequestConfig & PutEventsRequest,
  ): Promise<PutEventsResponse> {
    const body: JSONObject = {...params,
    Entries: params["Entries"]?.map(x => fromPutEventsRequestEntry(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutEvents",
    });
    return prt.readObj({
      required: {},
      optional: {
        "FailedEntryCount": "n",
        "Entries": [toPutEventsResultEntry],
      },
    }, await resp.json());
  }

  async putPartnerEvents(
    {abortSignal, ...params}: RequestConfig & PutPartnerEventsRequest,
  ): Promise<PutPartnerEventsResponse> {
    const body: JSONObject = {...params,
    Entries: params["Entries"]?.map(x => fromPutPartnerEventsRequestEntry(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutPartnerEvents",
    });
    return prt.readObj({
      required: {},
      optional: {
        "FailedEntryCount": "n",
        "Entries": [toPutPartnerEventsResultEntry],
      },
    }, await resp.json());
  }

  async putPermission(
    {abortSignal, ...params}: RequestConfig & PutPermissionRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
    Condition: fromCondition(params["Condition"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutPermission",
    });
  }

  async putRule(
    {abortSignal, ...params}: RequestConfig & PutRuleRequest,
  ): Promise<PutRuleResponse> {
    const body: JSONObject = {...params,
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "RuleArn": "s",
      },
    }, await resp.json());
  }

  async putTargets(
    {abortSignal, ...params}: RequestConfig & PutTargetsRequest,
  ): Promise<PutTargetsResponse> {
    const body: JSONObject = {...params,
    Targets: params["Targets"]?.map(x => fromTarget(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutTargets",
    });
    return prt.readObj({
      required: {},
      optional: {
        "FailedEntryCount": "n",
        "FailedEntries": [toPutTargetsResultEntry],
      },
    }, await resp.json());
  }

  async removePermission(
    {abortSignal, ...params}: RequestConfig & RemovePermissionRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemovePermission",
    });
  }

  async removeTargets(
    {abortSignal, ...params}: RequestConfig & RemoveTargetsRequest,
  ): Promise<RemoveTargetsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemoveTargets",
    });
    return prt.readObj({
      required: {},
      optional: {
        "FailedEntryCount": "n",
        "FailedEntries": [toRemoveTargetsResultEntry],
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: JSONObject = {...params,
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async testEventPattern(
    {abortSignal, ...params}: RequestConfig & TestEventPatternRequest,
  ): Promise<TestEventPatternResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TestEventPattern",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Result": "b",
      },
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface ActivateEventSourceRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface CreateEventBusRequest {
  Name: string;
  EventSourceName?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreatePartnerEventSourceRequest {
  Name: string;
  Account: string;
}

// refs: 1 - tags: named, input
export interface DeactivateEventSourceRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DeleteEventBusRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DeletePartnerEventSourceRequest {
  Name: string;
  Account: string;
}

// refs: 1 - tags: named, input
export interface DeleteRuleRequest {
  Name: string;
  EventBusName?: string | null;
  Force?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventBusRequest {
  Name?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeEventSourceRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DescribePartnerEventSourceRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DescribeRuleRequest {
  Name: string;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, input
export interface DisableRuleRequest {
  Name: string;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, input
export interface EnableRuleRequest {
  Name: string;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, input
export interface ListEventBusesRequest {
  NamePrefix?: string | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListEventSourcesRequest {
  NamePrefix?: string | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListPartnerEventSourceAccountsRequest {
  EventSourceName: string;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListPartnerEventSourcesRequest {
  NamePrefix: string;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRuleNamesByTargetRequest {
  TargetArn: string;
  EventBusName?: string | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListRulesRequest {
  NamePrefix?: string | null;
  EventBusName?: string | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}

// refs: 1 - tags: named, input
export interface ListTargetsByRuleRequest {
  Rule: string;
  EventBusName?: string | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface PutEventsRequest {
  Entries: PutEventsRequestEntry[];
}

// refs: 1 - tags: named, input
export interface PutPartnerEventsRequest {
  Entries: PutPartnerEventsRequestEntry[];
}

// refs: 1 - tags: named, input
export interface PutPermissionRequest {
  EventBusName?: string | null;
  Action: string;
  Principal: string;
  StatementId: string;
  Condition?: Condition | null;
}

// refs: 1 - tags: named, input
export interface PutRuleRequest {
  Name: string;
  ScheduleExpression?: string | null;
  EventPattern?: string | null;
  State?: RuleState | null;
  Description?: string | null;
  RoleArn?: string | null;
  Tags?: Tag[] | null;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, input
export interface PutTargetsRequest {
  Rule: string;
  EventBusName?: string | null;
  Targets: Target[];
}

// refs: 1 - tags: named, input
export interface RemovePermissionRequest {
  StatementId: string;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, input
export interface RemoveTargetsRequest {
  Rule: string;
  EventBusName?: string | null;
  Ids: string[];
  Force?: boolean | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface TestEventPatternRequest {
  EventPattern: string;
  Event: string;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, output
export interface CreateEventBusResponse {
  EventBusArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreatePartnerEventSourceResponse {
  EventSourceArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventBusResponse {
  Name?: string | null;
  Arn?: string | null;
  Policy?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEventSourceResponse {
  Arn?: string | null;
  CreatedBy?: string | null;
  CreationTime?: Date | number | null;
  ExpirationTime?: Date | number | null;
  Name?: string | null;
  State?: EventSourceState | null;
}

// refs: 1 - tags: named, output
export interface DescribePartnerEventSourceResponse {
  Arn?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeRuleResponse {
  Name?: string | null;
  Arn?: string | null;
  EventPattern?: string | null;
  ScheduleExpression?: string | null;
  State?: RuleState | null;
  Description?: string | null;
  RoleArn?: string | null;
  ManagedBy?: string | null;
  EventBusName?: string | null;
}

// refs: 1 - tags: named, output
export interface ListEventBusesResponse {
  EventBuses?: EventBus[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListEventSourcesResponse {
  EventSources?: EventSource[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListPartnerEventSourceAccountsResponse {
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListPartnerEventSourcesResponse {
  PartnerEventSources?: PartnerEventSource[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRuleNamesByTargetResponse {
  RuleNames?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListRulesResponse {
  Rules?: Rule[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface ListTargetsByRuleResponse {
  Targets?: Target[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutEventsResponse {
  FailedEntryCount?: number | null;
  Entries?: PutEventsResultEntry[] | null;
}

// refs: 1 - tags: named, output
export interface PutPartnerEventsResponse {
  FailedEntryCount?: number | null;
  Entries?: PutPartnerEventsResultEntry[] | null;
}

// refs: 1 - tags: named, output
export interface PutRuleResponse {
  RuleArn?: string | null;
}

// refs: 1 - tags: named, output
export interface PutTargetsResponse {
  FailedEntryCount?: number | null;
  FailedEntries?: PutTargetsResultEntry[] | null;
}

// refs: 1 - tags: named, output
export interface RemoveTargetsResponse {
  FailedEntryCount?: number | null;
  FailedEntries?: RemoveTargetsResultEntry[] | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface TestEventPatternResponse {
  Result?: boolean | null;
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}
function fromTag(input?: Tag | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toTag(root: JSONValue): Tag {
  return prt.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: input, named, interface
export interface PutEventsRequestEntry {
  Time?: Date | number | null;
  Source?: string | null;
  Resources?: string[] | null;
  DetailType?: string | null;
  Detail?: string | null;
  EventBusName?: string | null;
}
function fromPutEventsRequestEntry(input?: PutEventsRequestEntry | null): JSONValue {
  if (!input) return input;
  return {...input,
    Time: prt.serializeDate_unixTimestamp(input["Time"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface PutPartnerEventsRequestEntry {
  Time?: Date | number | null;
  Source?: string | null;
  Resources?: string[] | null;
  DetailType?: string | null;
  Detail?: string | null;
}
function fromPutPartnerEventsRequestEntry(input?: PutPartnerEventsRequestEntry | null): JSONValue {
  if (!input) return input;
  return {...input,
    Time: prt.serializeDate_unixTimestamp(input["Time"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface Condition {
  Type: string;
  Key: string;
  Value: string;
}
function fromCondition(input?: Condition | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 3 - tags: input, named, enum, output
export type RuleState =
| "ENABLED"
| "DISABLED"
;

function toRuleState(root: JSONValue): RuleState | null {
  return ( false
    || root == "ENABLED"
    || root == "DISABLED"
  ) ? root : null;
}

// refs: 2 - tags: input, named, interface, output
export interface Target {
  Id: string;
  Arn: string;
  RoleArn?: string | null;
  Input?: string | null;
  InputPath?: string | null;
  InputTransformer?: InputTransformer | null;
  KinesisParameters?: KinesisParameters | null;
  RunCommandParameters?: RunCommandParameters | null;
  EcsParameters?: EcsParameters | null;
  BatchParameters?: BatchParameters | null;
  SqsParameters?: SqsParameters | null;
  HttpParameters?: HttpParameters | null;
  RedshiftDataParameters?: RedshiftDataParameters | null;
}
function fromTarget(input?: Target | null): JSONValue {
  if (!input) return input;
  return {...input,
    InputTransformer: fromInputTransformer(input["InputTransformer"]),
    KinesisParameters: fromKinesisParameters(input["KinesisParameters"]),
    RunCommandParameters: fromRunCommandParameters(input["RunCommandParameters"]),
    EcsParameters: fromEcsParameters(input["EcsParameters"]),
    BatchParameters: fromBatchParameters(input["BatchParameters"]),
    SqsParameters: fromSqsParameters(input["SqsParameters"]),
    HttpParameters: fromHttpParameters(input["HttpParameters"]),
    RedshiftDataParameters: fromRedshiftDataParameters(input["RedshiftDataParameters"]),
  }
}
function toTarget(root: JSONValue): Target {
  return prt.readObj({
    required: {
      "Id": "s",
      "Arn": "s",
    },
    optional: {
      "RoleArn": "s",
      "Input": "s",
      "InputPath": "s",
      "InputTransformer": toInputTransformer,
      "KinesisParameters": toKinesisParameters,
      "RunCommandParameters": toRunCommandParameters,
      "EcsParameters": toEcsParameters,
      "BatchParameters": toBatchParameters,
      "SqsParameters": toSqsParameters,
      "HttpParameters": toHttpParameters,
      "RedshiftDataParameters": toRedshiftDataParameters,
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface InputTransformer {
  InputPathsMap?: { [key: string]: string } | null;
  InputTemplate: string;
}
function fromInputTransformer(input?: InputTransformer | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toInputTransformer(root: JSONValue): InputTransformer {
  return prt.readObj({
    required: {
      "InputTemplate": "s",
    },
    optional: {
      "InputPathsMap": x => prt.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface KinesisParameters {
  PartitionKeyPath: string;
}
function fromKinesisParameters(input?: KinesisParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toKinesisParameters(root: JSONValue): KinesisParameters {
  return prt.readObj({
    required: {
      "PartitionKeyPath": "s",
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface RunCommandParameters {
  RunCommandTargets: RunCommandTarget[];
}
function fromRunCommandParameters(input?: RunCommandParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
    RunCommandTargets: input["RunCommandTargets"]?.map(x => fromRunCommandTarget(x)),
  }
}
function toRunCommandParameters(root: JSONValue): RunCommandParameters {
  return prt.readObj({
    required: {
      "RunCommandTargets": [toRunCommandTarget],
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface RunCommandTarget {
  Key: string;
  Values: string[];
}
function fromRunCommandTarget(input?: RunCommandTarget | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toRunCommandTarget(root: JSONValue): RunCommandTarget {
  return prt.readObj({
    required: {
      "Key": "s",
      "Values": ["s"],
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface EcsParameters {
  TaskDefinitionArn: string;
  TaskCount?: number | null;
  LaunchType?: LaunchType | null;
  NetworkConfiguration?: NetworkConfiguration | null;
  PlatformVersion?: string | null;
  Group?: string | null;
}
function fromEcsParameters(input?: EcsParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
    NetworkConfiguration: fromNetworkConfiguration(input["NetworkConfiguration"]),
  }
}
function toEcsParameters(root: JSONValue): EcsParameters {
  return prt.readObj({
    required: {
      "TaskDefinitionArn": "s",
    },
    optional: {
      "TaskCount": "n",
      "LaunchType": toLaunchType,
      "NetworkConfiguration": toNetworkConfiguration,
      "PlatformVersion": "s",
      "Group": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type LaunchType =
| "EC2"
| "FARGATE"
;

function toLaunchType(root: JSONValue): LaunchType | null {
  return ( false
    || root == "EC2"
    || root == "FARGATE"
  ) ? root : null;
}

// refs: 2 - tags: input, named, interface, output
export interface NetworkConfiguration {
  awsvpcConfiguration?: AwsVpcConfiguration | null;
}
function fromNetworkConfiguration(input?: NetworkConfiguration | null): JSONValue {
  if (!input) return input;
  return {...input,
    awsvpcConfiguration: fromAwsVpcConfiguration(input["awsvpcConfiguration"]),
  }
}
function toNetworkConfiguration(root: JSONValue): NetworkConfiguration {
  return prt.readObj({
    required: {},
    optional: {
      "awsvpcConfiguration": toAwsVpcConfiguration,
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface AwsVpcConfiguration {
  Subnets: string[];
  SecurityGroups?: string[] | null;
  AssignPublicIp?: AssignPublicIp | null;
}
function fromAwsVpcConfiguration(input?: AwsVpcConfiguration | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toAwsVpcConfiguration(root: JSONValue): AwsVpcConfiguration {
  return prt.readObj({
    required: {
      "Subnets": ["s"],
    },
    optional: {
      "SecurityGroups": ["s"],
      "AssignPublicIp": toAssignPublicIp,
    },
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type AssignPublicIp =
| "ENABLED"
| "DISABLED"
;

function toAssignPublicIp(root: JSONValue): AssignPublicIp | null {
  return ( false
    || root == "ENABLED"
    || root == "DISABLED"
  ) ? root : null;
}

// refs: 2 - tags: input, named, interface, output
export interface BatchParameters {
  JobDefinition: string;
  JobName: string;
  ArrayProperties?: BatchArrayProperties | null;
  RetryStrategy?: BatchRetryStrategy | null;
}
function fromBatchParameters(input?: BatchParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
    ArrayProperties: fromBatchArrayProperties(input["ArrayProperties"]),
    RetryStrategy: fromBatchRetryStrategy(input["RetryStrategy"]),
  }
}
function toBatchParameters(root: JSONValue): BatchParameters {
  return prt.readObj({
    required: {
      "JobDefinition": "s",
      "JobName": "s",
    },
    optional: {
      "ArrayProperties": toBatchArrayProperties,
      "RetryStrategy": toBatchRetryStrategy,
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface BatchArrayProperties {
  Size?: number | null;
}
function fromBatchArrayProperties(input?: BatchArrayProperties | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toBatchArrayProperties(root: JSONValue): BatchArrayProperties {
  return prt.readObj({
    required: {},
    optional: {
      "Size": "n",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface BatchRetryStrategy {
  Attempts?: number | null;
}
function fromBatchRetryStrategy(input?: BatchRetryStrategy | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toBatchRetryStrategy(root: JSONValue): BatchRetryStrategy {
  return prt.readObj({
    required: {},
    optional: {
      "Attempts": "n",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface SqsParameters {
  MessageGroupId?: string | null;
}
function fromSqsParameters(input?: SqsParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toSqsParameters(root: JSONValue): SqsParameters {
  return prt.readObj({
    required: {},
    optional: {
      "MessageGroupId": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface HttpParameters {
  PathParameterValues?: string[] | null;
  HeaderParameters?: { [key: string]: string } | null;
  QueryStringParameters?: { [key: string]: string } | null;
}
function fromHttpParameters(input?: HttpParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toHttpParameters(root: JSONValue): HttpParameters {
  return prt.readObj({
    required: {},
    optional: {
      "PathParameterValues": ["s"],
      "HeaderParameters": x => prt.readMap(String, String, x),
      "QueryStringParameters": x => prt.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface RedshiftDataParameters {
  SecretManagerArn?: string | null;
  Database: string;
  DbUser?: string | null;
  Sql: string;
  StatementName?: string | null;
  WithEvent?: boolean | null;
}
function fromRedshiftDataParameters(input?: RedshiftDataParameters | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toRedshiftDataParameters(root: JSONValue): RedshiftDataParameters {
  return prt.readObj({
    required: {
      "Database": "s",
      "Sql": "s",
    },
    optional: {
      "SecretManagerArn": "s",
      "DbUser": "s",
      "StatementName": "s",
      "WithEvent": "b",
    },
  }, root);
}

// refs: 3 - tags: output, named, enum
export type EventSourceState =
| "PENDING"
| "ACTIVE"
| "DELETED"
;
function toEventSourceState(root: JSONValue): EventSourceState | null {
  return ( false
    || root == "PENDING"
    || root == "ACTIVE"
    || root == "DELETED"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface EventBus {
  Name?: string | null;
  Arn?: string | null;
  Policy?: string | null;
}
function toEventBus(root: JSONValue): EventBus {
  return prt.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Arn": "s",
      "Policy": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface EventSource {
  Arn?: string | null;
  CreatedBy?: string | null;
  CreationTime?: Date | number | null;
  ExpirationTime?: Date | number | null;
  Name?: string | null;
  State?: EventSourceState | null;
}
function toEventSource(root: JSONValue): EventSource {
  return prt.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "CreatedBy": "s",
      "CreationTime": "d",
      "ExpirationTime": "d",
      "Name": "s",
      "State": toEventSourceState,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface PartnerEventSourceAccount {
  Account?: string | null;
  CreationTime?: Date | number | null;
  ExpirationTime?: Date | number | null;
  State?: EventSourceState | null;
}
function toPartnerEventSourceAccount(root: JSONValue): PartnerEventSourceAccount {
  return prt.readObj({
    required: {},
    optional: {
      "Account": "s",
      "CreationTime": "d",
      "ExpirationTime": "d",
      "State": toEventSourceState,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface PartnerEventSource {
  Arn?: string | null;
  Name?: string | null;
}
function toPartnerEventSource(root: JSONValue): PartnerEventSource {
  return prt.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "Name": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Rule {
  Name?: string | null;
  Arn?: string | null;
  EventPattern?: string | null;
  State?: RuleState | null;
  Description?: string | null;
  ScheduleExpression?: string | null;
  RoleArn?: string | null;
  ManagedBy?: string | null;
  EventBusName?: string | null;
}
function toRule(root: JSONValue): Rule {
  return prt.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Arn": "s",
      "EventPattern": "s",
      "State": toRuleState,
      "Description": "s",
      "ScheduleExpression": "s",
      "RoleArn": "s",
      "ManagedBy": "s",
      "EventBusName": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface PutEventsResultEntry {
  EventId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toPutEventsResultEntry(root: JSONValue): PutEventsResultEntry {
  return prt.readObj({
    required: {},
    optional: {
      "EventId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface PutPartnerEventsResultEntry {
  EventId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toPutPartnerEventsResultEntry(root: JSONValue): PutPartnerEventsResultEntry {
  return prt.readObj({
    required: {},
    optional: {
      "EventId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface PutTargetsResultEntry {
  TargetId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toPutTargetsResultEntry(root: JSONValue): PutTargetsResultEntry {
  return prt.readObj({
    required: {},
    optional: {
      "TargetId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface RemoveTargetsResultEntry {
  TargetId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
function toRemoveTargetsResultEntry(root: JSONValue): RemoveTargetsResultEntry {
  return prt.readObj({
    required: {},
    optional: {
      "TargetId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}
