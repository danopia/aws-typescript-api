// Autogenerated API client for: Amazon Translate

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

export default class Translate {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Translate.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2017-07-01",
    "endpointPrefix": "translate",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Translate",
    "serviceId": "Translate",
    "signatureVersion": "v4",
    "signingName": "translate",
    "targetPrefix": "AWSShineFrontendService_20170701",
    "uid": "translate-2017-07-01"
  };

  async deleteTerminology(
    {abortSignal, ...params}: RequestConfig & DeleteTerminologyRequest,
  ): Promise<void> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteTerminology",
    });
  }

  async describeTextTranslationJob(
    {abortSignal, ...params}: RequestConfig & DescribeTextTranslationJobRequest,
  ): Promise<DescribeTextTranslationJobResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeTextTranslationJob",
    });
    return prt.readObj({
      required: {},
      optional: {
        "TextTranslationJobProperties": toTextTranslationJobProperties,
      },
    }, await resp.json());
  }

  async getTerminology(
    {abortSignal, ...params}: RequestConfig & GetTerminologyRequest,
  ): Promise<GetTerminologyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetTerminology",
    });
    return prt.readObj({
      required: {},
      optional: {
        "TerminologyProperties": toTerminologyProperties,
        "TerminologyDataLocation": toTerminologyDataLocation,
      },
    }, await resp.json());
  }

  async importTerminology(
    {abortSignal, ...params}: RequestConfig & ImportTerminologyRequest,
  ): Promise<ImportTerminologyResponse> {
    const body: JSONObject = {...params,
    TerminologyData: fromTerminologyData(params["TerminologyData"]),
    EncryptionKey: fromEncryptionKey(params["EncryptionKey"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ImportTerminology",
    });
    return prt.readObj({
      required: {},
      optional: {
        "TerminologyProperties": toTerminologyProperties,
      },
    }, await resp.json());
  }

  async listTerminologies(
    {abortSignal, ...params}: RequestConfig & ListTerminologiesRequest = {},
  ): Promise<ListTerminologiesResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTerminologies",
    });
    return prt.readObj({
      required: {},
      optional: {
        "TerminologyPropertiesList": [toTerminologyProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTextTranslationJobs(
    {abortSignal, ...params}: RequestConfig & ListTextTranslationJobsRequest = {},
  ): Promise<ListTextTranslationJobsResponse> {
    const body: JSONObject = {...params,
    Filter: fromTextTranslationJobFilter(params["Filter"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTextTranslationJobs",
    });
    return prt.readObj({
      required: {},
      optional: {
        "TextTranslationJobPropertiesList": [toTextTranslationJobProperties],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async startTextTranslationJob(
    {abortSignal, ...params}: RequestConfig & StartTextTranslationJobRequest,
  ): Promise<StartTextTranslationJobResponse> {
    const body: JSONObject = {...params,
    InputDataConfig: fromInputDataConfig(params["InputDataConfig"]),
    OutputDataConfig: fromOutputDataConfig(params["OutputDataConfig"]),
    ClientToken: params["ClientToken"] ?? generateIdemptToken(),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartTextTranslationJob",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobId": "s",
        "JobStatus": toJobStatus,
      },
    }, await resp.json());
  }

  async stopTextTranslationJob(
    {abortSignal, ...params}: RequestConfig & StopTextTranslationJobRequest,
  ): Promise<StopTextTranslationJobResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopTextTranslationJob",
    });
    return prt.readObj({
      required: {},
      optional: {
        "JobId": "s",
        "JobStatus": toJobStatus,
      },
    }, await resp.json());
  }

  async translateText(
    {abortSignal, ...params}: RequestConfig & TranslateTextRequest,
  ): Promise<TranslateTextResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TranslateText",
    });
    return prt.readObj({
      required: {
        "TranslatedText": "s",
        "SourceLanguageCode": "s",
        "TargetLanguageCode": "s",
      },
      optional: {
        "AppliedTerminologies": [toAppliedTerminology],
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface DeleteTerminologyRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DescribeTextTranslationJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface GetTerminologyRequest {
  Name: string;
  TerminologyDataFormat: TerminologyDataFormat;
}

// refs: 1 - tags: named, input
export interface ImportTerminologyRequest {
  Name: string;
  MergeStrategy: MergeStrategy;
  Description?: string | null;
  TerminologyData: TerminologyData;
  EncryptionKey?: EncryptionKey | null;
}

// refs: 1 - tags: named, input
export interface ListTerminologiesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTextTranslationJobsRequest {
  Filter?: TextTranslationJobFilter | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartTextTranslationJobRequest {
  JobName?: string | null;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  SourceLanguageCode: string;
  TargetLanguageCodes: string[];
  TerminologyNames?: string[] | null;
  ClientToken: string;
}

// refs: 1 - tags: named, input
export interface StopTextTranslationJobRequest {
  JobId: string;
}

// refs: 1 - tags: named, input
export interface TranslateTextRequest {
  Text: string;
  TerminologyNames?: string[] | null;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
}

// refs: 1 - tags: named, output
export interface DescribeTextTranslationJobResponse {
  TextTranslationJobProperties?: TextTranslationJobProperties | null;
}

// refs: 1 - tags: named, output
export interface GetTerminologyResponse {
  TerminologyProperties?: TerminologyProperties | null;
  TerminologyDataLocation?: TerminologyDataLocation | null;
}

// refs: 1 - tags: named, output
export interface ImportTerminologyResponse {
  TerminologyProperties?: TerminologyProperties | null;
}

// refs: 1 - tags: named, output
export interface ListTerminologiesResponse {
  TerminologyPropertiesList?: TerminologyProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTextTranslationJobsResponse {
  TextTranslationJobPropertiesList?: TextTranslationJobProperties[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartTextTranslationJobResponse {
  JobId?: string | null;
  JobStatus?: JobStatus | null;
}

// refs: 1 - tags: named, output
export interface StopTextTranslationJobResponse {
  JobId?: string | null;
  JobStatus?: JobStatus | null;
}

// refs: 1 - tags: named, output
export interface TranslateTextResponse {
  TranslatedText: string;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  AppliedTerminologies?: AppliedTerminology[] | null;
}

// refs: 2 - tags: input, named, enum
export type TerminologyDataFormat =
| "CSV"
| "TMX"
;


// refs: 1 - tags: input, named, enum
export type MergeStrategy =
| "OVERWRITE"
;


// refs: 1 - tags: input, named, interface
export interface TerminologyData {
  File: Uint8Array | string;
  Format: TerminologyDataFormat;
}
function fromTerminologyData(input?: TerminologyData | null): JSONValue {
  if (!input) return input;
  return {...input,
    File: prt.serializeBlob(input["File"]),
  }
}

// refs: 4 - tags: input, named, interface, output
export interface EncryptionKey {
  Type: EncryptionKeyType;
  Id: string;
}
function fromEncryptionKey(input?: EncryptionKey | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toEncryptionKey(root: JSONValue): EncryptionKey {
  return prt.readObj({
    required: {
      "Type": toEncryptionKeyType,
      "Id": "s",
    },
    optional: {},
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type EncryptionKeyType =
| "KMS"
;

function toEncryptionKeyType(root: JSONValue): EncryptionKeyType | null {
  return ( false
    || root == "KMS"
  ) ? root : null;
}

// refs: 1 - tags: input, named, interface
export interface TextTranslationJobFilter {
  JobName?: string | null;
  JobStatus?: JobStatus | null;
  SubmittedBeforeTime?: Date | number | null;
  SubmittedAfterTime?: Date | number | null;
}
function fromTextTranslationJobFilter(input?: TextTranslationJobFilter | null): JSONValue {
  if (!input) return input;
  return {...input,
    SubmittedBeforeTime: prt.serializeDate_unixTimestamp(input["SubmittedBeforeTime"]),
    SubmittedAfterTime: prt.serializeDate_unixTimestamp(input["SubmittedAfterTime"]),
  }
}

// refs: 5 - tags: input, named, enum, output
export type JobStatus =
| "SUBMITTED"
| "IN_PROGRESS"
| "COMPLETED"
| "COMPLETED_WITH_ERROR"
| "FAILED"
| "STOP_REQUESTED"
| "STOPPED"
;

function toJobStatus(root: JSONValue): JobStatus | null {
  return ( false
    || root == "SUBMITTED"
    || root == "IN_PROGRESS"
    || root == "COMPLETED"
    || root == "COMPLETED_WITH_ERROR"
    || root == "FAILED"
    || root == "STOP_REQUESTED"
    || root == "STOPPED"
  ) ? root : null;
}

// refs: 3 - tags: input, named, interface, output
export interface InputDataConfig {
  S3Uri: string;
  ContentType: string;
}
function fromInputDataConfig(input?: InputDataConfig | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toInputDataConfig(root: JSONValue): InputDataConfig {
  return prt.readObj({
    required: {
      "S3Uri": "s",
      "ContentType": "s",
    },
    optional: {},
  }, root);
}

// refs: 3 - tags: input, named, interface, output
export interface OutputDataConfig {
  S3Uri: string;
}
function fromOutputDataConfig(input?: OutputDataConfig | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}
function toOutputDataConfig(root: JSONValue): OutputDataConfig {
  return prt.readObj({
    required: {
      "S3Uri": "s",
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface TextTranslationJobProperties {
  JobId?: string | null;
  JobName?: string | null;
  JobStatus?: JobStatus | null;
  JobDetails?: JobDetails | null;
  SourceLanguageCode?: string | null;
  TargetLanguageCodes?: string[] | null;
  TerminologyNames?: string[] | null;
  Message?: string | null;
  SubmittedTime?: Date | number | null;
  EndTime?: Date | number | null;
  InputDataConfig?: InputDataConfig | null;
  OutputDataConfig?: OutputDataConfig | null;
  DataAccessRoleArn?: string | null;
}
function toTextTranslationJobProperties(root: JSONValue): TextTranslationJobProperties {
  return prt.readObj({
    required: {},
    optional: {
      "JobId": "s",
      "JobName": "s",
      "JobStatus": toJobStatus,
      "JobDetails": toJobDetails,
      "SourceLanguageCode": "s",
      "TargetLanguageCodes": ["s"],
      "TerminologyNames": ["s"],
      "Message": "s",
      "SubmittedTime": "d",
      "EndTime": "d",
      "InputDataConfig": toInputDataConfig,
      "OutputDataConfig": toOutputDataConfig,
      "DataAccessRoleArn": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface JobDetails {
  TranslatedDocumentsCount?: number | null;
  DocumentsWithErrorsCount?: number | null;
  InputDocumentsCount?: number | null;
}
function toJobDetails(root: JSONValue): JobDetails {
  return prt.readObj({
    required: {},
    optional: {
      "TranslatedDocumentsCount": "n",
      "DocumentsWithErrorsCount": "n",
      "InputDocumentsCount": "n",
    },
  }, root);
}

// refs: 3 - tags: output, named, interface
export interface TerminologyProperties {
  Name?: string | null;
  Description?: string | null;
  Arn?: string | null;
  SourceLanguageCode?: string | null;
  TargetLanguageCodes?: string[] | null;
  EncryptionKey?: EncryptionKey | null;
  SizeBytes?: number | null;
  TermCount?: number | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
}
function toTerminologyProperties(root: JSONValue): TerminologyProperties {
  return prt.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Description": "s",
      "Arn": "s",
      "SourceLanguageCode": "s",
      "TargetLanguageCodes": ["s"],
      "EncryptionKey": toEncryptionKey,
      "SizeBytes": "n",
      "TermCount": "n",
      "CreatedAt": "d",
      "LastUpdatedAt": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface TerminologyDataLocation {
  RepositoryType: string;
  Location: string;
}
function toTerminologyDataLocation(root: JSONValue): TerminologyDataLocation {
  return prt.readObj({
    required: {
      "RepositoryType": "s",
      "Location": "s",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface AppliedTerminology {
  Name?: string | null;
  Terms?: Term[] | null;
}
function toAppliedTerminology(root: JSONValue): AppliedTerminology {
  return prt.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Terms": [toTerm],
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Term {
  SourceText?: string | null;
  TargetText?: string | null;
}
function toTerm(root: JSONValue): Term {
  return prt.readObj({
    required: {},
    optional: {
      "SourceText": "s",
      "TargetText": "s",
    },
  }, root);
}
