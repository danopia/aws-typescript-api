// Autogenerated API client for: Amazon Route 53 Resolver

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

import * as uuidv4 from "https://deno.land/std@0.71.0/uuid/v4.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class Route53Resolver {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Route53Resolver.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-04-01",
    "endpointPrefix": "route53resolver",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Route53Resolver",
    "serviceFullName": "Amazon Route 53 Resolver",
    "serviceId": "Route53Resolver",
    "signatureVersion": "v4",
    "targetPrefix": "Route53Resolver",
    "uid": "route53resolver-2018-04-01"
  };

  async associateResolverEndpointIpAddress(
    {abortSignal, ...params}: RequestConfig & AssociateResolverEndpointIpAddressRequest,
  ): Promise<AssociateResolverEndpointIpAddressResponse> {
    const body: JSONObject = {...params,
    IpAddress: fromIpAddressUpdate(params["IpAddress"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverEndpointIpAddress",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async associateResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & AssociateResolverQueryLogConfigRequest,
  ): Promise<AssociateResolverQueryLogConfigResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverQueryLogConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async associateResolverRule(
    {abortSignal, ...params}: RequestConfig & AssociateResolverRuleRequest,
  ): Promise<AssociateResolverRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async createResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & CreateResolverEndpointRequest,
  ): Promise<CreateResolverEndpointResponse> {
    const body: JSONObject = {...params,
    IpAddresses: params["IpAddresses"]?.map(x => fromIpAddressRequest(x)),
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverEndpoint",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async createResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & CreateResolverQueryLogConfigRequest,
  ): Promise<CreateResolverQueryLogConfigResponse> {
    const body: JSONObject = {...params,
    CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverQueryLogConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async createResolverRule(
    {abortSignal, ...params}: RequestConfig & CreateResolverRuleRequest,
  ): Promise<CreateResolverRuleResponse> {
    const body: JSONObject = {...params,
    TargetIps: params["TargetIps"]?.map(x => fromTargetAddress(x)),
    Tags: params["Tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async deleteResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & DeleteResolverEndpointRequest,
  ): Promise<DeleteResolverEndpointResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverEndpoint",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async deleteResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & DeleteResolverQueryLogConfigRequest,
  ): Promise<DeleteResolverQueryLogConfigResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverQueryLogConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async deleteResolverRule(
    {abortSignal, ...params}: RequestConfig & DeleteResolverRuleRequest,
  ): Promise<DeleteResolverRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async disassociateResolverEndpointIpAddress(
    {abortSignal, ...params}: RequestConfig & DisassociateResolverEndpointIpAddressRequest,
  ): Promise<DisassociateResolverEndpointIpAddressResponse> {
    const body: JSONObject = {...params,
    IpAddress: fromIpAddressUpdate(params["IpAddress"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverEndpointIpAddress",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async disassociateResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & DisassociateResolverQueryLogConfigRequest,
  ): Promise<DisassociateResolverQueryLogConfigResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverQueryLogConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async disassociateResolverRule(
    {abortSignal, ...params}: RequestConfig & DisassociateResolverRuleRequest,
  ): Promise<DisassociateResolverRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async getResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & GetResolverEndpointRequest,
  ): Promise<GetResolverEndpointResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverEndpoint",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & GetResolverQueryLogConfigRequest,
  ): Promise<GetResolverQueryLogConfigResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfigAssociation(
    {abortSignal, ...params}: RequestConfig & GetResolverQueryLogConfigAssociationRequest,
  ): Promise<GetResolverQueryLogConfigAssociationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfigAssociation",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfigPolicy(
    {abortSignal, ...params}: RequestConfig & GetResolverQueryLogConfigPolicyRequest,
  ): Promise<GetResolverQueryLogConfigPolicyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfigPolicy",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigPolicy": "s",
      },
    }, await resp.json());
  }

  async getResolverRule(
    {abortSignal, ...params}: RequestConfig & GetResolverRuleRequest,
  ): Promise<GetResolverRuleResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async getResolverRuleAssociation(
    {abortSignal, ...params}: RequestConfig & GetResolverRuleAssociationRequest,
  ): Promise<GetResolverRuleAssociationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRuleAssociation",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async getResolverRulePolicy(
    {abortSignal, ...params}: RequestConfig & GetResolverRulePolicyRequest,
  ): Promise<GetResolverRulePolicyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRulePolicy",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRulePolicy": "s",
      },
    }, await resp.json());
  }

  async listResolverEndpointIpAddresses(
    {abortSignal, ...params}: RequestConfig & ListResolverEndpointIpAddressesRequest,
  ): Promise<ListResolverEndpointIpAddressesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverEndpointIpAddresses",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "IpAddresses": [toIpAddressResponse],
      },
    }, await resp.json());
  }

  async listResolverEndpoints(
    {abortSignal, ...params}: RequestConfig & ListResolverEndpointsRequest = {},
  ): Promise<ListResolverEndpointsResponse> {
    const body: JSONObject = {...params,
    Filters: params["Filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverEndpoints",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverEndpoints": [toResolverEndpoint],
      },
    }, await resp.json());
  }

  async listResolverQueryLogConfigAssociations(
    {abortSignal, ...params}: RequestConfig & ListResolverQueryLogConfigAssociationsRequest = {},
  ): Promise<ListResolverQueryLogConfigAssociationsResponse> {
    const body: JSONObject = {...params,
    Filters: params["Filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverQueryLogConfigAssociations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "TotalCount": "n",
        "TotalFilteredCount": "n",
        "ResolverQueryLogConfigAssociations": [toResolverQueryLogConfigAssociation],
      },
    }, await resp.json());
  }

  async listResolverQueryLogConfigs(
    {abortSignal, ...params}: RequestConfig & ListResolverQueryLogConfigsRequest = {},
  ): Promise<ListResolverQueryLogConfigsResponse> {
    const body: JSONObject = {...params,
    Filters: params["Filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverQueryLogConfigs",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "TotalCount": "n",
        "TotalFilteredCount": "n",
        "ResolverQueryLogConfigs": [toResolverQueryLogConfig],
      },
    }, await resp.json());
  }

  async listResolverRuleAssociations(
    {abortSignal, ...params}: RequestConfig & ListResolverRuleAssociationsRequest = {},
  ): Promise<ListResolverRuleAssociationsResponse> {
    const body: JSONObject = {...params,
    Filters: params["Filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverRuleAssociations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverRuleAssociations": [toResolverRuleAssociation],
      },
    }, await resp.json());
  }

  async listResolverRules(
    {abortSignal, ...params}: RequestConfig & ListResolverRulesRequest = {},
  ): Promise<ListResolverRulesResponse> {
    const body: JSONObject = {...params,
    Filters: params["Filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverRules",
    });
    return prt.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverRules": [toResolverRule],
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
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putResolverQueryLogConfigPolicy(
    {abortSignal, ...params}: RequestConfig & PutResolverQueryLogConfigPolicyRequest,
  ): Promise<PutResolverQueryLogConfigPolicyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutResolverQueryLogConfigPolicy",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ReturnValue": "b",
      },
    }, await resp.json());
  }

  async putResolverRulePolicy(
    {abortSignal, ...params}: RequestConfig & PutResolverRulePolicyRequest,
  ): Promise<PutResolverRulePolicyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutResolverRulePolicy",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ReturnValue": "b",
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

  async updateResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & UpdateResolverEndpointRequest,
  ): Promise<UpdateResolverEndpointResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResolverEndpoint",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async updateResolverRule(
    {abortSignal, ...params}: RequestConfig & UpdateResolverRuleRequest,
  ): Promise<UpdateResolverRuleResponse> {
    const body: JSONObject = {...params,
    Config: fromResolverRuleConfig(params["Config"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResolverRule",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}

// refs: 1 - tags: named, input
export interface AssociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface AssociateResolverRuleRequest {
  ResolverRuleId: string;
  Name?: string | null;
  VPCId: string;
}

// refs: 1 - tags: named, input
export interface CreateResolverEndpointRequest {
  CreatorRequestId: string;
  Name?: string | null;
  SecurityGroupIds: string[];
  Direction: ResolverEndpointDirection;
  IpAddresses: IpAddressRequest[];
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateResolverQueryLogConfigRequest {
  Name: string;
  DestinationArn: string;
  CreatorRequestId: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateResolverRuleRequest {
  CreatorRequestId: string;
  Name?: string | null;
  RuleType: RuleTypeOption;
  DomainName: string;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteResolverEndpointRequest {
  ResolverEndpointId: string;
}

// refs: 1 - tags: named, input
export interface DeleteResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}

// refs: 1 - tags: named, input
export interface DeleteResolverRuleRequest {
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverEndpointIpAddressRequest {
  ResolverEndpointId: string;
  IpAddress: IpAddressUpdate;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResolverRuleRequest {
  VPCId: string;
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverEndpointRequest {
  ResolverEndpointId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigRequest {
  ResolverQueryLogConfigId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigAssociationRequest {
  ResolverQueryLogConfigAssociationId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverQueryLogConfigPolicyRequest {
  Arn: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRuleRequest {
  ResolverRuleId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRuleAssociationRequest {
  ResolverRuleAssociationId: string;
}

// refs: 1 - tags: named, input
export interface GetResolverRulePolicyRequest {
  Arn: string;
}

// refs: 1 - tags: named, input
export interface ListResolverEndpointIpAddressesRequest {
  ResolverEndpointId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListResolverEndpointsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListResolverQueryLogConfigAssociationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
  SortBy?: string | null;
  SortOrder?: SortOrder | null;
}

// refs: 1 - tags: named, input
export interface ListResolverQueryLogConfigsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
  SortBy?: string | null;
  SortOrder?: SortOrder | null;
}

// refs: 1 - tags: named, input
export interface ListResolverRuleAssociationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListResolverRulesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  Filters?: Filter[] | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutResolverQueryLogConfigPolicyRequest {
  Arn: string;
  ResolverQueryLogConfigPolicy: string;
}

// refs: 1 - tags: named, input
export interface PutResolverRulePolicyRequest {
  Arn: string;
  ResolverRulePolicy: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateResolverEndpointRequest {
  ResolverEndpointId: string;
  Name?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateResolverRuleRequest {
  ResolverRuleId: string;
  Config: ResolverRuleConfig;
}

// refs: 1 - tags: named, output
export interface AssociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface AssociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface AssociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface DeleteResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverEndpointIpAddressResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverQueryLogConfigResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResolverRuleResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigResponse {
  ResolverQueryLogConfig?: ResolverQueryLogConfig | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigAssociationResponse {
  ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverQueryLogConfigPolicyResponse {
  ResolverQueryLogConfigPolicy?: string | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRuleAssociationResponse {
  ResolverRuleAssociation?: ResolverRuleAssociation | null;
}

// refs: 1 - tags: named, output
export interface GetResolverRulePolicyResponse {
  ResolverRulePolicy?: string | null;
}

// refs: 1 - tags: named, output
export interface ListResolverEndpointIpAddressesResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  IpAddresses?: IpAddressResponse[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverEndpointsResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverEndpoints?: ResolverEndpoint[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverQueryLogConfigAssociationsResponse {
  NextToken?: string | null;
  TotalCount?: number | null;
  TotalFilteredCount?: number | null;
  ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverQueryLogConfigsResponse {
  NextToken?: string | null;
  TotalCount?: number | null;
  TotalFilteredCount?: number | null;
  ResolverQueryLogConfigs?: ResolverQueryLogConfig[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverRuleAssociationsResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverRuleAssociations?: ResolverRuleAssociation[] | null;
}

// refs: 1 - tags: named, output
export interface ListResolverRulesResponse {
  NextToken?: string | null;
  MaxResults?: number | null;
  ResolverRules?: ResolverRule[] | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutResolverQueryLogConfigPolicyResponse {
  ReturnValue?: boolean | null;
}

// refs: 1 - tags: named, output
export interface PutResolverRulePolicyResponse {
  ReturnValue?: boolean | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateResolverEndpointResponse {
  ResolverEndpoint?: ResolverEndpoint | null;
}

// refs: 1 - tags: named, output
export interface UpdateResolverRuleResponse {
  ResolverRule?: ResolverRule | null;
}

// refs: 2 - tags: input, named, interface
export interface IpAddressUpdate {
  IpId?: string | null;
  SubnetId?: string | null;
  Ip?: string | null;
}
function fromIpAddressUpdate(input?: IpAddressUpdate | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 8 - tags: input, named, enum, output
export type ResolverEndpointDirection =
| "INBOUND"
| "OUTBOUND"
;

function toResolverEndpointDirection(root: JSONValue): ResolverEndpointDirection | null {
  return ( false
    || root == "INBOUND"
    || root == "OUTBOUND"
  ) ? root : null;
}

// refs: 1 - tags: input, named, interface
export interface IpAddressRequest {
  SubnetId: string;
  Ip?: string | null;
}
function fromIpAddressRequest(input?: IpAddressRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 5 - tags: input, named, interface, output
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

// refs: 6 - tags: input, named, enum, output
export type RuleTypeOption =
| "FORWARD"
| "SYSTEM"
| "RECURSIVE"
;

function toRuleTypeOption(root: JSONValue): RuleTypeOption | null {
  return ( false
    || root == "FORWARD"
    || root == "SYSTEM"
    || root == "RECURSIVE"
  ) ? root : null;
}

// refs: 7 - tags: input, named, interface, output
export interface TargetAddress {
  Ip: string;
  Port?: number | null;
}
function fromTargetAddress(input?: TargetAddress | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toTargetAddress(root: JSONValue): TargetAddress {
  return prt.readObj({
    required: {
      "Ip": "s",
    },
    optional: {
      "Port": "n",
    },
  }, root);
}

// refs: 5 - tags: input, named, interface
export interface Filter {
  Name?: string | null;
  Values?: string[] | null;
}
function fromFilter(input?: Filter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, enum
export type SortOrder =
| "ASCENDING"
| "DESCENDING"
;


// refs: 1 - tags: input, named, interface
export interface ResolverRuleConfig {
  Name?: string | null;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
}
function fromResolverRuleConfig(input?: ResolverRuleConfig | null): JSONValue {
  if (!input) return input;
  return {...input,
    TargetIps: input["TargetIps"]?.map(x => fromTargetAddress(x)),
  }
}

// refs: 7 - tags: output, named, interface
export interface ResolverEndpoint {
  Id?: string | null;
  CreatorRequestId?: string | null;
  Arn?: string | null;
  Name?: string | null;
  SecurityGroupIds?: string[] | null;
  Direction?: ResolverEndpointDirection | null;
  IpAddressCount?: number | null;
  HostVPCId?: string | null;
  Status?: ResolverEndpointStatus | null;
  StatusMessage?: string | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}
function toResolverEndpoint(root: JSONValue): ResolverEndpoint {
  return prt.readObj({
    required: {},
    optional: {
      "Id": "s",
      "CreatorRequestId": "s",
      "Arn": "s",
      "Name": "s",
      "SecurityGroupIds": ["s"],
      "Direction": toResolverEndpointDirection,
      "IpAddressCount": "n",
      "HostVPCId": "s",
      "Status": toResolverEndpointStatus,
      "StatusMessage": "s",
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}

// refs: 7 - tags: output, named, enum
export type ResolverEndpointStatus =
| "CREATING"
| "OPERATIONAL"
| "UPDATING"
| "AUTO_RECOVERING"
| "ACTION_NEEDED"
| "DELETING"
;
function toResolverEndpointStatus(root: JSONValue): ResolverEndpointStatus | null {
  return ( false
    || root == "CREATING"
    || root == "OPERATIONAL"
    || root == "UPDATING"
    || root == "AUTO_RECOVERING"
    || root == "ACTION_NEEDED"
    || root == "DELETING"
  ) ? root : null;
}

// refs: 4 - tags: output, named, interface
export interface ResolverQueryLogConfigAssociation {
  Id?: string | null;
  ResolverQueryLogConfigId?: string | null;
  ResourceId?: string | null;
  Status?: ResolverQueryLogConfigAssociationStatus | null;
  Error?: ResolverQueryLogConfigAssociationError | null;
  ErrorMessage?: string | null;
  CreationTime?: string | null;
}
function toResolverQueryLogConfigAssociation(root: JSONValue): ResolverQueryLogConfigAssociation {
  return prt.readObj({
    required: {},
    optional: {
      "Id": "s",
      "ResolverQueryLogConfigId": "s",
      "ResourceId": "s",
      "Status": toResolverQueryLogConfigAssociationStatus,
      "Error": toResolverQueryLogConfigAssociationError,
      "ErrorMessage": "s",
      "CreationTime": "s",
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigAssociationStatus =
| "CREATING"
| "ACTIVE"
| "ACTION_NEEDED"
| "DELETING"
| "FAILED"
;
function toResolverQueryLogConfigAssociationStatus(root: JSONValue): ResolverQueryLogConfigAssociationStatus | null {
  return ( false
    || root == "CREATING"
    || root == "ACTIVE"
    || root == "ACTION_NEEDED"
    || root == "DELETING"
    || root == "FAILED"
  ) ? root : null;
}

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigAssociationError =
| "NONE"
| "DESTINATION_NOT_FOUND"
| "ACCESS_DENIED"
| "INTERNAL_SERVICE_ERROR"
;
function toResolverQueryLogConfigAssociationError(root: JSONValue): ResolverQueryLogConfigAssociationError | null {
  return ( false
    || root == "NONE"
    || root == "DESTINATION_NOT_FOUND"
    || root == "ACCESS_DENIED"
    || root == "INTERNAL_SERVICE_ERROR"
  ) ? root : null;
}

// refs: 4 - tags: output, named, interface
export interface ResolverRuleAssociation {
  Id?: string | null;
  ResolverRuleId?: string | null;
  Name?: string | null;
  VPCId?: string | null;
  Status?: ResolverRuleAssociationStatus | null;
  StatusMessage?: string | null;
}
function toResolverRuleAssociation(root: JSONValue): ResolverRuleAssociation {
  return prt.readObj({
    required: {},
    optional: {
      "Id": "s",
      "ResolverRuleId": "s",
      "Name": "s",
      "VPCId": "s",
      "Status": toResolverRuleAssociationStatus,
      "StatusMessage": "s",
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type ResolverRuleAssociationStatus =
| "CREATING"
| "COMPLETE"
| "DELETING"
| "FAILED"
| "OVERRIDDEN"
;
function toResolverRuleAssociationStatus(root: JSONValue): ResolverRuleAssociationStatus | null {
  return ( false
    || root == "CREATING"
    || root == "COMPLETE"
    || root == "DELETING"
    || root == "FAILED"
    || root == "OVERRIDDEN"
  ) ? root : null;
}

// refs: 4 - tags: output, named, interface
export interface ResolverQueryLogConfig {
  Id?: string | null;
  OwnerId?: string | null;
  Status?: ResolverQueryLogConfigStatus | null;
  ShareStatus?: ShareStatus | null;
  AssociationCount?: number | null;
  Arn?: string | null;
  Name?: string | null;
  DestinationArn?: string | null;
  CreatorRequestId?: string | null;
  CreationTime?: string | null;
}
function toResolverQueryLogConfig(root: JSONValue): ResolverQueryLogConfig {
  return prt.readObj({
    required: {},
    optional: {
      "Id": "s",
      "OwnerId": "s",
      "Status": toResolverQueryLogConfigStatus,
      "ShareStatus": toShareStatus,
      "AssociationCount": "n",
      "Arn": "s",
      "Name": "s",
      "DestinationArn": "s",
      "CreatorRequestId": "s",
      "CreationTime": "s",
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type ResolverQueryLogConfigStatus =
| "CREATING"
| "CREATED"
| "DELETING"
| "FAILED"
;
function toResolverQueryLogConfigStatus(root: JSONValue): ResolverQueryLogConfigStatus | null {
  return ( false
    || root == "CREATING"
    || root == "CREATED"
    || root == "DELETING"
    || root == "FAILED"
  ) ? root : null;
}

// refs: 9 - tags: output, named, enum
export type ShareStatus =
| "NOT_SHARED"
| "SHARED_WITH_ME"
| "SHARED_BY_ME"
;
function toShareStatus(root: JSONValue): ShareStatus | null {
  return ( false
    || root == "NOT_SHARED"
    || root == "SHARED_WITH_ME"
    || root == "SHARED_BY_ME"
  ) ? root : null;
}

// refs: 5 - tags: output, named, interface
export interface ResolverRule {
  Id?: string | null;
  CreatorRequestId?: string | null;
  Arn?: string | null;
  DomainName?: string | null;
  Status?: ResolverRuleStatus | null;
  StatusMessage?: string | null;
  RuleType?: RuleTypeOption | null;
  Name?: string | null;
  TargetIps?: TargetAddress[] | null;
  ResolverEndpointId?: string | null;
  OwnerId?: string | null;
  ShareStatus?: ShareStatus | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}
function toResolverRule(root: JSONValue): ResolverRule {
  return prt.readObj({
    required: {},
    optional: {
      "Id": "s",
      "CreatorRequestId": "s",
      "Arn": "s",
      "DomainName": "s",
      "Status": toResolverRuleStatus,
      "StatusMessage": "s",
      "RuleType": toRuleTypeOption,
      "Name": "s",
      "TargetIps": [toTargetAddress],
      "ResolverEndpointId": "s",
      "OwnerId": "s",
      "ShareStatus": toShareStatus,
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}

// refs: 5 - tags: output, named, enum
export type ResolverRuleStatus =
| "COMPLETE"
| "DELETING"
| "UPDATING"
| "FAILED"
;
function toResolverRuleStatus(root: JSONValue): ResolverRuleStatus | null {
  return ( false
    || root == "COMPLETE"
    || root == "DELETING"
    || root == "UPDATING"
    || root == "FAILED"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface IpAddressResponse {
  IpId?: string | null;
  SubnetId?: string | null;
  Ip?: string | null;
  Status?: IpAddressStatus | null;
  StatusMessage?: string | null;
  CreationTime?: string | null;
  ModificationTime?: string | null;
}
function toIpAddressResponse(root: JSONValue): IpAddressResponse {
  return prt.readObj({
    required: {},
    optional: {
      "IpId": "s",
      "SubnetId": "s",
      "Ip": "s",
      "Status": toIpAddressStatus,
      "StatusMessage": "s",
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type IpAddressStatus =
| "CREATING"
| "FAILED_CREATION"
| "ATTACHING"
| "ATTACHED"
| "REMAP_DETACHING"
| "REMAP_ATTACHING"
| "DETACHING"
| "FAILED_RESOURCE_GONE"
| "DELETING"
| "DELETE_FAILED_FAS_EXPIRED"
;
function toIpAddressStatus(root: JSONValue): IpAddressStatus | null {
  return ( false
    || root == "CREATING"
    || root == "FAILED_CREATION"
    || root == "ATTACHING"
    || root == "ATTACHED"
    || root == "REMAP_DETACHING"
    || root == "REMAP_ATTACHING"
    || root == "DETACHING"
    || root == "FAILED_RESOURCE_GONE"
    || root == "DELETING"
    || root == "DELETE_FAILED_FAS_EXPIRED"
  ) ? root : null;
}
