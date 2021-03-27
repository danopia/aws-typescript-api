// Autogenerated API client for: AWS Network Firewall

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class NetworkFirewall {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(NetworkFirewall.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-11-12",
    "endpointPrefix": "network-firewall",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "Network Firewall",
    "serviceFullName": "AWS Network Firewall",
    "serviceId": "Network Firewall",
    "signatureVersion": "v4",
    "signingName": "network-firewall",
    "targetPrefix": "NetworkFirewall_20201112",
    "uid": "network-firewall-2020-11-12"
  };

  async associateFirewallPolicy(
    {abortSignal, ...params}: RequestConfig & s.AssociateFirewallPolicyRequest,
  ): Promise<s.AssociateFirewallPolicyResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      FirewallPolicyArn: params["FirewallPolicyArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateFirewallPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "FirewallPolicyArn": "s",
        "UpdateToken": "s",
      },
    }, await resp.json());
  }

  async associateSubnets(
    {abortSignal, ...params}: RequestConfig & s.AssociateSubnetsRequest,
  ): Promise<s.AssociateSubnetsResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      SubnetMappings: params["SubnetMappings"]?.map(x => fromSubnetMapping(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateSubnets",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "SubnetMappings": [toSubnetMapping],
        "UpdateToken": "s",
      },
    }, await resp.json());
  }

  async createFirewall(
    {abortSignal, ...params}: RequestConfig & s.CreateFirewallRequest,
  ): Promise<s.CreateFirewallResponse> {
    const body: jsonP.JSONObject = {
      FirewallName: params["FirewallName"],
      FirewallPolicyArn: params["FirewallPolicyArn"],
      VpcId: params["VpcId"],
      SubnetMappings: params["SubnetMappings"]?.map(x => fromSubnetMapping(x)),
      DeleteProtection: params["DeleteProtection"],
      SubnetChangeProtection: params["SubnetChangeProtection"],
      FirewallPolicyChangeProtection: params["FirewallPolicyChangeProtection"],
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateFirewall",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Firewall": toFirewall,
        "FirewallStatus": toFirewallStatus,
      },
    }, await resp.json());
  }

  async createFirewallPolicy(
    {abortSignal, ...params}: RequestConfig & s.CreateFirewallPolicyRequest,
  ): Promise<s.CreateFirewallPolicyResponse> {
    const body: jsonP.JSONObject = {
      FirewallPolicyName: params["FirewallPolicyName"],
      FirewallPolicy: fromFirewallPolicy(params["FirewallPolicy"]),
      Description: params["Description"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateFirewallPolicy",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "FirewallPolicyResponse": toFirewallPolicyResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async createRuleGroup(
    {abortSignal, ...params}: RequestConfig & s.CreateRuleGroupRequest,
  ): Promise<s.CreateRuleGroupResponse> {
    const body: jsonP.JSONObject = {
      RuleGroupName: params["RuleGroupName"],
      RuleGroup: fromRuleGroup(params["RuleGroup"]),
      Rules: params["Rules"],
      Type: params["Type"],
      Description: params["Description"],
      Capacity: params["Capacity"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateRuleGroup",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "RuleGroupResponse": toRuleGroupResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async deleteFirewall(
    {abortSignal, ...params}: RequestConfig & s.DeleteFirewallRequest = {},
  ): Promise<s.DeleteFirewallResponse> {
    const body: jsonP.JSONObject = {
      FirewallName: params["FirewallName"],
      FirewallArn: params["FirewallArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteFirewall",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Firewall": toFirewall,
        "FirewallStatus": toFirewallStatus,
      },
    }, await resp.json());
  }

  async deleteFirewallPolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteFirewallPolicyRequest = {},
  ): Promise<s.DeleteFirewallPolicyResponse> {
    const body: jsonP.JSONObject = {
      FirewallPolicyName: params["FirewallPolicyName"],
      FirewallPolicyArn: params["FirewallPolicyArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteFirewallPolicy",
    });
    return jsonP.readObj({
      required: {
        "FirewallPolicyResponse": toFirewallPolicyResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async deleteResourcePolicy(
    {abortSignal, ...params}: RequestConfig & s.DeleteResourcePolicyRequest,
  ): Promise<s.DeleteResourcePolicyResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResourcePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteRuleGroup(
    {abortSignal, ...params}: RequestConfig & s.DeleteRuleGroupRequest = {},
  ): Promise<s.DeleteRuleGroupResponse> {
    const body: jsonP.JSONObject = {
      RuleGroupName: params["RuleGroupName"],
      RuleGroupArn: params["RuleGroupArn"],
      Type: params["Type"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteRuleGroup",
    });
    return jsonP.readObj({
      required: {
        "RuleGroupResponse": toRuleGroupResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async describeFirewall(
    {abortSignal, ...params}: RequestConfig & s.DescribeFirewallRequest = {},
  ): Promise<s.DescribeFirewallResponse> {
    const body: jsonP.JSONObject = {
      FirewallName: params["FirewallName"],
      FirewallArn: params["FirewallArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFirewall",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "UpdateToken": "s",
        "Firewall": toFirewall,
        "FirewallStatus": toFirewallStatus,
      },
    }, await resp.json());
  }

  async describeFirewallPolicy(
    {abortSignal, ...params}: RequestConfig & s.DescribeFirewallPolicyRequest = {},
  ): Promise<s.DescribeFirewallPolicyResponse> {
    const body: jsonP.JSONObject = {
      FirewallPolicyName: params["FirewallPolicyName"],
      FirewallPolicyArn: params["FirewallPolicyArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeFirewallPolicy",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "FirewallPolicyResponse": toFirewallPolicyResponse,
      },
      optional: {
        "FirewallPolicy": toFirewallPolicy,
      },
    }, await resp.json());
  }

  async describeLoggingConfiguration(
    {abortSignal, ...params}: RequestConfig & s.DescribeLoggingConfigurationRequest = {},
  ): Promise<s.DescribeLoggingConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeLoggingConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "LoggingConfiguration": toLoggingConfiguration,
      },
    }, await resp.json());
  }

  async describeResourcePolicy(
    {abortSignal, ...params}: RequestConfig & s.DescribeResourcePolicyRequest,
  ): Promise<s.DescribeResourcePolicyResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeResourcePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Policy": "s",
      },
    }, await resp.json());
  }

  async describeRuleGroup(
    {abortSignal, ...params}: RequestConfig & s.DescribeRuleGroupRequest = {},
  ): Promise<s.DescribeRuleGroupResponse> {
    const body: jsonP.JSONObject = {
      RuleGroupName: params["RuleGroupName"],
      RuleGroupArn: params["RuleGroupArn"],
      Type: params["Type"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeRuleGroup",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "RuleGroupResponse": toRuleGroupResponse,
      },
      optional: {
        "RuleGroup": toRuleGroup,
      },
    }, await resp.json());
  }

  async disassociateSubnets(
    {abortSignal, ...params}: RequestConfig & s.DisassociateSubnetsRequest,
  ): Promise<s.DisassociateSubnetsResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      SubnetIds: params["SubnetIds"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateSubnets",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "SubnetMappings": [toSubnetMapping],
        "UpdateToken": "s",
      },
    }, await resp.json());
  }

  async listFirewallPolicies(
    {abortSignal, ...params}: RequestConfig & s.ListFirewallPoliciesRequest = {},
  ): Promise<s.ListFirewallPoliciesResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListFirewallPolicies",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "FirewallPolicies": [toFirewallPolicyMetadata],
      },
    }, await resp.json());
  }

  async listFirewalls(
    {abortSignal, ...params}: RequestConfig & s.ListFirewallsRequest = {},
  ): Promise<s.ListFirewallsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      VpcIds: params["VpcIds"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListFirewalls",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Firewalls": [toFirewallMetadata],
      },
    }, await resp.json());
  }

  async listRuleGroups(
    {abortSignal, ...params}: RequestConfig & s.ListRuleGroupsRequest = {},
  ): Promise<s.ListRuleGroupsResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListRuleGroups",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "RuleGroups": [toRuleGroupMetadata],
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      NextToken: params["NextToken"],
      MaxResults: params["MaxResults"],
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async putResourcePolicy(
    {abortSignal, ...params}: RequestConfig & s.PutResourcePolicyRequest,
  ): Promise<s.PutResourcePolicyResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      Policy: params["Policy"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutResourcePolicy",
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
      ResourceArn: params["ResourceArn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateFirewallDeleteProtection(
    {abortSignal, ...params}: RequestConfig & s.UpdateFirewallDeleteProtectionRequest,
  ): Promise<s.UpdateFirewallDeleteProtectionResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      DeleteProtection: params["DeleteProtection"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFirewallDeleteProtection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "DeleteProtection": "b",
        "UpdateToken": "s",
      },
    }, await resp.json());
  }

  async updateFirewallDescription(
    {abortSignal, ...params}: RequestConfig & s.UpdateFirewallDescriptionRequest = {},
  ): Promise<s.UpdateFirewallDescriptionResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      Description: params["Description"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFirewallDescription",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "Description": "s",
        "UpdateToken": "s",
      },
    }, await resp.json());
  }

  async updateFirewallPolicy(
    {abortSignal, ...params}: RequestConfig & s.UpdateFirewallPolicyRequest,
  ): Promise<s.UpdateFirewallPolicyResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallPolicyArn: params["FirewallPolicyArn"],
      FirewallPolicyName: params["FirewallPolicyName"],
      FirewallPolicy: fromFirewallPolicy(params["FirewallPolicy"]),
      Description: params["Description"],
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFirewallPolicy",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "FirewallPolicyResponse": toFirewallPolicyResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async updateFirewallPolicyChangeProtection(
    {abortSignal, ...params}: RequestConfig & s.UpdateFirewallPolicyChangeProtectionRequest,
  ): Promise<s.UpdateFirewallPolicyChangeProtectionResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      FirewallPolicyChangeProtection: params["FirewallPolicyChangeProtection"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateFirewallPolicyChangeProtection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "UpdateToken": "s",
        "FirewallArn": "s",
        "FirewallName": "s",
        "FirewallPolicyChangeProtection": "b",
      },
    }, await resp.json());
  }

  async updateLoggingConfiguration(
    {abortSignal, ...params}: RequestConfig & s.UpdateLoggingConfigurationRequest = {},
  ): Promise<s.UpdateLoggingConfigurationResponse> {
    const body: jsonP.JSONObject = {
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      LoggingConfiguration: fromLoggingConfiguration(params["LoggingConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateLoggingConfiguration",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "FirewallArn": "s",
        "FirewallName": "s",
        "LoggingConfiguration": toLoggingConfiguration,
      },
    }, await resp.json());
  }

  async updateRuleGroup(
    {abortSignal, ...params}: RequestConfig & s.UpdateRuleGroupRequest,
  ): Promise<s.UpdateRuleGroupResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      RuleGroupArn: params["RuleGroupArn"],
      RuleGroupName: params["RuleGroupName"],
      RuleGroup: fromRuleGroup(params["RuleGroup"]),
      Rules: params["Rules"],
      Type: params["Type"],
      Description: params["Description"],
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateRuleGroup",
    });
    return jsonP.readObj({
      required: {
        "UpdateToken": "s",
        "RuleGroupResponse": toRuleGroupResponse,
      },
      optional: {},
    }, await resp.json());
  }

  async updateSubnetChangeProtection(
    {abortSignal, ...params}: RequestConfig & s.UpdateSubnetChangeProtectionRequest,
  ): Promise<s.UpdateSubnetChangeProtectionResponse> {
    const body: jsonP.JSONObject = {
      UpdateToken: params["UpdateToken"],
      FirewallArn: params["FirewallArn"],
      FirewallName: params["FirewallName"],
      SubnetChangeProtection: params["SubnetChangeProtection"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateSubnetChangeProtection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "UpdateToken": "s",
        "FirewallArn": "s",
        "FirewallName": "s",
        "SubnetChangeProtection": "b",
      },
    }, await resp.json());
  }

}

