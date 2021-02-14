// Autogenerated API structures for: Amazon WorkDocs

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AbortDocumentVersionUploadRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
}

// refs: 1 - tags: named, input
export interface ActivateUserRequest {
  UserId: string;
  AuthenticationToken?: string | null;
}

// refs: 1 - tags: named, input
export interface AddResourcePermissionsRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
  Principals: SharePrincipal[];
  NotificationOptions?: NotificationOptions | null;
}

// refs: 1 - tags: named, input
export interface CreateCommentRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
  ParentId?: string | null;
  ThreadId?: string | null;
  Text: string;
  Visibility?: CommentVisibilityType | null;
  NotifyCollaborators?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateCustomMetadataRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
  VersionId?: string | null;
  CustomMetadata: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface CreateFolderRequest {
  AuthenticationToken?: string | null;
  Name?: string | null;
  ParentFolderId: string;
}

// refs: 1 - tags: named, input
export interface CreateLabelsRequest {
  ResourceId: string;
  Labels: string[];
  AuthenticationToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateNotificationSubscriptionRequest {
  OrganizationId: string;
  Endpoint: string;
  Protocol: SubscriptionProtocolType;
  SubscriptionType: SubscriptionType;
}

// refs: 1 - tags: named, input
export interface CreateUserRequest {
  OrganizationId?: string | null;
  Username: string;
  EmailAddress?: string | null;
  GivenName: string;
  Surname: string;
  Password: string;
  TimeZoneId?: string | null;
  StorageRule?: StorageRuleType | null;
  AuthenticationToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeactivateUserRequest {
  UserId: string;
  AuthenticationToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteCommentRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
  CommentId: string;
}

// refs: 1 - tags: named, input
export interface DeleteCustomMetadataRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
  VersionId?: string | null;
  Keys?: string[] | null;
  DeleteAll?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteDocumentRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
}

// refs: 1 - tags: named, input
export interface DeleteFolderRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
}

// refs: 1 - tags: named, input
export interface DeleteFolderContentsRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
}

