// Autogenerated API client for: Amazon Textract

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class Textract {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Textract.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-06-27",
    "endpointPrefix": "textract",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Textract",
    "serviceId": "Textract",
    "signatureVersion": "v4",
    "targetPrefix": "Textract",
    "uid": "textract-2018-06-27"
  };

  async analyzeDocument(
    {abortSignal, ...params}: RequestConfig & AnalyzeDocumentRequest,
  ): Promise<AnalyzeDocumentResponse> {
    const body: JSONObject = {...params,
    Document: fromDocument(params["Document"]),
    HumanLoopConfig: fromHumanLoopConfig(params["HumanLoopConfig"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AnalyzeDocument",
    });
    return prt.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "Blocks": [toBlock],
        "HumanLoopActivationOutput": toHumanLoopActivationOutput,
        "AnalyzeDocumentModelVersion": "s",
      },
    }, await resp.json());
  }

  async detectDocumentText(
    {abortSignal, ...params}: RequestConfig & DetectDocumentTextRequest,
  ): Promise<DetectDocumentTextResponse> {
    const body: JSONObject = {...params,
    Document: fromDocument(params["Document"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectDocumentText",
    });
    return prt.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "Blocks": [toBlock],
        "DetectDocumentTextModelVersion": "s",
      },
    }, await resp.json());
  }

  async getDocumentAnalysis(
    {abortSignal, ...params}: RequestConfig & GetDocumentAnalysisRequest,
  ): Promise<GetDocumentAnalysisResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDocumentAnalysis",
    });
    return prt.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "JobStatus": toJobStatus,
        "NextToken": "s",
        "Blocks": [toBlock],
        "Warnings": [toWarning],
        "StatusMessage": "s",
        "AnalyzeDocumentModelVersion": "s",
      },
    }, await resp.json());
  }

  async getDocumentTextDetection(
    {abortSignal, ...params}: RequestConfig & GetDocumentTextDetectionRequest,
  ): Promise<GetDocumentTextDetectionResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDocumentTextDetection",
    });
    return prt.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "JobStatus": toJobStatus,
        "NextToken": "s",
        "Blocks": [toBlock],
        "Warnings": [toWarning],
        "StatusMessage": "s",
        "DetectDocumentTextModelVersion": "s",
      },
    }, await resp.json());
  }

  async startDocumentAnalysis(
    {abortSignal, ...params}: RequestConfig & StartDocumentAnalysisRequest,
  ): Promise<StartDocumentAnalysisResponse> {
    const body: JSONObject = {...params,
    DocumentLocation: fromDocumentLocation(params["DocumentLocation"]),
    NotificationChannel: fromNotificationChannel(params["NotificationChannel"]),
    OutputConfig: fromOutputConfig(params["OutputConfig"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDocumentAnalysis",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startDocumentTextDetection(
    {abortSignal, ...params}: RequestConfig & StartDocumentTextDetectionRequest,
  ): Promise<StartDocumentTextDetectionResponse> {
    const body: JSONObject = {...params,
    DocumentLocation: fromDocumentLocation(params["DocumentLocation"]),
    NotificationChannel: fromNotificationChannel(params["NotificationChannel"]),
    OutputConfig: fromOutputConfig(params["OutputConfig"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDocumentTextDetection",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AnalyzeDocumentRequest {
  Document: Document;
  FeatureTypes: FeatureType[];
  HumanLoopConfig?: HumanLoopConfig | null;
}

// refs: 1 - tags: named, input
export interface DetectDocumentTextRequest {
  Document: Document;
}

// refs: 1 - tags: named, input
export interface GetDocumentAnalysisRequest {
  JobId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetDocumentTextDetectionRequest {
  JobId: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface StartDocumentAnalysisRequest {
  DocumentLocation: DocumentLocation;
  FeatureTypes: FeatureType[];
  ClientRequestToken?: string | null;
  JobTag?: string | null;
  NotificationChannel?: NotificationChannel | null;
  OutputConfig?: OutputConfig | null;
}

// refs: 1 - tags: named, input
export interface StartDocumentTextDetectionRequest {
  DocumentLocation: DocumentLocation;
  ClientRequestToken?: string | null;
  JobTag?: string | null;
  NotificationChannel?: NotificationChannel | null;
  OutputConfig?: OutputConfig | null;
}

// refs: 1 - tags: named, output
export interface AnalyzeDocumentResponse {
  DocumentMetadata?: DocumentMetadata | null;
  Blocks?: Block[] | null;
  HumanLoopActivationOutput?: HumanLoopActivationOutput | null;
  AnalyzeDocumentModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface DetectDocumentTextResponse {
  DocumentMetadata?: DocumentMetadata | null;
  Blocks?: Block[] | null;
  DetectDocumentTextModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDocumentAnalysisResponse {
  DocumentMetadata?: DocumentMetadata | null;
  JobStatus?: JobStatus | null;
  NextToken?: string | null;
  Blocks?: Block[] | null;
  Warnings?: Warning[] | null;
  StatusMessage?: string | null;
  AnalyzeDocumentModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDocumentTextDetectionResponse {
  DocumentMetadata?: DocumentMetadata | null;
  JobStatus?: JobStatus | null;
  NextToken?: string | null;
  Blocks?: Block[] | null;
  Warnings?: Warning[] | null;
  StatusMessage?: string | null;
  DetectDocumentTextModelVersion?: string | null;
}

// refs: 1 - tags: named, output
export interface StartDocumentAnalysisResponse {
  JobId?: string | null;
}

// refs: 1 - tags: named, output
export interface StartDocumentTextDetectionResponse {
  JobId?: string | null;
}

// refs: 2 - tags: input, named, interface
export interface Document {
  Bytes?: Uint8Array | string | null;
  S3Object?: S3Object | null;
}
function fromDocument(input?: Document | null): JSONValue {
  if (!input) return input;
  return {...input,
    Bytes: prt.serializeBlob(input["Bytes"]),
    S3Object: fromS3Object(input["S3Object"]),
  }
}

// refs: 4 - tags: input, named, interface
export interface S3Object {
  Bucket?: string | null;
  Name?: string | null;
  Version?: string | null;
}
function fromS3Object(input?: S3Object | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, enum
export type FeatureType =
| "TABLES"
| "FORMS"
;


// refs: 1 - tags: input, named, interface
export interface HumanLoopConfig {
  HumanLoopName: string;
  FlowDefinitionArn: string;
  DataAttributes?: HumanLoopDataAttributes | null;
}
function fromHumanLoopConfig(input?: HumanLoopConfig | null): JSONValue {
  if (!input) return input;
  return {...input,
    DataAttributes: fromHumanLoopDataAttributes(input["DataAttributes"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface HumanLoopDataAttributes {
  ContentClassifiers?: ContentClassifier[] | null;
}
function fromHumanLoopDataAttributes(input?: HumanLoopDataAttributes | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, enum
export type ContentClassifier =
| "FreeOfPersonallyIdentifiableInformation"
| "FreeOfAdultContent"
;


// refs: 2 - tags: input, named, interface
export interface DocumentLocation {
  S3Object?: S3Object | null;
}
function fromDocumentLocation(input?: DocumentLocation | null): JSONValue {
  if (!input) return input;
  return {...input,
    S3Object: fromS3Object(input["S3Object"]),
  }
}

// refs: 2 - tags: input, named, interface
export interface NotificationChannel {
  SNSTopicArn: string;
  RoleArn: string;
}
function fromNotificationChannel(input?: NotificationChannel | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 2 - tags: input, named, interface
export interface OutputConfig {
  S3Bucket: string;
  S3Prefix?: string | null;
}
function fromOutputConfig(input?: OutputConfig | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 4 - tags: output, named, interface
export interface DocumentMetadata {
  Pages?: number | null;
}
function toDocumentMetadata(root: JSONValue): DocumentMetadata {
  return prt.readObj({
    required: {},
    optional: {
      "Pages": "n",
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface Block {
  BlockType?: BlockType | null;
  Confidence?: number | null;
  Text?: string | null;
  RowIndex?: number | null;
  ColumnIndex?: number | null;
  RowSpan?: number | null;
  ColumnSpan?: number | null;
  Geometry?: Geometry | null;
  Id?: string | null;
  Relationships?: Relationship[] | null;
  EntityTypes?: EntityType[] | null;
  SelectionStatus?: SelectionStatus | null;
  Page?: number | null;
}
function toBlock(root: JSONValue): Block {
  return prt.readObj({
    required: {},
    optional: {
      "BlockType": toBlockType,
      "Confidence": "n",
      "Text": "s",
      "RowIndex": "n",
      "ColumnIndex": "n",
      "RowSpan": "n",
      "ColumnSpan": "n",
      "Geometry": toGeometry,
      "Id": "s",
      "Relationships": [toRelationship],
      "EntityTypes": [toEntityType],
      "SelectionStatus": toSelectionStatus,
      "Page": "n",
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type BlockType =
| "KEY_VALUE_SET"
| "PAGE"
| "LINE"
| "WORD"
| "TABLE"
| "CELL"
| "SELECTION_ELEMENT"
;
function toBlockType(root: JSONValue): BlockType | null {
  return ( false
    || root == "KEY_VALUE_SET"
    || root == "PAGE"
    || root == "LINE"
    || root == "WORD"
    || root == "TABLE"
    || root == "CELL"
    || root == "SELECTION_ELEMENT"
  ) ? root : null;
}

// refs: 4 - tags: output, named, interface
export interface Geometry {
  BoundingBox?: BoundingBox | null;
  Polygon?: Point[] | null;
}
function toGeometry(root: JSONValue): Geometry {
  return prt.readObj({
    required: {},
    optional: {
      "BoundingBox": toBoundingBox,
      "Polygon": [toPoint],
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface BoundingBox {
  Width?: number | null;
  Height?: number | null;
  Left?: number | null;
  Top?: number | null;
}
function toBoundingBox(root: JSONValue): BoundingBox {
  return prt.readObj({
    required: {},
    optional: {
      "Width": "n",
      "Height": "n",
      "Left": "n",
      "Top": "n",
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface Point {
  X?: number | null;
  Y?: number | null;
}
function toPoint(root: JSONValue): Point {
  return prt.readObj({
    required: {},
    optional: {
      "X": "n",
      "Y": "n",
    },
  }, root);
}

// refs: 4 - tags: output, named, interface
export interface Relationship {
  Type?: RelationshipType | null;
  Ids?: string[] | null;
}
function toRelationship(root: JSONValue): Relationship {
  return prt.readObj({
    required: {},
    optional: {
      "Type": toRelationshipType,
      "Ids": ["s"],
    },
  }, root);
}

// refs: 4 - tags: output, named, enum
export type RelationshipType =
| "VALUE"
| "CHILD"
| "COMPLEX_FEATURES"
;
function toRelationshipType(root: JSONValue): RelationshipType | null {
  return ( false
    || root == "VALUE"
    || root == "CHILD"
    || root == "COMPLEX_FEATURES"
  ) ? root : null;
}

// refs: 4 - tags: output, named, enum
export type EntityType =
| "KEY"
| "VALUE"
;
function toEntityType(root: JSONValue): EntityType | null {
  return ( false
    || root == "KEY"
    || root == "VALUE"
  ) ? root : null;
}

// refs: 4 - tags: output, named, enum
export type SelectionStatus =
| "SELECTED"
| "NOT_SELECTED"
;
function toSelectionStatus(root: JSONValue): SelectionStatus | null {
  return ( false
    || root == "SELECTED"
    || root == "NOT_SELECTED"
  ) ? root : null;
}

// refs: 1 - tags: output, named, interface
export interface HumanLoopActivationOutput {
  HumanLoopArn?: string | null;
  HumanLoopActivationReasons?: string[] | null;
  HumanLoopActivationConditionsEvaluationResults?: string | null;
}
function toHumanLoopActivationOutput(root: JSONValue): HumanLoopActivationOutput {
  return prt.readObj({
    required: {},
    optional: {
      "HumanLoopArn": "s",
      "HumanLoopActivationReasons": ["s"],
      "HumanLoopActivationConditionsEvaluationResults": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type JobStatus =
| "IN_PROGRESS"
| "SUCCEEDED"
| "FAILED"
| "PARTIAL_SUCCESS"
;
function toJobStatus(root: JSONValue): JobStatus | null {
  return ( false
    || root == "IN_PROGRESS"
    || root == "SUCCEEDED"
    || root == "FAILED"
    || root == "PARTIAL_SUCCESS"
  ) ? root : null;
}

// refs: 2 - tags: output, named, interface
export interface Warning {
  ErrorCode?: string | null;
  Pages?: number[] | null;
}
function toWarning(root: JSONValue): Warning {
  return prt.readObj({
    required: {},
    optional: {
      "ErrorCode": "s",
      "Pages": ["n"],
    },
  }, root);
}
