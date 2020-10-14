// Autogenerated API client for: Amazon Macie

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class Macie {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Macie.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-12-19",
    "endpointPrefix": "macie",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Macie",
    "serviceId": "Macie",
    "signatureVersion": "v4",
    "targetPrefix": "MacieService",
    "uid": "macie-2017-12-19"
  };

  async associateMemberAccount(
    {abortSignal, ...params}: RequestConfig & AssociateMemberAccountRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateMemberAccount",
    });
  }

  async associateS3Resources(
    {abortSignal, ...params}: RequestConfig & AssociateS3ResourcesRequest,
  ): Promise<AssociateS3ResourcesResult> {
    const body: JSONObject = {...params,
    s3Resources: params["s3Resources"]?.map(x => fromS3ResourceClassification(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateS3Resources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "failedS3Resources": [toFailedS3Resource],
      },
    }, await resp.json());
  }

  async disassociateMemberAccount(
    {abortSignal, ...params}: RequestConfig & DisassociateMemberAccountRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateMemberAccount",
    });
  }

  async disassociateS3Resources(
    {abortSignal, ...params}: RequestConfig & DisassociateS3ResourcesRequest,
  ): Promise<DisassociateS3ResourcesResult> {
    const body: JSONObject = {...params,
    associatedS3Resources: params["associatedS3Resources"]?.map(x => fromS3Resource(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateS3Resources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "failedS3Resources": [toFailedS3Resource],
      },
    }, await resp.json());
  }

  async listMemberAccounts(
    {abortSignal, ...params}: RequestConfig & ListMemberAccountsRequest = {},
  ): Promise<ListMemberAccountsResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListMemberAccounts",
    });
    return prt.readObj({
      required: {},
      optional: {
        "memberAccounts": [toMemberAccount],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listS3Resources(
    {abortSignal, ...params}: RequestConfig & ListS3ResourcesRequest = {},
  ): Promise<ListS3ResourcesResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListS3Resources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "s3Resources": [toS3ResourceClassification],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async updateS3Resources(
    {abortSignal, ...params}: RequestConfig & UpdateS3ResourcesRequest,
  ): Promise<UpdateS3ResourcesResult> {
    const body: JSONObject = {...params,
    s3ResourcesUpdate: params["s3ResourcesUpdate"]?.map(x => fromS3ResourceClassificationUpdate(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateS3Resources",
    });
    return prt.readObj({
      required: {},
      optional: {
        "failedS3Resources": [toFailedS3Resource],
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateMemberAccountRequest {
  memberAccountId: string;
}

// refs: 1 - tags: named, input
export interface AssociateS3ResourcesRequest {
  memberAccountId?: string | null;
  s3Resources: S3ResourceClassification[];
}

// refs: 1 - tags: named, input
export interface DisassociateMemberAccountRequest {
  memberAccountId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateS3ResourcesRequest {
  memberAccountId?: string | null;
  associatedS3Resources: S3Resource[];
}

// refs: 1 - tags: named, input
export interface ListMemberAccountsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListS3ResourcesRequest {
  memberAccountId?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface UpdateS3ResourcesRequest {
  memberAccountId?: string | null;
  s3ResourcesUpdate: S3ResourceClassificationUpdate[];
}

// refs: 1 - tags: named, output
export interface AssociateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 1 - tags: named, output
export interface DisassociateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 1 - tags: named, output
export interface ListMemberAccountsResult {
  memberAccounts?: MemberAccount[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListS3ResourcesResult {
  s3Resources?: S3ResourceClassification[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateS3ResourcesResult {
  failedS3Resources?: FailedS3Resource[] | null;
}

// refs: 2 - tags: input, named, interface, output
export interface S3ResourceClassification {
  bucketName: string;
  prefix?: string | null;
  classificationType: ClassificationType;
}
function fromS3ResourceClassification(input?: S3ResourceClassification | null): JSONValue {
  if (!input) return input;
  return {...input,
    classificationType: fromClassificationType(input["classificationType"]),
  }
}
function toS3ResourceClassification(root: JSONValue): S3ResourceClassification {
  return prt.readObj({
    required: {
      "bucketName": "s",
      "classificationType": toClassificationType,
    },
    optional: {
      "prefix": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface ClassificationType {
  oneTime: S3OneTimeClassificationType;
  continuous: S3ContinuousClassificationType;
}
function fromClassificationType(input?: ClassificationType | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toClassificationType(root: JSONValue): ClassificationType {
  return prt.readObj({
    required: {
      "oneTime": toS3OneTimeClassificationType,
      "continuous": toS3ContinuousClassificationType,
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type S3OneTimeClassificationType =
| "FULL"
| "NONE"
;

function toS3OneTimeClassificationType(root: JSONValue): S3OneTimeClassificationType | null {
  return ( false
    || root == "FULL"
    || root == "NONE"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type S3ContinuousClassificationType =
| "FULL"
;

function toS3ContinuousClassificationType(root: JSONValue): S3ContinuousClassificationType | null {
  return ( false
    || root == "FULL"
  ) ? root : null;
}

// refs: 4 - tags: input, named, interface, output
export interface S3Resource {
  bucketName: string;
  prefix?: string | null;
}
function fromS3Resource(input?: S3Resource | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toS3Resource(root: JSONValue): S3Resource {
  return prt.readObj({
    required: {
      "bucketName": "s",
    },
    optional: {
      "prefix": "s",
    },
  }, root);
}

// refs: 1 - tags: input, named, interface
export interface S3ResourceClassificationUpdate {
  bucketName: string;
  prefix?: string | null;
  classificationTypeUpdate: ClassificationTypeUpdate;
}
function fromS3ResourceClassificationUpdate(input?: S3ResourceClassificationUpdate | null): JSONValue {
  if (!input) return input;
  return {...input,
    classificationTypeUpdate: fromClassificationTypeUpdate(input["classificationTypeUpdate"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface ClassificationTypeUpdate {
  oneTime?: S3OneTimeClassificationType | null;
  continuous?: S3ContinuousClassificationType | null;
}
function fromClassificationTypeUpdate(input?: ClassificationTypeUpdate | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 3 - tags: output, named, interface
export interface FailedS3Resource {
  failedItem?: S3Resource | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}
function toFailedS3Resource(root: JSONValue): FailedS3Resource {
  return prt.readObj({
    required: {},
    optional: {
      "failedItem": toS3Resource,
      "errorCode": "s",
      "errorMessage": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface MemberAccount {
  accountId?: string | null;
}
function toMemberAccount(root: JSONValue): MemberAccount {
  return prt.readObj({
    required: {},
    optional: {
      "accountId": "s",
    },
  }, root);
}
