// Autogenerated API client for: AWS Application Discovery Service

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

export default class Discovery {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Discovery.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2015-11-01",
    "endpointPrefix": "discovery",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Application Discovery Service",
    "serviceId": "Application Discovery Service",
    "signatureVersion": "v4",
    "targetPrefix": "AWSPoseidonService_V2015_11_01",
    "uid": "discovery-2015-11-01"
  };

  async associateConfigurationItemsToApplication(
    {abortSignal, ...params}: RequestConfig & AssociateConfigurationItemsToApplicationRequest,
  ): Promise<AssociateConfigurationItemsToApplicationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateConfigurationItemsToApplication",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async batchDeleteImportData(
    {abortSignal, ...params}: RequestConfig & BatchDeleteImportDataRequest,
  ): Promise<BatchDeleteImportDataResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "BatchDeleteImportData",
    });
    return prt.readObj({
      required: {},
      optional: {
        "errors": [toBatchDeleteImportDataError],
      },
    }, await resp.json());
  }

  async createApplication(
    {abortSignal, ...params}: RequestConfig & CreateApplicationRequest,
  ): Promise<CreateApplicationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateApplication",
    });
    return prt.readObj({
      required: {},
      optional: {
        "configurationId": "s",
      },
    }, await resp.json());
  }

  async createTags(
    {abortSignal, ...params}: RequestConfig & CreateTagsRequest,
  ): Promise<CreateTagsResponse> {
    const body: JSONObject = {...params,
    tags: params["tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateTags",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteApplications(
    {abortSignal, ...params}: RequestConfig & DeleteApplicationsRequest,
  ): Promise<DeleteApplicationsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteApplications",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteTags(
    {abortSignal, ...params}: RequestConfig & DeleteTagsRequest,
  ): Promise<DeleteTagsResponse> {
    const body: JSONObject = {...params,
    tags: params["tags"]?.map(x => fromTag(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteTags",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeAgents(
    {abortSignal, ...params}: RequestConfig & DescribeAgentsRequest = {},
  ): Promise<DescribeAgentsResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeAgents",
    });
    return prt.readObj({
      required: {},
      optional: {
        "agentsInfo": [toAgentInfo],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeConfigurations(
    {abortSignal, ...params}: RequestConfig & DescribeConfigurationsRequest,
  ): Promise<DescribeConfigurationsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeConfigurations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "configurations": [x => prt.readMap(String, String, x)],
      },
    }, await resp.json());
  }

  async describeContinuousExports(
    {abortSignal, ...params}: RequestConfig & DescribeContinuousExportsRequest = {},
  ): Promise<DescribeContinuousExportsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeContinuousExports",
    });
    return prt.readObj({
      required: {},
      optional: {
        "descriptions": [toContinuousExportDescription],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeExportConfigurations(
    {abortSignal, ...params}: RequestConfig & DescribeExportConfigurationsRequest = {},
  ): Promise<DescribeExportConfigurationsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeExportConfigurations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "exportsInfo": [toExportInfo],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeExportTasks(
    {abortSignal, ...params}: RequestConfig & DescribeExportTasksRequest = {},
  ): Promise<DescribeExportTasksResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromExportFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeExportTasks",
    });
    return prt.readObj({
      required: {},
      optional: {
        "exportsInfo": [toExportInfo],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async describeImportTasks(
    {abortSignal, ...params}: RequestConfig & DescribeImportTasksRequest = {},
  ): Promise<DescribeImportTasksResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromImportTaskFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeImportTasks",
    });
    return prt.readObj({
      required: {},
      optional: {
        "nextToken": "s",
        "tasks": [toImportTask],
      },
    }, await resp.json());
  }

  async describeTags(
    {abortSignal, ...params}: RequestConfig & DescribeTagsRequest = {},
  ): Promise<DescribeTagsResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromTagFilter(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeTags",
    });
    return prt.readObj({
      required: {},
      optional: {
        "tags": [toConfigurationTag],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async disassociateConfigurationItemsFromApplication(
    {abortSignal, ...params}: RequestConfig & DisassociateConfigurationItemsFromApplicationRequest,
  ): Promise<DisassociateConfigurationItemsFromApplicationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateConfigurationItemsFromApplication",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async exportConfigurations(
    {abortSignal, ...params}: RequestConfig = {},
  ): Promise<ExportConfigurationsResponse> {
    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ExportConfigurations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "exportId": "s",
      },
    }, await resp.json());
  }

  async getDiscoverySummary(
    {abortSignal, ...params}: RequestConfig & GetDiscoverySummaryRequest = {},
  ): Promise<GetDiscoverySummaryResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDiscoverySummary",
    });
    return prt.readObj({
      required: {},
      optional: {
        "servers": "n",
        "applications": "n",
        "serversMappedToApplications": "n",
        "serversMappedtoTags": "n",
        "agentSummary": toCustomerAgentInfo,
        "connectorSummary": toCustomerConnectorInfo,
      },
    }, await resp.json());
  }

  async listConfigurations(
    {abortSignal, ...params}: RequestConfig & ListConfigurationsRequest,
  ): Promise<ListConfigurationsResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromFilter(x)),
    orderBy: params["orderBy"]?.map(x => fromOrderByElement(x)),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListConfigurations",
    });
    return prt.readObj({
      required: {},
      optional: {
        "configurations": [x => prt.readMap(String, String, x)],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listServerNeighbors(
    {abortSignal, ...params}: RequestConfig & ListServerNeighborsRequest,
  ): Promise<ListServerNeighborsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListServerNeighbors",
    });
    return prt.readObj({
      required: {
        "neighbors": [toNeighborConnectionDetail],
      },
      optional: {
        "nextToken": "s",
        "knownDependencyCount": "n",
      },
    }, await resp.json());
  }

  async startContinuousExport(
    {abortSignal, ...params}: RequestConfig & StartContinuousExportRequest = {},
  ): Promise<StartContinuousExportResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartContinuousExport",
    });
    return prt.readObj({
      required: {},
      optional: {
        "exportId": "s",
        "s3Bucket": "s",
        "startTime": "d",
        "dataSource": toDataSource,
        "schemaStorageConfig": x => prt.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async startDataCollectionByAgentIds(
    {abortSignal, ...params}: RequestConfig & StartDataCollectionByAgentIdsRequest,
  ): Promise<StartDataCollectionByAgentIdsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDataCollectionByAgentIds",
    });
    return prt.readObj({
      required: {},
      optional: {
        "agentsConfigurationStatus": [toAgentConfigurationStatus],
      },
    }, await resp.json());
  }

  async startExportTask(
    {abortSignal, ...params}: RequestConfig & StartExportTaskRequest = {},
  ): Promise<StartExportTaskResponse> {
    const body: JSONObject = {...params,
    filters: params["filters"]?.map(x => fromExportFilter(x)),
    startTime: prt.serializeDate_unixTimestamp(params["startTime"]),
    endTime: prt.serializeDate_unixTimestamp(params["endTime"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartExportTask",
    });
    return prt.readObj({
      required: {},
      optional: {
        "exportId": "s",
      },
    }, await resp.json());
  }

  async startImportTask(
    {abortSignal, ...params}: RequestConfig & StartImportTaskRequest,
  ): Promise<StartImportTaskResponse> {
    const body: JSONObject = {...params,
    clientRequestToken: params["clientRequestToken"] ?? generateIdemptToken(),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartImportTask",
    });
    return prt.readObj({
      required: {},
      optional: {
        "task": toImportTask,
      },
    }, await resp.json());
  }

  async stopContinuousExport(
    {abortSignal, ...params}: RequestConfig & StopContinuousExportRequest,
  ): Promise<StopContinuousExportResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopContinuousExport",
    });
    return prt.readObj({
      required: {},
      optional: {
        "startTime": "d",
        "stopTime": "d",
      },
    }, await resp.json());
  }

  async stopDataCollectionByAgentIds(
    {abortSignal, ...params}: RequestConfig & StopDataCollectionByAgentIdsRequest,
  ): Promise<StopDataCollectionByAgentIdsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopDataCollectionByAgentIds",
    });
    return prt.readObj({
      required: {},
      optional: {
        "agentsConfigurationStatus": [toAgentConfigurationStatus],
      },
    }, await resp.json());
  }

  async updateApplication(
    {abortSignal, ...params}: RequestConfig & UpdateApplicationRequest,
  ): Promise<UpdateApplicationResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateApplication",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateConfigurationItemsToApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchDeleteImportDataRequest {
  importTaskIds: string[];
}

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  name: string;
  description?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateTagsRequest {
  configurationIds: string[];
  tags: Tag[];
}

