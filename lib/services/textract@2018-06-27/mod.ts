// Autogenerated API client for: Amazon Textract

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as Base64 from "https://deno.land/std@0.91.0/encoding/base64.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";
function serializeBlob(input: string | Uint8Array | null | undefined) {
  if (input == null) return input;
  return Base64.encode(input);
}

export default class Textract {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Textract.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
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
    {abortSignal, ...params}: RequestConfig & s.AnalyzeDocumentRequest,
  ): Promise<s.AnalyzeDocumentResponse> {
    const body: jsonP.JSONObject = {
      Document: fromDocument(params["Document"]),
      FeatureTypes: params["FeatureTypes"],
      HumanLoopConfig: fromHumanLoopConfig(params["HumanLoopConfig"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AnalyzeDocument",
    });
    return jsonP.readObj({
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
    {abortSignal, ...params}: RequestConfig & s.DetectDocumentTextRequest,
  ): Promise<s.DetectDocumentTextResponse> {
    const body: jsonP.JSONObject = {
      Document: fromDocument(params["Document"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DetectDocumentText",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "Blocks": [toBlock],
        "DetectDocumentTextModelVersion": "s",
      },
    }, await resp.json());
  }

  async getDocumentAnalysis(
    {abortSignal, ...params}: RequestConfig & s.GetDocumentAnalysisRequest,
  ): Promise<s.GetDocumentAnalysisResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDocumentAnalysis",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "JobStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
        "NextToken": "s",
        "Blocks": [toBlock],
        "Warnings": [toWarning],
        "StatusMessage": "s",
        "AnalyzeDocumentModelVersion": "s",
      },
    }, await resp.json());
  }

  async getDocumentTextDetection(
    {abortSignal, ...params}: RequestConfig & s.GetDocumentTextDetectionRequest,
  ): Promise<s.GetDocumentTextDetectionResponse> {
    const body: jsonP.JSONObject = {
      JobId: params["JobId"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetDocumentTextDetection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "DocumentMetadata": toDocumentMetadata,
        "JobStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobStatus>(x),
        "NextToken": "s",
        "Blocks": [toBlock],
        "Warnings": [toWarning],
        "StatusMessage": "s",
        "DetectDocumentTextModelVersion": "s",
      },
    }, await resp.json());
  }

  async startDocumentAnalysis(
    {abortSignal, ...params}: RequestConfig & s.StartDocumentAnalysisRequest,
  ): Promise<s.StartDocumentAnalysisResponse> {
    const body: jsonP.JSONObject = {
      DocumentLocation: fromDocumentLocation(params["DocumentLocation"]),
      FeatureTypes: params["FeatureTypes"],
      ClientRequestToken: params["ClientRequestToken"],
      JobTag: params["JobTag"],
      NotificationChannel: fromNotificationChannel(params["NotificationChannel"]),
      OutputConfig: fromOutputConfig(params["OutputConfig"]),
      KMSKeyId: params["KMSKeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDocumentAnalysis",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

  async startDocumentTextDetection(
    {abortSignal, ...params}: RequestConfig & s.StartDocumentTextDetectionRequest,
  ): Promise<s.StartDocumentTextDetectionResponse> {
    const body: jsonP.JSONObject = {
      DocumentLocation: fromDocumentLocation(params["DocumentLocation"]),
      ClientRequestToken: params["ClientRequestToken"],
      JobTag: params["JobTag"],
      NotificationChannel: fromNotificationChannel(params["NotificationChannel"]),
      OutputConfig: fromOutputConfig(params["OutputConfig"]),
      KMSKeyId: params["KMSKeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartDocumentTextDetection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "JobId": "s",
      },
    }, await resp.json());
  }

}

function fromDocument(input?: s.Document | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Bytes: serializeBlob(input["Bytes"]),
    S3Object: fromS3Object(input["S3Object"]),
  }
}

function fromS3Object(input?: s.S3Object | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Bucket: input["Bucket"],
    Name: input["Name"],
    Version: input["Version"],
  }
}

function fromHumanLoopConfig(input?: s.HumanLoopConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    HumanLoopName: input["HumanLoopName"],
    FlowDefinitionArn: input["FlowDefinitionArn"],
    DataAttributes: fromHumanLoopDataAttributes(input["DataAttributes"]),
  }
}

function fromHumanLoopDataAttributes(input?: s.HumanLoopDataAttributes | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ContentClassifiers: input["ContentClassifiers"],
  }
}

function fromDocumentLocation(input?: s.DocumentLocation | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Object: fromS3Object(input["S3Object"]),
  }
}

function fromNotificationChannel(input?: s.NotificationChannel | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SNSTopicArn: input["SNSTopicArn"],
    RoleArn: input["RoleArn"],
  }
}

function fromOutputConfig(input?: s.OutputConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    S3Bucket: input["S3Bucket"],
    S3Prefix: input["S3Prefix"],
  }
}

function toDocumentMetadata(root: jsonP.JSONValue): s.DocumentMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "Pages": "n",
    },
  }, root);
}

function toBlock(root: jsonP.JSONValue): s.Block {
  return jsonP.readObj({
    required: {},
    optional: {
      "BlockType": (x: jsonP.JSONValue) => cmnP.readEnum<s.BlockType>(x),
      "Confidence": "n",
      "Text": "s",
      "TextType": (x: jsonP.JSONValue) => cmnP.readEnum<s.TextType>(x),
      "RowIndex": "n",
      "ColumnIndex": "n",
      "RowSpan": "n",
      "ColumnSpan": "n",
      "Geometry": toGeometry,
      "Id": "s",
      "Relationships": [toRelationship],
      "EntityTypes": [(x: jsonP.JSONValue) => cmnP.readEnum<s.EntityType>(x)],
      "SelectionStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.SelectionStatus>(x),
      "Page": "n",
    },
  }, root);
}

function toGeometry(root: jsonP.JSONValue): s.Geometry {
  return jsonP.readObj({
    required: {},
    optional: {
      "BoundingBox": toBoundingBox,
      "Polygon": [toPoint],
    },
  }, root);
}

function toBoundingBox(root: jsonP.JSONValue): s.BoundingBox {
  return jsonP.readObj({
    required: {},
    optional: {
      "Width": "n",
      "Height": "n",
      "Left": "n",
      "Top": "n",
    },
  }, root);
}

function toPoint(root: jsonP.JSONValue): s.Point {
  return jsonP.readObj({
    required: {},
    optional: {
      "X": "n",
      "Y": "n",
    },
  }, root);
}

function toRelationship(root: jsonP.JSONValue): s.Relationship {
  return jsonP.readObj({
    required: {},
    optional: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.RelationshipType>(x),
      "Ids": ["s"],
    },
  }, root);
}

function toHumanLoopActivationOutput(root: jsonP.JSONValue): s.HumanLoopActivationOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "HumanLoopArn": "s",
      "HumanLoopActivationReasons": ["s"],
      "HumanLoopActivationConditionsEvaluationResults": jsonP.readJsonValue,
    },
  }, root);
}

function toWarning(root: jsonP.JSONValue): s.Warning {
  return jsonP.readObj({
    required: {},
    optional: {
      "ErrorCode": "s",
      "Pages": ["n"],
    },
  }, root);
}
