// Autogenerated API client for: AWS Marketplace Entitlement Service

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class MarketplaceEntitlementService {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MarketplaceEntitlementService.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-01-11",
    "endpointPrefix": "entitlement.marketplace",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Marketplace Entitlement Service",
    "serviceId": "Marketplace Entitlement Service",
    "signatureVersion": "v4",
    "signingName": "aws-marketplace",
    "targetPrefix": "AWSMPEntitlementService",
    "uid": "entitlement.marketplace-2017-01-11"
  };

  async getEntitlements(
    {abortSignal, ...params}: RequestConfig & GetEntitlementsRequest,
  ): Promise<GetEntitlementsResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetEntitlements",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Entitlements": [toEntitlement],
        "NextToken": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface GetEntitlementsRequest {
  ProductCode: string;
  Filter?: { [key in GetEntitlementFilterName]: string[] } | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, output
export interface GetEntitlementsResult {
  Entitlements?: Entitlement[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: input, named, enum
export type GetEntitlementFilterName =
| "CUSTOMER_IDENTIFIER"
| "DIMENSION"
;


// refs: 1 - tags: output, named, interface
export interface Entitlement {
  ProductCode?: string | null;
  Dimension?: string | null;
  CustomerIdentifier?: string | null;
  Value?: EntitlementValue | null;
  ExpirationDate?: Date | number | null;
}
function toEntitlement(root: JSONValue): Entitlement {
  return prt.readObj({
    required: {},
    optional: {
      "ProductCode": "s",
      "Dimension": "s",
      "CustomerIdentifier": "s",
      "Value": toEntitlementValue,
      "ExpirationDate": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface EntitlementValue {
  IntegerValue?: number | null;
  DoubleValue?: number | null;
  BooleanValue?: boolean | null;
  StringValue?: string | null;
}
function toEntitlementValue(root: JSONValue): EntitlementValue {
  return prt.readObj({
    required: {},
    optional: {
      "IntegerValue": "n",
      "DoubleValue": "n",
      "BooleanValue": "b",
      "StringValue": "s",
    },
  }, root);
}
