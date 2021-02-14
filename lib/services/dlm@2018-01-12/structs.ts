// Autogenerated API structures for: Amazon Data Lifecycle Manager

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateLifecyclePolicyRequest {
  ExecutionRoleArn: string;
  Description: string;
  State: SettablePolicyStateValues;
  PolicyDetails: PolicyDetails;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteLifecyclePolicyRequest {
  PolicyId: string;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePoliciesRequest {
  PolicyIds?: string[] | null;
  State?: GettablePolicyStateValues | null;
  ResourceTypes?: ResourceTypeValues[] | null;
  TargetTags?: string[] | null;
  TagsToAdd?: string[] | null;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePolicyRequest {
  PolicyId: string;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateLifecyclePolicyRequest {
  PolicyId: string;
  ExecutionRoleArn?: string | null;
  State?: SettablePolicyStateValues | null;
  Description?: string | null;
  PolicyDetails?: PolicyDetails | null;
}

// refs: 1 - tags: named, output
export interface CreateLifecyclePolicyResponse {
  PolicyId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteLifecyclePolicyResponse {
}

// refs: 1 - tags: named, output
export interface GetLifecyclePoliciesResponse {
  Policies?: LifecyclePolicySummary[] | null;
}

// refs: 1 - tags: named, output
export interface GetLifecyclePolicyResponse {
  Policy?: LifecyclePolicy | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateLifecyclePolicyResponse {
}

// refs: 2 - tags: input, named, enum
export type SettablePolicyStateValues =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface PolicyDetails {
  PolicyType?: PolicyTypeValues | null;
  ResourceTypes?: ResourceTypeValues[] | null;
  ResourceLocations?: ResourceLocationValues[] | null;
  TargetTags?: Tag[] | null;
  Schedules?: Schedule[] | null;
  Parameters?: Parameters | null;
  EventSource?: EventSource | null;
  Actions?: Action[] | null;
}

// refs: 4 - tags: input, named, enum, output
export type PolicyTypeValues =
| "EBS_SNAPSHOT_MANAGEMENT"
| "IMAGE_MANAGEMENT"
| "EVENT_BASED_POLICY"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type ResourceTypeValues =
| "VOLUME"
| "INSTANCE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ResourceLocationValues =
| "CLOUD"
| "OUTPOST"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 3 - tags: input, named, interface, output
export interface Schedule {
  Name?: string | null;
  CopyTags?: boolean | null;
  TagsToAdd?: Tag[] | null;
  VariableTags?: Tag[] | null;
  CreateRule?: CreateRule | null;
  RetainRule?: RetainRule | null;
  FastRestoreRule?: FastRestoreRule | null;
  CrossRegionCopyRules?: CrossRegionCopyRule[] | null;
  ShareRules?: ShareRule[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface CreateRule {
  Location?: LocationValues | null;
  Interval?: number | null;
  IntervalUnit?: IntervalUnitValues | null;
  Times?: string[] | null;
  CronExpression?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type LocationValues =
| "CLOUD"
| "OUTPOST_LOCAL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type IntervalUnitValues =
| "HOURS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface RetainRule {
  Count?: number | null;
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
}

// refs: 15 - tags: input, named, enum, output
export type RetentionIntervalUnitValues =
| "DAYS"
| "WEEKS"
| "MONTHS"
| "YEARS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface FastRestoreRule {
  Count?: number | null;
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
  AvailabilityZones: string[];
}

// refs: 3 - tags: input, named, interface, output
export interface CrossRegionCopyRule {
  TargetRegion?: string | null;
  Target?: string | null;
  Encrypted: boolean;
  CmkArn?: string | null;
  CopyTags?: boolean | null;
  RetainRule?: CrossRegionCopyRetainRule | null;
}

// refs: 6 - tags: input, named, interface, output
export interface CrossRegionCopyRetainRule {
  Interval?: number | null;
  IntervalUnit?: RetentionIntervalUnitValues | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ShareRule {
  TargetAccounts: string[];
  UnshareInterval?: number | null;
  UnshareIntervalUnit?: RetentionIntervalUnitValues | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Parameters {
  ExcludeBootVolume?: boolean | null;
  NoReboot?: boolean | null;
}

// refs: 3 - tags: input, named, interface, output
export interface EventSource {
  Type: EventSourceValues;
  Parameters?: EventParameters | null;
}

// refs: 3 - tags: input, named, enum, output
export type EventSourceValues =
| "MANAGED_CWE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface EventParameters {
  EventType: EventTypeValues;
  SnapshotOwner: string[];
  DescriptionRegex: string;
}

// refs: 3 - tags: input, named, enum, output
export type EventTypeValues =
| "shareSnapshot"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface Action {
  Name: string;
  CrossRegionCopy: CrossRegionCopyAction[];
}

// refs: 3 - tags: input, named, interface, output
export interface CrossRegionCopyAction {
  Target: string;
  EncryptionConfiguration: EncryptionConfiguration;
  RetainRule?: CrossRegionCopyRetainRule | null;
}

// refs: 3 - tags: input, named, interface, output
export interface EncryptionConfiguration {
  Encrypted: boolean;
  CmkArn?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type GettablePolicyStateValues =
| "ENABLED"
| "DISABLED"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicySummary {
  PolicyId?: string | null;
  Description?: string | null;
  State?: GettablePolicyStateValues | null;
  Tags?: { [key: string]: string | null | undefined } | null;
  PolicyType?: PolicyTypeValues | null;
}

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicy {
  PolicyId?: string | null;
  Description?: string | null;
  State?: GettablePolicyStateValues | null;
  StatusMessage?: string | null;
  ExecutionRoleArn?: string | null;
  DateCreated?: Date | number | null;
  DateModified?: Date | number | null;
  PolicyDetails?: PolicyDetails | null;
  Tags?: { [key: string]: string | null | undefined } | null;
  PolicyArn?: string | null;
}