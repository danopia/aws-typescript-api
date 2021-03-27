// Autogenerated API client for: Amazon CodeGuru Reviewer

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

export default class CodeGuruReviewer {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CodeGuruReviewer.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2019-09-19",
    "endpointPrefix": "codeguru-reviewer",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "CodeGuruReviewer",
    "serviceFullName": "Amazon CodeGuru Reviewer",
    "serviceId": "CodeGuru Reviewer",
    "signatureVersion": "v4",
    "signingName": "codeguru-reviewer",
    "uid": "codeguru-reviewer-2019-09-19"
  };

  async associateRepository(
    {abortSignal, ...params}: RequestConfig & s.AssociateRepositoryRequest,
  ): Promise<s.AssociateRepositoryResponse> {
    const body: jsonP.JSONObject = {
      Repository: fromRepository(params["Repository"]),
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateRepository",
      requestUri: "/associations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async createCodeReview(
    {abortSignal, ...params}: RequestConfig & s.CreateCodeReviewRequest,
  ): Promise<s.CreateCodeReviewResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      RepositoryAssociationArn: params["RepositoryAssociationArn"],
      Type: fromCodeReviewType(params["Type"]),
      ClientRequestToken: params["ClientRequestToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateCodeReview",
      requestUri: "/codereviews",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReview": toCodeReview,
      },
    }, await resp.json());
  }

  async describeCodeReview(
    {abortSignal, ...params}: RequestConfig & s.DescribeCodeReviewRequest,
  ): Promise<s.DescribeCodeReviewResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeCodeReview",
      method: "GET",
      requestUri: cmnP.encodePath`/codereviews/${params["CodeReviewArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReview": toCodeReview,
      },
    }, await resp.json());
  }

  async describeRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & s.DescribeRecommendationFeedbackRequest,
  ): Promise<s.DescribeRecommendationFeedbackResponse> {
    const query = new URLSearchParams;
    query.set("RecommendationId", params["RecommendationId"]?.toString() ?? "");
    if (params["UserId"] != null) query.set("UserId", params["UserId"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeRecommendationFeedback",
      method: "GET",
      requestUri: cmnP.encodePath`/feedback/${params["CodeReviewArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationFeedback": toRecommendationFeedback,
      },
    }, await resp.json());
  }

  async describeRepositoryAssociation(
    {abortSignal, ...params}: RequestConfig & s.DescribeRepositoryAssociationRequest,
  ): Promise<s.DescribeRepositoryAssociationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeRepositoryAssociation",
      method: "GET",
      requestUri: cmnP.encodePath`/associations/${params["AssociationArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async disassociateRepository(
    {abortSignal, ...params}: RequestConfig & s.DisassociateRepositoryRequest,
  ): Promise<s.DisassociateRepositoryResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DisassociateRepository",
      method: "DELETE",
      requestUri: cmnP.encodePath`/associations/${params["AssociationArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociation": toRepositoryAssociation,
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listCodeReviews(
    {abortSignal, ...params}: RequestConfig & s.ListCodeReviewsRequest,
  ): Promise<s.ListCodeReviewsResponse> {
    const query = new URLSearchParams;
    for (const item of params["ProviderTypes"] ?? []) {
      query.append("ProviderTypes", item?.toString() ?? "");
    }
    for (const item of params["States"] ?? []) {
      query.append("States", item?.toString() ?? "");
    }
    for (const item of params["RepositoryNames"] ?? []) {
      query.append("RepositoryNames", item?.toString() ?? "");
    }
    query.set("Type", params["Type"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListCodeReviews",
      method: "GET",
      requestUri: "/codereviews",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "CodeReviewSummaries": [toCodeReviewSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & s.ListRecommendationFeedbackRequest,
  ): Promise<s.ListRecommendationFeedbackResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    for (const item of params["UserIds"] ?? []) {
      query.append("UserIds", item?.toString() ?? "");
    }
    for (const item of params["RecommendationIds"] ?? []) {
      query.append("RecommendationIds", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRecommendationFeedback",
      method: "GET",
      requestUri: cmnP.encodePath`/feedback/${params["CodeReviewArn"]}/RecommendationFeedback`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationFeedbackSummaries": [toRecommendationFeedbackSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRecommendations(
    {abortSignal, ...params}: RequestConfig & s.ListRecommendationsRequest,
  ): Promise<s.ListRecommendationsResponse> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRecommendations",
      method: "GET",
      requestUri: cmnP.encodePath`/codereviews/${params["CodeReviewArn"]}/Recommendations`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RecommendationSummaries": [toRecommendationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listRepositoryAssociations(
    {abortSignal, ...params}: RequestConfig & s.ListRepositoryAssociationsRequest = {},
  ): Promise<s.ListRepositoryAssociationsResponse> {
    const query = new URLSearchParams;
    for (const item of params["ProviderTypes"] ?? []) {
      query.append("ProviderType", item?.toString() ?? "");
    }
    for (const item of params["States"] ?? []) {
      query.append("State", item?.toString() ?? "");
    }
    for (const item of params["Names"] ?? []) {
      query.append("Name", item?.toString() ?? "");
    }
    for (const item of params["Owners"] ?? []) {
      query.append("Owner", item?.toString() ?? "");
    }
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListRepositoryAssociations",
      method: "GET",
      requestUri: "/associations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "RepositoryAssociationSummaries": [toRepositoryAssociationSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async putRecommendationFeedback(
    {abortSignal, ...params}: RequestConfig & s.PutRecommendationFeedbackRequest,
  ): Promise<s.PutRecommendationFeedbackResponse> {
    const body: jsonP.JSONObject = {
      CodeReviewArn: params["CodeReviewArn"],
      RecommendationId: params["RecommendationId"],
      Reactions: params["Reactions"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutRecommendationFeedback",
      method: "PUT",
      requestUri: "/feedback",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["TagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromRepository(input?: s.Repository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CodeCommit: fromCodeCommitRepository(input["CodeCommit"]),
    Bitbucket: fromThirdPartySourceRepository(input["Bitbucket"]),
    GitHubEnterpriseServer: fromThirdPartySourceRepository(input["GitHubEnterpriseServer"]),
  }
}

function fromCodeCommitRepository(input?: s.CodeCommitRepository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
  }
}

function fromThirdPartySourceRepository(input?: s.ThirdPartySourceRepository | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    ConnectionArn: input["ConnectionArn"],
    Owner: input["Owner"],
  }
}

function fromCodeReviewType(input?: s.CodeReviewType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RepositoryAnalysis: fromRepositoryAnalysis(input["RepositoryAnalysis"]),
  }
}

function fromRepositoryAnalysis(input?: s.RepositoryAnalysis | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RepositoryHead: fromRepositoryHeadSourceCodeType(input["RepositoryHead"]),
  }
}

function fromRepositoryHeadSourceCodeType(input?: s.RepositoryHeadSourceCodeType | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    BranchName: input["BranchName"],
  }
}
function toRepositoryHeadSourceCodeType(root: jsonP.JSONValue): s.RepositoryHeadSourceCodeType {
  return jsonP.readObj({
    required: {
      "BranchName": "s",
    },
    optional: {},
  }, root);
}

function toRepositoryAssociation(root: jsonP.JSONValue): s.RepositoryAssociation {
  return jsonP.readObj({
    required: {},
    optional: {
      "AssociationId": "s",
      "AssociationArn": "s",
      "ConnectionArn": "s",
      "Name": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.RepositoryAssociationState>(x),
      "StateReason": "s",
      "LastUpdatedTimeStamp": "d",
      "CreatedTimeStamp": "d",
    },
  }, root);
}

function toCodeReview(root: jsonP.JSONValue): s.CodeReview {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "CodeReviewArn": "s",
      "RepositoryName": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobState>(x),
      "StateReason": "s",
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.Type>(x),
      "PullRequestId": "s",
      "SourceCodeType": toSourceCodeType,
      "AssociationArn": "s",
      "Metrics": toMetrics,
    },
  }, root);
}