function fromSubnetMapping(input?: s.SubnetMapping | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SubnetId: input["SubnetId"],
  }
}
function toSubnetMapping(root: jsonP.JSONValue): s.SubnetMapping {
  return jsonP.readObj({
    required: {
      "SubnetId": "s",
    },
    optional: {},
  }, root);
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
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromFirewallPolicy(input?: s.FirewallPolicy | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StatelessRuleGroupReferences: input["StatelessRuleGroupReferences"]?.map(x => fromStatelessRuleGroupReference(x)),
    StatelessDefaultActions: input["StatelessDefaultActions"],
    StatelessFragmentDefaultActions: input["StatelessFragmentDefaultActions"],
    StatelessCustomActions: input["StatelessCustomActions"]?.map(x => fromCustomAction(x)),
    StatefulRuleGroupReferences: input["StatefulRuleGroupReferences"]?.map(x => fromStatefulRuleGroupReference(x)),
  }
}
function toFirewallPolicy(root: jsonP.JSONValue): s.FirewallPolicy {
  return jsonP.readObj({
    required: {
      "StatelessDefaultActions": ["s"],
      "StatelessFragmentDefaultActions": ["s"],
    },
    optional: {
      "StatelessRuleGroupReferences": [toStatelessRuleGroupReference],
      "StatelessCustomActions": [toCustomAction],
      "StatefulRuleGroupReferences": [toStatefulRuleGroupReference],
    },
  }, root);
}

