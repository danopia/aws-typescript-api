// Autogenerated API client for: Amazon Import/Export Snowball

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class Snowball {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Snowball.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2016-06-30",
    "endpointPrefix": "snowball",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Amazon Snowball",
    "serviceFullName": "Amazon Import/Export Snowball",
    "serviceId": "Snowball",
    "signatureVersion": "v4",
    "targetPrefix": "AWSIESnowballJobManagementService",
    "uid": "snowball-2016-06-30"
  };

  async cancelCluster(
    {abortSignal, ...params}: RequestConfig & CancelClusterRequest,
  ): Promise<CancelClusterResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelCluster",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async cancelJob(
    {abortSignal, ...params}: RequestConfig & CancelJobRequest,
  ): Promise<CancelJobResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CancelJob",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createAddress(
    {abortSignal, ...params}: RequestConfig & CreateAddressRequest,
  ): Promise<CreateAddressResult> {
    const body: JSONObject = {...params,
    Address: fromAddress(params["Address"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAddress",
    });
    return prt.readObj({
      required: {},
      optional: {
        "AddressId": "s",
      },
    }, await resp.json());
  }

  async createCluster(
    {abortSignal, ...params}: RequestConfig & CreateClusterRequest,
  ): Promise<CreateClusterResult> {
    const body: JSONObject = {...params,
    Resources: fromJobResource(params["Resources"]),
    Notification: fromNotification(params["Notification"]),
    TaxDocuments: fromTaxDocuments(params["TaxDocuments"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCluster",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClusterId": "s",
      },
    }, await resp.json());
  }

  async createJob(
    {abortSignal, ...params}: RequestConfig & CreateJobRequest = {},
  ): Promise<CreateJobResult> {
    const body: JSONObject = {...params,
    Resources: fromJobResource(params["Resources"]),
    Notification: fromNotification(params["Notification"]),
    TaxDocuments: fromTaxDocuments(params["TaxDocuments"]),
    DeviceConfiguration: fromDeviceConfiguration(params["DeviceConfiguration"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateJob",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async describeAddress(
    {abortSignal, ...params}: RequestConfig & DescribeAddressRequest,
  ): Promise<DescribeAddressResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAddress",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Address": toAddress,
      },
    }, await resp.json());
  }

  async describeAddresses(
    {abortSignal, ...params}: RequestConfig & DescribeAddressesRequest = {},
  ): Promise<DescribeAddressesResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAddresses",
    });
    return prt.readObj({
      required: {},
      optional: {
        "Addresses": [toAddress],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeCluster(
    {abortSignal, ...params}: RequestConfig & DescribeClusterRequest,
  ): Promise<DescribeClusterResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeCluster",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClusterMetadata": toClusterMetadata,
      },
    }, await resp.json());
  }

  async describeJob(
    {abortSignal, ...params}: RequestConfig & DescribeJobRequest,
  ): Promise<DescribeJobResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeJob",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobMetadata": toJobMetadata,
        "SubJobMetadata": [toJobMetadata],
      },
    }, await resp.json());
  }

  async getJobManifest(
    {abortSignal, ...params}: RequestConfig & GetJobManifestRequest,
  ): Promise<GetJobManifestResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetJobManifest",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ManifestURI": "s",
      },
    }, await resp.json());
  }

  async getJobUnlockCode(
    {abortSignal, ...params}: RequestConfig & GetJobUnlockCodeRequest,
  ): Promise<GetJobUnlockCodeResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetJobUnlockCode",
    });
    return prt.readObj({
      required: {},
      optional: {
        "UnlockCode": "s",
      },
    }, await resp.json());
  }

  async getSnowballUsage(
    {abortSignal, ...params}: RequestConfig & GetSnowballUsageRequest = {},
  ): Promise<GetSnowballUsageResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetSnowballUsage",
    });
    return prt.readObj({
      required: {},
      optional: {
        "SnowballLimit": "n",
        "SnowballsInUse": "n",
      },
    }, await resp.json());
  }

  async getSoftwareUpdates(
    {abortSignal, ...params}: RequestConfig & GetSoftwareUpdatesRequest,
  ): Promise<GetSoftwareUpdatesResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetSoftwareUpdates",
    });
    return prt.readObj({
      required: {},
      optional: {
        "UpdatesURI": "s",
      },
    }, await resp.json());
  }

  async listClusterJobs(
    {abortSignal, ...params}: RequestConfig & ListClusterJobsRequest,
  ): Promise<ListClusterJobsResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListClusterJobs",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobListEntries": [toJobListEntry],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listClusters(
    {abortSignal, ...params}: RequestConfig & ListClustersRequest = {},
  ): Promise<ListClustersResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListClusters",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ClusterListEntries": [toClusterListEntry],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listCompatibleImages(
    {abortSignal, ...params}: RequestConfig & ListCompatibleImagesRequest = {},
  ): Promise<ListCompatibleImagesResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListCompatibleImages",
    });
    return prt.readObj({
      required: {},
      optional: {
        "CompatibleImages": [toCompatibleImage],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listJobs(
    {abortSignal, ...params}: RequestConfig & ListJobsRequest = {},
  ): Promise<ListJobsResult> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListJobs",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobListEntries": [toJobListEntry],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async updateCluster(
    {abortSignal, ...params}: RequestConfig & UpdateClusterRequest,
  ): Promise<UpdateClusterResult> {
    const body: JSONObject = {...params,
    Resources: fromJobResource(params["Resources"]),
    Notification: fromNotification(params["Notification"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateCluster",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateJob(
    {abortSignal, ...params}: RequestConfig & UpdateJobRequest,
  ): Promise<UpdateJobResult> {
    const body: JSONObject = {...params,
    Notification: fromNotification(params["Notification"]),
    Resources: fromJobResource(params["Resources"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateJob",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CancelClusterRequest {
  ClusterId: string;
}

// refs: 1 - tags: named, input
export interface CancelJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface CreateAddressRequest {
  Address: Address;
}

// refs: 1 - tags: named, input
export interface CreateClusterRequest {
  JobType: JobType;
  Resources: JobResource;
  Description?: string | null;
  AddressId: string;
  KmsKeyARN?: string | null;
  RoleARN: string;
  SnowballType?: SnowballType | null;
  ShippingOption: ShippingOption;
  Notification?: Notification | null;
  ForwardingAddressId?: string | null;
  TaxDocuments?: TaxDocuments | null;
}

// refs: 1 - tags: named, input
export interface CreateJobRequest {
  JobType?: JobType | null;
  Resources?: JobResource | null;
  Description?: string | null;
  AddressId?: string | null;
  KmsKeyARN?: string | null;
  RoleARN?: string | null;
  SnowballCapacityPreference?: SnowballCapacity | null;
  ShippingOption?: ShippingOption | null;
  Notification?: Notification | null;
  ClusterId?: string | null;
  SnowballType?: SnowballType | null;
  ForwardingAddressId?: string | null;
  TaxDocuments?: TaxDocuments | null;
  DeviceConfiguration?: DeviceConfiguration | null;
}

// refs: 1 - tags: named, input
export interface DescribeAddressRequest {
  AddressId: string;
}

// refs: 1 - tags: named, input
export interface DescribeAddressesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeClusterRequest {
  ClusterId: string;
}

// refs: 1 - tags: named, input
export interface DescribeJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface GetJobManifestRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface GetJobUnlockCodeRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface GetSnowballUsageRequest {
}

// refs: 1 - tags: named, input
export interface GetSoftwareUpdatesRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface ListClusterJobsRequest {
  ClusterId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListClustersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListCompatibleImagesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListJobsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateClusterRequest {
  ClusterId: string;
  RoleARN?: string | null;
  Description?: string | null;
  Resources?: JobResource | null;
  AddressId?: string | null;
  ShippingOption?: ShippingOption | null;
  Notification?: Notification | null;
  ForwardingAddressId?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateJobRequest {
  JobId: string;
  RoleARN?: string | null;
  Notification?: Notification | null;
  Resources?: JobResource | null;
  AddressId?: string | null;
  ShippingOption?: ShippingOption | null;
  Description?: string | null;
  SnowballCapacityPreference?: SnowballCapacity | null;
  ForwardingAddressId?: string | null;
}

// refs: 1 - tags: named, output
export interface CancelClusterResult {
}

// refs: 1 - tags: named, output
export interface CancelJobResult {
}

// refs: 1 - tags: named, output
export interface CreateAddressResult {
  AddressId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateClusterResult {
  ClusterId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateJobResult {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAddressResult {
  Address?: Address | null;
}

// refs: 1 - tags: named, output
export interface DescribeAddressesResult {
  Addresses?: Address[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeClusterResult {
  ClusterMetadata?: ClusterMetadata | null;
}

// refs: 1 - tags: named, output
export interface DescribeJobResult {
  JobMetadata?: JobMetadata | null;
  SubJobMetadata?: JobMetadata[] | null;
}

// refs: 1 - tags: named, output
export interface GetJobManifestResult {
  ManifestURI?: string | null;
}

// refs: 1 - tags: named, output
export interface GetJobUnlockCodeResult {
  UnlockCode?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSnowballUsageResult {
  SnowballLimit?: number | null;
  SnowballsInUse?: number | null;
}

// refs: 1 - tags: named, output
export interface GetSoftwareUpdatesResult {
  UpdatesURI?: string | null;
}

// refs: 1 - tags: named, output
export interface ListClusterJobsResult {
  JobListEntries?: JobListEntry[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListClustersResult {
  ClusterListEntries?: ClusterListEntry[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListCompatibleImagesResult {
  CompatibleImages?: CompatibleImage[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListJobsResult {
  JobListEntries?: JobListEntry[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateClusterResult {
}

// refs: 1 - tags: named, output
export interface UpdateJobResult {
}

// refs: 3 - tags: input, named, interface, output
export interface Address {
  AddressId?: string | null;
  Name?: string | null;
  Company?: string | null;
  Street1?: string | null;
  Street2?: string | null;
  Street3?: string | null;
  City?: string | null;
  StateOrProvince?: string | null;
  PrefectureOrDistrict?: string | null;
  Landmark?: string | null;
  Country?: string | null;
  PostalCode?: string | null;
  PhoneNumber?: string | null;
  IsRestricted?: boolean | null;
}
function fromAddress(input?: Address | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toAddress(root: JSONValue): Address {
  return prt.readObj({
    required: {},
    optional: {
      "AddressId": "s",
      "Name": "s",
      "Company": "s",
      "Street1": "s",
      "Street2": "s",
      "Street3": "s",
      "City": "s",
      "StateOrProvince": "s",
      "PrefectureOrDistrict": "s",
      "Landmark": "s",
      "Country": "s",
      "PostalCode": "s",
      "PhoneNumber": "s",
      "IsRestricted": "b",
    },
  }, root);
}

// refs: 7 - tags: input, named, enum, output
export type JobType =
| "IMPORT"
| "EXPORT"
| "LOCAL_USE"
;

function toJobType(root: JSONValue): JobType | null {
  return ( false
    || root == "IMPORT"
    || root == "EXPORT"
    || root == "LOCAL_USE"
  ) ? root : null;
}

// refs: 7 - tags: input, named, interface, output
export interface JobResource {
  S3Resources?: S3Resource[] | null;
  LambdaResources?: LambdaResource[] | null;
  Ec2AmiResources?: Ec2AmiResource[] | null;
}
function fromJobResource(input?: JobResource | null): JSONValue {
  if (!input) return input;
  return {...input,
    S3Resources: input["S3Resources"]?.map(x => fromS3Resource(x)),
    LambdaResources: input["LambdaResources"]?.map(x => fromLambdaResource(x)),
    Ec2AmiResources: input["Ec2AmiResources"]?.map(x => fromEc2AmiResource(x)),
  }
}
function toJobResource(root: JSONValue): JobResource {
  return prt.readObj({
    required: {},
    optional: {
      "S3Resources": [toS3Resource],
      "LambdaResources": [toLambdaResource],
      "Ec2AmiResources": [toEc2AmiResource],
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface S3Resource {
  BucketArn?: string | null;
  KeyRange?: KeyRange | null;
}
function fromS3Resource(input?: S3Resource | null): JSONValue {
  if (!input) return input;
  return {...input,
    KeyRange: fromKeyRange(input["KeyRange"]),
  }
}
function toS3Resource(root: JSONValue): S3Resource {
  return prt.readObj({
    required: {},
    optional: {
      "BucketArn": "s",
      "KeyRange": toKeyRange,
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface KeyRange {
  BeginMarker?: string | null;
  EndMarker?: string | null;
}
function fromKeyRange(input?: KeyRange | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toKeyRange(root: JSONValue): KeyRange {
  return prt.readObj({
    required: {},
    optional: {
      "BeginMarker": "s",
      "EndMarker": "s",
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface LambdaResource {
  LambdaArn?: string | null;
  EventTriggers?: EventTriggerDefinition[] | null;
}
function fromLambdaResource(input?: LambdaResource | null): JSONValue {
  if (!input) return input;
  return {...input,
    EventTriggers: input["EventTriggers"]?.map(x => fromEventTriggerDefinition(x)),
  }
}
function toLambdaResource(root: JSONValue): LambdaResource {
  return prt.readObj({
    required: {},
    optional: {
      "LambdaArn": "s",
      "EventTriggers": [toEventTriggerDefinition],
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface EventTriggerDefinition {
  EventResourceARN?: string | null;
}
function fromEventTriggerDefinition(input?: EventTriggerDefinition | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toEventTriggerDefinition(root: JSONValue): EventTriggerDefinition {
  return prt.readObj({
    required: {},
    optional: {
      "EventResourceARN": "s",
    },
  }, root);
}

// refs: 7 - tags: input, named, interface, output
export interface Ec2AmiResource {
  AmiId: string;
  SnowballAmiId?: string | null;
}
function fromEc2AmiResource(input?: Ec2AmiResource | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toEc2AmiResource(root: JSONValue): Ec2AmiResource {
  return prt.readObj({
    required: {
      "AmiId": "s",
    },
    optional: {
      "SnowballAmiId": "s",
    },
  }, root);
}

// refs: 7 - tags: input, named, enum, output
export type SnowballType =
| "STANDARD"
| "EDGE"
| "EDGE_C"
| "EDGE_CG"
| "EDGE_S"
| "SNC1_HDD"
;

function toSnowballType(root: JSONValue): SnowballType | null {
  return ( false
    || root == "STANDARD"
    || root == "EDGE"
    || root == "EDGE_C"
    || root == "EDGE_CG"
    || root == "EDGE_S"
    || root == "SNC1_HDD"
  ) ? root : null;
}

// refs: 7 - tags: input, named, enum, output
export type ShippingOption =
| "SECOND_DAY"
| "NEXT_DAY"
| "EXPRESS"
| "STANDARD"
;

function toShippingOption(root: JSONValue): ShippingOption | null {
  return ( false
    || root == "SECOND_DAY"
    || root == "NEXT_DAY"
    || root == "EXPRESS"
    || root == "STANDARD"
  ) ? root : null;
}

// refs: 7 - tags: input, named, interface, output
export interface Notification {
  SnsTopicARN?: string | null;
  JobStatesToNotify?: JobState[] | null;
  NotifyAll?: boolean | null;
}
function fromNotification(input?: Notification | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toNotification(root: JSONValue): Notification {
  return prt.readObj({
    required: {},
    optional: {
      "SnsTopicARN": "s",
      "JobStatesToNotify": [toJobState],
      "NotifyAll": "b",
    },
  }, root);
}

// refs: 11 - tags: input, named, enum, output
export type JobState =
| "New"
| "PreparingAppliance"
| "PreparingShipment"
| "InTransitToCustomer"
| "WithCustomer"
| "InTransitToAWS"
| "WithAWSSortingFacility"
| "WithAWS"
| "InProgress"
| "Complete"
| "Cancelled"
| "Listing"
| "Pending"
;

function toJobState(root: JSONValue): JobState | null {
  return ( false
    || root == "New"
    || root == "PreparingAppliance"
    || root == "PreparingShipment"
    || root == "InTransitToCustomer"
    || root == "WithCustomer"
    || root == "InTransitToAWS"
    || root == "WithAWSSortingFacility"
    || root == "WithAWS"
    || root == "InProgress"
    || root == "Complete"
    || root == "Cancelled"
    || root == "Listing"
    || root == "Pending"
  ) ? root : null;
}

// refs: 5 - tags: input, named, interface, output
export interface TaxDocuments {
  IND?: INDTaxDocuments | null;
}
function fromTaxDocuments(input?: TaxDocuments | null): JSONValue {
  if (!input) return input;
  return {...input,
    IND: fromINDTaxDocuments(input["IND"]),
  }
}
function toTaxDocuments(root: JSONValue): TaxDocuments {
  return prt.readObj({
    required: {},
    optional: {
      "IND": toINDTaxDocuments,
    },
  }, root);
}

// refs: 5 - tags: input, named, interface, output
export interface INDTaxDocuments {
  GSTIN?: string | null;
}
function fromINDTaxDocuments(input?: INDTaxDocuments | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toINDTaxDocuments(root: JSONValue): INDTaxDocuments {
  return prt.readObj({
    required: {},
    optional: {
      "GSTIN": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type SnowballCapacity =
| "T50"
| "T80"
| "T100"
| "T42"
| "T98"
| "T8"
| "NoPreference"
;

function toSnowballCapacity(root: JSONValue): SnowballCapacity | null {
  return ( false
    || root == "T50"
    || root == "T80"
    || root == "T100"
    || root == "T42"
    || root == "T98"
    || root == "T8"
    || root == "NoPreference"
  ) ? root : null;
}

// refs: 3 - tags: input, named, interface, output
export interface DeviceConfiguration {
  SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration | null;
}
function fromDeviceConfiguration(input?: DeviceConfiguration | null): JSONValue {
  if (!input) return input;
  return {...input,
    SnowconeDeviceConfiguration: fromSnowconeDeviceConfiguration(input["SnowconeDeviceConfiguration"]),
  }
}
function toDeviceConfiguration(root: JSONValue): DeviceConfiguration {
  return prt.readObj({
    required: {},
    optional: {
      "SnowconeDeviceConfiguration": toSnowconeDeviceConfiguration,
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface SnowconeDeviceConfiguration {
  WirelessConnection?: WirelessConnection | null;
}
function fromSnowconeDeviceConfiguration(input?: SnowconeDeviceConfiguration | null): JSONValue {
  if (!input) return input;
  return {...input,
    WirelessConnection: fromWirelessConnection(input["WirelessConnection"]),
  }
}
function toSnowconeDeviceConfiguration(root: JSONValue): SnowconeDeviceConfiguration {
  return prt.readObj({
    required: {},
    optional: {
      "WirelessConnection": toWirelessConnection,
    },
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface WirelessConnection {
  IsWifiEnabled?: boolean | null;
}
function fromWirelessConnection(input?: WirelessConnection | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toWirelessConnection(root: JSONValue): WirelessConnection {
  return prt.readObj({
    required: {},
    optional: {
      "IsWifiEnabled": "b",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ClusterMetadata {
  ClusterId?: string | null;
  Description?: string | null;
  KmsKeyARN?: string | null;
  RoleARN?: string | null;
  ClusterState?: ClusterState | null;
  JobType?: JobType | null;
  SnowballType?: SnowballType | null;
  CreationDate?: Date | number | null;
  Resources?: JobResource | null;
  AddressId?: string | null;
  ShippingOption?: ShippingOption | null;
  Notification?: Notification | null;
  ForwardingAddressId?: string | null;
  TaxDocuments?: TaxDocuments | null;
}
function toClusterMetadata(root: JSONValue): ClusterMetadata {
  return prt.readObj({
    required: {},
    optional: {
      "ClusterId": "s",
      "Description": "s",
      "KmsKeyARN": "s",
      "RoleARN": "s",
      "ClusterState": toClusterState,
      "JobType": toJobType,
      "SnowballType": toSnowballType,
      "CreationDate": "d",
      "Resources": toJobResource,
      "AddressId": "s",
      "ShippingOption": toShippingOption,
      "Notification": toNotification,
      "ForwardingAddressId": "s",
      "TaxDocuments": toTaxDocuments,
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ClusterState =
| "AwaitingQuorum"
| "Pending"
| "InUse"
| "Complete"
| "Cancelled"
;
function toClusterState(root: JSONValue): ClusterState | null {
  return ( false
    || root == "AwaitingQuorum"
    || root == "Pending"
    || root == "InUse"
    || root == "Complete"
    || root == "Cancelled"
  ) ? root : null;
}

// refs: 2 - tags: output, named, interface
export interface JobMetadata {
  JobId?: string | null;
  JobState?: JobState | null;
  JobType?: JobType | null;
  SnowballType?: SnowballType | null;
  CreationDate?: Date | number | null;
  Resources?: JobResource | null;
  Description?: string | null;
  KmsKeyARN?: string | null;
  RoleARN?: string | null;
  AddressId?: string | null;
  ShippingDetails?: ShippingDetails | null;
  SnowballCapacityPreference?: SnowballCapacity | null;
  Notification?: Notification | null;
  DataTransferProgress?: DataTransfer | null;
  JobLogInfo?: JobLogs | null;
  ClusterId?: string | null;
  ForwardingAddressId?: string | null;
  TaxDocuments?: TaxDocuments | null;
  DeviceConfiguration?: DeviceConfiguration | null;
}
function toJobMetadata(root: JSONValue): JobMetadata {
  return prt.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobState": toJobState,
      "JobType": toJobType,
      "SnowballType": toSnowballType,
      "CreationDate": "d",
      "Resources": toJobResource,
      "Description": "s",
      "KmsKeyARN": "s",
      "RoleARN": "s",
      "AddressId": "s",
      "ShippingDetails": toShippingDetails,
      "SnowballCapacityPreference": toSnowballCapacity,
      "Notification": toNotification,
      "DataTransferProgress": toDataTransfer,
      "JobLogInfo": toJobLogs,
      "ClusterId": "s",
      "ForwardingAddressId": "s",
      "TaxDocuments": toTaxDocuments,
      "DeviceConfiguration": toDeviceConfiguration,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface ShippingDetails {
  ShippingOption?: ShippingOption | null;
  InboundShipment?: Shipment | null;
  OutboundShipment?: Shipment | null;
}
function toShippingDetails(root: JSONValue): ShippingDetails {
  return prt.readObj({
    required: {},
    optional: {
      "ShippingOption": toShippingOption,
      "InboundShipment": toShipment,
      "OutboundShipment": toShipment,
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface Shipment {
  Status?: string | null;
  TrackingNumber?: string | null;
}
function toShipment(root: JSONValue): Shipment {
  return prt.readObj({
    required: {},
    optional: {
      "Status": "s",
      "TrackingNumber": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface DataTransfer {
  BytesTransferred?: number | null;
  ObjectsTransferred?: number | null;
  TotalBytes?: number | null;
  TotalObjects?: number | null;
}
function toDataTransfer(root: JSONValue): DataTransfer {
  return prt.readObj({
    required: {},
    optional: {
      "BytesTransferred": "n",
      "ObjectsTransferred": "n",
      "TotalBytes": "n",
      "TotalObjects": "n",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface JobLogs {
  JobCompletionReportURI?: string | null;
  JobSuccessLogURI?: string | null;
  JobFailureLogURI?: string | null;
}
function toJobLogs(root: JSONValue): JobLogs {
  return prt.readObj({
    required: {},
    optional: {
      "JobCompletionReportURI": "s",
      "JobSuccessLogURI": "s",
      "JobFailureLogURI": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface JobListEntry {
  JobId?: string | null;
  JobState?: JobState | null;
  IsMaster?: boolean | null;
  JobType?: JobType | null;
  SnowballType?: SnowballType | null;
  CreationDate?: Date | number | null;
  Description?: string | null;
}
function toJobListEntry(root: JSONValue): JobListEntry {
  return prt.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobState": toJobState,
      "IsMaster": "b",
      "JobType": toJobType,
      "SnowballType": toSnowballType,
      "CreationDate": "d",
      "Description": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ClusterListEntry {
  ClusterId?: string | null;
  ClusterState?: ClusterState | null;
  CreationDate?: Date | number | null;
  Description?: string | null;
}
function toClusterListEntry(root: JSONValue): ClusterListEntry {
  return prt.readObj({
    required: {},
    optional: {
      "ClusterId": "s",
      "ClusterState": toClusterState,
      "CreationDate": "d",
      "Description": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface CompatibleImage {
  AmiId?: string | null;
  Name?: string | null;
}
function toCompatibleImage(root: JSONValue): CompatibleImage {
  return prt.readObj({
    required: {},
    optional: {
      "AmiId": "s",
      "Name": "s",
    },
  }, root);
}
