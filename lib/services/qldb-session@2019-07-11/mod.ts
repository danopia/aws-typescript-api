// Autogenerated API client for: Amazon QLDB Session

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class QLDBSession {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(QLDBSession.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-07-11",
    "endpointPrefix": "session.qldb",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "QLDB Session",
    "serviceFullName": "Amazon QLDB Session",
    "serviceId": "QLDB Session",
    "signatureVersion": "v4",
    "signingName": "qldb",
    "targetPrefix": "QLDBSession",
    "uid": "qldb-session-2019-07-11"
  };

  async sendCommand(
    {abortSignal, ...params}: RequestConfig & SendCommandRequest = {},
  ): Promise<SendCommandResult> {
    const body: JSONObject = {...params,
    StartSession: fromStartSessionRequest(params["StartSession"]),
    StartTransaction: fromStartTransactionRequest(params["StartTransaction"]),
    EndSession: fromEndSessionRequest(params["EndSession"]),
    CommitTransaction: fromCommitTransactionRequest(params["CommitTransaction"]),
    AbortTransaction: fromAbortTransactionRequest(params["AbortTransaction"]),
    ExecuteStatement: fromExecuteStatementRequest(params["ExecuteStatement"]),
    FetchPage: fromFetchPageRequest(params["FetchPage"]),
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendCommand",
    });
    return prt.readObj({
      required: {},
      optional: {
        "StartSession": toStartSessionResult,
        "StartTransaction": toStartTransactionResult,
        "EndSession": toEndSessionResult,
        "CommitTransaction": toCommitTransactionResult,
        "AbortTransaction": toAbortTransactionResult,
        "ExecuteStatement": toExecuteStatementResult,
        "FetchPage": toFetchPageResult,
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface SendCommandRequest {
  SessionToken?: string | null;
  StartSession?: StartSessionRequest | null;
  StartTransaction?: StartTransactionRequest | null;
  EndSession?: EndSessionRequest | null;
  CommitTransaction?: CommitTransactionRequest | null;
  AbortTransaction?: AbortTransactionRequest | null;
  ExecuteStatement?: ExecuteStatementRequest | null;
  FetchPage?: FetchPageRequest | null;
}

// refs: 1 - tags: named, output
export interface SendCommandResult {
  StartSession?: StartSessionResult | null;
  StartTransaction?: StartTransactionResult | null;
  EndSession?: EndSessionResult | null;
  CommitTransaction?: CommitTransactionResult | null;
  AbortTransaction?: AbortTransactionResult | null;
  ExecuteStatement?: ExecuteStatementResult | null;
  FetchPage?: FetchPageResult | null;
}

// refs: 1 - tags: input, named, interface
export interface StartSessionRequest {
  LedgerName: string;
}
function fromStartSessionRequest(input?: StartSessionRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, interface
export interface StartTransactionRequest {
}
function fromStartTransactionRequest(input?: StartTransactionRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, interface
export interface EndSessionRequest {
}
function fromEndSessionRequest(input?: EndSessionRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, interface
export interface CommitTransactionRequest {
  TransactionId: string;
  CommitDigest: Uint8Array | string;
}
function fromCommitTransactionRequest(input?: CommitTransactionRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
    CommitDigest: prt.serializeBlob(input["CommitDigest"]),
  }
}

// refs: 1 - tags: input, named, interface
export interface AbortTransactionRequest {
}
function fromAbortTransactionRequest(input?: AbortTransactionRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: input, named, interface
export interface ExecuteStatementRequest {
  TransactionId: string;
  Statement: string;
  Parameters?: ValueHolder[] | null;
}
function fromExecuteStatementRequest(input?: ExecuteStatementRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
    Parameters: input["Parameters"]?.map(x => fromValueHolder(x)),
  }
}

// refs: 3 - tags: input, named, interface, output
export interface ValueHolder {
  IonBinary?: Uint8Array | string | null;
  IonText?: string | null;
}
function fromValueHolder(input?: ValueHolder | null): JSONValue {
  if (!input) return input;
  return {...input,
    IonBinary: prt.serializeBlob(input["IonBinary"]),
  }
}
function toValueHolder(root: JSONValue): ValueHolder {
  return prt.readObj({
    required: {},
    optional: {
      "IonBinary": "a",
      "IonText": "s",
    },
  }, root);
}

// refs: 1 - tags: input, named, interface
export interface FetchPageRequest {
  TransactionId: string;
  NextPageToken: string;
}
function fromFetchPageRequest(input?: FetchPageRequest | null): JSONValue {
  if (!input) return input;
  return {...input,
  }
}

// refs: 1 - tags: output, named, interface
export interface StartSessionResult {
  SessionToken?: string | null;
}
function toStartSessionResult(root: JSONValue): StartSessionResult {
  return prt.readObj({
    required: {},
    optional: {
      "SessionToken": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface StartTransactionResult {
  TransactionId?: string | null;
}
function toStartTransactionResult(root: JSONValue): StartTransactionResult {
  return prt.readObj({
    required: {},
    optional: {
      "TransactionId": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface EndSessionResult {
}
function toEndSessionResult(root: JSONValue): EndSessionResult {
  return prt.readObj({
    required: {},
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface CommitTransactionResult {
  TransactionId?: string | null;
  CommitDigest?: Uint8Array | string | null;
}
function toCommitTransactionResult(root: JSONValue): CommitTransactionResult {
  return prt.readObj({
    required: {},
    optional: {
      "TransactionId": "s",
      "CommitDigest": "a",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface AbortTransactionResult {
}
function toAbortTransactionResult(root: JSONValue): AbortTransactionResult {
  return prt.readObj({
    required: {},
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ExecuteStatementResult {
  FirstPage?: Page | null;
}
function toExecuteStatementResult(root: JSONValue): ExecuteStatementResult {
  return prt.readObj({
    required: {},
    optional: {
      "FirstPage": toPage,
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Page {
  Values?: ValueHolder[] | null;
  NextPageToken?: string | null;
}
function toPage(root: JSONValue): Page {
  return prt.readObj({
    required: {},
    optional: {
      "Values": [toValueHolder],
      "NextPageToken": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface FetchPageResult {
  Page?: Page | null;
}
function toFetchPageResult(root: JSONValue): FetchPageResult {
  return prt.readObj({
    required: {},
    optional: {
      "Page": toPage,
    },
  }, root);
}
