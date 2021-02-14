// Autogenerated API client for: Amazon Pinpoint SMS and Voice Service

interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as client from "../../client/common.ts";
import type * as s from "./structs.ts";
import * as jsonP from "../../encoding/json.ts";

export default class PinpointSMSVoice {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(PinpointSMSVoice.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-09-05",
    "endpointPrefix": "sms-voice.pinpoint",
    "signingName": "sms-voice",
    "serviceAbbreviation": "Pinpoint SMS Voice",
    "serviceFullName": "Amazon Pinpoint SMS and Voice Service",
    "serviceId": "Pinpoint SMS Voice",
    "protocol": "rest-json",
    "jsonVersion": "1.1",
    "uid": "pinpoint-sms-voice-2018-09-05",
    "signatureVersion": "v4"
  };

  async createConfigurationSet(
    {abortSignal, ...params}: RequestConfig & s.CreateConfigurationSetRequest = {},
  ): Promise<s.CreateConfigurationSetResponse> {
    const body: jsonP.JSONObject = {
      ConfigurationSetName: params["ConfigurationSetName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateConfigurationSet",
      requestUri: "/v1/sms-voice/configuration-sets",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async createConfigurationSetEventDestination(
    {abortSignal, ...params}: RequestConfig & s.CreateConfigurationSetEventDestinationRequest,
  ): Promise<s.CreateConfigurationSetEventDestinationResponse> {
    const body: jsonP.JSONObject = {
      EventDestination: fromEventDestinationDefinition(params["EventDestination"]),
      EventDestinationName: params["EventDestinationName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateConfigurationSetEventDestination",
      requestUri: cmnP.encodePath`/v1/sms-voice/configuration-sets/${params["ConfigurationSetName"]}/event-destinations`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteConfigurationSet(
    {abortSignal, ...params}: RequestConfig & s.DeleteConfigurationSetRequest,
  ): Promise<s.DeleteConfigurationSetResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteConfigurationSet",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/sms-voice/configuration-sets/${params["ConfigurationSetName"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteConfigurationSetEventDestination(
    {abortSignal, ...params}: RequestConfig & s.DeleteConfigurationSetEventDestinationRequest,
  ): Promise<s.DeleteConfigurationSetEventDestinationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteConfigurationSetEventDestination",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/sms-voice/configuration-sets/${params["ConfigurationSetName"]}/event-destinations/${params["EventDestinationName"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getConfigurationSetEventDestinations(
    {abortSignal, ...params}: RequestConfig & s.GetConfigurationSetEventDestinationsRequest,
  ): Promise<s.GetConfigurationSetEventDestinationsResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetConfigurationSetEventDestinations",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/sms-voice/configuration-sets/${params["ConfigurationSetName"]}/event-destinations`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "EventDestinations": [toEventDestination],
      },
    }, await resp.json());
  }

  async listConfigurationSets(
    {abortSignal, ...params}: RequestConfig & s.ListConfigurationSetsRequest = {},
  ): Promise<s.ListConfigurationSetsResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["PageSize"] != null) query.set("PageSize", params["PageSize"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListConfigurationSets",
      method: "GET",
      requestUri: "/v1/sms-voice/configuration-sets",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ConfigurationSets": ["s"],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async sendVoiceMessage(
    {abortSignal, ...params}: RequestConfig & s.SendVoiceMessageRequest = {},
  ): Promise<s.SendVoiceMessageResponse> {
    const body: jsonP.JSONObject = {
      CallerId: params["CallerId"],
      ConfigurationSetName: params["ConfigurationSetName"],
      Content: fromVoiceMessageContent(params["Content"]),
      DestinationPhoneNumber: params["DestinationPhoneNumber"],
      OriginationPhoneNumber: params["OriginationPhoneNumber"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendVoiceMessage",
      requestUri: "/v1/sms-voice/voice/message",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "MessageId": "s",
      },
    }, await resp.json());
  }

  async updateConfigurationSetEventDestination(
    {abortSignal, ...params}: RequestConfig & s.UpdateConfigurationSetEventDestinationRequest,
  ): Promise<s.UpdateConfigurationSetEventDestinationResponse> {
    const body: jsonP.JSONObject = {
      EventDestination: fromEventDestinationDefinition(params["EventDestination"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateConfigurationSetEventDestination",
      method: "PUT",
      requestUri: cmnP.encodePath`/v1/sms-voice/configuration-sets/${params["ConfigurationSetName"]}/event-destinations/${params["EventDestinationName"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromEventDestinationDefinition(input?: s.EventDestinationDefinition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CloudWatchLogsDestination: fromCloudWatchLogsDestination(input["CloudWatchLogsDestination"]),
    Enabled: input["Enabled"],
    KinesisFirehoseDestination: fromKinesisFirehoseDestination(input["KinesisFirehoseDestination"]),
    MatchingEventTypes: input["MatchingEventTypes"],
    SnsDestination: fromSnsDestination(input["SnsDestination"]),
  }
}

function fromCloudWatchLogsDestination(input?: s.CloudWatchLogsDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    IamRoleArn: input["IamRoleArn"],
    LogGroupArn: input["LogGroupArn"],
  }
}
function toCloudWatchLogsDestination(root: jsonP.JSONValue): s.CloudWatchLogsDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "IamRoleArn": "s",
      "LogGroupArn": "s",
    },
  }, root);
}

function fromKinesisFirehoseDestination(input?: s.KinesisFirehoseDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DeliveryStreamArn: input["DeliveryStreamArn"],
    IamRoleArn: input["IamRoleArn"],
  }
}
function toKinesisFirehoseDestination(root: jsonP.JSONValue): s.KinesisFirehoseDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "DeliveryStreamArn": "s",
      "IamRoleArn": "s",
    },
  }, root);
}

function fromSnsDestination(input?: s.SnsDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TopicArn: input["TopicArn"],
  }
}
function toSnsDestination(root: jsonP.JSONValue): s.SnsDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "TopicArn": "s",
    },
  }, root);
}

function fromVoiceMessageContent(input?: s.VoiceMessageContent | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CallInstructionsMessage: fromCallInstructionsMessageType(input["CallInstructionsMessage"]),
    PlainTextMessage: fromPlainTextMessageType(input["PlainTextMessage"]),
    SSMLMessage: fromSSMLMessageType(input["SSMLMessage"]),
  }
}

function fromCallInstructionsMessageType(input?: s.CallInstructionsMessageType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Text: input["Text"],
  }
}

function fromPlainTextMessageType(input?: s.PlainTextMessageType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    LanguageCode: input["LanguageCode"],
    Text: input["Text"],
    VoiceId: input["VoiceId"],
  }
}

function fromSSMLMessageType(input?: s.SSMLMessageType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    LanguageCode: input["LanguageCode"],
    Text: input["Text"],
    VoiceId: input["VoiceId"],
  }
}

function toEventDestination(root: jsonP.JSONValue): s.EventDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudWatchLogsDestination": toCloudWatchLogsDestination,
      "Enabled": "b",
      "KinesisFirehoseDestination": toKinesisFirehoseDestination,
      "MatchingEventTypes": [(x: jsonP.JSONValue) => cmnP.readEnum<s.EventType>(x)],
      "Name": "s",
      "SnsDestination": toSnsDestination,
    },
  }, root);
}