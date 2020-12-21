// Autogenerated API client for: AWS Service Catalog App Registry

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as uuidv4 from "https://deno.land/std@0.75.0/uuid/v4.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class ServiceCatalogAppRegistry {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ServiceCatalogAppRegistry.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2020-06-24",
    "endpointPrefix": "servicecatalog-appregistry",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "AppRegistry",
    "serviceFullName": "AWS Service Catalog App Registry",
    "serviceId": "Service Catalog AppRegistry",
    "signatureVersion": "v4",
    "signingName": "servicecatalog",
    "uid": "AWS242AppRegistry-2020-06-24"
  };

  async associateAttributeGroup(
    {abortSignal, ...params}: RequestConfig & AssociateAttributeGroupRequest,
  ): Promise<AssociateAttributeGroupResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "AssociateAttributeGroup",
      method: "PUT",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/attribute-groups/${params["attributeGroup"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applicationArn": "s",
        "attributeGroupArn": "s",
      },
    }, await resp.json());
  }

  async associateResource(
    {abortSignal, ...params}: RequestConfig & AssociateResourceRequest,
  ): Promise<AssociateResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "AssociateResource",
      method: "PUT",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/resources/${params["resourceType"]}/${params["resource"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applicationArn": "s",
        "resourceArn": "s",
      },
    }, await resp.json());
  }

  async createApplication(
    {abortSignal, ...params}: RequestConfig & CreateApplicationRequest,
  ): Promise<CreateApplicationResponse> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
      tags: params["tags"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateApplication",
      requestUri: "/applications",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "application": toApplication,
      },
    }, await resp.json());
  }

  async createAttributeGroup(
    {abortSignal, ...params}: RequestConfig & CreateAttributeGroupRequest,
  ): Promise<CreateAttributeGroupResponse> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
      attributes: params["attributes"],
      tags: params["tags"],
      clientToken: params["clientToken"] ?? generateIdemptToken(),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateAttributeGroup",
      requestUri: "/attribute-groups",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "attributeGroup": toAttributeGroup,
      },
    }, await resp.json());
  }

  async deleteApplication(
    {abortSignal, ...params}: RequestConfig & DeleteApplicationRequest,
  ): Promise<DeleteApplicationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteApplication",
      method: "DELETE",
      requestUri: cmnP.encodePath`/applications/${params["application"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "application": toApplicationSummary,
      },
    }, await resp.json());
  }

  async deleteAttributeGroup(
    {abortSignal, ...params}: RequestConfig & DeleteAttributeGroupRequest,
  ): Promise<DeleteAttributeGroupResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteAttributeGroup",
      method: "DELETE",
      requestUri: cmnP.encodePath`/attribute-groups/${params["attributeGroup"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "attributeGroup": toAttributeGroupSummary,
      },
    }, await resp.json());
  }

  async disassociateAttributeGroup(
    {abortSignal, ...params}: RequestConfig & DisassociateAttributeGroupRequest,
  ): Promise<DisassociateAttributeGroupResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DisassociateAttributeGroup",
      method: "DELETE",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/attribute-groups/${params["attributeGroup"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applicationArn": "s",
        "attributeGroupArn": "s",
      },
    }, await resp.json());
  }

  async disassociateResource(
    {abortSignal, ...params}: RequestConfig & DisassociateResourceRequest,
  ): Promise<DisassociateResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DisassociateResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/resources/${params["resourceType"]}/${params["resource"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applicationArn": "s",
        "resourceArn": "s",
      },
    }, await resp.json());
  }

  async getApplication(
    {abortSignal, ...params}: RequestConfig & GetApplicationRequest,
  ): Promise<GetApplicationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetApplication",
      method: "GET",
      requestUri: cmnP.encodePath`/applications/${params["application"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "id": "s",
        "arn": "s",
        "name": "s",
        "description": "s",
        "creationTime": "d",
        "lastUpdateTime": "d",
        "associatedResourceCount": "n",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getAttributeGroup(
    {abortSignal, ...params}: RequestConfig & GetAttributeGroupRequest,
  ): Promise<GetAttributeGroupResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetAttributeGroup",
      method: "GET",
      requestUri: cmnP.encodePath`/attribute-groups/${params["attributeGroup"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "id": "s",
        "arn": "s",
        "name": "s",
        "description": "s",
        "attributes": "s",
        "creationTime": "d",
        "lastUpdateTime": "d",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listApplications(
    {abortSignal, ...params}: RequestConfig & ListApplicationsRequest = {},
  ): Promise<ListApplicationsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListApplications",
      method: "GET",
      requestUri: "/applications",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "applications": [toApplicationSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAssociatedAttributeGroups(
    {abortSignal, ...params}: RequestConfig & ListAssociatedAttributeGroupsRequest,
  ): Promise<ListAssociatedAttributeGroupsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListAssociatedAttributeGroups",
      method: "GET",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/attribute-groups`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "attributeGroups": ["s"],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAssociatedResources(
    {abortSignal, ...params}: RequestConfig & ListAssociatedResourcesRequest,
  ): Promise<ListAssociatedResourcesResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListAssociatedResources",
      method: "GET",
      requestUri: cmnP.encodePath`/applications/${params["application"]}/resources`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "resources": [toResourceInfo],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listAttributeGroups(
    {abortSignal, ...params}: RequestConfig & ListAttributeGroupsRequest = {},
  ): Promise<ListAttributeGroupsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListAttributeGroups",
      method: "GET",
      requestUri: "/attribute-groups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "attributeGroups": [toAttributeGroupSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceRequest,
  ): Promise<ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceRequest,
  ): Promise<TagResourceResponse> {
    const body: jsonP.JSONObject = {
      tags: params["tags"],
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
    {abortSignal, ...params}: RequestConfig & UntagResourceRequest,
  ): Promise<UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["tagKeys"]) {
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

  async updateApplication(
    {abortSignal, ...params}: RequestConfig & UpdateApplicationRequest,
  ): Promise<UpdateApplicationResponse> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateApplication",
      method: "PATCH",
      requestUri: cmnP.encodePath`/applications/${params["application"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "application": toApplication,
      },
    }, await resp.json());
  }

  async updateAttributeGroup(
    {abortSignal, ...params}: RequestConfig & UpdateAttributeGroupRequest,
  ): Promise<UpdateAttributeGroupResponse> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      description: params["description"],
      attributes: params["attributes"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateAttributeGroup",
      method: "PATCH",
      requestUri: cmnP.encodePath`/attribute-groups/${params["attributeGroup"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "attributeGroup": toAttributeGroup,
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface AssociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface AssociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
}

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  name: string;
  description?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
  clientToken: string;
}

// refs: 1 - tags: named, input
export interface CreateAttributeGroupRequest {
  name: string;
  description?: string | null;
  attributes: string;
  tags?: { [key: string]: string | null | undefined } | null;
  clientToken: string;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationRequest {
  application: string;
}

// refs: 1 - tags: named, input
export interface DeleteAttributeGroupRequest {
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface DisassociateAttributeGroupRequest {
  application: string;
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface DisassociateResourceRequest {
  application: string;
  resourceType: ResourceType;
  resource: string;
}

// refs: 1 - tags: named, input
export interface GetApplicationRequest {
  application: string;
}

// refs: 1 - tags: named, input
export interface GetAttributeGroupRequest {
  attributeGroup: string;
}

// refs: 1 - tags: named, input
export interface ListApplicationsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssociatedAttributeGroupsRequest {
  application: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssociatedResourcesRequest {
  application: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAttributeGroupsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateApplicationRequest {
  application: string;
  name?: string | null;
  description?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateAttributeGroupRequest {
  attributeGroup: string;
  name?: string | null;
  description?: string | null;
  attributes?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateAttributeGroupResponse {
  applicationArn?: string | null;
  attributeGroupArn?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateResourceResponse {
  applicationArn?: string | null;
  resourceArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationResponse {
  application?: Application | null;
}

// refs: 1 - tags: named, output
export interface CreateAttributeGroupResponse {
  attributeGroup?: AttributeGroup | null;
}

// refs: 1 - tags: named, output
export interface DeleteApplicationResponse {
  application?: ApplicationSummary | null;
}

// refs: 1 - tags: named, output
export interface DeleteAttributeGroupResponse {
  attributeGroup?: AttributeGroupSummary | null;
}

// refs: 1 - tags: named, output
export interface DisassociateAttributeGroupResponse {
  applicationArn?: string | null;
  attributeGroupArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateResourceResponse {
  applicationArn?: string | null;
  resourceArn?: string | null;
}

// refs: 1 - tags: named, output
export interface GetApplicationResponse {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  associatedResourceCount?: number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetAttributeGroupResponse {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  attributes?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationsResponse {
  applications?: ApplicationSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssociatedAttributeGroupsResponse {
  attributeGroups?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssociatedResourcesResponse {
  resources?: ResourceInfo[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAttributeGroupsResponse {
  attributeGroups?: AttributeGroupSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateApplicationResponse {
  application?: Application | null;
}

// refs: 1 - tags: named, output
export interface UpdateAttributeGroupResponse {
  attributeGroup?: AttributeGroup | null;
}

// refs: 2 - tags: input, named, enum
export type ResourceType =
| "CFN_STACK"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Application {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}
function toApplication(root: jsonP.JSONValue): Application {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "arn": "s",
      "name": "s",
      "description": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface AttributeGroup {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  tags?: { [key: string]: string | null | undefined } | null;
}
function toAttributeGroup(root: jsonP.JSONValue): AttributeGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "arn": "s",
      "name": "s",
      "description": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface ApplicationSummary {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
}
function toApplicationSummary(root: jsonP.JSONValue): ApplicationSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "arn": "s",
      "name": "s",
      "description": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface AttributeGroupSummary {
  id?: string | null;
  arn?: string | null;
  name?: string | null;
  description?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
}
function toAttributeGroupSummary(root: jsonP.JSONValue): AttributeGroupSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "arn": "s",
      "name": "s",
      "description": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ResourceInfo {
  name?: string | null;
  arn?: string | null;
}
function toResourceInfo(root: jsonP.JSONValue): ResourceInfo {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "arn": "s",
    },
  }, root);
}