function fromStatelessRuleGroupReference(input?: s.StatelessRuleGroupReference | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ResourceArn: input["ResourceArn"],
    Priority: input["Priority"],
  }
}
function toStatelessRuleGroupReference(root: jsonP.JSONValue): s.StatelessRuleGroupReference {
  return jsonP.readObj({
    required: {
      "ResourceArn": "s",
      "Priority": "n",
    },
    optional: {},
  }, root);
}

function fromCustomAction(input?: s.CustomAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ActionName: input["ActionName"],
    ActionDefinition: fromActionDefinition(input["ActionDefinition"]),
  }
}
function toCustomAction(root: jsonP.JSONValue): s.CustomAction {
  return jsonP.readObj({
    required: {
      "ActionName": "s",
      "ActionDefinition": toActionDefinition,
    },
    optional: {},
  }, root);
}

function fromActionDefinition(input?: s.ActionDefinition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PublishMetricAction: fromPublishMetricAction(input["PublishMetricAction"]),
  }
}
function toActionDefinition(root: jsonP.JSONValue): s.ActionDefinition {
  return jsonP.readObj({
    required: {},
    optional: {
      "PublishMetricAction": toPublishMetricAction,
    },
  }, root);
}

function fromPublishMetricAction(input?: s.PublishMetricAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Dimensions: input["Dimensions"]?.map(x => fromDimension(x)),
  }
}
function toPublishMetricAction(root: jsonP.JSONValue): s.PublishMetricAction {
  return jsonP.readObj({
    required: {
      "Dimensions": [toDimension],
    },
    optional: {},
  }, root);
}

