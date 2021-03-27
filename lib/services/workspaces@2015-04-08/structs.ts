// Autogenerated API structures for: Amazon WorkSpaces

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateConnectionAliasRequest {
  AliasId: string;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface AssociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: string[];
}

// refs: 1 - tags: named, input
export interface AuthorizeIpRulesRequest {
  GroupId: string;
  UserRules: IpRuleItem[];
}

// refs: 1 - tags: named, input
export interface CopyWorkspaceImageRequest {
  Name: string;
  Description?: string | null;
  SourceImageId: string;
  SourceRegion: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateConnectionAliasRequest {
  ConnectionString: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateIpGroupRequest {
  GroupName: string;
  GroupDesc?: string | null;
  UserRules?: IpRuleItem[] | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateTagsRequest {
  ResourceId: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface CreateWorkspaceBundleRequest {
  BundleName: string;
  BundleDescription: string;
  ImageId: string;
  ComputeType: ComputeType;
  UserStorage: UserStorage;
  RootStorage?: RootStorage | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateWorkspacesRequest {
  Workspaces: WorkspaceRequest[];
}

// refs: 1 - tags: named, input
export interface DeleteConnectionAliasRequest {
  AliasId: string;
}

// refs: 1 - tags: named, input
export interface DeleteIpGroupRequest {
  GroupId: string;
}

// refs: 1 - tags: named, input
export interface DeleteTagsRequest {
  ResourceId: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface DeleteWorkspaceBundleRequest {
  BundleId?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteWorkspaceImageRequest {
  ImageId: string;
}

// refs: 1 - tags: named, input
export interface DeregisterWorkspaceDirectoryRequest {
  DirectoryId: string;
}

// refs: 1 - tags: named, input
export interface DescribeAccountRequest {
}

// refs: 1 - tags: named, input
export interface DescribeAccountModificationsRequest {
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeClientPropertiesRequest {
  ResourceIds: string[];
}

// refs: 1 - tags: named, input
export interface DescribeConnectionAliasPermissionsRequest {
  AliasId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectionAliasesRequest {
  AliasIds?: string[] | null;
  ResourceId?: string | null;
  Limit?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeIpGroupsRequest {
  GroupIds?: string[] | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeTagsRequest {
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspaceBundlesRequest {
  BundleIds?: string[] | null;
  Owner?: string | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspaceDirectoriesRequest {
  DirectoryIds?: string[] | null;
  Limit?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspaceImagePermissionsRequest {
  ImageId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspaceImagesRequest {
  ImageIds?: string[] | null;
  ImageType?: ImageType | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspaceSnapshotsRequest {
  WorkspaceId: string;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspacesRequest {
  WorkspaceIds?: string[] | null;
  DirectoryId?: string | null;
  UserName?: string | null;
  BundleId?: string | null;
  Limit?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeWorkspacesConnectionStatusRequest {
  WorkspaceIds?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DisassociateConnectionAliasRequest {
  AliasId: string;
}

// refs: 1 - tags: named, input
export interface DisassociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: string[];
}

// refs: 1 - tags: named, input
export interface ImportWorkspaceImageRequest {
  Ec2ImageId: string;
  IngestionProcess: WorkspaceImageIngestionProcess;
  ImageName: string;
  ImageDescription: string;
  Tags?: Tag[] | null;
  Applications?: Application[] | null;
}

// refs: 1 - tags: named, input
export interface ListAvailableManagementCidrRangesRequest {
  ManagementCidrRangeConstraint: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface MigrateWorkspaceRequest {
  SourceWorkspaceId: string;
  BundleId: string;
}

// refs: 1 - tags: named, input
export interface ModifyAccountRequest {
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | null;
  DedicatedTenancyManagementCidrRange?: string | null;
}

// refs: 1 - tags: named, input
export interface ModifyClientPropertiesRequest {
  ResourceId: string;
  ClientProperties: ClientProperties;
}

// refs: 1 - tags: named, input
export interface ModifySelfservicePermissionsRequest {
  ResourceId: string;
  SelfservicePermissions: SelfservicePermissions;
}

// refs: 1 - tags: named, input
export interface ModifyWorkspaceAccessPropertiesRequest {
  ResourceId: string;
  WorkspaceAccessProperties: WorkspaceAccessProperties;
}

// refs: 1 - tags: named, input
export interface ModifyWorkspaceCreationPropertiesRequest {
  ResourceId: string;
  WorkspaceCreationProperties: WorkspaceCreationProperties;
}

// refs: 1 - tags: named, input
export interface ModifyWorkspacePropertiesRequest {
  WorkspaceId: string;
  WorkspaceProperties: WorkspaceProperties;
}

// refs: 1 - tags: named, input
export interface ModifyWorkspaceStateRequest {
  WorkspaceId: string;
  WorkspaceState: TargetWorkspaceState;
}

// refs: 1 - tags: named, input
export interface RebootWorkspacesRequest {
  RebootWorkspaceRequests: RebootRequest[];
}

// refs: 1 - tags: named, input
export interface RebuildWorkspacesRequest {
  RebuildWorkspaceRequests: RebuildRequest[];
}

// refs: 1 - tags: named, input
export interface RegisterWorkspaceDirectoryRequest {
  DirectoryId: string;
  SubnetIds?: string[] | null;
  EnableWorkDocs: boolean;
  EnableSelfService?: boolean | null;
  Tenancy?: Tenancy | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface RestoreWorkspaceRequest {
  WorkspaceId: string;
}

// refs: 1 - tags: named, input
export interface RevokeIpRulesRequest {
  GroupId: string;
  UserRules: string[];
}

// refs: 1 - tags: named, input
export interface StartWorkspacesRequest {
  StartWorkspaceRequests: StartRequest[];
}

// refs: 1 - tags: named, input
export interface StopWorkspacesRequest {
  StopWorkspaceRequests: StopRequest[];
}

// refs: 1 - tags: named, input
export interface TerminateWorkspacesRequest {
  TerminateWorkspaceRequests: TerminateRequest[];
}

// refs: 1 - tags: named, input
export interface UpdateConnectionAliasPermissionRequest {
  AliasId: string;
  ConnectionAliasPermission: ConnectionAliasPermission;
}

// refs: 1 - tags: named, input
export interface UpdateRulesOfIpGroupRequest {
  GroupId: string;
  UserRules: IpRuleItem[];
}

// refs: 1 - tags: named, input
export interface UpdateWorkspaceBundleRequest {
  BundleId?: string | null;
  ImageId?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateWorkspaceImagePermissionRequest {
  ImageId: string;
  AllowCopyImage: boolean;
  SharedAccountId: string;
}

// refs: 1 - tags: named, output
export interface AssociateConnectionAliasResult {
  ConnectionIdentifier?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateIpGroupsResult {
}

// refs: 1 - tags: named, output
export interface AuthorizeIpRulesResult {
}

// refs: 1 - tags: named, output
export interface CopyWorkspaceImageResult {
  ImageId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateConnectionAliasResult {
  AliasId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateIpGroupResult {
  GroupId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateTagsResult {
}

// refs: 1 - tags: named, output
export interface CreateWorkspaceBundleResult {
  WorkspaceBundle?: WorkspaceBundle | null;
}

// refs: 1 - tags: named, output
export interface CreateWorkspacesResult {
  FailedRequests?: FailedCreateWorkspaceRequest[] | null;
  PendingRequests?: Workspace[] | null;
}

// refs: 1 - tags: named, output
export interface DeleteConnectionAliasResult {
}

// refs: 1 - tags: named, output
export interface DeleteIpGroupResult {
}

// refs: 1 - tags: named, output
export interface DeleteTagsResult {
}

// refs: 1 - tags: named, output
export interface DeleteWorkspaceBundleResult {
}

// refs: 1 - tags: named, output
export interface DeleteWorkspaceImageResult {
}

// refs: 1 - tags: named, output
export interface DeregisterWorkspaceDirectoryResult {
}

// refs: 1 - tags: named, output
export interface DescribeAccountResult {
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | null;
  DedicatedTenancyManagementCidrRange?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAccountModificationsResult {
  AccountModifications?: AccountModification[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeClientPropertiesResult {
  ClientPropertiesList?: ClientPropertiesResult[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeConnectionAliasPermissionsResult {
  AliasId?: string | null;
  ConnectionAliasPermissions?: ConnectionAliasPermission[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeConnectionAliasesResult {
  ConnectionAliases?: ConnectionAlias[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeIpGroupsResult {
  Result?: WorkspacesIpGroup[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeTagsResult {
  TagList?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspaceBundlesResult {
  Bundles?: WorkspaceBundle[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspaceDirectoriesResult {
  Directories?: WorkspaceDirectory[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspaceImagePermissionsResult {
  ImageId?: string | null;
  ImagePermissions?: ImagePermission[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspaceImagesResult {
  Images?: WorkspaceImage[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspaceSnapshotsResult {
  RebuildSnapshots?: Snapshot[] | null;
  RestoreSnapshots?: Snapshot[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspacesResult {
  Workspaces?: Workspace[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeWorkspacesConnectionStatusResult {
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DisassociateConnectionAliasResult {
}

// refs: 1 - tags: named, output
export interface DisassociateIpGroupsResult {
}

// refs: 1 - tags: named, output
export interface ImportWorkspaceImageResult {
  ImageId?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAvailableManagementCidrRangesResult {
  ManagementCidrRanges?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface MigrateWorkspaceResult {
  SourceWorkspaceId?: string | null;
  TargetWorkspaceId?: string | null;
}

// refs: 1 - tags: named, output
export interface ModifyAccountResult {
}

// refs: 1 - tags: named, output
export interface ModifyClientPropertiesResult {
}

// refs: 1 - tags: named, output
export interface ModifySelfservicePermissionsResult {
}

// refs: 1 - tags: named, output
export interface ModifyWorkspaceAccessPropertiesResult {
}

// refs: 1 - tags: named, output
export interface ModifyWorkspaceCreationPropertiesResult {
}

// refs: 1 - tags: named, output
export interface ModifyWorkspacePropertiesResult {
}

// refs: 1 - tags: named, output
export interface ModifyWorkspaceStateResult {
}

// refs: 1 - tags: named, output
export interface RebootWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[] | null;
}

// refs: 1 - tags: named, output
export interface RebuildWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[] | null;
}

// refs: 1 - tags: named, output
export interface RegisterWorkspaceDirectoryResult {
}

// refs: 1 - tags: named, output
export interface RestoreWorkspaceResult {
}

// refs: 1 - tags: named, output
export interface RevokeIpRulesResult {
}

// refs: 1 - tags: named, output
export interface StartWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[] | null;
}

// refs: 1 - tags: named, output
export interface StopWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[] | null;
}

// refs: 1 - tags: named, output
export interface TerminateWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[] | null;
}

// refs: 1 - tags: named, output
export interface UpdateConnectionAliasPermissionResult {
}

// refs: 1 - tags: named, output
export interface UpdateRulesOfIpGroupResult {
}

// refs: 1 - tags: named, output
export interface UpdateWorkspaceBundleResult {
}

// refs: 1 - tags: named, output
export interface UpdateWorkspaceImagePermissionResult {
}

// refs: 4 - tags: input, named, interface, output
export interface IpRuleItem {
  ipRule?: string | null;
  ruleDesc?: string | null;
}

// refs: 10 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ComputeType {
  Name?: Compute | null;
}

// refs: 8 - tags: input, named, enum, output
export type Compute =
| "VALUE"
| "STANDARD"
| "PERFORMANCE"
| "POWER"
| "GRAPHICS"
| "POWERPRO"
| "GRAPHICSPRO"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface UserStorage {
  Capacity?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface RootStorage {
  Capacity?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface WorkspaceRequest {
  DirectoryId: string;
  UserName: string;
  BundleId: string;
  VolumeEncryptionKey?: string | null;
  UserVolumeEncryptionEnabled?: boolean | null;
  RootVolumeEncryptionEnabled?: boolean | null;
  WorkspaceProperties?: WorkspaceProperties | null;
  Tags?: Tag[] | null;
}

// refs: 5 - tags: input, named, interface, output
export interface WorkspaceProperties {
  RunningMode?: RunningMode | null;
  RunningModeAutoStopTimeoutInMinutes?: number | null;
  RootVolumeSizeGib?: number | null;
  UserVolumeSizeGib?: number | null;
  ComputeTypeName?: Compute | null;
}

// refs: 5 - tags: input, named, enum, output
export type RunningMode =
| "AUTO_STOP"
| "ALWAYS_ON"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ImageType =
| "OWNED"
| "SHARED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type WorkspaceImageIngestionProcess =
| "BYOL_REGULAR"
| "BYOL_GRAPHICS"
| "BYOL_GRAPHICSPRO"
| "BYOL_REGULAR_WSP"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type Application =
| "Microsoft_Office_2016"
| "Microsoft_Office_2019"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type DedicatedTenancySupportEnum =
| "ENABLED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface ClientProperties {
  ReconnectEnabled?: ReconnectEnum | null;
}

// refs: 12 - tags: input, named, enum, output
export type ReconnectEnum =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface SelfservicePermissions {
  RestartWorkspace?: ReconnectEnum | null;
  IncreaseVolumeSize?: ReconnectEnum | null;
  ChangeComputeType?: ReconnectEnum | null;
  SwitchRunningMode?: ReconnectEnum | null;
  RebuildWorkspace?: ReconnectEnum | null;
}

// refs: 2 - tags: input, named, interface, output
export interface WorkspaceAccessProperties {
  DeviceTypeWindows?: AccessPropertyValue | null;
  DeviceTypeOsx?: AccessPropertyValue | null;
  DeviceTypeWeb?: AccessPropertyValue | null;
  DeviceTypeIos?: AccessPropertyValue | null;
  DeviceTypeAndroid?: AccessPropertyValue | null;
  DeviceTypeChromeOs?: AccessPropertyValue | null;
  DeviceTypeZeroClient?: AccessPropertyValue | null;
}

// refs: 14 - tags: input, named, enum, output
export type AccessPropertyValue =
| "ALLOW"
| "DENY"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface WorkspaceCreationProperties {
  EnableWorkDocs?: boolean | null;
  EnableInternetAccess?: boolean | null;
  DefaultOu?: string | null;
  CustomSecurityGroupId?: string | null;
  UserEnabledAsLocalAdministrator?: boolean | null;
  EnableMaintenanceMode?: boolean | null;
}

// refs: 1 - tags: input, named, enum
export type TargetWorkspaceState =
| "AVAILABLE"
| "ADMIN_MAINTENANCE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface RebootRequest {
  WorkspaceId: string;
}

// refs: 1 - tags: input, named, interface
export interface RebuildRequest {
  WorkspaceId: string;
}

// refs: 2 - tags: input, named, enum, output
export type Tenancy =
| "DEDICATED"
| "SHARED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface StartRequest {
  WorkspaceId?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface StopRequest {
  WorkspaceId?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface TerminateRequest {
  WorkspaceId: string;
}

// refs: 2 - tags: input, named, interface, output
export interface ConnectionAliasPermission {
  SharedAccountId: string;
  AllowAssociation: boolean;
}

// refs: 2 - tags: output, named, interface
export interface WorkspaceBundle {
  BundleId?: string | null;
  Name?: string | null;
  Owner?: string | null;
  Description?: string | null;
  ImageId?: string | null;
  RootStorage?: RootStorage | null;
  UserStorage?: UserStorage | null;
  ComputeType?: ComputeType | null;
  LastUpdatedTime?: Date | number | null;
  CreationTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface FailedCreateWorkspaceRequest {
  WorkspaceRequest?: WorkspaceRequest | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface Workspace {
  WorkspaceId?: string | null;
  DirectoryId?: string | null;
  UserName?: string | null;
  IpAddress?: string | null;
  State?: WorkspaceState | null;
  BundleId?: string | null;
  SubnetId?: string | null;
  ErrorMessage?: string | null;
  ErrorCode?: string | null;
  ComputerName?: string | null;
  VolumeEncryptionKey?: string | null;
  UserVolumeEncryptionEnabled?: boolean | null;
  RootVolumeEncryptionEnabled?: boolean | null;
  WorkspaceProperties?: WorkspaceProperties | null;
  ModificationStates?: ModificationState[] | null;
}

// refs: 2 - tags: output, named, enum
export type WorkspaceState =
| "PENDING"
| "AVAILABLE"
| "IMPAIRED"
| "UNHEALTHY"
| "REBOOTING"
| "STARTING"
| "REBUILDING"
| "RESTORING"
| "MAINTENANCE"
| "ADMIN_MAINTENANCE"
| "TERMINATING"
| "TERMINATED"
| "SUSPENDED"
| "UPDATING"
| "STOPPING"
| "STOPPED"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ModificationState {
  Resource?: ModificationResourceEnum | null;
  State?: ModificationStateEnum | null;
}

// refs: 2 - tags: output, named, enum
export type ModificationResourceEnum =
| "ROOT_VOLUME"
| "USER_VOLUME"
| "COMPUTE_TYPE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type ModificationStateEnum =
| "UPDATE_INITIATED"
| "UPDATE_IN_PROGRESS"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type DedicatedTenancySupportResultEnum =
| "ENABLED"
| "DISABLED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface AccountModification {
  ModificationState?: DedicatedTenancyModificationStateEnum | null;
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | null;
  DedicatedTenancyManagementCidrRange?: string | null;
  StartTime?: Date | number | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}

// refs: 1 - tags: output, named, enum
export type DedicatedTenancyModificationStateEnum =
| "PENDING"
| "COMPLETED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ClientPropertiesResult {
  ResourceId?: string | null;
  ClientProperties?: ClientProperties | null;
}

// refs: 1 - tags: output, named, interface
export interface ConnectionAlias {
  ConnectionString?: string | null;
  AliasId?: string | null;
  State?: ConnectionAliasState | null;
  OwnerAccountId?: string | null;
  Associations?: ConnectionAliasAssociation[] | null;
}

// refs: 1 - tags: output, named, enum
export type ConnectionAliasState =
| "CREATING"
| "CREATED"
| "DELETING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ConnectionAliasAssociation {
  AssociationStatus?: AssociationStatus | null;
  AssociatedAccountId?: string | null;
  ResourceId?: string | null;
  ConnectionIdentifier?: string | null;
}

// refs: 1 - tags: output, named, enum
export type AssociationStatus =
| "NOT_ASSOCIATED"
| "ASSOCIATED_WITH_OWNER_ACCOUNT"
| "ASSOCIATED_WITH_SHARED_ACCOUNT"
| "PENDING_ASSOCIATION"
| "PENDING_DISASSOCIATION"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface WorkspacesIpGroup {
  groupId?: string | null;
  groupName?: string | null;
  groupDesc?: string | null;
  userRules?: IpRuleItem[] | null;
}

// refs: 1 - tags: output, named, interface
export interface WorkspaceDirectory {
  DirectoryId?: string | null;
  Alias?: string | null;
  DirectoryName?: string | null;
  RegistrationCode?: string | null;
  SubnetIds?: string[] | null;
  DnsIpAddresses?: string[] | null;
  CustomerUserName?: string | null;
  IamRoleId?: string | null;
  DirectoryType?: WorkspaceDirectoryType | null;
  WorkspaceSecurityGroupId?: string | null;
  State?: WorkspaceDirectoryState | null;
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties | null;
  ipGroupIds?: string[] | null;
  WorkspaceAccessProperties?: WorkspaceAccessProperties | null;
  Tenancy?: Tenancy | null;
  SelfservicePermissions?: SelfservicePermissions | null;
}

// refs: 1 - tags: output, named, enum
export type WorkspaceDirectoryType =
| "SIMPLE_AD"
| "AD_CONNECTOR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type WorkspaceDirectoryState =
| "REGISTERING"
| "REGISTERED"
| "DEREGISTERING"
| "DEREGISTERED"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DefaultWorkspaceCreationProperties {
  EnableWorkDocs?: boolean | null;
  EnableInternetAccess?: boolean | null;
  DefaultOu?: string | null;
  CustomSecurityGroupId?: string | null;
  UserEnabledAsLocalAdministrator?: boolean | null;
  EnableMaintenanceMode?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface ImagePermission {
  SharedAccountId?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface WorkspaceImage {
  ImageId?: string | null;
  Name?: string | null;
  Description?: string | null;
  OperatingSystem?: OperatingSystem | null;
  State?: WorkspaceImageState | null;
  RequiredTenancy?: WorkspaceImageRequiredTenancy | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
  Created?: Date | number | null;
  OwnerAccountId?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface OperatingSystem {
  Type?: OperatingSystemType | null;
}

// refs: 1 - tags: output, named, enum
export type OperatingSystemType =
| "WINDOWS"
| "LINUX"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type WorkspaceImageState =
| "AVAILABLE"
| "PENDING"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type WorkspaceImageRequiredTenancy =
| "DEFAULT"
| "DEDICATED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Snapshot {
  SnapshotTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface WorkspaceConnectionStatus {
  WorkspaceId?: string | null;
  ConnectionState?: ConnectionState | null;
  ConnectionStateCheckTimestamp?: Date | number | null;
  LastKnownUserConnectionTimestamp?: Date | number | null;
}

// refs: 1 - tags: output, named, enum
export type ConnectionState =
| "CONNECTED"
| "DISCONNECTED"
| "UNKNOWN"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface FailedWorkspaceChangeRequest {
  WorkspaceId?: string | null;
  ErrorCode?: string | null;
  ErrorMessage?: string | null;
}