function toSourceCodeType(root: jsonP.JSONValue): s.SourceCodeType {
  return jsonP.readObj({
    required: {},
    optional: {
      "CommitDiff": toCommitDiffSourceCodeType,
      "RepositoryHead": toRepositoryHeadSourceCodeType,
    },
  }, root);
}

function toCommitDiffSourceCodeType(root: jsonP.JSONValue): s.CommitDiffSourceCodeType {
  return jsonP.readObj({
    required: {},
    optional: {
      "SourceCommit": "s",
      "DestinationCommit": "s",
    },
  }, root);
}

function toMetrics(root: jsonP.JSONValue): s.Metrics {
  return jsonP.readObj({
    required: {},
    optional: {
      "MeteredLinesOfCodeCount": "n",
      "FindingsCount": "n",
    },
  }, root);
}

function toRecommendationFeedback(root: jsonP.JSONValue): s.RecommendationFeedback {
  return jsonP.readObj({
    required: {},
    optional: {
      "CodeReviewArn": "s",
      "RecommendationId": "s",
      "Reactions": [(x: jsonP.JSONValue) => cmnP.readEnum<s.Reaction>(x)],
      "UserId": "s",
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
    },
  }, root);
}

function toCodeReviewSummary(root: jsonP.JSONValue): s.CodeReviewSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "CodeReviewArn": "s",
      "RepositoryName": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.JobState>(x),
      "CreatedTimeStamp": "d",
      "LastUpdatedTimeStamp": "d",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.Type>(x),
      "PullRequestId": "s",
      "MetricsSummary": toMetricsSummary,
    },
  }, root);
}

function toMetricsSummary(root: jsonP.JSONValue): s.MetricsSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "MeteredLinesOfCodeCount": "n",
      "FindingsCount": "n",
    },
  }, root);
}

function toRecommendationFeedbackSummary(root: jsonP.JSONValue): s.RecommendationFeedbackSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "RecommendationId": "s",
      "Reactions": [(x: jsonP.JSONValue) => cmnP.readEnum<s.Reaction>(x)],
      "UserId": "s",
    },
  }, root);
}

function toRecommendationSummary(root: jsonP.JSONValue): s.RecommendationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "FilePath": "s",
      "RecommendationId": "s",
      "StartLine": "n",
      "EndLine": "n",
      "Description": "s",
    },
  }, root);
}

function toRepositoryAssociationSummary(root: jsonP.JSONValue): s.RepositoryAssociationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "AssociationArn": "s",
      "ConnectionArn": "s",
      "LastUpdatedTimeStamp": "d",
      "AssociationId": "s",
      "Name": "s",
      "Owner": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ProviderType>(x),
      "State": (x: jsonP.JSONValue) => cmnP.readEnum<s.RepositoryAssociationState>(x),
    },
  }, root);
}
