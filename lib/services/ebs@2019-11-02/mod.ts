// Autogenerated API client for: Amazon Elastic Block Store

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import * as uuidv4 from "https://deno.land/std@0.91.0/uuid/v4.ts";
import type * as s from "./structs.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class EBS {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(EBS.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2019-11-02",
    "endpointPrefix": "ebs",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Amazon EBS",
    "serviceFullName": "Amazon Elastic Block Store",
    "serviceId": "EBS",
    "signatureVersion": "v4",
    "uid": "ebs-2019-11-02"
  };

  async completeSnapshot(
    {abortSignal, ...params}: RequestConfig & s.CompleteSnapshotRequest,
  ): Promise<s.CompleteSnapshotResponse> {
    const headers = new Headers;
    headers.append("x-amz-ChangedBlocksCount", params["ChangedBlocksCount"]?.toString() ?? '');
    if (params["Checksum"] != null) headers.append("x-amz-Checksum", params["Checksum"]);
    if (params["ChecksumAlgorithm"] != null) headers.append("x-amz-Checksum-Algorithm", params["ChecksumAlgorithm"]);
    if (params["ChecksumAggregationMethod"] != null) headers.append("x-amz-Checksum-Aggregation-Method", params["ChecksumAggregationMethod"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers,
      action: "CompleteSnapshot",
      requestUri: cmnP.encodePath`/snapshots/completion/${params["SnapshotId"]}`,
      responseCode: 202,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
      },
    }, await resp.json());
  }

  async getSnapshotBlock(
    {abortSignal, ...params}: RequestConfig & s.GetSnapshotBlockRequest,
  ): Promise<s.GetSnapshotBlockResponse> {
    const query = new URLSearchParams;
    query.set("blockToken", params["BlockToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetSnapshotBlock",
      method: "GET",
      requestUri: cmnP.encodePath`/snapshots/${params["SnapshotId"]}/blocks/${params["BlockIndex"].toString()}`,
    });
  return {
    DataLength: cmnP.readNum(resp.headers.get("x-amz-Data-Length")),
    Checksum: resp.headers.get("x-amz-Checksum"),
    ChecksumAlgorithm: cmnP.readEnum<s.ChecksumAlgorithm>(resp.headers.get("x-amz-Checksum-Algorithm")),
    BlockData: await resp.text(), // TODO: maybe allow proper body streaming,
  };
  }

  async listChangedBlocks(
    {abortSignal, ...params}: RequestConfig & s.ListChangedBlocksRequest,
  ): Promise<s.ListChangedBlocksResponse> {
    const query = new URLSearchParams;
    if (params["FirstSnapshotId"] != null) query.set("firstSnapshotId", params["FirstSnapshotId"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("pageToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["StartingBlockIndex"] != null) query.set("startingBlockIndex", params["StartingBlockIndex"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListChangedBlocks",
      method: "GET",
      requestUri: cmnP.encodePath`/snapshots/${params["SecondSnapshotId"]}/changedblocks`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ChangedBlocks": [toChangedBlock],
        "ExpiryTime": "d",
        "VolumeSize": "n",
        "BlockSize": "n",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listSnapshotBlocks(
    {abortSignal, ...params}: RequestConfig & s.ListSnapshotBlocksRequest,
  ): Promise<s.ListSnapshotBlocksResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("pageToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["StartingBlockIndex"] != null) query.set("startingBlockIndex", params["StartingBlockIndex"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSnapshotBlocks",
      method: "GET",
      requestUri: cmnP.encodePath`/snapshots/${params["SnapshotId"]}/blocks`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Blocks": [toBlock],
        "ExpiryTime": "d",
        "VolumeSize": "n",
        "BlockSize": "n",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putSnapshotBlock(
    {abortSignal, ...params}: RequestConfig & s.PutSnapshotBlockRequest,
  ): Promise<s.PutSnapshotBlockResponse> {
    const body = typeof params["BlockData"] === 'string' ? new TextEncoder().encode(params["BlockData"]) : params["BlockData"];
    const headers = new Headers;
    headers.append("x-amz-Data-Length", params["DataLength"]?.toString() ?? '');
    if (params["Progress"] != null) headers.append("x-amz-Progress", params["Progress"]?.toString() ?? '');
    headers.append("x-amz-Checksum", params["Checksum"]);
    headers.append("x-amz-Checksum-Algorithm", params["ChecksumAlgorithm"]);
    const resp = await this.#client.performRequest({
      abortSignal, headers, body,
      action: "PutSnapshotBlock",
      method: "PUT",
      requestUri: cmnP.encodePath`/snapshots/${params["SnapshotId"]}/blocks/${params["BlockIndex"].toString()}`,
      responseCode: 201,
    });
    return {
      Checksum: resp.headers.get("x-amz-Checksum"),
      ChecksumAlgorithm: cmnP.readEnum<s.ChecksumAlgorithm>(resp.headers.get("x-amz-Checksum-Algorithm")),
      ...jsonP.readObj({
        required: {},
        optional: {},
      }, await resp.json()),
    };
  }

  async startSnapshot(
    {abortSignal, ...params}: RequestConfig & s.StartSnapshotRequest,
  ): Promise<s.StartSnapshotResponse> {
    const body: jsonP.JSONObject = {
      VolumeSize: params["VolumeSize"],
      ParentSnapshotId: params["ParentSnapshotId"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      Description: params["Description"],
      ClientToken: params["ClientToken"] ?? generateIdemptToken(),
      Encrypted: params["Encrypted"],
      KmsKeyArn: params["KmsKeyArn"],
      Timeout: params["Timeout"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartSnapshot",
      requestUri: "/snapshots",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Description": "s",
        "SnapshotId": "s",
        "OwnerId": "s",
        "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
        "StartTime": "d",
        "VolumeSize": "n",
        "BlockSize": "n",
        "Tags": [toTag],
        "ParentSnapshotId": "s",
        "KmsKeyArn": "s",
      },
    }, await resp.json());
  }

}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Value": "s",
    },
  }, root);
}

function toChangedBlock(root: jsonP.JSONValue): s.ChangedBlock {
  return jsonP.readObj({
    required: {},
    optional: {
      "BlockIndex": "n",
      "FirstBlockToken": "s",
      "SecondBlockToken": "s",
    },
  }, root);
}

function toBlock(root: jsonP.JSONValue): s.Block {
  return jsonP.readObj({
    required: {},
    optional: {
      "BlockIndex": "n",
      "BlockToken": "s",
    },
  }, root);
}
