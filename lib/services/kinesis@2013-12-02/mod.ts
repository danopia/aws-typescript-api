// Autogenerated API client for: Amazon Kinesis

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

export default class Kinesis {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Kinesis.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2013-12-02",
    "endpointPrefix": "kinesis",
    "jsonVersion": "1.1",
    "protocol": "json",
    "protocolSettings": {
      "h2": "eventstream"
    },
    "serviceAbbreviation": "Kinesis",
    "serviceFullName": "Amazon Kinesis",
    "serviceId": "Kinesis",
    "signatureVersion": "v4",
    "targetPrefix": "Kinesis_20131202",
    "uid": "kinesis-2013-12-02"
  };

  async addTagsToStream(
    {abortSignal, ...params}: RequestConfig & s.AddTagsToStreamInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddTagsToStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async createStream(
    {abortSignal, ...params}: RequestConfig & s.CreateStreamInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardCount: params["ShardCount"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async decreaseStreamRetentionPeriod(
    {abortSignal, ...params}: RequestConfig & s.DecreaseStreamRetentionPeriodInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      RetentionPeriodHours: params["RetentionPeriodHours"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DecreaseStreamRetentionPeriod",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async deleteStream(
    {abortSignal, ...params}: RequestConfig & s.DeleteStreamInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EnforceConsumerDeletion: params["EnforceConsumerDeletion"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async deregisterStreamConsumer(
    {abortSignal, ...params}: RequestConfig & s.DeregisterStreamConsumerInput = {},
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
      ConsumerARN: params["ConsumerARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeregisterStreamConsumer",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async describeLimits(
    {abortSignal}: RequestConfig = {},
  ): Promise<s.DescribeLimitsOutput> {
    const body: jsonP.JSONObject = {};
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeLimits",
    });
    return jsonP.readObj({
      required: {
        "ShardLimit": "n",
        "OpenShardCount": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async describeStream(
    {abortSignal, ...params}: RequestConfig & s.DescribeStreamInput,
  ): Promise<s.DescribeStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Limit: params["Limit"],
      ExclusiveStartShardId: params["ExclusiveStartShardId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStream",
    });
    return jsonP.readObj({
      required: {
        "StreamDescription": toStreamDescription,
      },
      optional: {},
    }, await resp.json());
  }

  async describeStreamConsumer(
    {abortSignal, ...params}: RequestConfig & s.DescribeStreamConsumerInput = {},
  ): Promise<s.DescribeStreamConsumerOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
      ConsumerARN: params["ConsumerARN"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStreamConsumer",
    });
    return jsonP.readObj({
      required: {
        "ConsumerDescription": toConsumerDescription,
      },
      optional: {},
    }, await resp.json());
  }

  async describeStreamSummary(
    {abortSignal, ...params}: RequestConfig & s.DescribeStreamSummaryInput,
  ): Promise<s.DescribeStreamSummaryOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStreamSummary",
    });
    return jsonP.readObj({
      required: {
        "StreamDescriptionSummary": toStreamDescriptionSummary,
      },
      optional: {},
    }, await resp.json());
  }

  async disableEnhancedMonitoring(
    {abortSignal, ...params}: RequestConfig & s.DisableEnhancedMonitoringInput,
  ): Promise<s.EnhancedMonitoringOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardLevelMetrics: params["ShardLevelMetrics"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisableEnhancedMonitoring",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
        "DesiredShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
      },
    }, await resp.json());
  }

  async enableEnhancedMonitoring(
    {abortSignal, ...params}: RequestConfig & s.EnableEnhancedMonitoringInput,
  ): Promise<s.EnhancedMonitoringOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardLevelMetrics: params["ShardLevelMetrics"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "EnableEnhancedMonitoring",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
        "DesiredShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
      },
    }, await resp.json());
  }

  async getRecords(
    {abortSignal, ...params}: RequestConfig & s.GetRecordsInput,
  ): Promise<s.GetRecordsOutput> {
    const body: jsonP.JSONObject = {
      ShardIterator: params["ShardIterator"],
      Limit: params["Limit"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetRecords",
    });
    return jsonP.readObj({
      required: {
        "Records": [toRecord],
      },
      optional: {
        "NextShardIterator": "s",
        "MillisBehindLatest": "n",
        "ChildShards": [toChildShard],
      },
    }, await resp.json());
  }

  async getShardIterator(
    {abortSignal, ...params}: RequestConfig & s.GetShardIteratorInput,
  ): Promise<s.GetShardIteratorOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardId: params["ShardId"],
      ShardIteratorType: params["ShardIteratorType"],
      StartingSequenceNumber: params["StartingSequenceNumber"],
      Timestamp: jsonP.serializeDate_unixTimestamp(params["Timestamp"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetShardIterator",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ShardIterator": "s",
      },
    }, await resp.json());
  }

  async increaseStreamRetentionPeriod(
    {abortSignal, ...params}: RequestConfig & s.IncreaseStreamRetentionPeriodInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      RetentionPeriodHours: params["RetentionPeriodHours"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "IncreaseStreamRetentionPeriod",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async listShards(
    {abortSignal, ...params}: RequestConfig & s.ListShardsInput = {},
  ): Promise<s.ListShardsOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      NextToken: params["NextToken"],
      ExclusiveStartShardId: params["ExclusiveStartShardId"],
      MaxResults: params["MaxResults"],
      StreamCreationTimestamp: jsonP.serializeDate_unixTimestamp(params["StreamCreationTimestamp"]),
      ShardFilter: fromShardFilter(params["ShardFilter"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListShards",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Shards": [toShard],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listStreamConsumers(
    {abortSignal, ...params}: RequestConfig & s.ListStreamConsumersInput,
  ): Promise<s.ListStreamConsumersOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      StreamCreationTimestamp: jsonP.serializeDate_unixTimestamp(params["StreamCreationTimestamp"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListStreamConsumers",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Consumers": [toConsumer],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listStreams(
    {abortSignal, ...params}: RequestConfig & s.ListStreamsInput = {},
  ): Promise<s.ListStreamsOutput> {
    const body: jsonP.JSONObject = {
      Limit: params["Limit"],
      ExclusiveStartStreamName: params["ExclusiveStartStreamName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListStreams",
    });
    return jsonP.readObj({
      required: {
        "StreamNames": ["s"],
        "HasMoreStreams": "b",
      },
      optional: {},
    }, await resp.json());
  }

  async listTagsForStream(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForStreamInput,
  ): Promise<s.ListTagsForStreamOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ExclusiveStartTagKey: params["ExclusiveStartTagKey"],
      Limit: params["Limit"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForStream",
    });
    return jsonP.readObj({
      required: {
        "Tags": [toTag],
        "HasMoreTags": "b",
      },
      optional: {},
    }, await resp.json());
  }

  async mergeShards(
    {abortSignal, ...params}: RequestConfig & s.MergeShardsInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardToMerge: params["ShardToMerge"],
      AdjacentShardToMerge: params["AdjacentShardToMerge"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "MergeShards",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async putRecord(
    {abortSignal, ...params}: RequestConfig & s.PutRecordInput,
  ): Promise<s.PutRecordOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      Data: serializeBlob(params["Data"]),
      PartitionKey: params["PartitionKey"],
      ExplicitHashKey: params["ExplicitHashKey"],
      SequenceNumberForOrdering: params["SequenceNumberForOrdering"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRecord",
    });
    return jsonP.readObj({
      required: {
        "ShardId": "s",
        "SequenceNumber": "s",
      },
      optional: {
        "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      },
    }, await resp.json());
  }

  async putRecords(
    {abortSignal, ...params}: RequestConfig & s.PutRecordsInput,
  ): Promise<s.PutRecordsOutput> {
    const body: jsonP.JSONObject = {
      Records: params["Records"]?.map(x => fromPutRecordsRequestEntry(x)),
      StreamName: params["StreamName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRecords",
    });
    return jsonP.readObj({
      required: {
        "Records": [toPutRecordsResultEntry],
      },
      optional: {
        "FailedRecordCount": "n",
        "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      },
    }, await resp.json());
  }

  async registerStreamConsumer(
    {abortSignal, ...params}: RequestConfig & s.RegisterStreamConsumerInput,
  ): Promise<s.RegisterStreamConsumerOutput> {
    const body: jsonP.JSONObject = {
      StreamARN: params["StreamARN"],
      ConsumerName: params["ConsumerName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterStreamConsumer",
    });
    return jsonP.readObj({
      required: {
        "Consumer": toConsumer,
      },
      optional: {},
    }, await resp.json());
  }

  async removeTagsFromStream(
    {abortSignal, ...params}: RequestConfig & s.RemoveTagsFromStreamInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RemoveTagsFromStream",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async splitShard(
    {abortSignal, ...params}: RequestConfig & s.SplitShardInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      ShardToSplit: params["ShardToSplit"],
      NewStartingHashKey: params["NewStartingHashKey"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SplitShard",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async startStreamEncryption(
    {abortSignal, ...params}: RequestConfig & s.StartStreamEncryptionInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EncryptionType: params["EncryptionType"],
      KeyId: params["KeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartStreamEncryption",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async stopStreamEncryption(
    {abortSignal, ...params}: RequestConfig & s.StopStreamEncryptionInput,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      EncryptionType: params["EncryptionType"],
      KeyId: params["KeyId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopStreamEncryption",
    });
    await resp.arrayBuffer(); // consume body without use
  }

  async updateShardCount(
    {abortSignal, ...params}: RequestConfig & s.UpdateShardCountInput,
  ): Promise<s.UpdateShardCountOutput> {
    const body: jsonP.JSONObject = {
      StreamName: params["StreamName"],
      TargetShardCount: params["TargetShardCount"],
      ScalingType: params["ScalingType"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateShardCount",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "StreamName": "s",
        "CurrentShardCount": "n",
        "TargetShardCount": "n",
      },
    }, await resp.json());
  }

  // Resource State Waiters

  /** Checks state up to 18 times, 10 seconds apart (about 3 minutes max wait time). */
  async waitForStreamExists(
    params: RequestConfig & s.DescribeStreamInput,
  ): Promise<s.DescribeStreamOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state StreamExists';
    for (let i = 0; i < 18; i++) {
      const resp = await this.describeStream(params);
      if (resp?.StreamDescription?.StreamStatus === "ACTIVE") return resp;
      await new Promise(r => setTimeout(r, 10000));
    }
    throw new Error(errMessage);
  }

  /** Checks state up to 18 times, 10 seconds apart (about 3 minutes max wait time). */
  async waitForStreamNotExists(
    params: RequestConfig & s.DescribeStreamInput,
  ): Promise<Error | s.DescribeStreamOutput> {
    const errMessage = 'ResourceNotReady: Resource is not in the state StreamNotExists';
    for (let i = 0; i < 18; i++) {
      try {
        const resp = await this.describeStream(params);
      } catch (err) {
        if (["ResourceNotFoundException"].includes(err.shortCode)) return err;
        throw err;
      }
      await new Promise(r => setTimeout(r, 10000));
    }
    throw new Error(errMessage);
  }

}

function fromShardFilter(input?: s.ShardFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    ShardId: input["ShardId"],
    Timestamp: jsonP.serializeDate_unixTimestamp(input["Timestamp"]),
  }
}

function fromPutRecordsRequestEntry(input?: s.PutRecordsRequestEntry | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Data: serializeBlob(input["Data"]),
    ExplicitHashKey: input["ExplicitHashKey"],
    PartitionKey: input["PartitionKey"],
  }
}

function toStreamDescription(root: jsonP.JSONValue): s.StreamDescription {
  return jsonP.readObj({
    required: {
      "StreamName": "s",
      "StreamARN": "s",
      "StreamStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.StreamStatus>(x),
      "Shards": [toShard],
      "HasMoreShards": "b",
      "RetentionPeriodHours": "n",
      "StreamCreationTimestamp": "d",
      "EnhancedMonitoring": [toEnhancedMetrics],
    },
    optional: {
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      "KeyId": "s",
    },
  }, root);
}

function toShard(root: jsonP.JSONValue): s.Shard {
  return jsonP.readObj({
    required: {
      "ShardId": "s",
      "HashKeyRange": toHashKeyRange,
      "SequenceNumberRange": toSequenceNumberRange,
    },
    optional: {
      "ParentShardId": "s",
      "AdjacentParentShardId": "s",
    },
  }, root);
}

function toHashKeyRange(root: jsonP.JSONValue): s.HashKeyRange {
  return jsonP.readObj({
    required: {
      "StartingHashKey": "s",
      "EndingHashKey": "s",
    },
    optional: {},
  }, root);
}

function toSequenceNumberRange(root: jsonP.JSONValue): s.SequenceNumberRange {
  return jsonP.readObj({
    required: {
      "StartingSequenceNumber": "s",
    },
    optional: {
      "EndingSequenceNumber": "s",
    },
  }, root);
}

function toEnhancedMetrics(root: jsonP.JSONValue): s.EnhancedMetrics {
  return jsonP.readObj({
    required: {},
    optional: {
      "ShardLevelMetrics": [(x: jsonP.JSONValue) => cmnP.readEnum<s.MetricsName>(x)],
    },
  }, root);
}

function toConsumerDescription(root: jsonP.JSONValue): s.ConsumerDescription {
  return jsonP.readObj({
    required: {
      "ConsumerName": "s",
      "ConsumerARN": "s",
      "ConsumerStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConsumerStatus>(x),
      "ConsumerCreationTimestamp": "d",
      "StreamARN": "s",
    },
    optional: {},
  }, root);
}

function toStreamDescriptionSummary(root: jsonP.JSONValue): s.StreamDescriptionSummary {
  return jsonP.readObj({
    required: {
      "StreamName": "s",
      "StreamARN": "s",
      "StreamStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.StreamStatus>(x),
      "RetentionPeriodHours": "n",
      "StreamCreationTimestamp": "d",
      "EnhancedMonitoring": [toEnhancedMetrics],
      "OpenShardCount": "n",
    },
    optional: {
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
      "KeyId": "s",
      "ConsumerCount": "n",
    },
  }, root);
}

function toRecord(root: jsonP.JSONValue): s.Record {
  return jsonP.readObj({
    required: {
      "SequenceNumber": "s",
      "Data": "a",
      "PartitionKey": "s",
    },
    optional: {
      "ApproximateArrivalTimestamp": "d",
      "EncryptionType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionType>(x),
    },
  }, root);
}

function toChildShard(root: jsonP.JSONValue): s.ChildShard {
  return jsonP.readObj({
    required: {
      "ShardId": "s",
      "ParentShards": ["s"],
      "HashKeyRange": toHashKeyRange,
    },
    optional: {},
  }, root);
}

function toConsumer(root: jsonP.JSONValue): s.Consumer {
  return jsonP.readObj({
    required: {
      "ConsumerName": "s",
      "ConsumerARN": "s",
      "ConsumerStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConsumerStatus>(x),
      "ConsumerCreationTimestamp": "d",
    },
    optional: {},
  }, root);
}

function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
    },
    optional: {
      "Value": "s",
    },
  }, root);
}

function toPutRecordsResultEntry(root: jsonP.JSONValue): s.PutRecordsResultEntry {
  return jsonP.readObj({
    required: {},
    optional: {
      "SequenceNumber": "s",
      "ShardId": "s",
      "ErrorCode": "s",
      "ErrorMessage": "s",
    },
  }, root);
}