function fromDimension(input?: s.Dimension | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Value: input["Value"],
  }
}
function toDimension(root: jsonP.JSONValue): s.Dimension {
  return jsonP.readObj({
    required: {
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromStatefulRuleGroupReference(input?: s.StatefulRuleGroupReference | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ResourceArn: input["ResourceArn"],
  }
}
function toStatefulRuleGroupReference(root: jsonP.JSONValue): s.StatefulRuleGroupReference {
  return jsonP.readObj({
    required: {
      "ResourceArn": "s",
    },
    optional: {},
  }, root);
}

function fromRuleGroup(input?: s.RuleGroup | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RuleVariables: fromRuleVariables(input["RuleVariables"]),
    RulesSource: fromRulesSource(input["RulesSource"]),
  }
}
function toRuleGroup(root: jsonP.JSONValue): s.RuleGroup {
  return jsonP.readObj({
    required: {
      "RulesSource": toRulesSource,
    },
    optional: {
      "RuleVariables": toRuleVariables,
    },
  }, root);
}

function fromRuleVariables(input?: s.RuleVariables | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    IPSets: jsonP.serializeMap(input["IPSets"], x => fromIPSet(x)),
    PortSets: jsonP.serializeMap(input["PortSets"], x => fromPortSet(x)),
  }
}
function toRuleVariables(root: jsonP.JSONValue): s.RuleVariables {
  return jsonP.readObj({
    required: {},
    optional: {
      "IPSets": x => jsonP.readMap(String, toIPSet, x),
      "PortSets": x => jsonP.readMap(String, toPortSet, x),
    },
  }, root);
}

function fromIPSet(input?: s.IPSet | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Definition: input["Definition"],
  }
}
function toIPSet(root: jsonP.JSONValue): s.IPSet {
  return jsonP.readObj({
    required: {
      "Definition": ["s"],
    },
    optional: {},
  }, root);
}

