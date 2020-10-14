// Autogenerated API client for: Amazon CloudHSM

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class CloudHSM {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CloudHSM.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2014-05-30",
    "endpointPrefix": "cloudhsm",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "CloudHSM",
    "serviceFullName": "Amazon CloudHSM",
    "serviceId": "CloudHSM",
    "signatureVersion": "v4",
    "targetPrefix": "CloudHsmFrontendService",
    "uid": "cloudhsm-2014-05-30"
  };

  async addTagsToResource(
    {abortSignal, ...params}: RequestConfig & AddTagsToResourceRequest,
  ): Promise<AddTagsToResourceResponse> {
    const body: JSONObject = {...params,
    TagList: params["TagList"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddTagsToResource",
    });
    return prt.readObj({
      required: {
        "Status": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async createHapg(
    {abortSignal, ...params}: RequestConfig & CreateHapgRequest,
  ): Promise<CreateHapgResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHapg",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HapgArn": "s",
      },
    }, await resp.json());
  }

  async createHsm(
    {abortSignal, ...params}: RequestConfig & CreateHsmRequest,
  ): Promise<CreateHsmResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHsm",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HsmArn": "s",
      },
    }, await resp.json());
  }

  async createLunaClient(
    {abortSignal, ...params}: RequestConfig & CreateLunaClientRequest,
  ): Promise<CreateLunaClientResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateLunaClient",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClientArn": "s",
      },
    }, await resp.json());
  }

  async deleteHapg(
    {abortSignal, ...params}: RequestConfig & DeleteHapgRequest,
  ): Promise<DeleteHapgResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteHapg",
    });
    return prt.readObj({
      required: {
        "Status": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteHsm(
    {abortSignal, ...params}: RequestConfig & DeleteHsmRequest,
  ): Promise<DeleteHsmResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteHsm",
    });
    return prt.readObj({
      required: {
        "Status": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteLunaClient(
    {abortSignal, ...params}: RequestConfig & DeleteLunaClientRequest,
  ): Promise<DeleteLunaClientResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteLunaClient",
    });
    return prt.readObj({
      required: {
        "Status": "s",
      },
      optional: {},
    }, await resp.json());
  }

  async describeHapg(
    {abortSignal, ...params}: RequestConfig & DescribeHapgRequest,
  ): Promise<DescribeHapgResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeHapg",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HapgArn": "s",
        "HapgSerial": "s",
        "HsmsLastActionFailed": ["s"],
        "HsmsPendingDeletion": ["s"],
        "HsmsPendingRegistration": ["s"],
        "Label": "s",
        "LastModifiedTimestamp": "s",
        "PartitionSerialList": ["s"],
        "State": toCloudHsmObjectState,
      },
    }, await resp.json());
  }

  async describeHsm(
    {abortSignal, ...params}: RequestConfig & DescribeHsmRequest = {},
  ): Promise<DescribeHsmResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeHsm",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HsmArn": "s",
        "Status": toHsmStatus,
        "StatusDetails": "s",
        "AvailabilityZone": "s",
        "EniId": "s",
        "EniIp": "s",
        "SubscriptionType": toSubscriptionType,
        "SubscriptionStartDate": "s",
        "SubscriptionEndDate": "s",
        "VpcId": "s",
        "SubnetId": "s",
        "IamRoleArn": "s",
        "SerialNumber": "s",
        "VendorName": "s",
        "HsmType": "s",
        "SoftwareVersion": "s",
        "SshPublicKey": "s",
        "SshKeyLastUpdated": "s",
        "ServerCertUri": "s",
        "ServerCertLastUpdated": "s",
        "Partitions": ["s"],
      },
    }, await resp.json());
  }

  async describeLunaClient(
    {abortSignal, ...params}: RequestConfig & DescribeLunaClientRequest = {},
  ): Promise<DescribeLunaClientResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeLunaClient",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClientArn": "s",
        "Certificate": "s",
        "CertificateFingerprint": "s",
        "LastModifiedTimestamp": "s",
        "Label": "s",
      },
    }, await resp.json());
  }

  async getConfig(
    {abortSignal, ...params}: RequestConfig & GetConfigRequest,
  ): Promise<GetConfigResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetConfig",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ConfigType": "s",
        "ConfigFile": "s",
        "ConfigCred": "s",
      },
    }, await resp.json());
  }

  async listAvailableZones(
    {abortSignal, ...params}: RequestConfig & ListAvailableZonesRequest = {},
  ): Promise<ListAvailableZonesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListAvailableZones",
    });
    return prt.readObj({
      required: {},
      optional: {
        "AZList": ["s"],
      },
    }, await resp.json());
  }

  async listHapgs(
    {abortSignal, ...params}: RequestConfig & ListHapgsRequest = {},
  ): Promise<ListHapgsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHapgs",
    });
    return prt.readObj({
      required: {
        "HapgList": ["s"],
      },
      optional: {
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listHsms(
    {abortSignal, ...params}: RequestConfig & ListHsmsRequest = {},
  ): Promise<ListHsmsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHsms",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HsmList": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listLunaClients(
    {abortSignal, ...params}: RequestConfig & ListLunaClientsRequest = {},
  ): Promise<ListLunaClientsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListLunaClients",
    });
    return prt.readObj({
      required: {
        "ClientList": ["s"],
      },
      optional: {
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
      required: {
        "TagList": [toTag],
      },
      optional: {},
    }, await resp.json());
  }

  async modifyHapg(
    {abortSignal, ...params}: RequestConfig & ModifyHapgRequest,
  ): Promise<ModifyHapgResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ModifyHapg",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HapgArn": "s",
      },
    }, await resp.json());
  }

  async modifyHsm(
    {abortSignal, ...params}: RequestConfig & ModifyHsmRequest,
  ): Promise<ModifyHsmResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ModifyHsm",
    });
    return prt.readObj({
      required: {},
      optional: {
        "HsmArn": "s",
      },
    }, await resp.json());
  }

  async modifyLunaClient(
    {abortSignal, ...params}: RequestConfig & ModifyLunaClientRequest,
  ): Promise<ModifyLunaClientResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ModifyLunaClient",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClientArn": "s",
      },
    }, await resp.json());
  }

  async removeTagsFromResource(
    {abortSignal, ...params}: RequestConfig & RemoveTagsFromResourceRequest,
  ): Promise<RemoveTagsFromResourceResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemoveTagsFromResource",
    });
    return prt.readObj({
      required: {
        "Status": "s",
      },
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AddTagsToResourceRequest {
  ResourceArn: string;
  TagList: Tag[];
}

// refs: 1 - tags: named, input
export interface CreateHapgRequest {
  Label: string;
}

// refs: 1 - tags: named, input
export interface CreateHsmRequest {
  SubnetId: string;
  SshKey: string;
  EniIp?: string | null;
  IamRoleArn: string;
  ExternalId?: string | null;
  SubscriptionType: SubscriptionType;
  ClientToken?: string | null;
  SyslogIp?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateLunaClientRequest {
  Label?: string | null;
  Certificate: string;
}

// refs: 1 - tags: named, input
export interface DeleteHapgRequest {
  HapgArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteHsmRequest {
  HsmArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteLunaClientRequest {
  ClientArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeHapgRequest {
  HapgArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeHsmRequest {
  HsmArn?: string | null;
  HsmSerialNumber?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeLunaClientRequest {
  ClientArn?: string | null;
  CertificateFingerprint?: string | null;
}

// refs: 1 - tags: named, input
export interface GetConfigRequest {
  ClientArn: string;
  ClientVersion: ClientVersion;
  HapgList: string[];
}

// refs: 1 - tags: named, input
export interface ListAvailableZonesRequest {
}

// refs: 1 - tags: named, input
export interface ListHapgsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListHsmsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListLunaClientsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface ModifyHapgRequest {
  HapgArn: string;
  Label?: string | null;
  PartitionSerialList?: string[] | null;
}

// refs: 1 - tags: named, input
export interface ModifyHsmRequest {
  HsmArn: string;
  SubnetId?: string | null;
  EniIp?: string | null;
  IamRoleArn?: string | null;
  ExternalId?: string | null;
  SyslogIp?: string | null;
}

// refs: 1 - tags: named, input
export interface ModifyLunaClientRequest {
  ClientArn: string;
  Certificate: string;
}

// refs: 1 - tags: named, input
export interface RemoveTagsFromResourceRequest {
  ResourceArn: string;
  TagKeyList: string[];
}

// refs: 1 - tags: named, output
export interface AddTagsToResourceResponse {
  Status: string;
}

// refs: 1 - tags: named, output
export interface CreateHapgResponse {
  HapgArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateHsmResponse {
  HsmArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateLunaClientResponse {
  ClientArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteHapgResponse {
  Status: string;
}

// refs: 1 - tags: named, output
export interface DeleteHsmResponse {
  Status: string;
}

// refs: 1 - tags: named, output
export interface DeleteLunaClientResponse {
  Status: string;
}

// refs: 1 - tags: named, output
export interface DescribeHapgResponse {
  HapgArn?: string | null;
  HapgSerial?: string | null;
  HsmsLastActionFailed?: string[] | null;
  HsmsPendingDeletion?: string[] | null;
  HsmsPendingRegistration?: string[] | null;
  Label?: string | null;
  LastModifiedTimestamp?: string | null;
  PartitionSerialList?: string[] | null;
  State?: CloudHsmObjectState | null;
}

// refs: 1 - tags: named, output
export interface DescribeHsmResponse {
  HsmArn?: string | null;
  Status?: HsmStatus | null;
  StatusDetails?: string | null;
  AvailabilityZone?: string | null;
  EniId?: string | null;
  EniIp?: string | null;
  SubscriptionType?: SubscriptionType | null;
  SubscriptionStartDate?: string | null;
  SubscriptionEndDate?: string | null;
  VpcId?: string | null;
  SubnetId?: string | null;
  IamRoleArn?: string | null;
  SerialNumber?: string | null;
  VendorName?: string | null;
  HsmType?: string | null;
  SoftwareVersion?: string | null;
  SshPublicKey?: string | null;
  SshKeyLastUpdated?: string | null;
  ServerCertUri?: string | null;
  ServerCertLastUpdated?: string | null;
  Partitions?: string[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeLunaClientResponse {
  ClientArn?: string | null;
  Certificate?: string | null;
  CertificateFingerprint?: string | null;
  LastModifiedTimestamp?: string | null;
  Label?: string | null;
}

// refs: 1 - tags: named, output
export interface GetConfigResponse {
  ConfigType?: string | null;
  ConfigFile?: string | null;
  ConfigCred?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAvailableZonesResponse {
  AZList?: string[] | null;
}

// refs: 1 - tags: named, output
export interface ListHapgsResponse {
  HapgList: string[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListHsmsResponse {
  HsmList?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListLunaClientsResponse {
  ClientList: string[];
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  TagList: Tag[];
}

// refs: 1 - tags: named, output
export interface ModifyHapgResponse {
  HapgArn?: string | null;
}

// refs: 1 - tags: named, output
export interface ModifyHsmResponse {
  HsmArn?: string | null;
}

// refs: 1 - tags: named, output
export interface ModifyLunaClientResponse {
  ClientArn?: string | null;
}

// refs: 1 - tags: named, output
export interface RemoveTagsFromResourceResponse {
  Status: string;
}

// refs: 2 - tags: input, named, interface, output
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

// refs: 2 - tags: input, named, enum, output
export type SubscriptionType =
| "PRODUCTION"
;

function toSubscriptionType(root: JSONValue): SubscriptionType | null {
  return ( false
    || root == "PRODUCTION"
  ) ? root : null;
}

// refs: 1 - tags: input, named, enum
export type ClientVersion =
| "5.1"
| "5.3"
;


// refs: 1 - tags: output, named, enum
export type CloudHsmObjectState =
| "READY"
| "UPDATING"
| "DEGRADED"
;
function toCloudHsmObjectState(root: JSONValue): CloudHsmObjectState | null {
  return ( false
    || root == "READY"
    || root == "UPDATING"
    || root == "DEGRADED"
  ) ? root : null;
}

// refs: 1 - tags: output, named, enum
export type HsmStatus =
| "PENDING"
| "RUNNING"
| "UPDATING"
| "SUSPENDED"
| "TERMINATING"
| "TERMINATED"
| "DEGRADED"
;
function toHsmStatus(root: JSONValue): HsmStatus | null {
  return ( false
    || root == "PENDING"
    || root == "RUNNING"
    || root == "UPDATING"
    || root == "SUSPENDED"
    || root == "TERMINATING"
    || root == "TERMINATED"
    || root == "DEGRADED"
  ) ? root : null;
}
