// Autogenerated API client for: AWS Outposts

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class Outposts {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Outposts.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-12-03",
    "endpointPrefix": "outposts",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "Outposts",
    "serviceFullName": "AWS Outposts",
    "serviceId": "Outposts",
    "signatureVersion": "v4",
    "signingName": "outposts",
    "uid": "outposts-2019-12-03"
  };

  async createOutpost(
    {abortSignal, ...params}: RequestConfig & CreateOutpostInput,
  ): Promise<CreateOutpostOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      Description: params["Description"],
      SiteId: params["SiteId"],
      AvailabilityZone: params["AvailabilityZone"],
      AvailabilityZoneId: params["AvailabilityZoneId"],
      Tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateOutpost",
      requestUri: "/outposts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Outpost": toOutpost,
      },
    }, await resp.json());
  }

  async deleteOutpost(
    {abortSignal, ...params}: RequestConfig & DeleteOutpostInput,
  ): Promise<DeleteOutpostOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteOutpost",
      method: "DELETE",
      requestUri: cmnP.encodePath`/outposts/${params["OutpostId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteSite(
    {abortSignal, ...params}: RequestConfig & DeleteSiteInput,
  ): Promise<DeleteSiteOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteSite",
      method: "DELETE",
      requestUri: cmnP.encodePath`/sites/${params["SiteId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getOutpost(
    {abortSignal, ...params}: RequestConfig & GetOutpostInput,
  ): Promise<GetOutpostOutput> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetOutpost",
      method: "GET",
      requestUri: cmnP.encodePath`/outposts/${params["OutpostId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Outpost": toOutpost,
      },
    }, await resp.json());
  }

  async getOutpostInstanceTypes(
    {abortSignal, ...params}: RequestConfig & GetOutpostInstanceTypesInput,
  ): Promise<GetOutpostInstanceTypesOutput> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetOutpostInstanceTypes",
      method: "GET",
      requestUri: cmnP.encodePath`/outposts/${params["OutpostId"]}/instanceTypes`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "InstanceTypes": [toInstanceTypeItem],
        "NextToken": "s",
        "OutpostId": "s",
        "OutpostArn": "s",
      },
    }, await resp.json());
  }

  async listOutposts(
    {abortSignal, ...params}: RequestConfig & ListOutpostsInput = {},
  ): Promise<ListOutpostsOutput> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListOutposts",
      method: "GET",
      requestUri: "/outposts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Outposts": [toOutpost],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listSites(
    {abortSignal, ...params}: RequestConfig & ListSitesInput = {},
  ): Promise<ListSitesOutput> {
    const query = new URLSearchParams;
    if (params["NextToken"] != null) query.set("NextToken", params["NextToken"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("MaxResults", params["MaxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSites",
      method: "GET",
      requestUri: "/sites",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Sites": [toSite],
        "NextToken": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateOutpostInput {
  Name: string;
  Description?: string | null;
  SiteId: string;
  AvailabilityZone?: string | null;
  AvailabilityZoneId?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteOutpostInput {
  OutpostId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSiteInput {
  SiteId: string;
}

// refs: 1 - tags: named, input
export interface GetOutpostInput {
  OutpostId: string;
}

// refs: 1 - tags: named, input
export interface GetOutpostInstanceTypesInput {
  OutpostId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListOutpostsInput {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListSitesInput {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, output
export interface CreateOutpostOutput {
  Outpost?: Outpost | null;
}

// refs: 1 - tags: named, output
export interface DeleteOutpostOutput {
}

// refs: 1 - tags: named, output
export interface DeleteSiteOutput {
}

// refs: 1 - tags: named, output
export interface GetOutpostOutput {
  Outpost?: Outpost | null;
}

// refs: 1 - tags: named, output
export interface GetOutpostInstanceTypesOutput {
  InstanceTypes?: InstanceTypeItem[] | null;
  NextToken?: string | null;
  OutpostId?: string | null;
  OutpostArn?: string | null;
}

// refs: 1 - tags: named, output
export interface ListOutpostsOutput {
  Outposts?: Outpost[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListSitesOutput {
  Sites?: Site[] | null;
  NextToken?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Outpost {
  OutpostId?: string | null;
  OwnerId?: string | null;
  OutpostArn?: string | null;
  SiteId?: string | null;
  Name?: string | null;
  Description?: string | null;
  LifeCycleStatus?: string | null;
  AvailabilityZone?: string | null;
  AvailabilityZoneId?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}
function toOutpost(root: jsonP.JSONValue): Outpost {
  return jsonP.readObj({
    required: {},
    optional: {
      "OutpostId": "s",
      "OwnerId": "s",
      "OutpostArn": "s",
      "SiteId": "s",
      "Name": "s",
      "Description": "s",
      "LifeCycleStatus": "s",
      "AvailabilityZone": "s",
      "AvailabilityZoneId": "s",
      "Tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface InstanceTypeItem {
  InstanceType?: string | null;
}
function toInstanceTypeItem(root: jsonP.JSONValue): InstanceTypeItem {
  return jsonP.readObj({
    required: {},
    optional: {
      "InstanceType": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface Site {
  SiteId?: string | null;
  AccountId?: string | null;
  Name?: string | null;
  Description?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}
function toSite(root: jsonP.JSONValue): Site {
  return jsonP.readObj({
    required: {},
    optional: {
      "SiteId": "s",
      "AccountId": "s",
      "Name": "s",
      "Description": "s",
      "Tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}