function fromPortSet(input?: s.PortSet | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Definition: input["Definition"],
  }
}
function toPortSet(root: jsonP.JSONValue): s.PortSet {
  return jsonP.readObj({
    required: {},
    optional: {
      "Definition": ["s"],
    },
  }, root);
}

function fromRulesSource(input?: s.RulesSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RulesString: input["RulesString"],
    RulesSourceList: fromRulesSourceList(input["RulesSourceList"]),
    StatefulRules: input["StatefulRules"]?.map(x => fromStatefulRule(x)),
    StatelessRulesAndCustomActions: fromStatelessRulesAndCustomActions(input["StatelessRulesAndCustomActions"]),
  }
}
function toRulesSource(root: jsonP.JSONValue): s.RulesSource {
  return jsonP.readObj({
    required: {},
    optional: {
      "RulesString": "s",
      "RulesSourceList": toRulesSourceList,
      "StatefulRules": [toStatefulRule],
      "StatelessRulesAndCustomActions": toStatelessRulesAndCustomActions,
    },
  }, root);
}

function fromRulesSourceList(input?: s.RulesSourceList | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Targets: input["Targets"],
    TargetTypes: input["TargetTypes"],
    GeneratedRulesType: input["GeneratedRulesType"],
  }
}
function toRulesSourceList(root: jsonP.JSONValue): s.RulesSourceList {
  return jsonP.readObj({
    required: {
      "Targets": ["s"],
      "TargetTypes": [(x: jsonP.JSONValue) => cmnP.readEnum<s.TargetType>(x)],
      "GeneratedRulesType": (x: jsonP.JSONValue) => cmnP.readEnum<s.GeneratedRulesType>(x),
    },
    optional: {},
  }, root);
}

function fromStatefulRule(input?: s.StatefulRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Action: input["Action"],
    Header: fromHeader(input["Header"]),
    RuleOptions: input["RuleOptions"]?.map(x => fromRuleOption(x)),
  }
}
function toStatefulRule(root: jsonP.JSONValue): s.StatefulRule {
  return jsonP.readObj({
    required: {
      "Action": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatefulAction>(x),
      "Header": toHeader,
      "RuleOptions": [toRuleOption],
    },
    optional: {},
  }, root);
}

function fromHeader(input?: s.Header | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Protocol: input["Protocol"],
    Source: input["Source"],
    SourcePort: input["SourcePort"],
    Direction: input["Direction"],
    Destination: input["Destination"],
    DestinationPort: input["DestinationPort"],
  }
}
function toHeader(root: jsonP.JSONValue): s.Header {
  return jsonP.readObj({
    required: {
      "Protocol": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatefulRuleProtocol>(x),
      "Source": "s",
      "SourcePort": "s",
      "Direction": (x: jsonP.JSONValue) => cmnP.readEnum<s.StatefulRuleDirection>(x),
      "Destination": "s",
      "DestinationPort": "s",
    },
    optional: {},
  }, root);
}

