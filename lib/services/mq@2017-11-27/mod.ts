// Autogenerated API client for: AmazonMQ

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

export default class MQ {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MQ.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-11-27",
    "endpointPrefix": "mq",
    "signingName": "mq",
    "serviceFullName": "AmazonMQ",
    "serviceId": "mq",
    "protocol": "rest-json",
    "jsonVersion": "1.1",
    "uid": "mq-2017-11-27",
    "signatureVersion": "v4"
  };

  async createBroker(
    {abortSignal, ...params}: RequestConfig & s.CreateBrokerRequest = {},
  ): Promise<s.CreateBrokerResponse> {
    const body: jsonP.JSONObject = {
      authenticationStrategy: params["AuthenticationStrategy"],
      autoMinorVersionUpgrade: params["AutoMinorVersionUpgrade"],
      brokerName: params["BrokerName"],
      configuration: fromConfigurationId(params["Configuration"]),
      creatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      deploymentMode: params["DeploymentMode"],
      encryptionOptions: fromEncryptionOptions(params["EncryptionOptions"]),
      engineType: params["EngineType"],
      engineVersion: params["EngineVersion"],
      hostInstanceType: params["HostInstanceType"],
      ldapServerMetadata: fromLdapServerMetadataInput(params["LdapServerMetadata"]),
      logs: fromLogs(params["Logs"]),
      maintenanceWindowStartTime: fromWeeklyStartTime(params["MaintenanceWindowStartTime"]),
      publiclyAccessible: params["PubliclyAccessible"],
      securityGroups: params["SecurityGroups"],
      storageType: params["StorageType"],
      subnetIds: params["SubnetIds"],
      tags: params["Tags"],
      users: params["Users"]?.map(x => fromUser(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateBroker",
      requestUri: "/v1/brokers",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerArn": "s",
        "BrokerId": "s",
      },
    }, await resp.json());
  }

  async createConfiguration(
    {abortSignal, ...params}: RequestConfig & s.CreateConfigurationRequest = {},
  ): Promise<s.CreateConfigurationResponse> {
    const body: jsonP.JSONObject = {
      authenticationStrategy: params["AuthenticationStrategy"],
      engineType: params["EngineType"],
      engineVersion: params["EngineVersion"],
      name: params["Name"],
      tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateConfiguration",
      requestUri: "/v1/configurations",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "AuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
        "Created": "d",
        "Id": "s",
        "LatestRevision": toConfigurationRevision,
        "Name": "s",
      },
    }, await resp.json());
  }

  async createTags(
    {abortSignal, ...params}: RequestConfig & s.CreateTagsRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      tags: params["Tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateTags",
      requestUri: cmnP.encodePath`/v1/tags/${params["ResourceArn"]}`,
      responseCode: 204,
    });
  }

  async createUser(
    {abortSignal, ...params}: RequestConfig & s.CreateUserRequest,
  ): Promise<s.CreateUserResponse> {
    const body: jsonP.JSONObject = {
      consoleAccess: params["ConsoleAccess"],
      groups: params["Groups"],
      password: params["Password"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateUser",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/users/${params["Username"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteBroker(
    {abortSignal, ...params}: RequestConfig & s.DeleteBrokerRequest,
  ): Promise<s.DeleteBrokerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteBroker",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerId": "s",
      },
    }, await resp.json());
  }

  async deleteTags(
    {abortSignal, ...params}: RequestConfig & s.DeleteTagsRequest,
  ): Promise<void> {
    const query = new URLSearchParams;
    for (const item of params["TagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DeleteTags",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/tags/${params["ResourceArn"]}`,
      responseCode: 204,
    });
  }

  async deleteUser(
    {abortSignal, ...params}: RequestConfig & s.DeleteUserRequest,
  ): Promise<s.DeleteUserResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteUser",
      method: "DELETE",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/users/${params["Username"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeBroker(
    {abortSignal, ...params}: RequestConfig & s.DescribeBrokerRequest,
  ): Promise<s.DescribeBrokerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeBroker",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
        "AutoMinorVersionUpgrade": "b",
        "BrokerArn": "s",
        "BrokerId": "s",
        "BrokerInstances": [toBrokerInstance],
        "BrokerName": "s",
        "BrokerState": (x: jsonP.JSONValue) => cmnP.readEnum<s.BrokerState>(x),
        "Configurations": toConfigurations,
        "Created": "d",
        "DeploymentMode": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentMode>(x),
        "EncryptionOptions": toEncryptionOptions,
        "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
        "EngineVersion": "s",
        "HostInstanceType": "s",
        "LdapServerMetadata": toLdapServerMetadataOutput,
        "Logs": toLogsSummary,
        "MaintenanceWindowStartTime": toWeeklyStartTime,
        "PendingAuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
        "PendingEngineVersion": "s",
        "PendingHostInstanceType": "s",
        "PendingLdapServerMetadata": toLdapServerMetadataOutput,
        "PendingSecurityGroups": ["s"],
        "PubliclyAccessible": "b",
        "SecurityGroups": ["s"],
        "StorageType": (x: jsonP.JSONValue) => cmnP.readEnum<s.BrokerStorageType>(x),
        "SubnetIds": ["s"],
        "Tags": x => jsonP.readMap(String, String, x),
        "Users": [toUserSummary],
      },
    }, await resp.json());
  }

  async describeBrokerEngineTypes(
    {abortSignal, ...params}: RequestConfig & s.DescribeBrokerEngineTypesRequest = {},
  ): Promise<s.DescribeBrokerEngineTypesResponse> {
    const query = new URLSearchParams;
    if (params["EngineType"] != null) query.set("engineType", params["EngineType"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeBrokerEngineTypes",
      method: "GET",
      requestUri: "/v1/broker-engine-types",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerEngineTypes": [toBrokerEngineType],
        "MaxResults": "n",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeBrokerInstanceOptions(
    {abortSignal, ...params}: RequestConfig & s.DescribeBrokerInstanceOptionsRequest = {},
  ): Promise<s.DescribeBrokerInstanceOptionsResponse> {
    const query = new URLSearchParams;
    if (params["EngineType"] != null) query.set("engineType", params["EngineType"]?.toString() ?? "");
    if (params["HostInstanceType"] != null) query.set("hostInstanceType", params["HostInstanceType"]?.toString() ?? "");
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    if (params["StorageType"] != null) query.set("storageType", params["StorageType"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeBrokerInstanceOptions",
      method: "GET",
      requestUri: "/v1/broker-instance-options",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerInstanceOptions": [toBrokerInstanceOption],
        "MaxResults": "n",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeConfiguration(
    {abortSignal, ...params}: RequestConfig & s.DescribeConfigurationRequest,
  ): Promise<s.DescribeConfigurationResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeConfiguration",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/configurations/${params["ConfigurationId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "AuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
        "Created": "d",
        "Description": "s",
        "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
        "EngineVersion": "s",
        "Id": "s",
        "LatestRevision": toConfigurationRevision,
        "Name": "s",
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async describeConfigurationRevision(
    {abortSignal, ...params}: RequestConfig & s.DescribeConfigurationRevisionRequest,
  ): Promise<s.DescribeConfigurationRevisionResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeConfigurationRevision",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/configurations/${params["ConfigurationId"]}/revisions/${params["ConfigurationRevision"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ConfigurationId": "s",
        "Created": "d",
        "Data": "s",
        "Description": "s",
      },
    }, await resp.json());
  }

  async describeUser(
    {abortSignal, ...params}: RequestConfig & s.DescribeUserRequest,
  ): Promise<s.DescribeUserResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeUser",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/users/${params["Username"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerId": "s",
        "ConsoleAccess": "b",
        "Groups": ["s"],
        "Pending": toUserPendingChanges,
        "Username": "s",
      },
    }, await resp.json());
  }

  async listBrokers(
    {abortSignal, ...params}: RequestConfig & s.ListBrokersRequest = {},
  ): Promise<s.ListBrokersResponse> {
    const query = new URLSearchParams;
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListBrokers",
      method: "GET",
      requestUri: "/v1/brokers",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerSummaries": [toBrokerSummary],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listConfigurationRevisions(
    {abortSignal, ...params}: RequestConfig & s.ListConfigurationRevisionsRequest,
  ): Promise<s.ListConfigurationRevisionsResponse> {
    const query = new URLSearchParams;
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListConfigurationRevisions",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/configurations/${params["ConfigurationId"]}/revisions`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ConfigurationId": "s",
        "MaxResults": "n",
        "NextToken": "s",
        "Revisions": [toConfigurationRevision],
      },
    }, await resp.json());
  }

  async listConfigurations(
    {abortSignal, ...params}: RequestConfig & s.ListConfigurationsRequest = {},
  ): Promise<s.ListConfigurationsResponse> {
    const query = new URLSearchParams;
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListConfigurations",
      method: "GET",
      requestUri: "/v1/configurations",
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Configurations": [toConfiguration],
        "MaxResults": "n",
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTags(
    {abortSignal, ...params}: RequestConfig & s.ListTagsRequest,
  ): Promise<s.ListTagsResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTags",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/tags/${params["ResourceArn"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listUsers(
    {abortSignal, ...params}: RequestConfig & s.ListUsersRequest,
  ): Promise<s.ListUsersResponse> {
    const query = new URLSearchParams;
    if (params["MaxResults"] != null) query.set("maxResults", params["MaxResults"]?.toString() ?? "");
    if (params["NextToken"] != null) query.set("nextToken", params["NextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListUsers",
      method: "GET",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/users`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "BrokerId": "s",
        "MaxResults": "n",
        "NextToken": "s",
        "Users": [toUserSummary],
      },
    }, await resp.json());
  }

  async rebootBroker(
    {abortSignal, ...params}: RequestConfig & s.RebootBrokerRequest,
  ): Promise<s.RebootBrokerResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "RebootBroker",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/reboot`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateBroker(
    {abortSignal, ...params}: RequestConfig & s.UpdateBrokerRequest,
  ): Promise<s.UpdateBrokerResponse> {
    const body: jsonP.JSONObject = {
      authenticationStrategy: params["AuthenticationStrategy"],
      autoMinorVersionUpgrade: params["AutoMinorVersionUpgrade"],
      configuration: fromConfigurationId(params["Configuration"]),
      engineVersion: params["EngineVersion"],
      hostInstanceType: params["HostInstanceType"],
      ldapServerMetadata: fromLdapServerMetadataInput(params["LdapServerMetadata"]),
      logs: fromLogs(params["Logs"]),
      securityGroups: params["SecurityGroups"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateBroker",
      method: "PUT",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "AuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
        "AutoMinorVersionUpgrade": "b",
        "BrokerId": "s",
        "Configuration": toConfigurationId,
        "EngineVersion": "s",
        "HostInstanceType": "s",
        "LdapServerMetadata": toLdapServerMetadataOutput,
        "Logs": toLogs,
        "SecurityGroups": ["s"],
      },
    }, await resp.json());
  }

  async updateConfiguration(
    {abortSignal, ...params}: RequestConfig & s.UpdateConfigurationRequest,
  ): Promise<s.UpdateConfigurationResponse> {
    const body: jsonP.JSONObject = {
      data: params["Data"],
      description: params["Description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateConfiguration",
      method: "PUT",
      requestUri: cmnP.encodePath`/v1/configurations/${params["ConfigurationId"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Arn": "s",
        "Created": "d",
        "Id": "s",
        "LatestRevision": toConfigurationRevision,
        "Name": "s",
        "Warnings": [toSanitizationWarning],
      },
    }, await resp.json());
  }

  async updateUser(
    {abortSignal, ...params}: RequestConfig & s.UpdateUserRequest,
  ): Promise<s.UpdateUserResponse> {
    const body: jsonP.JSONObject = {
      consoleAccess: params["ConsoleAccess"],
      groups: params["Groups"],
      password: params["Password"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateUser",
      method: "PUT",
      requestUri: cmnP.encodePath`/v1/brokers/${params["BrokerId"]}/users/${params["Username"]}`,
      responseCode: 200,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromConfigurationId(input?: s.ConfigurationId | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    id: input["Id"],
    revision: input["Revision"],
  }
}
function toConfigurationId(root: jsonP.JSONValue): s.ConfigurationId {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "Revision": "n",
    },
  }, root);
}

function fromEncryptionOptions(input?: s.EncryptionOptions | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    kmsKeyId: input["KmsKeyId"],
    useAwsOwnedKey: input["UseAwsOwnedKey"],
  }
}
function toEncryptionOptions(root: jsonP.JSONValue): s.EncryptionOptions {
  return jsonP.readObj({
    required: {
      "UseAwsOwnedKey": "b",
    },
    optional: {
      "KmsKeyId": "s",
    },
  }, root);
}

function fromLdapServerMetadataInput(input?: s.LdapServerMetadataInput | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    hosts: input["Hosts"],
    roleBase: input["RoleBase"],
    roleName: input["RoleName"],
    roleSearchMatching: input["RoleSearchMatching"],
    roleSearchSubtree: input["RoleSearchSubtree"],
    serviceAccountPassword: input["ServiceAccountPassword"],
    serviceAccountUsername: input["ServiceAccountUsername"],
    userBase: input["UserBase"],
    userRoleName: input["UserRoleName"],
    userSearchMatching: input["UserSearchMatching"],
    userSearchSubtree: input["UserSearchSubtree"],
  }
}

function fromLogs(input?: s.Logs | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    audit: input["Audit"],
    general: input["General"],
  }
}
function toLogs(root: jsonP.JSONValue): s.Logs {
  return jsonP.readObj({
    required: {},
    optional: {
      "Audit": "b",
      "General": "b",
    },
  }, root);
}

function fromWeeklyStartTime(input?: s.WeeklyStartTime | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    dayOfWeek: input["DayOfWeek"],
    timeOfDay: input["TimeOfDay"],
    timeZone: input["TimeZone"],
  }
}
function toWeeklyStartTime(root: jsonP.JSONValue): s.WeeklyStartTime {
  return jsonP.readObj({
    required: {},
    optional: {
      "DayOfWeek": (x: jsonP.JSONValue) => cmnP.readEnum<s.DayOfWeek>(x),
      "TimeOfDay": "s",
      "TimeZone": "s",
    },
  }, root);
}

function fromUser(input?: s.User | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    consoleAccess: input["ConsoleAccess"],
    groups: input["Groups"],
    password: input["Password"],
    username: input["Username"],
  }
}

function toConfigurationRevision(root: jsonP.JSONValue): s.ConfigurationRevision {
  return jsonP.readObj({
    required: {},
    optional: {
      "Created": "d",
      "Description": "s",
      "Revision": "n",
    },
  }, root);
}

function toBrokerInstance(root: jsonP.JSONValue): s.BrokerInstance {
  return jsonP.readObj({
    required: {},
    optional: {
      "ConsoleURL": "s",
      "Endpoints": ["s"],
      "IpAddress": "s",
    },
  }, root);
}

function toConfigurations(root: jsonP.JSONValue): s.Configurations {
  return jsonP.readObj({
    required: {},
    optional: {
      "Current": toConfigurationId,
      "History": [toConfigurationId],
      "Pending": toConfigurationId,
    },
  }, root);
}

function toLdapServerMetadataOutput(root: jsonP.JSONValue): s.LdapServerMetadataOutput {
  return jsonP.readObj({
    required: {},
    optional: {
      "Hosts": ["s"],
      "RoleBase": "s",
      "RoleName": "s",
      "RoleSearchMatching": "s",
      "RoleSearchSubtree": "b",
      "ServiceAccountUsername": "s",
      "UserBase": "s",
      "UserRoleName": "s",
      "UserSearchMatching": "s",
      "UserSearchSubtree": "b",
    },
  }, root);
}

function toLogsSummary(root: jsonP.JSONValue): s.LogsSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "Audit": "b",
      "AuditLogGroup": "s",
      "General": "b",
      "GeneralLogGroup": "s",
      "Pending": toPendingLogs,
    },
  }, root);
}

function toPendingLogs(root: jsonP.JSONValue): s.PendingLogs {
  return jsonP.readObj({
    required: {},
    optional: {
      "Audit": "b",
      "General": "b",
    },
  }, root);
}

function toUserSummary(root: jsonP.JSONValue): s.UserSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "PendingChange": (x: jsonP.JSONValue) => cmnP.readEnum<s.ChangeType>(x),
      "Username": "s",
    },
  }, root);
}

function toBrokerEngineType(root: jsonP.JSONValue): s.BrokerEngineType {
  return jsonP.readObj({
    required: {},
    optional: {
      "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
      "EngineVersions": [toEngineVersion],
    },
  }, root);
}

function toEngineVersion(root: jsonP.JSONValue): s.EngineVersion {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
    },
  }, root);
}

function toBrokerInstanceOption(root: jsonP.JSONValue): s.BrokerInstanceOption {
  return jsonP.readObj({
    required: {},
    optional: {
      "AvailabilityZones": [toAvailabilityZone],
      "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
      "HostInstanceType": "s",
      "StorageType": (x: jsonP.JSONValue) => cmnP.readEnum<s.BrokerStorageType>(x),
      "SupportedDeploymentModes": [(x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentMode>(x)],
      "SupportedEngineVersions": ["s"],
    },
  }, root);
}

function toAvailabilityZone(root: jsonP.JSONValue): s.AvailabilityZone {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
    },
  }, root);
}

function toUserPendingChanges(root: jsonP.JSONValue): s.UserPendingChanges {
  return jsonP.readObj({
    required: {},
    optional: {
      "ConsoleAccess": "b",
      "Groups": ["s"],
      "PendingChange": (x: jsonP.JSONValue) => cmnP.readEnum<s.ChangeType>(x),
    },
  }, root);
}

function toBrokerSummary(root: jsonP.JSONValue): s.BrokerSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "BrokerArn": "s",
      "BrokerId": "s",
      "BrokerName": "s",
      "BrokerState": (x: jsonP.JSONValue) => cmnP.readEnum<s.BrokerState>(x),
      "Created": "d",
      "DeploymentMode": (x: jsonP.JSONValue) => cmnP.readEnum<s.DeploymentMode>(x),
      "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
      "HostInstanceType": "s",
    },
  }, root);
}

function toConfiguration(root: jsonP.JSONValue): s.Configuration {
  return jsonP.readObj({
    required: {},
    optional: {
      "Arn": "s",
      "AuthenticationStrategy": (x: jsonP.JSONValue) => cmnP.readEnum<s.AuthenticationStrategy>(x),
      "Created": "d",
      "Description": "s",
      "EngineType": (x: jsonP.JSONValue) => cmnP.readEnum<s.EngineType>(x),
      "EngineVersion": "s",
      "Id": "s",
      "LatestRevision": toConfigurationRevision,
      "Name": "s",
      "Tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}

function toSanitizationWarning(root: jsonP.JSONValue): s.SanitizationWarning {
  return jsonP.readObj({
    required: {},
    optional: {
      "AttributeName": "s",
      "ElementName": "s",
      "Reason": (x: jsonP.JSONValue) => cmnP.readEnum<s.SanitizationWarningReason>(x),
    },
  }, root);
}
