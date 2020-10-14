// Autogenerated API client for: AWS Cost and Usage Report Service

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class CUR {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CUR.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-01-06",
    "endpointPrefix": "cur",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Cost and Usage Report Service",
    "serviceId": "Cost and Usage Report Service",
    "signatureVersion": "v4",
    "signingName": "cur",
    "targetPrefix": "AWSOrigamiServiceGatewayService",
    "uid": "cur-2017-01-06"
  };

  async deleteReportDefinition(
    {abortSignal, ...params}: RequestConfig & DeleteReportDefinitionRequest = {},
  ): Promise<DeleteReportDefinitionResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteReportDefinition",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ResponseMessage": "s",
      },
    }, await resp.json());
  }

  async describeReportDefinitions(
    {abortSignal, ...params}: RequestConfig & DescribeReportDefinitionsRequest = {},
  ): Promise<DescribeReportDefinitionsResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeReportDefinitions",
    });
    return prt.readObj({
      required: {},
      optional: {
        "ReportDefinitions": [toReportDefinition],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async modifyReportDefinition(
    {abortSignal, ...params}: RequestConfig & ModifyReportDefinitionRequest,
  ): Promise<ModifyReportDefinitionResponse> {
    const body: JSONObject = {...params,
    ReportDefinition: fromReportDefinition(params["ReportDefinition"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ModifyReportDefinition",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async putReportDefinition(
    {abortSignal, ...params}: RequestConfig & PutReportDefinitionRequest,
  ): Promise<PutReportDefinitionResponse> {
    const body: JSONObject = {...params,
    ReportDefinition: fromReportDefinition(params["ReportDefinition"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutReportDefinition",
    });
    return prt.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface DeleteReportDefinitionRequest {
  ReportName?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeReportDefinitionsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ModifyReportDefinitionRequest {
  ReportName: string;
  ReportDefinition: ReportDefinition;
}

// refs: 1 - tags: named, input
export interface PutReportDefinitionRequest {
  ReportDefinition: ReportDefinition;
}

// refs: 1 - tags: named, output
export interface DeleteReportDefinitionResponse {
  ResponseMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeReportDefinitionsResponse {
  ReportDefinitions?: ReportDefinition[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ModifyReportDefinitionResponse {
}

// refs: 1 - tags: named, output
export interface PutReportDefinitionResponse {
}

// refs: 3 - tags: input, named, interface, output
export interface ReportDefinition {
  ReportName: string;
  TimeUnit: TimeUnit;
  Format: ReportFormat;
  Compression: CompressionFormat;
  AdditionalSchemaElements: SchemaElement[];
  S3Bucket: string;
  S3Prefix: string;
  S3Region: AWSRegion;
  AdditionalArtifacts?: AdditionalArtifact[] | null;
  RefreshClosedReports?: boolean | null;
  ReportVersioning?: ReportVersioning | null;
}
function fromReportDefinition(input?: ReportDefinition | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toReportDefinition(root: JSONValue): ReportDefinition {
  return prt.readObj({
    required: {
      "ReportName": "s",
      "TimeUnit": toTimeUnit,
      "Format": toReportFormat,
      "Compression": toCompressionFormat,
      "AdditionalSchemaElements": [toSchemaElement],
      "S3Bucket": "s",
      "S3Prefix": "s",
      "S3Region": toAWSRegion,
    },
    optional: {
      "AdditionalArtifacts": [toAdditionalArtifact],
      "RefreshClosedReports": "b",
      "ReportVersioning": toReportVersioning,
    },
  }, root);
}

// refs: 3 - tags: input, named, enum, output
export type TimeUnit =
| "HOURLY"
| "DAILY"
| "MONTHLY"
;

function toTimeUnit(root: JSONValue): TimeUnit | null {
  return ( false
    || root == "HOURLY"
    || root == "DAILY"
    || root == "MONTHLY"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type ReportFormat =
| "textORcsv"
| "Parquet"
;

function toReportFormat(root: JSONValue): ReportFormat | null {
  return ( false
    || root == "textORcsv"
    || root == "Parquet"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type CompressionFormat =
| "ZIP"
| "GZIP"
| "Parquet"
;

function toCompressionFormat(root: JSONValue): CompressionFormat | null {
  return ( false
    || root == "ZIP"
    || root == "GZIP"
    || root == "Parquet"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type SchemaElement =
| "RESOURCES"
;

function toSchemaElement(root: JSONValue): SchemaElement | null {
  return ( false
    || root == "RESOURCES"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type AWSRegion =
| "af-south-1"
| "ap-east-1"
| "ap-south-1"
| "ap-southeast-1"
| "ap-southeast-2"
| "ap-northeast-1"
| "ap-northeast-2"
| "ap-northeast-3"
| "ca-central-1"
| "eu-central-1"
| "eu-west-1"
| "eu-west-2"
| "eu-west-3"
| "eu-north-1"
| "eu-south-1"
| "me-south-1"
| "sa-east-1"
| "us-east-1"
| "us-east-2"
| "us-west-1"
| "us-west-2"
| "cn-north-1"
| "cn-northwest-1"
;

function toAWSRegion(root: JSONValue): AWSRegion | null {
  return ( false
    || root == "af-south-1"
    || root == "ap-east-1"
    || root == "ap-south-1"
    || root == "ap-southeast-1"
    || root == "ap-southeast-2"
    || root == "ap-northeast-1"
    || root == "ap-northeast-2"
    || root == "ap-northeast-3"
    || root == "ca-central-1"
    || root == "eu-central-1"
    || root == "eu-west-1"
    || root == "eu-west-2"
    || root == "eu-west-3"
    || root == "eu-north-1"
    || root == "eu-south-1"
    || root == "me-south-1"
    || root == "sa-east-1"
    || root == "us-east-1"
    || root == "us-east-2"
    || root == "us-west-1"
    || root == "us-west-2"
    || root == "cn-north-1"
    || root == "cn-northwest-1"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type AdditionalArtifact =
| "REDSHIFT"
| "QUICKSIGHT"
| "ATHENA"
;

function toAdditionalArtifact(root: JSONValue): AdditionalArtifact | null {
  return ( false
    || root == "REDSHIFT"
    || root == "QUICKSIGHT"
    || root == "ATHENA"
  ) ? root : null;
}

// refs: 3 - tags: input, named, enum, output
export type ReportVersioning =
| "CREATE_NEW_REPORT"
| "OVERWRITE_REPORT"
;

function toReportVersioning(root: JSONValue): ReportVersioning | null {
  return ( false
    || root == "CREATE_NEW_REPORT"
    || root == "OVERWRITE_REPORT"
  ) ? root : null;
}