function fromRuleOption(input?: s.RuleOption | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Keyword: input["Keyword"],
    Settings: input["Settings"],
  }
}
function toRuleOption(root: jsonP.JSONValue): s.RuleOption {
  return jsonP.readObj({
    required: {
      "Keyword": "s",
    },
    optional: {
      "Settings": ["s"],
    },
  }, root);
}

function fromStatelessRulesAndCustomActions(input?: s.StatelessRulesAndCustomActions | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    StatelessRules: input["StatelessRules"]?.map(x => fromStatelessRule(x)),
    CustomActions: input["CustomActions"]?.map(x => fromCustomAction(x)),
  }
}
function toStatelessRulesAndCustomActions(root: jsonP.JSONValue): s.StatelessRulesAndCustomActions {
  return jsonP.readObj({
    required: {
      "StatelessRules": [toStatelessRule],
    },
    optional: {
      "CustomActions": [toCustomAction],
    },
  }, root);
}

function fromStatelessRule(input?: s.StatelessRule | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    RuleDefinition: fromRuleDefinition(input["RuleDefinition"]),
    Priority: input["Priority"],
  }
}
function toStatelessRule(root: jsonP.JSONValue): s.StatelessRule {
  return jsonP.readObj({
    required: {
      "RuleDefinition": toRuleDefinition,
      "Priority": "n",
    },
    optional: {},
  }, root);
}

function fromRuleDefinition(input?: s.RuleDefinition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MatchAttributes: fromMatchAttributes(input["MatchAttributes"]),
    Actions: input["Actions"],
  }
}
function toRuleDefinition(root: jsonP.JSONValue): s.RuleDefinition {
  return jsonP.readObj({
    required: {
      "MatchAttributes": toMatchAttributes,
      "Actions": ["s"],
    },
    optional: {},
  }, root);
}

function fromMatchAttributes(input?: s.MatchAttributes | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Sources: input["Sources"]?.map(x => fromAddress(x)),
    Destinations: input["Destinations"]?.map(x => fromAddress(x)),
    SourcePorts: input["SourcePorts"]?.map(x => fromPortRange(x)),
    DestinationPorts: input["DestinationPorts"]?.map(x => fromPortRange(x)),
    Protocols: input["Protocols"],
    TCPFlags: input["TCPFlags"]?.map(x => fromTCPFlagField(x)),
  }
}
function toMatchAttributes(root: jsonP.JSONValue): s.MatchAttributes {
  return jsonP.readObj({
    required: {},
    optional: {
      "Sources": [toAddress],
      "Destinations": [toAddress],
      "SourcePorts": [toPortRange],
      "DestinationPorts": [toPortRange],
      "Protocols": ["n"],
      "TCPFlags": [toTCPFlagField],
    },
  }, root);
}

function fromAddress(input?: s.Address | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AddressDefinition: input["AddressDefinition"],
  }
}
function toAddress(root: jsonP.JSONValue): s.Address {
  return jsonP.readObj({
    required: {
      "AddressDefinition": "s",
    },
    optional: {},
  }, root);
}

function fromPortRange(input?: s.PortRange | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    FromPort: input["FromPort"],
    ToPort: input["ToPort"],
  }
}
function toPortRange(root: jsonP.JSONValue): s.PortRange {
  return jsonP.readObj({
    required: {
      "FromPort": "n",
      "ToPort": "n",
    },
    optional: {},
  }, root);
}

function fromTCPFlagField(input?: s.TCPFlagField | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Flags: input["Flags"],
    Masks: input["Masks"],
  }
}
function toTCPFlagField(root: jsonP.JSONValue): s.TCPFlagField {
  return jsonP.readObj({
    required: {
      "Flags": [(x: jsonP.JSONValue) => cmnP.readEnum<s.TCPFlag>(x)],
    },
    optional: {
      "Masks": [(x: jsonP.JSONValue) => cmnP.readEnum<s.TCPFlag>(x)],
    },
  }, root);
}

