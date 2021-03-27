// Autogenerated API structures for: AWS Elemental MediaPackage VOD

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface ConfigureLogsRequest {
  EgressAccessLogs?: EgressAccessLogs | null;
  Id: string;
}

// refs: 1 - tags: named, input
export interface CreateAssetRequest {
  Id: string;
  PackagingGroupId: string;
  ResourceId?: string | null;
  SourceArn: string;
  SourceRoleArn: string;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreatePackagingConfigurationRequest {
  CmafPackage?: CmafPackage | null;
  DashPackage?: DashPackage | null;
  HlsPackage?: HlsPackage | null;
  Id: string;
  MssPackage?: MssPackage | null;
  PackagingGroupId: string;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreatePackagingGroupRequest {
  Authorization?: Authorization | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id: string;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteAssetRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeletePackagingConfigurationRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeletePackagingGroupRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribeAssetRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribePackagingConfigurationRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribePackagingGroupRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface ListAssetsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  PackagingGroupId?: string | null;
}

// refs: 1 - tags: named, input
export interface ListPackagingConfigurationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  PackagingGroupId?: string | null;
}

// refs: 1 - tags: named, input
export interface ListPackagingGroupsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
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
export interface UpdatePackagingGroupRequest {
  Authorization?: Authorization | null;
  Id: string;
}

// refs: 1 - tags: named, output
export interface ConfigureLogsResponse {
  Arn?: string | null;
  Authorization?: Authorization | null;
  DomainName?: string | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreateAssetResponse {
  Arn?: string | null;
  CreatedAt?: string | null;
  EgressEndpoints?: EgressEndpoint[] | null;
  Id?: string | null;
  PackagingGroupId?: string | null;
  ResourceId?: string | null;
  SourceArn?: string | null;
  SourceRoleArn?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreatePackagingConfigurationResponse {
  Arn?: string | null;
  CmafPackage?: CmafPackage | null;
  DashPackage?: DashPackage | null;
  HlsPackage?: HlsPackage | null;
  Id?: string | null;
  MssPackage?: MssPackage | null;
  PackagingGroupId?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface CreatePackagingGroupResponse {
  Arn?: string | null;
  Authorization?: Authorization | null;
  DomainName?: string | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DeleteAssetResponse {
}

// refs: 1 - tags: named, output
export interface DeletePackagingConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface DeletePackagingGroupResponse {
}

// refs: 1 - tags: named, output
export interface DescribeAssetResponse {
  Arn?: string | null;
  CreatedAt?: string | null;
  EgressEndpoints?: EgressEndpoint[] | null;
  Id?: string | null;
  PackagingGroupId?: string | null;
  ResourceId?: string | null;
  SourceArn?: string | null;
  SourceRoleArn?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DescribePackagingConfigurationResponse {
  Arn?: string | null;
  CmafPackage?: CmafPackage | null;
  DashPackage?: DashPackage | null;
  HlsPackage?: HlsPackage | null;
  Id?: string | null;
  MssPackage?: MssPackage | null;
  PackagingGroupId?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DescribePackagingGroupResponse {
  Arn?: string | null;
  Authorization?: Authorization | null;
  DomainName?: string | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListAssetsResponse {
  Assets?: AssetShallow[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListPackagingConfigurationsResponse {
  NextToken?: string | null;
  PackagingConfigurations?: PackagingConfiguration[] | null;
}

// refs: 1 - tags: named, output
export interface ListPackagingGroupsResponse {
  NextToken?: string | null;
  PackagingGroups?: PackagingGroup[] | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface UpdatePackagingGroupResponse {
  Arn?: string | null;
  Authorization?: Authorization | null;
  DomainName?: string | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 7 - tags: input, named, interface, output
export interface EgressAccessLogs {
  LogGroupName?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface CmafPackage {
  Encryption?: CmafEncryption | null;
  HlsManifests: HlsManifest[];
  SegmentDurationSeconds?: number | null;
}

// refs: 4 - tags: input, named, interface, output
export interface CmafEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}

// refs: 16 - tags: input, named, interface, output
export interface SpekeKeyProvider {
  RoleArn: string;
  SystemIds: string[];
  Url: string;
}

// refs: 8 - tags: input, named, interface, output
export interface HlsManifest {
  AdMarkers?: AdMarkers | null;
  IncludeIframeOnlyStream?: boolean | null;
  ManifestName?: string | null;
  ProgramDateTimeIntervalSeconds?: number | null;
  RepeatExtXKey?: boolean | null;
  StreamSelection?: StreamSelection | null;
}

// refs: 8 - tags: input, named, enum, output
export type AdMarkers =
| "NONE"
| "SCTE35_ENHANCED"
| "PASSTHROUGH"
| cmnP.UnexpectedEnumValue;

// refs: 16 - tags: input, named, interface, output
export interface StreamSelection {
  MaxVideoBitsPerSecond?: number | null;
  MinVideoBitsPerSecond?: number | null;
  StreamOrder?: StreamOrder | null;
}

// refs: 16 - tags: input, named, enum, output
export type StreamOrder =
| "ORIGINAL"
| "VIDEO_BITRATE_ASCENDING"
| "VIDEO_BITRATE_DESCENDING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface DashPackage {
  DashManifests: DashManifest[];
  Encryption?: DashEncryption | null;
  PeriodTriggers?: __PeriodTriggersElement[] | null;
  SegmentDurationSeconds?: number | null;
  SegmentTemplateFormat?: SegmentTemplateFormat | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DashManifest {
  ManifestLayout?: ManifestLayout | null;
  ManifestName?: string | null;
  MinBufferTimeSeconds?: number | null;
  Profile?: Profile | null;
  StreamSelection?: StreamSelection | null;
}

// refs: 4 - tags: input, named, enum, output
export type ManifestLayout =
| "FULL"
| "COMPACT"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type Profile =
| "NONE"
| "HBBTV_1_5"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface DashEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}

// refs: 4 - tags: input, named, enum, output
export type __PeriodTriggersElement =
| "ADS"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type SegmentTemplateFormat =
| "NUMBER_WITH_TIMELINE"
| "TIME_WITH_TIMELINE"
| "NUMBER_WITH_DURATION"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface HlsPackage {
  Encryption?: HlsEncryption | null;
  HlsManifests: HlsManifest[];
  SegmentDurationSeconds?: number | null;
  UseAudioRenditionGroup?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface HlsEncryption {
  ConstantInitializationVector?: string | null;
  EncryptionMethod?: EncryptionMethod | null;
  SpekeKeyProvider: SpekeKeyProvider;
}

// refs: 4 - tags: input, named, enum, output
export type EncryptionMethod =
| "AES_128"
| "SAMPLE_AES"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface MssPackage {
  Encryption?: MssEncryption | null;
  MssManifests: MssManifest[];
  SegmentDurationSeconds?: number | null;
}

// refs: 4 - tags: input, named, interface, output
export interface MssEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}

// refs: 4 - tags: input, named, interface, output
export interface MssManifest {
  ManifestName?: string | null;
  StreamSelection?: StreamSelection | null;
}

// refs: 7 - tags: input, named, interface, output
export interface Authorization {
  CdnIdentifierSecret: string;
  SecretsRoleArn: string;
}

// refs: 2 - tags: output, named, interface
export interface EgressEndpoint {
  PackagingConfigurationId?: string | null;
  Url?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface AssetShallow {
  Arn?: string | null;
  CreatedAt?: string | null;
  Id?: string | null;
  PackagingGroupId?: string | null;
  ResourceId?: string | null;
  SourceArn?: string | null;
  SourceRoleArn?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface PackagingConfiguration {
  Arn?: string | null;
  CmafPackage?: CmafPackage | null;
  DashPackage?: DashPackage | null;
  HlsPackage?: HlsPackage | null;
  Id?: string | null;
  MssPackage?: MssPackage | null;
  PackagingGroupId?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface PackagingGroup {
  Arn?: string | null;
  Authorization?: Authorization | null;
  DomainName?: string | null;
  EgressAccessLogs?: EgressAccessLogs | null;
  Id?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}