// refs: 1 - tags: named, input
export interface DeleteLabelsRequest {
  ResourceId: string;
  AuthenticationToken?: string | null;
  Labels?: string[] | null;
  DeleteAll?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteNotificationSubscriptionRequest {
  SubscriptionId: string;
  OrganizationId: string;
}

// refs: 1 - tags: named, input
export interface DeleteUserRequest {
  AuthenticationToken?: string | null;
  UserId: string;
}

// refs: 1 - tags: named, input
export interface DescribeActivitiesRequest {
  AuthenticationToken?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  OrganizationId?: string | null;
  ActivityTypes?: string | null;
  ResourceId?: string | null;
  UserId?: string | null;
  IncludeIndirectActivities?: boolean | null;
  Limit?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeCommentsRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
  Limit?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDocumentVersionsRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  Marker?: string | null;
  Limit?: number | null;
  Include?: string | null;
  Fields?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeFolderContentsRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
  Sort?: ResourceSortType | null;
  Order?: OrderType | null;
  Limit?: number | null;
  Marker?: string | null;
  Type?: FolderContentType | null;
  Include?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeGroupsRequest {
  AuthenticationToken?: string | null;
  SearchQuery: string;
  OrganizationId?: string | null;
  Marker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeNotificationSubscriptionsRequest {
  OrganizationId: string;
  Marker?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeResourcePermissionsRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
  PrincipalId?: string | null;
  Limit?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeRootFoldersRequest {
  AuthenticationToken: string;
  Limit?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeUsersRequest {
  AuthenticationToken?: string | null;
  OrganizationId?: string | null;
  UserIds?: string | null;
  Query?: string | null;
  Include?: UserFilterType | null;
  Order?: OrderType | null;
  Sort?: UserSortType | null;
  Marker?: string | null;
  Limit?: number | null;
  Fields?: string | null;
}

// refs: 1 - tags: named, input
export interface GetCurrentUserRequest {
  AuthenticationToken: string;
}

// refs: 1 - tags: named, input
export interface GetDocumentRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  IncludeCustomMetadata?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetDocumentPathRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  Limit?: number | null;
  Fields?: string | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface GetDocumentVersionRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
  Fields?: string | null;
  IncludeCustomMetadata?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetFolderRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
  IncludeCustomMetadata?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetFolderPathRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
  Limit?: number | null;
  Fields?: string | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface GetResourcesRequest {
  AuthenticationToken?: string | null;
  UserId?: string | null;
  CollectionType?: ResourceCollectionType | null;
  Limit?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, input
export interface InitiateDocumentVersionUploadRequest {
  AuthenticationToken?: string | null;
  Id?: string | null;
  Name?: string | null;
  ContentCreatedTimestamp?: Date | number | null;
  ContentModifiedTimestamp?: Date | number | null;
  ContentType?: string | null;
  DocumentSizeInBytes?: number | null;
  ParentFolderId: string;
}

// refs: 1 - tags: named, input
export interface RemoveAllResourcePermissionsRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
}

// refs: 1 - tags: named, input
export interface RemoveResourcePermissionRequest {
  AuthenticationToken?: string | null;
  ResourceId: string;
  PrincipalId: string;
  PrincipalType?: PrincipalType | null;
}

// refs: 1 - tags: named, input
export interface UpdateDocumentRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  Name?: string | null;
  ParentFolderId?: string | null;
  ResourceState?: ResourceStateType | null;
}

// refs: 1 - tags: named, input
export interface UpdateDocumentVersionRequest {
  AuthenticationToken?: string | null;
  DocumentId: string;
  VersionId: string;
  VersionStatus?: DocumentVersionStatus | null;
}

// refs: 1 - tags: named, input
export interface UpdateFolderRequest {
  AuthenticationToken?: string | null;
  FolderId: string;
  Name?: string | null;
  ParentFolderId?: string | null;
  ResourceState?: ResourceStateType | null;
}

// refs: 1 - tags: named, input
export interface UpdateUserRequest {
  AuthenticationToken?: string | null;
  UserId: string;
  GivenName?: string | null;
  Surname?: string | null;
  Type?: UserType | null;
  StorageRule?: StorageRuleType | null;
  TimeZoneId?: string | null;
  Locale?: LocaleType | null;
  GrantPoweruserPrivileges?: BooleanEnumType | null;
}

// refs: 1 - tags: named, output
export interface ActivateUserResponse {
  User?: User | null;
}

// refs: 1 - tags: named, output
export interface AddResourcePermissionsResponse {
  ShareResults?: ShareResult[] | null;
}

// refs: 1 - tags: named, output
export interface CreateCommentResponse {
  Comment?: Comment | null;
}

// refs: 1 - tags: named, output
export interface CreateCustomMetadataResponse {
}

// refs: 1 - tags: named, output
export interface CreateFolderResponse {
  Metadata?: FolderMetadata | null;
}

// refs: 1 - tags: named, output
export interface CreateLabelsResponse {
}

// refs: 1 - tags: named, output
export interface CreateNotificationSubscriptionResponse {
  Subscription?: Subscription | null;
}

// refs: 1 - tags: named, output
export interface CreateUserResponse {
  User?: User | null;
}

// refs: 1 - tags: named, output
export interface DeleteCustomMetadataResponse {
}

// refs: 1 - tags: named, output
export interface DeleteLabelsResponse {
}

// refs: 1 - tags: named, output
export interface DescribeActivitiesResponse {
  UserActivities?: Activity[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeCommentsResponse {
  Comments?: Comment[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDocumentVersionsResponse {
  DocumentVersions?: DocumentVersionMetadata[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeFolderContentsResponse {
  Folders?: FolderMetadata[] | null;
  Documents?: DocumentMetadata[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeGroupsResponse {
  Groups?: GroupMetadata[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeNotificationSubscriptionsResponse {
  Subscriptions?: Subscription[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeResourcePermissionsResponse {
  Principals?: Principal[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeRootFoldersResponse {
  Folders?: FolderMetadata[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeUsersResponse {
  Users?: User[] | null;
  TotalNumberOfUsers?: number | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface GetCurrentUserResponse {
  User?: User | null;
}

// refs: 1 - tags: named, output
export interface GetDocumentResponse {
  Metadata?: DocumentMetadata | null;
  CustomMetadata?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetDocumentPathResponse {
  Path?: ResourcePath | null;
}

// refs: 1 - tags: named, output
export interface GetDocumentVersionResponse {
  Metadata?: DocumentVersionMetadata | null;
  CustomMetadata?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetFolderResponse {
  Metadata?: FolderMetadata | null;
  CustomMetadata?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetFolderPathResponse {
  Path?: ResourcePath | null;
}

// refs: 1 - tags: named, output
export interface GetResourcesResponse {
  Folders?: FolderMetadata[] | null;
  Documents?: DocumentMetadata[] | null;
  Marker?: string | null;
}

// refs: 1 - tags: named, output
export interface InitiateDocumentVersionUploadResponse {
  Metadata?: DocumentMetadata | null;
  UploadMetadata?: UploadMetadata | null;
}

// refs: 1 - tags: named, output
export interface UpdateUserResponse {
  User?: User | null;
}

// refs: 1 - tags: input, named, interface
export interface SharePrincipal {
  Id: string;
  Type: PrincipalType;
  Role: RoleType;
}

// refs: 3 - tags: input, named, enum, output
export type PrincipalType =
| "USER"
| "GROUP"
| "INVITE"
| "ANONYMOUS"
| "ORGANIZATION"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type RoleType =
| "VIEWER"
| "CONTRIBUTOR"
| "OWNER"
| "COOWNER"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface NotificationOptions {
  SendEmail?: boolean | null;
  EmailMessage?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type CommentVisibilityType =
| "PUBLIC"
| "PRIVATE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type SubscriptionProtocolType =
| "HTTPS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SubscriptionType =
| "ALL"
| cmnP.UnexpectedEnumValue;

// refs: 10 - tags: input, named, interface, output
export interface StorageRuleType {
  StorageAllocatedInBytes?: number | null;
  StorageType?: StorageType | null;
}

// refs: 10 - tags: input, named, enum, output
export type StorageType =
| "UNLIMITED"
| "QUOTA"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ResourceSortType =
| "DATE"
| "NAME"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum
export type OrderType =
| "ASCENDING"
| "DESCENDING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type FolderContentType =
| "ALL"
| "DOCUMENT"
| "FOLDER"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type UserFilterType =
| "ALL"
| "ACTIVE_PENDING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type UserSortType =
| "USER_NAME"
| "FULL_NAME"
| "STORAGE_LIMIT"
| "USER_STATUS"
| "STORAGE_USED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ResourceCollectionType =
| "SHARED_WITH_ME"
| cmnP.UnexpectedEnumValue;

// refs: 11 - tags: input, named, enum, output
export type ResourceStateType =
| "ACTIVE"
| "RESTORING"
| "RECYCLING"
| "RECYCLED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type DocumentVersionStatus =
| "ACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, enum, output
export type UserType =
| "USER"
| "ADMIN"
| "POWERUSER"
| "MINIMALUSER"
| "WORKSPACESUSER"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, enum, output
export type LocaleType =
| "en"
| "fr"
| "ko"
| "de"
| "es"
| "ja"
| "ru"
| "zh_CN"
| "zh_TW"
| "pt_BR"
| "default"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type BooleanEnumType =
| "TRUE"
| "FALSE"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, interface
export interface User {
  Id?: string | null;
  Username?: string | null;
  EmailAddress?: string | null;
  GivenName?: string | null;
  Surname?: string | null;
  OrganizationId?: string | null;
  RootFolderId?: string | null;
  RecycleBinFolderId?: string | null;
  Status?: UserStatusType | null;
  Type?: UserType | null;
  CreatedTimestamp?: Date | number | null;
  ModifiedTimestamp?: Date | number | null;
  TimeZoneId?: string | null;
  Locale?: LocaleType | null;
  Storage?: UserStorageMetadata | null;
}

// refs: 8 - tags: output, named, enum
export type UserStatusType =
| "ACTIVE"
| "INACTIVE"
| "PENDING"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: output, named, interface
export interface UserStorageMetadata {
  StorageUtilizedInBytes?: number | null;
  StorageRule?: StorageRuleType | null;
}

// refs: 1 - tags: output, named, interface
export interface ShareResult {
  PrincipalId?: string | null;
  InviteePrincipalId?: string | null;
  Role?: RoleType | null;
  Status?: ShareStatusType | null;
  ShareId?: string | null;
  StatusMessage?: string | null;
}

// refs: 1 - tags: output, named, enum
export type ShareStatusType =
| "SUCCESS"
| "FAILURE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Comment {
  CommentId: string;
  ParentId?: string | null;
  ThreadId?: string | null;
  Text?: string | null;
  Contributor?: User | null;
  CreatedTimestamp?: Date | number | null;
  Status?: CommentStatusType | null;
  Visibility?: CommentVisibilityType | null;
  RecipientId?: string | null;
}

// refs: 3 - tags: output, named, enum
export type CommentStatusType =
| "DRAFT"
| "PUBLISHED"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: output, named, interface
export interface FolderMetadata {
  Id?: string | null;
  Name?: string | null;
  CreatorId?: string | null;
  ParentFolderId?: string | null;
  CreatedTimestamp?: Date | number | null;
  ModifiedTimestamp?: Date | number | null;
  ResourceState?: ResourceStateType | null;
  Signature?: string | null;
  Labels?: string[] | null;
  Size?: number | null;
  LatestVersionSize?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface Subscription {
  SubscriptionId?: string | null;
  EndPoint?: string | null;
  Protocol?: SubscriptionProtocolType | null;
}

// refs: 1 - tags: output, named, interface
export interface Activity {
  Type?: ActivityType | null;
  TimeStamp?: Date | number | null;
  IsIndirectActivity?: boolean | null;
  OrganizationId?: string | null;
  Initiator?: UserMetadata | null;
  Participants?: Participants | null;
  ResourceMetadata?: ResourceMetadata | null;
  OriginalParent?: ResourceMetadata | null;
  CommentMetadata?: CommentMetadata | null;
}

// refs: 1 - tags: output, named, enum
export type ActivityType =
| "DOCUMENT_CHECKED_IN"
| "DOCUMENT_CHECKED_OUT"
| "DOCUMENT_RENAMED"
| "DOCUMENT_VERSION_UPLOADED"
| "DOCUMENT_VERSION_DELETED"
| "DOCUMENT_VERSION_VIEWED"
| "DOCUMENT_VERSION_DOWNLOADED"
| "DOCUMENT_RECYCLED"
| "DOCUMENT_RESTORED"
| "DOCUMENT_REVERTED"
| "DOCUMENT_SHARED"
| "DOCUMENT_UNSHARED"
| "DOCUMENT_SHARE_PERMISSION_CHANGED"
| "DOCUMENT_SHAREABLE_LINK_CREATED"
| "DOCUMENT_SHAREABLE_LINK_REMOVED"
| "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED"
| "DOCUMENT_MOVED"
| "DOCUMENT_COMMENT_ADDED"
| "DOCUMENT_COMMENT_DELETED"
| "DOCUMENT_ANNOTATION_ADDED"
| "DOCUMENT_ANNOTATION_DELETED"
| "FOLDER_CREATED"
| "FOLDER_DELETED"
| "FOLDER_RENAMED"
| "FOLDER_RECYCLED"
| "FOLDER_RESTORED"
| "FOLDER_SHARED"
| "FOLDER_UNSHARED"
| "FOLDER_SHARE_PERMISSION_CHANGED"
| "FOLDER_SHAREABLE_LINK_CREATED"
| "FOLDER_SHAREABLE_LINK_REMOVED"
| "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED"
| "FOLDER_MOVED"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface UserMetadata {
  Id?: string | null;
  Username?: string | null;
  GivenName?: string | null;
  Surname?: string | null;
  EmailAddress?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Participants {
  Users?: UserMetadata[] | null;
  Groups?: GroupMetadata[] | null;
}

// refs: 2 - tags: output, named, interface
export interface GroupMetadata {
  Id?: string | null;
  Name?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface ResourceMetadata {
  Type?: ResourceType | null;
  Name?: string | null;
  OriginalName?: string | null;
  Id?: string | null;
  VersionId?: string | null;
  Owner?: UserMetadata | null;
  ParentId?: string | null;
}

// refs: 2 - tags: output, named, enum
export type ResourceType =
| "FOLDER"
| "DOCUMENT"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface CommentMetadata {
  CommentId?: string | null;
  Contributor?: User | null;
  CreatedTimestamp?: Date | number | null;
  CommentStatus?: CommentStatusType | null;
  RecipientId?: string | null;
}

// refs: 6 - tags: output, named, interface
export interface DocumentVersionMetadata {
  Id?: string | null;
  Name?: string | null;
  ContentType?: string | null;
  Size?: number | null;
  Signature?: string | null;
  Status?: DocumentStatusType | null;
  CreatedTimestamp?: Date | number | null;
  ModifiedTimestamp?: Date | number | null;
  ContentCreatedTimestamp?: Date | number | null;
  ContentModifiedTimestamp?: Date | number | null;
  CreatorId?: string | null;
  Thumbnail?: { [key in DocumentThumbnailType]: string | null | undefined } | null;
  Source?: { [key in DocumentSourceType]: string | null | undefined } | null;
}

// refs: 6 - tags: output, named, enum
export type DocumentStatusType =
| "INITIALIZED"
| "ACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, enum
export type DocumentThumbnailType =
| "SMALL"
| "SMALL_HQ"
| "LARGE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, enum
export type DocumentSourceType =
| "ORIGINAL"
| "WITH_COMMENTS"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface DocumentMetadata {
  Id?: string | null;
  CreatorId?: string | null;
  ParentFolderId?: string | null;
  CreatedTimestamp?: Date | number | null;
  ModifiedTimestamp?: Date | number | null;
  LatestVersionMetadata?: DocumentVersionMetadata | null;
  ResourceState?: ResourceStateType | null;
  Labels?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface Principal {
  Id?: string | null;
  Type?: PrincipalType | null;
  Roles?: PermissionInfo[] | null;
}

// refs: 1 - tags: output, named, interface
export interface PermissionInfo {
  Role?: RoleType | null;
  Type?: RolePermissionType | null;
}

// refs: 1 - tags: output, named, enum
export type RolePermissionType =
| "DIRECT"
| "INHERITED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ResourcePath {
  Components?: ResourcePathComponent[] | null;
}

// refs: 2 - tags: output, named, interface
export interface ResourcePathComponent {
  Id?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface UploadMetadata {
  UploadUrl?: string | null;
  SignedHeaders?: { [key: string]: string | null | undefined } | null;
}