function fromLoggingConfiguration(input?: s.LoggingConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    LogDestinationConfigs: input["LogDestinationConfigs"]?.map(x => fromLogDestinationConfig(x)),
  }
}
function toLoggingConfiguration(root: jsonP.JSONValue): s.LoggingConfiguration {
  return jsonP.readObj({
    required: {
      "LogDestinationConfigs": [toLogDestinationConfig],
    },
    optional: {},
  }, root);
}

function fromLogDestinationConfig(input?: s.LogDestinationConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    LogType: input["LogType"],
    LogDestinationType: input["LogDestinationType"],
    LogDestination: input["LogDestination"],
  }
}
function toLogDestinationConfig(root: jsonP.JSONValue): s.LogDestinationConfig {
  return jsonP.readObj({
    required: {
      "LogType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LogType>(x),
      "LogDestinationType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LogDestinationType>(x),
      "LogDestination": x => jsonP.readMap(String, String, x),
    },
    optional: {},
  }, root);
}

function toFirewall(root: jsonP.JSONValue): s.Firewall {
  return jsonP.readObj({
    required: {
      "FirewallPolicyArn": "s",
      "VpcId": "s",
      "SubnetMappings": [toSubnetMapping],
      "FirewallId": "s",
    },
    optional: {
      "FirewallName": "s",
      "FirewallArn": "s",
      "DeleteProtection": "b",
      "SubnetChangeProtection": "b",
      "FirewallPolicyChangeProtection": "b",
      "Description": "s",
      "Tags": [toTag],
    },
  }, root);
}

function toFirewallStatus(root: jsonP.JSONValue): s.FirewallStatus {
  return jsonP.readObj({
    required: {
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.FirewallStatusValue>(x),
      "ConfigurationSyncStateSummary": (x: jsonP.JSONValue) => cmnP.readEnum<s.ConfigurationSyncState>(x),
    },
    optional: {
      "SyncStates": x => jsonP.readMap(String, toSyncState, x),
    },
  }, root);
}

function toSyncState(root: jsonP.JSONValue): s.SyncState {
  return jsonP.readObj({
    required: {},
    optional: {
      "Attachment": toAttachment,
      "Config": x => jsonP.readMap(String, toPerObjectStatus, x),
    },
  }, root);
}

function toAttachment(root: jsonP.JSONValue): s.Attachment {
  return jsonP.readObj({
    required: {},
    optional: {
      "SubnetId": "s",
      "EndpointId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.AttachmentStatus>(x),
    },
  }, root);
}

function toPerObjectStatus(root: jsonP.JSONValue): s.PerObjectStatus {
  return jsonP.readObj({
    required: {},
    optional: {
      "SyncStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.PerObjectSyncStatus>(x),
      "UpdateToken": "s",
    },
  }, root);
}

function toFirewallPolicyResponse(root: jsonP.JSONValue): s.FirewallPolicyResponse {
  return jsonP.readObj({
    required: {
      "FirewallPolicyName": "s",
      "FirewallPolicyArn": "s",
      "FirewallPolicyId": "s",
    },
    optional: {
      "Description": "s",
      "FirewallPolicyStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceStatus>(x),
      "Tags": [toTag],
    },
  }, root);
}

function toRuleGroupResponse(root: jsonP.JSONValue): s.RuleGroupResponse {
  return jsonP.readObj({
    required: {
      "RuleGroupArn": "s",
      "RuleGroupName": "s",
      "RuleGroupId": "s",
    },
    optional: {
      "Description": "s",
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<s.RuleGroupType>(x),
      "Capacity": "n",
      "RuleGroupStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResourceStatus>(x),
      "Tags": [toTag],
    },
  }, root);
}

function toFirewallPolicyMetadata(root: jsonP.JSONValue): s.FirewallPolicyMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Arn": "s",
    },
  }, root);
}

function toFirewallMetadata(root: jsonP.JSONValue): s.FirewallMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "FirewallName": "s",
      "FirewallArn": "s",
    },
  }, root);
}

function toRuleGroupMetadata(root: jsonP.JSONValue): s.RuleGroupMetadata {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "Arn": "s",
    },
  }, root);
}
