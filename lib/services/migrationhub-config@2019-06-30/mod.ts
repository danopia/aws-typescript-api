// Autogenerated API client for: AWS Migration Hub Config

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class MigrationHubConfig {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MigrationHubConfig.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-06-30",
    "endpointPrefix": "migrationhub-config",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Migration Hub Config",
    "serviceId": "MigrationHub Config",
    "signatureVersion": "v4",
    "signingName": "mgh",
    "targetPrefix": "AWSMigrationHubMultiAccountService",
    "uid": "migrationhub-config-2019-06-30"
  };

  async createHomeRegionControl(
    {abortSignal, ...params}: RequestConfig & CreateHomeRegionControlRequest,
  ): Promise<CreateHomeRegionControlResult> {
    const body: JSONObject = {...params,
    Target: fromTarget(params["Target"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHomeRegionControl",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HomeRegionControl": toHomeRegionControl,
      },
    }, await resp.json());
  }

  async describeHomeRegionControls(
    {abortSignal, ...params}: RequestConfig & DescribeHomeRegionControlsRequest = {},
  ): Promise<DescribeHomeRegionControlsResult> {
    const body: JSONObject = {...params,
    Target: fromTarget(params["Target"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeHomeRegionControls",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HomeRegionControls": [toHomeRegionControl],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getHomeRegion(
    {abortSignal, ...params}: RequestConfig & GetHomeRegionRequest = {},
  ): Promise<GetHomeRegionResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetHomeRegion",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HomeRegion": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateHomeRegionControlRequest {
  HomeRegion: string;
  Target: Target;
  DryRun?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeHomeRegionControlsRequest {
  ControlId?: string | null;
  HomeRegion?: string | null;
  Target?: Target | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetHomeRegionRequest {
}

// refs: 1 - tags: named, output
export interface CreateHomeRegionControlResult {
  HomeRegionControl?: HomeRegionControl | null;
}

// refs: 1 - tags: named, output
export interface DescribeHomeRegionControlsResult {
  HomeRegionControls?: HomeRegionControl[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetHomeRegionResult {
  HomeRegion?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Target {
  Type: TargetType;
  Id?: string | null;
}
function fromTarget(input?: Target | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toTarget(root: JSONValue): Target {
  return prt.readObj({
    required: {
      "Type": toTargetType,
    },
    optional: {
      "Id": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type TargetType =
| "ACCOUNT"
;

function toTargetType(root: JSONValue): TargetType | null {
  return ( false
    || root == "ACCOUNT"
  ) ? root : null;
}

// refs: 2 - tags: output, named, interface
export interface HomeRegionControl {
  ControlId?: string | null;
  HomeRegion?: string | null;
  Target?: Target | null;
  RequestedTime?: Date | number | null;
}
function toHomeRegionControl(root: JSONValue): HomeRegionControl {
  return prt.readObj({
    required: {},
    optional: {
      "ControlId": "s",
      "HomeRegion": "s",
      "Target": toTarget,
      "RequestedTime": "d",
    },
  }, root);
}
