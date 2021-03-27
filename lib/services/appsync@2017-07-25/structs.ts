// Autogenerated API structures for: AWS AppSync

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateApiCacheRequest {
  apiId: string;
  ttl: number;
  transitEncryptionEnabled?: boolean | null;
  atRestEncryptionEnabled?: boolean | null;
  apiCachingBehavior: ApiCachingBehavior;
  type: ApiCacheType;
}

// refs: 1 - tags: named, input
export interface CreateApiKeyRequest {
  apiId: string;
  description?: string | null;
  expires?: number | null;
}

// refs: 1 - tags: named, input
export interface CreateDataSourceRequest {
  apiId: string;
  name: string;
  description?: string | null;
  type: DataSourceType;
  serviceRoleArn?: string | null;
  dynamodbConfig?: DynamodbDataSourceConfig | null;
  lambdaConfig?: LambdaDataSourceConfig | null;
  elasticsearchConfig?: ElasticsearchDataSourceConfig | null;
  httpConfig?: HttpDataSourceConfig | null;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
}

// refs: 1 - tags: named, input
export interface CreateFunctionRequest {
  apiId: string;
  name: string;
  description?: string | null;
  dataSourceName: string;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  functionVersion: string;
  syncConfig?: SyncConfig | null;
}

// refs: 1 - tags: named, input
export interface CreateGraphqlApiRequest {
  name: string;
  logConfig?: LogConfig | null;
  authenticationType: AuthenticationType;
  userPoolConfig?: UserPoolConfig | null;
  openIDConnectConfig?: OpenIDConnectConfig | null;
  tags?: { [key: string]: string | null | undefined } | null;
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | null;
  xrayEnabled?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
  dataSourceName?: string | null;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  kind?: ResolverKind | null;
  pipelineConfig?: PipelineConfig | null;
  syncConfig?: SyncConfig | null;
  cachingConfig?: CachingConfig | null;
}

// refs: 1 - tags: named, input
export interface CreateTypeRequest {
  apiId: string;
  definition: string;
  format: TypeDefinitionFormat;
}

// refs: 1 - tags: named, input
export interface DeleteApiCacheRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface DeleteApiKeyRequest {
  apiId: string;
  id: string;
}

// refs: 1 - tags: named, input
export interface DeleteDataSourceRequest {
  apiId: string;
  name: string;
}

// refs: 1 - tags: named, input
export interface DeleteFunctionRequest {
  apiId: string;
  functionId: string;
}

// refs: 1 - tags: named, input
export interface DeleteGraphqlApiRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface DeleteResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
}

// refs: 1 - tags: named, input
export interface DeleteTypeRequest {
  apiId: string;
  typeName: string;
}

// refs: 1 - tags: named, input
export interface FlushApiCacheRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface GetApiCacheRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface GetDataSourceRequest {
  apiId: string;
  name: string;
}

// refs: 1 - tags: named, input
export interface GetFunctionRequest {
  apiId: string;
  functionId: string;
}

// refs: 1 - tags: named, input
export interface GetGraphqlApiRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface GetIntrospectionSchemaRequest {
  apiId: string;
  format: OutputType;
  includeDirectives?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
}

// refs: 1 - tags: named, input
export interface GetSchemaCreationStatusRequest {
  apiId: string;
}

// refs: 1 - tags: named, input
export interface GetTypeRequest {
  apiId: string;
  typeName: string;
  format: TypeDefinitionFormat;
}