// refs: 1 - tags: named, input
export interface DeleteApplicationsRequest {
  configurationIds: string[];
}

// refs: 1 - tags: named, input
export interface DeleteTagsRequest {
  configurationIds: string[];
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeAgentsRequest {
  agentIds?: string[] | null;
  filters?: Filter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeConfigurationsRequest {
  configurationIds: string[];
}

// refs: 1 - tags: named, input
export interface DescribeContinuousExportsRequest {
  exportIds?: string[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeExportConfigurationsRequest {
  exportIds?: string[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeExportTasksRequest {
  exportIds?: string[] | null;
  filters?: ExportFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeImportTasksRequest {
  filters?: ImportTaskFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeTagsRequest {
  filters?: TagFilter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DisassociateConfigurationItemsFromApplicationRequest {
  applicationConfigurationId: string;
  configurationIds: string[];
}

// refs: 1 - tags: named, input
export interface GetDiscoverySummaryRequest {
}

// refs: 1 - tags: named, input
export interface ListConfigurationsRequest {
  configurationType: ConfigurationItemType;
  filters?: Filter[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
  orderBy?: OrderByElement[] | null;
}

// refs: 1 - tags: named, input
export interface ListServerNeighborsRequest {
  configurationId: string;
  portInformationNeeded?: boolean | null;
  neighborConfigurationIds?: string[] | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface StartContinuousExportRequest {
}

// refs: 1 - tags: named, input
export interface StartDataCollectionByAgentIdsRequest {
  agentIds: string[];
}

// refs: 1 - tags: named, input
export interface StartExportTaskRequest {
  exportDataFormat?: ExportDataFormat[] | null;
  filters?: ExportFilter[] | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
}

// refs: 1 - tags: named, input
export interface StartImportTaskRequest {
  clientRequestToken?: string | null;
  name: string;
  importUrl: string;
}

// refs: 1 - tags: named, input
export interface StopContinuousExportRequest {
  exportId: string;
}

// refs: 1 - tags: named, input
export interface StopDataCollectionByAgentIdsRequest {
  agentIds: string[];
}

// refs: 1 - tags: named, input
export interface UpdateApplicationRequest {
  configurationId: string;
  name?: string | null;
  description?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateConfigurationItemsToApplicationResponse {
}

// refs: 1 - tags: named, output
export interface BatchDeleteImportDataResponse {
  errors?: BatchDeleteImportDataError[] | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationResponse {
  configurationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateTagsResponse {
}

// refs: 1 - tags: named, output
export interface DeleteApplicationsResponse {
}

// refs: 1 - tags: named, output
export interface DeleteTagsResponse {
}

// refs: 1 - tags: named, output
export interface DescribeAgentsResponse {
  agentsInfo?: AgentInfo[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeConfigurationsResponse {
  configurations?: ({ [key: string]: string })[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeContinuousExportsResponse {
  descriptions?: ContinuousExportDescription[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeExportConfigurationsResponse {
  exportsInfo?: ExportInfo[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeExportTasksResponse {
  exportsInfo?: ExportInfo[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeImportTasksResponse {
  nextToken?: string | null;
  tasks?: ImportTask[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeTagsResponse {
  tags?: ConfigurationTag[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateConfigurationItemsFromApplicationResponse {
}

// refs: 1 - tags: named, output
export interface ExportConfigurationsResponse {
  exportId?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDiscoverySummaryResponse {
  servers?: number | null;
  applications?: number | null;
  serversMappedToApplications?: number | null;
  serversMappedtoTags?: number | null;
  agentSummary?: CustomerAgentInfo | null;
  connectorSummary?: CustomerConnectorInfo | null;
}

// refs: 1 - tags: named, output
export interface ListConfigurationsResponse {
  configurations?: ({ [key: string]: string })[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListServerNeighborsResponse {
  neighbors: NeighborConnectionDetail[];
  nextToken?: string | null;
  knownDependencyCount?: number | null;
}

// refs: 1 - tags: named, output
export interface StartContinuousExportResponse {
  exportId?: string | null;
  s3Bucket?: string | null;
  startTime?: Date | number | null;
  dataSource?: DataSource | null;
  schemaStorageConfig?: { [key: string]: string } | null;
}

// refs: 1 - tags: named, output
export interface StartDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: AgentConfigurationStatus[] | null;
}

// refs: 1 - tags: named, output
export interface StartExportTaskResponse {
  exportId?: string | null;
}

// refs: 1 - tags: named, output
export interface StartImportTaskResponse {
  task?: ImportTask | null;
}

// refs: 1 - tags: named, output
export interface StopContinuousExportResponse {
  startTime?: Date | number | null;
  stopTime?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface StopDataCollectionByAgentIdsResponse {
  agentsConfigurationStatus?: AgentConfigurationStatus[] | null;
}

// refs: 1 - tags: named, output
export interface UpdateApplicationResponse {
}

// refs: 2 - tags: input, named, interface
export interface Tag {
  key: string;
  value: string;
}
function fromTag(input?: Tag | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, interface
export interface Filter {
  name: string;
  values: string[];
  condition: string;
}
function fromFilter(input?: Filter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, interface
export interface ExportFilter {
  name: string;
  values: string[];
  condition: string;
}
function fromExportFilter(input?: ExportFilter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, interface
export interface ImportTaskFilter {
  name?: ImportTaskFilterName | null;
  values?: string[] | null;
}
function fromImportTaskFilter(input?: ImportTaskFilter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, enum
export type ImportTaskFilterName =
| "IMPORT_TASK_ID"
| "STATUS"
| "NAME"
;


// refs: 1 - tags: input, named, interface
export interface TagFilter {
  name: string;
  values: string[];
}
function fromTagFilter(input?: TagFilter | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, enum, output
export type ConfigurationItemType =
| "SERVER"
| "PROCESS"
| "CONNECTION"
| "APPLICATION"
;

function toConfigurationItemType(root: JSONValue): ConfigurationItemType | null {
  return ( false
    || root == "SERVER"
    || root == "PROCESS"
    || root == "CONNECTION"
    || root == "APPLICATION"
  ) ? root : null;
}

// refs: 1 - tags: input, named, interface
export interface OrderByElement {
  fieldName: string;
  sortOrder?: orderString | null;
}
function fromOrderByElement(input?: OrderByElement | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, enum
export type orderString =
| "ASC"
| "DESC"
;


// refs: 1 - tags: input, named, enum
export type ExportDataFormat =
| "CSV"
| "GRAPHML"
;


// refs: 1 - tags: output, named, interface
export interface BatchDeleteImportDataError {
  importTaskId?: string | null;
  errorCode?: BatchDeleteImportDataErrorCode | null;
  errorDescription?: string | null;
}
function toBatchDeleteImportDataError(root: JSONValue): BatchDeleteImportDataError {
  return prt.readObj({
    required: {},
    optional: {
      "importTaskId": "s",
      "errorCode": toBatchDeleteImportDataErrorCode,
      "errorDescription": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type BatchDeleteImportDataErrorCode =
| "NOT_FOUND"
| "INTERNAL_SERVER_ERROR"
| "OVER_LIMIT"
;
function toBatchDeleteImportDataErrorCode(root: JSONValue): BatchDeleteImportDataErrorCode | null {
  return ( false
    || root == "NOT_FOUND"
    || root == "INTERNAL_SERVER_ERROR"
    || root == "OVER_LIMIT"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface AgentInfo {
  agentId?: string | null;
  hostName?: string | null;
  agentNetworkInfoList?: AgentNetworkInfo[] | null;
  connectorId?: string | null;
  version?: string | null;
  health?: AgentStatus | null;
  lastHealthPingTime?: string | null;
  collectionStatus?: string | null;
  agentType?: string | null;
  registeredTime?: string | null;
}
function toAgentInfo(root: JSONValue): AgentInfo {
  return prt.readObj({
    required: {},
    optional: {
      "agentId": "s",
      "hostName": "s",
      "agentNetworkInfoList": [toAgentNetworkInfo],
      "connectorId": "s",
      "version": "s",
      "health": toAgentStatus,
      "lastHealthPingTime": "s",
      "collectionStatus": "s",
      "agentType": "s",
      "registeredTime": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface AgentNetworkInfo {
  ipAddress?: string | null;
  macAddress?: string | null;
}
function toAgentNetworkInfo(root: JSONValue): AgentNetworkInfo {
  return prt.readObj({
    required: {},
    optional: {
      "ipAddress": "s",
      "macAddress": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type AgentStatus =
| "HEALTHY"
| "UNHEALTHY"
| "RUNNING"
| "UNKNOWN"
| "BLACKLISTED"
| "SHUTDOWN"
;
function toAgentStatus(root: JSONValue): AgentStatus | null {
  return ( false
    || root == "HEALTHY"
    || root == "UNHEALTHY"
    || root == "RUNNING"
    || root == "UNKNOWN"
    || root == "BLACKLISTED"
    || root == "SHUTDOWN"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface ContinuousExportDescription {
  exportId?: string | null;
  status?: ContinuousExportStatus | null;
  statusDetail?: string | null;
  s3Bucket?: string | null;
  startTime?: Date | number | null;
  stopTime?: Date | number | null;
  dataSource?: DataSource | null;
  schemaStorageConfig?: { [key: string]: string } | null;
}
function toContinuousExportDescription(root: JSONValue): ContinuousExportDescription {
  return prt.readObj({
    required: {},
    optional: {
      "exportId": "s",
      "status": toContinuousExportStatus,
      "statusDetail": "s",
      "s3Bucket": "s",
      "startTime": "d",
      "stopTime": "d",
      "dataSource": toDataSource,
      "schemaStorageConfig": x => prt.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ContinuousExportStatus =
| "START_IN_PROGRESS"
| "START_FAILED"
| "ACTIVE"
| "ERROR"
| "STOP_IN_PROGRESS"
| "STOP_FAILED"
| "INACTIVE"
;
function toContinuousExportStatus(root: JSONValue): ContinuousExportStatus | null {
  return ( false
    || root == "START_IN_PROGRESS"
    || root == "START_FAILED"
    || root == "ACTIVE"
    || root == "ERROR"
    || root == "STOP_IN_PROGRESS"
    || root == "STOP_FAILED"
    || root == "INACTIVE"
  ) ? root : null;
}

// refs: 2 - tags: output, named, enum
export type DataSource =
| "AGENT"
;
function toDataSource(root: JSONValue): DataSource | null {
  return ( false
    || root == "AGENT"
  ) ? root : null;
}

// refs: 2 - tags: output, named, interface
export interface ExportInfo {
  exportId: string;
  exportStatus: ExportStatus;
  statusMessage: string;
  configurationsDownloadUrl?: string | null;
  exportRequestTime: Date | number;
  isTruncated?: boolean | null;
  requestedStartTime?: Date | number | null;
  requestedEndTime?: Date | number | null;
}
function toExportInfo(root: JSONValue): ExportInfo {
  return prt.readObj({
    required: {
      "exportId": "s",
      "exportStatus": toExportStatus,
      "statusMessage": "s",
      "exportRequestTime": "d",
    },
    optional: {
      "configurationsDownloadUrl": "s",
      "isTruncated": "b",
      "requestedStartTime": "d",
      "requestedEndTime": "d",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ExportStatus =
| "FAILED"
| "SUCCEEDED"
| "IN_PROGRESS"
;
function toExportStatus(root: JSONValue): ExportStatus | null {
  return ( false
    || root == "FAILED"
    || root == "SUCCEEDED"
    || root == "IN_PROGRESS"
  ) ? root : null;
}

// refs: 2 - tags: output, named, interface
export interface ImportTask {
  importTaskId?: string | null;
  clientRequestToken?: string | null;
  name?: string | null;
  importUrl?: string | null;
  status?: ImportStatus | null;
  importRequestTime?: Date | number | null;
  importCompletionTime?: Date | number | null;
  importDeletedTime?: Date | number | null;
  serverImportSuccess?: number | null;
  serverImportFailure?: number | null;
  applicationImportSuccess?: number | null;
  applicationImportFailure?: number | null;
  errorsAndFailedEntriesZip?: string | null;
}
function toImportTask(root: JSONValue): ImportTask {
  return prt.readObj({
    required: {},
    optional: {
      "importTaskId": "s",
      "clientRequestToken": "s",
      "name": "s",
      "importUrl": "s",
      "status": toImportStatus,
      "importRequestTime": "d",
      "importCompletionTime": "d",
      "importDeletedTime": "d",
      "serverImportSuccess": "n",
      "serverImportFailure": "n",
      "applicationImportSuccess": "n",
      "applicationImportFailure": "n",
      "errorsAndFailedEntriesZip": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ImportStatus =
| "IMPORT_IN_PROGRESS"
| "IMPORT_COMPLETE"
| "IMPORT_COMPLETE_WITH_ERRORS"
| "IMPORT_FAILED"
| "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
| "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
| "DELETE_IN_PROGRESS"
| "DELETE_COMPLETE"
| "DELETE_FAILED"
| "DELETE_FAILED_LIMIT_EXCEEDED"
| "INTERNAL_ERROR"
;
function toImportStatus(root: JSONValue): ImportStatus | null {
  return ( false
    || root == "IMPORT_IN_PROGRESS"
    || root == "IMPORT_COMPLETE"
    || root == "IMPORT_COMPLETE_WITH_ERRORS"
    || root == "IMPORT_FAILED"
    || root == "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
    || root == "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
    || root == "DELETE_IN_PROGRESS"
    || root == "DELETE_COMPLETE"
    || root == "DELETE_FAILED"
    || root == "DELETE_FAILED_LIMIT_EXCEEDED"
    || root == "INTERNAL_ERROR"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface ConfigurationTag {
  configurationType?: ConfigurationItemType | null;
  configurationId?: string | null;
  key?: string | null;
  value?: string | null;
  timeOfCreation?: Date | number | null;
}
function toConfigurationTag(root: JSONValue): ConfigurationTag {
  return prt.readObj({
    required: {},
    optional: {
      "configurationType": toConfigurationItemType,
      "configurationId": "s",
      "key": "s",
      "value": "s",
      "timeOfCreation": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface CustomerAgentInfo {
  activeAgents: number;
  healthyAgents: number;
  blackListedAgents: number;
  shutdownAgents: number;
  unhealthyAgents: number;
  totalAgents: number;
  unknownAgents: number;
}
function toCustomerAgentInfo(root: JSONValue): CustomerAgentInfo {
  return prt.readObj({
    required: {
      "activeAgents": "n",
      "healthyAgents": "n",
      "blackListedAgents": "n",
      "shutdownAgents": "n",
      "unhealthyAgents": "n",
      "totalAgents": "n",
      "unknownAgents": "n",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface CustomerConnectorInfo {
  activeConnectors: number;
  healthyConnectors: number;
  blackListedConnectors: number;
  shutdownConnectors: number;
  unhealthyConnectors: number;
  totalConnectors: number;
  unknownConnectors: number;
}
function toCustomerConnectorInfo(root: JSONValue): CustomerConnectorInfo {
  return prt.readObj({
    required: {
      "activeConnectors": "n",
      "healthyConnectors": "n",
      "blackListedConnectors": "n",
      "shutdownConnectors": "n",
      "unhealthyConnectors": "n",
      "totalConnectors": "n",
      "unknownConnectors": "n",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface NeighborConnectionDetail {
  sourceServerId: string;
  destinationServerId: string;
  destinationPort?: number | null;
  transportProtocol?: string | null;
  connectionsCount: number;
}
function toNeighborConnectionDetail(root: JSONValue): NeighborConnectionDetail {
  return prt.readObj({
    required: {
      "sourceServerId": "s",
      "destinationServerId": "s",
      "connectionsCount": "n",
    },
    optional: {
      "destinationPort": "n",
      "transportProtocol": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface AgentConfigurationStatus {
  agentId?: string | null;
  operationSucceeded?: boolean | null;
  description?: string | null;
}
function toAgentConfigurationStatus(root: JSONValue): AgentConfigurationStatus {
  return prt.readObj({
    required: {},
    optional: {
      "agentId": "s",
      "operationSucceeded": "b",
      "description": "s",
    },
  }, root);
}