// refs: 1 - tags: named, input
export interface ListApiKeysRequest {
  apiId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListDataSourcesRequest {
  apiId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListFunctionsRequest {
  apiId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListGraphqlApisRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListResolversRequest {
  apiId: string;
  typeName: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListResolversByFunctionRequest {
  apiId: string;
  functionId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface ListTypesRequest {
  apiId: string;
  format: TypeDefinitionFormat;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface StartSchemaCreationRequest {
  apiId: string;
  definition: Uint8Array | string;
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
export interface UpdateApiCacheRequest {
  apiId: string;
  ttl: number;
  apiCachingBehavior: ApiCachingBehavior;
  type: ApiCacheType;
}

// refs: 1 - tags: named, input
export interface UpdateApiKeyRequest {
  apiId: string;
  id: string;
  description?: string | null;
  expires?: number | null;
}

// refs: 1 - tags: named, input
export interface UpdateDataSourceRequest {
  apiId: string;
  name: string;
  description?: string | null;
  type: DataSourceType;
  serviceRoleArn?: string | null;
  dynamodbConfig?: DynamodbDataSourceConfig | null;
  lambdaConfig?: LambdaDataSourceConfig | null;
  elasticsearchConfig?: ElasticsearchDataSourceConfig | null;
  httpConfig?: HttpDataSourceConfig | null;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
}

// refs: 1 - tags: named, input
export interface UpdateFunctionRequest {
  apiId: string;
  name: string;
  description?: string | null;
  functionId: string;
  dataSourceName: string;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  functionVersion: string;
  syncConfig?: SyncConfig | null;
}

// refs: 1 - tags: named, input
export interface UpdateGraphqlApiRequest {
  apiId: string;
  name: string;
  logConfig?: LogConfig | null;
  authenticationType?: AuthenticationType | null;
  userPoolConfig?: UserPoolConfig | null;
  openIDConnectConfig?: OpenIDConnectConfig | null;
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | null;
  xrayEnabled?: boolean | null;
}

// refs: 1 - tags: named, input
export interface UpdateResolverRequest {
  apiId: string;
  typeName: string;
  fieldName: string;
  dataSourceName?: string | null;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  kind?: ResolverKind | null;
  pipelineConfig?: PipelineConfig | null;
  syncConfig?: SyncConfig | null;
  cachingConfig?: CachingConfig | null;
}

// refs: 1 - tags: named, input
export interface UpdateTypeRequest {
  apiId: string;
  typeName: string;
  definition?: string | null;
  format: TypeDefinitionFormat;
}

// refs: 1 - tags: named, output
export interface CreateApiCacheResponse {
  apiCache?: ApiCache | null;
}

// refs: 1 - tags: named, output
export interface CreateApiKeyResponse {
  apiKey?: ApiKey | null;
}

// refs: 1 - tags: named, output
export interface CreateDataSourceResponse {
  dataSource?: DataSource | null;
}

// refs: 1 - tags: named, output
export interface CreateFunctionResponse {
  functionConfiguration?: FunctionConfiguration | null;
}

// refs: 1 - tags: named, output
export interface CreateGraphqlApiResponse {
  graphqlApi?: GraphqlApi | null;
}

// refs: 1 - tags: named, output
export interface CreateResolverResponse {
  resolver?: Resolver | null;
}

// refs: 1 - tags: named, output
export interface CreateTypeResponse {
  type?: Type | null;
}

// refs: 1 - tags: named, output
export interface DeleteApiCacheResponse {
}

// refs: 1 - tags: named, output
export interface DeleteApiKeyResponse {
}

// refs: 1 - tags: named, output
export interface DeleteDataSourceResponse {
}

// refs: 1 - tags: named, output
export interface DeleteFunctionResponse {
}

// refs: 1 - tags: named, output
export interface DeleteGraphqlApiResponse {
}

// refs: 1 - tags: named, output
export interface DeleteResolverResponse {
}

// refs: 1 - tags: named, output
export interface DeleteTypeResponse {
}

// refs: 1 - tags: named, output
export interface FlushApiCacheResponse {
}

// refs: 1 - tags: named, output
export interface GetApiCacheResponse {
  apiCache?: ApiCache | null;
}

// refs: 1 - tags: named, output
export interface GetDataSourceResponse {
  dataSource?: DataSource | null;
}

// refs: 1 - tags: named, output
export interface GetFunctionResponse {
  functionConfiguration?: FunctionConfiguration | null;
}

// refs: 1 - tags: named, output
export interface GetGraphqlApiResponse {
  graphqlApi?: GraphqlApi | null;
}

// refs: 1 - tags: named, output
export interface GetIntrospectionSchemaResponse {
  schema?: Uint8Array | string | null;
}

// refs: 1 - tags: named, output
export interface GetResolverResponse {
  resolver?: Resolver | null;
}

// refs: 1 - tags: named, output
export interface GetSchemaCreationStatusResponse {
  status?: SchemaStatus | null;
  details?: string | null;
}

// refs: 1 - tags: named, output
export interface GetTypeResponse {
  type?: Type | null;
}

// refs: 1 - tags: named, output
export interface ListApiKeysResponse {
  apiKeys?: ApiKey[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDataSourcesResponse {
  dataSources?: DataSource[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListFunctionsResponse {
  functions?: FunctionConfiguration[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListGraphqlApisResponse {
  graphqlApis?: GraphqlApi[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListResolversResponse {
  resolvers?: Resolver[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListResolversByFunctionResponse {
  resolvers?: Resolver[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListTypesResponse {
  types?: Type[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface StartSchemaCreationResponse {
  status?: SchemaStatus | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateApiCacheResponse {
  apiCache?: ApiCache | null;
}

// refs: 1 - tags: named, output
export interface UpdateApiKeyResponse {
  apiKey?: ApiKey | null;
}

// refs: 1 - tags: named, output
export interface UpdateDataSourceResponse {
  dataSource?: DataSource | null;
}

// refs: 1 - tags: named, output
export interface UpdateFunctionResponse {
  functionConfiguration?: FunctionConfiguration | null;
}

// refs: 1 - tags: named, output
export interface UpdateGraphqlApiResponse {
  graphqlApi?: GraphqlApi | null;
}

// refs: 1 - tags: named, output
export interface UpdateResolverResponse {
  resolver?: Resolver | null;
}

// refs: 1 - tags: named, output
export interface UpdateTypeResponse {
  type?: Type | null;
}

// refs: 5 - tags: input, named, enum, output
export type ApiCachingBehavior =
| "FULL_REQUEST_CACHING"
| "PER_RESOLVER_CACHING"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, enum, output
export type ApiCacheType =
| "T2_SMALL"
| "T2_MEDIUM"
| "R4_LARGE"
| "R4_XLARGE"
| "R4_2XLARGE"
| "R4_4XLARGE"
| "R4_8XLARGE"
| "SMALL"
| "MEDIUM"
| "LARGE"
| "XLARGE"
| "LARGE_2X"
| "LARGE_4X"
| "LARGE_8X"
| "LARGE_12X"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type DataSourceType =
| "AWS_LAMBDA"
| "AMAZON_DYNAMODB"
| "AMAZON_ELASTICSEARCH"
| "NONE"
| "HTTP"
| "RELATIONAL_DATABASE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface DynamodbDataSourceConfig {
  tableName: string;
  awsRegion: string;
  useCallerCredentials?: boolean | null;
  deltaSyncConfig?: DeltaSyncConfig | null;
  versioned?: boolean | null;
}

// refs: 6 - tags: input, named, interface, output
export interface DeltaSyncConfig {
  baseTableTTL?: number | null;
  deltaSyncTableName?: string | null;
  deltaSyncTableTTL?: number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface LambdaDataSourceConfig {
  lambdaFunctionArn: string;
}

// refs: 6 - tags: input, named, interface, output
export interface ElasticsearchDataSourceConfig {
  endpoint: string;
  awsRegion: string;
}

// refs: 6 - tags: input, named, interface, output
export interface HttpDataSourceConfig {
  endpoint?: string | null;
  authorizationConfig?: AuthorizationConfig | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AuthorizationConfig {
  authorizationType: AuthorizationType;
  awsIamConfig?: AwsIamConfig | null;
}

// refs: 6 - tags: input, named, enum, output
export type AuthorizationType =
| "AWS_IAM"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface AwsIamConfig {
  signingRegion?: string | null;
  signingServiceName?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface RelationalDatabaseDataSourceConfig {
  relationalDatabaseSourceType?: RelationalDatabaseSourceType | null;
  rdsHttpEndpointConfig?: RdsHttpEndpointConfig | null;
}

// refs: 6 - tags: input, named, enum, output
export type RelationalDatabaseSourceType =
| "RDS_HTTP_ENDPOINT"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface RdsHttpEndpointConfig {
  awsRegion?: string | null;
  dbClusterIdentifier?: string | null;
  databaseName?: string | null;
  schema?: string | null;
  awsSecretStoreArn?: string | null;
}

// refs: 13 - tags: input, named, interface, output
export interface SyncConfig {
  conflictHandler?: ConflictHandlerType | null;
  conflictDetection?: ConflictDetectionType | null;
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig | null;
}

// refs: 13 - tags: input, named, enum, output
export type ConflictHandlerType =
| "OPTIMISTIC_CONCURRENCY"
| "LAMBDA"
| "AUTOMERGE"
| "NONE"
| cmnP.UnexpectedEnumValue;

// refs: 13 - tags: input, named, enum, output
export type ConflictDetectionType =
| "VERSION"
| "NONE"
| cmnP.UnexpectedEnumValue;

// refs: 13 - tags: input, named, interface, output
export interface LambdaConflictHandlerConfig {
  lambdaConflictHandlerArn?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface LogConfig {
  fieldLogLevel: FieldLogLevel;
  cloudWatchLogsRoleArn: string;
  excludeVerboseContent?: boolean | null;
}

// refs: 6 - tags: input, named, enum, output
export type FieldLogLevel =
| "NONE"
| "ERROR"
| "ALL"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, enum, output
export type AuthenticationType =
| "API_KEY"
| "AWS_IAM"
| "AMAZON_COGNITO_USER_POOLS"
| "OPENID_CONNECT"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface UserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  defaultAction: DefaultAction;
  appIdClientRegex?: string | null;
}

// refs: 6 - tags: input, named, enum, output
export type DefaultAction =
| "ALLOW"
| "DENY"
| cmnP.UnexpectedEnumValue;

// refs: 12 - tags: input, named, interface, output
export interface OpenIDConnectConfig {
  issuer: string;
  clientId?: string | null;
  iatTTL?: number | null;
  authTTL?: number | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AdditionalAuthenticationProvider {
  authenticationType?: AuthenticationType | null;
  openIDConnectConfig?: OpenIDConnectConfig | null;
  userPoolConfig?: CognitoUserPoolConfig | null;
}

// refs: 6 - tags: input, named, interface, output
export interface CognitoUserPoolConfig {
  userPoolId: string;
  awsRegion: string;
  appIdClientRegex?: string | null;
}

// refs: 7 - tags: input, named, enum, output
export type ResolverKind =
| "UNIT"
| "PIPELINE"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, interface, output
export interface PipelineConfig {
  functions?: string[] | null;
}

// refs: 7 - tags: input, named, interface, output
export interface CachingConfig {
  ttl?: number | null;
  cachingKeys?: string[] | null;
}

// refs: 8 - tags: input, named, enum, output
export type TypeDefinitionFormat =
| "SDL"
| "JSON"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type OutputType =
| "SDL"
| "JSON"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface ApiCache {
  ttl?: number | null;
  apiCachingBehavior?: ApiCachingBehavior | null;
  transitEncryptionEnabled?: boolean | null;
  atRestEncryptionEnabled?: boolean | null;
  type?: ApiCacheType | null;
  status?: ApiCacheStatus | null;
}

// refs: 3 - tags: output, named, enum
export type ApiCacheStatus =
| "AVAILABLE"
| "CREATING"
| "DELETING"
| "MODIFYING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface ApiKey {
  id?: string | null;
  description?: string | null;
  expires?: number | null;
  deletes?: number | null;
}

// refs: 4 - tags: output, named, interface
export interface DataSource {
  dataSourceArn?: string | null;
  name?: string | null;
  description?: string | null;
  type?: DataSourceType | null;
  serviceRoleArn?: string | null;
  dynamodbConfig?: DynamodbDataSourceConfig | null;
  lambdaConfig?: LambdaDataSourceConfig | null;
  elasticsearchConfig?: ElasticsearchDataSourceConfig | null;
  httpConfig?: HttpDataSourceConfig | null;
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig | null;
}

// refs: 4 - tags: output, named, interface
export interface FunctionConfiguration {
  functionId?: string | null;
  functionArn?: string | null;
  name?: string | null;
  description?: string | null;
  dataSourceName?: string | null;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  functionVersion?: string | null;
  syncConfig?: SyncConfig | null;
}

// refs: 4 - tags: output, named, interface
export interface GraphqlApi {
  name?: string | null;
  apiId?: string | null;
  authenticationType?: AuthenticationType | null;
  logConfig?: LogConfig | null;
  userPoolConfig?: UserPoolConfig | null;
  openIDConnectConfig?: OpenIDConnectConfig | null;
  arn?: string | null;
  uris?: { [key: string]: string | null | undefined } | null;
  tags?: { [key: string]: string | null | undefined } | null;
  additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | null;
  xrayEnabled?: boolean | null;
  wafWebAclArn?: string | null;
}

// refs: 5 - tags: output, named, interface
export interface Resolver {
  typeName?: string | null;
  fieldName?: string | null;
  dataSourceName?: string | null;
  resolverArn?: string | null;
  requestMappingTemplate?: string | null;
  responseMappingTemplate?: string | null;
  kind?: ResolverKind | null;
  pipelineConfig?: PipelineConfig | null;
  syncConfig?: SyncConfig | null;
  cachingConfig?: CachingConfig | null;
}

// refs: 4 - tags: output, named, interface
export interface Type {
  name?: string | null;
  description?: string | null;
  arn?: string | null;
  definition?: string | null;
  format?: TypeDefinitionFormat | null;
}

// refs: 2 - tags: output, named, enum
export type SchemaStatus =
| "PROCESSING"
| "ACTIVE"
| "DELETING"
| "FAILED"
| "SUCCESS"
| "NOT_APPLICABLE"
| cmnP.UnexpectedEnumValue;
