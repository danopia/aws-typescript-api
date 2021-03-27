// Autogenerated API structures for: Amazon Appflow

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateConnectorProfileRequest {
  connectorProfileName: string;
  kmsArn?: string | null;
  connectorType: ConnectorType;
  connectionMode: ConnectionMode;
  connectorProfileConfig: ConnectorProfileConfig;
}

// refs: 1 - tags: named, input
export interface CreateFlowRequest {
  flowName: string;
  description?: string | null;
  kmsArn?: string | null;
  triggerConfig: TriggerConfig;
  sourceFlowConfig: SourceFlowConfig;
  destinationFlowConfigList: DestinationFlowConfig[];
  tasks: Task[];
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteConnectorProfileRequest {
  connectorProfileName: string;
  forceDelete?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteFlowRequest {
  flowName: string;
  forceDelete?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectorEntityRequest {
  connectorEntityName: string;
  connectorType?: ConnectorType | null;
  connectorProfileName?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectorProfilesRequest {
  connectorProfileNames?: string[] | null;
  connectorType?: ConnectorType | null;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeConnectorsRequest {
  connectorTypes?: ConnectorType[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeFlowRequest {
  flowName: string;
}

// refs: 1 - tags: named, input
export interface DescribeFlowExecutionRecordsRequest {
  flowName: string;
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListConnectorEntitiesRequest {
  connectorProfileName?: string | null;
  connectorType?: ConnectorType | null;
  entitiesPath?: string | null;
}

// refs: 1 - tags: named, input
export interface ListFlowsRequest {
  maxResults?: number | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface StartFlowRequest {
  flowName: string;
}

// refs: 1 - tags: named, input
export interface StopFlowRequest {
  flowName: string;
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
export interface UpdateConnectorProfileRequest {
  connectorProfileName: string;
  connectionMode: ConnectionMode;
  connectorProfileConfig: ConnectorProfileConfig;
}

// refs: 1 - tags: named, input
export interface UpdateFlowRequest {
  flowName: string;
  description?: string | null;
  triggerConfig: TriggerConfig;
  sourceFlowConfig?: SourceFlowConfig | null;
  destinationFlowConfigList: DestinationFlowConfig[];
  tasks: Task[];
}

// refs: 1 - tags: named, output
export interface CreateConnectorProfileResponse {
  connectorProfileArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateFlowResponse {
  flowArn?: string | null;
  flowStatus?: FlowStatus | null;
}

// refs: 1 - tags: named, output
export interface DeleteConnectorProfileResponse {
}

// refs: 1 - tags: named, output
export interface DeleteFlowResponse {
}

// refs: 1 - tags: named, output
export interface DescribeConnectorEntityResponse {
  connectorEntityFields: ConnectorEntityField[];
}

// refs: 1 - tags: named, output
export interface DescribeConnectorProfilesResponse {
  connectorProfileDetails?: ConnectorProfile[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeConnectorsResponse {
  connectorConfigurations?: { [key in ConnectorType]: ConnectorConfiguration | null | undefined } | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeFlowResponse {
  flowArn?: string | null;
  description?: string | null;
  flowName?: string | null;
  kmsArn?: string | null;
  flowStatus?: FlowStatus | null;
  flowStatusMessage?: string | null;
  sourceFlowConfig?: SourceFlowConfig | null;
  destinationFlowConfigList?: DestinationFlowConfig[] | null;
  lastRunExecutionDetails?: ExecutionDetails | null;
  triggerConfig?: TriggerConfig | null;
  tasks?: Task[] | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  createdBy?: string | null;
  lastUpdatedBy?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DescribeFlowExecutionRecordsResponse {
  flowExecutions?: ExecutionRecord[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListConnectorEntitiesResponse {
  connectorEntityMap: { [key: string]: ConnectorEntity[] | null | undefined };
}

// refs: 1 - tags: named, output
export interface ListFlowsResponse {
  flows?: FlowDefinition[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface StartFlowResponse {
  flowArn?: string | null;
  flowStatus?: FlowStatus | null;
  executionId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopFlowResponse {
  flowArn?: string | null;
  flowStatus?: FlowStatus | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateConnectorProfileResponse {
  connectorProfileArn?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateFlowResponse {
  flowStatus?: FlowStatus | null;
}

// refs: 16 - tags: input, named, enum, output
export type ConnectorType =
| "Salesforce"
| "Singular"
| "Slack"
| "Redshift"
| "S3"
| "Marketo"
| "Googleanalytics"
| "Zendesk"
| "Servicenow"
| "Datadog"
| "Trendmicro"
| "Snowflake"
| "Dynatrace"
| "Infornexus"
| "Amplitude"
| "Veeva"
| "EventBridge"
| "LookoutMetrics"
| "Upsolver"
| "Honeycode"
| "CustomerProfiles"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ConnectionMode =
| "Public"
| "Private"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface
export interface ConnectorProfileConfig {
  connectorProfileProperties: ConnectorProfileProperties;
  connectorProfileCredentials: ConnectorProfileCredentials;
}

// refs: 3 - tags: input, named, interface, output
export interface ConnectorProfileProperties {
  Amplitude?: AmplitudeConnectorProfileProperties | null;
  Datadog?: DatadogConnectorProfileProperties | null;
  Dynatrace?: DynatraceConnectorProfileProperties | null;
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileProperties | null;
  Honeycode?: HoneycodeConnectorProfileProperties | null;
  InforNexus?: InforNexusConnectorProfileProperties | null;
  Marketo?: MarketoConnectorProfileProperties | null;
  Redshift?: RedshiftConnectorProfileProperties | null;
  Salesforce?: SalesforceConnectorProfileProperties | null;
  ServiceNow?: ServiceNowConnectorProfileProperties | null;
  Singular?: SingularConnectorProfileProperties | null;
  Slack?: SlackConnectorProfileProperties | null;
  Snowflake?: SnowflakeConnectorProfileProperties | null;
  Trendmicro?: TrendmicroConnectorProfileProperties | null;
  Veeva?: VeevaConnectorProfileProperties | null;
  Zendesk?: ZendeskConnectorProfileProperties | null;
}

// refs: 3 - tags: input, named, interface, output
export interface AmplitudeConnectorProfileProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface DatadogConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface DynatraceConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface GoogleAnalyticsConnectorProfileProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface HoneycodeConnectorProfileProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface InforNexusConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface MarketoConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface RedshiftConnectorProfileProperties {
  databaseUrl: string;
  bucketName: string;
  bucketPrefix?: string | null;
  roleArn: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SalesforceConnectorProfileProperties {
  instanceUrl?: string | null;
  isSandboxEnvironment?: boolean | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ServiceNowConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SingularConnectorProfileProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface SlackConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SnowflakeConnectorProfileProperties {
  warehouse: string;
  stage: string;
  bucketName: string;
  bucketPrefix?: string | null;
  privateLinkServiceName?: string | null;
  accountName?: string | null;
  region?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface TrendmicroConnectorProfileProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface VeevaConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 3 - tags: input, named, interface, output
export interface ZendeskConnectorProfileProperties {
  instanceUrl: string;
}

// refs: 2 - tags: input, named, interface
export interface ConnectorProfileCredentials {
  Amplitude?: AmplitudeConnectorProfileCredentials | null;
  Datadog?: DatadogConnectorProfileCredentials | null;
  Dynatrace?: DynatraceConnectorProfileCredentials | null;
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials | null;
  Honeycode?: HoneycodeConnectorProfileCredentials | null;
  InforNexus?: InforNexusConnectorProfileCredentials | null;
  Marketo?: MarketoConnectorProfileCredentials | null;
  Redshift?: RedshiftConnectorProfileCredentials | null;
  Salesforce?: SalesforceConnectorProfileCredentials | null;
  ServiceNow?: ServiceNowConnectorProfileCredentials | null;
  Singular?: SingularConnectorProfileCredentials | null;
  Slack?: SlackConnectorProfileCredentials | null;
  Snowflake?: SnowflakeConnectorProfileCredentials | null;
  Trendmicro?: TrendmicroConnectorProfileCredentials | null;
  Veeva?: VeevaConnectorProfileCredentials | null;
  Zendesk?: ZendeskConnectorProfileCredentials | null;
}

// refs: 2 - tags: input, named, interface
export interface AmplitudeConnectorProfileCredentials {
  apiKey: string;
  secretKey: string;
}

// refs: 2 - tags: input, named, interface
export interface DatadogConnectorProfileCredentials {
  apiKey: string;
  applicationKey: string;
}

// refs: 2 - tags: input, named, interface
export interface DynatraceConnectorProfileCredentials {
  apiToken: string;
}

// refs: 2 - tags: input, named, interface
export interface GoogleAnalyticsConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string | null;
  refreshToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
}

// refs: 12 - tags: input, named, interface
export interface ConnectorOAuthRequest {
  authCode?: string | null;
  redirectUri?: string | null;
}

// refs: 2 - tags: input, named, interface
export interface HoneycodeConnectorProfileCredentials {
  accessToken?: string | null;
  refreshToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
}

// refs: 2 - tags: input, named, interface
export interface InforNexusConnectorProfileCredentials {
  accessKeyId: string;
  userId: string;
  secretAccessKey: string;
  datakey: string;
}

// refs: 2 - tags: input, named, interface
export interface MarketoConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
}

// refs: 2 - tags: input, named, interface
export interface RedshiftConnectorProfileCredentials {
  username: string;
  password: string;
}

// refs: 2 - tags: input, named, interface
export interface SalesforceConnectorProfileCredentials {
  accessToken?: string | null;
  refreshToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
  clientCredentialsArn?: string | null;
}

// refs: 2 - tags: input, named, interface
export interface ServiceNowConnectorProfileCredentials {
  username: string;
  password: string;
}

// refs: 2 - tags: input, named, interface
export interface SingularConnectorProfileCredentials {
  apiKey: string;
}

// refs: 2 - tags: input, named, interface
export interface SlackConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
}

// refs: 2 - tags: input, named, interface
export interface SnowflakeConnectorProfileCredentials {
  username: string;
  password: string;
}

// refs: 2 - tags: input, named, interface
export interface TrendmicroConnectorProfileCredentials {
  apiSecretKey: string;
}

// refs: 2 - tags: input, named, interface
export interface VeevaConnectorProfileCredentials {
  username: string;
  password: string;
}

// refs: 2 - tags: input, named, interface
export interface ZendeskConnectorProfileCredentials {
  clientId: string;
  clientSecret: string;
  accessToken?: string | null;
  oAuthRequest?: ConnectorOAuthRequest | null;
}

// refs: 3 - tags: input, named, interface, output
export interface TriggerConfig {
  triggerType: TriggerType;
  triggerProperties?: TriggerProperties | null;
}

// refs: 5 - tags: input, named, enum, output
export type TriggerType =
| "Scheduled"
| "Event"
| "OnDemand"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ScheduledTriggerProperties {
  scheduleExpression: string;
  dataPullMode?: DataPullMode | null;
  scheduleStartTime?: Date | number | null;
  scheduleEndTime?: Date | number | null;
  timezone?: string | null;
  scheduleOffset?: number | null;
  firstExecutionFrom?: Date | number | null;
}

// refs: 3 - tags: input, named, enum, output
export type DataPullMode =
| "Incremental"
| "Complete"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SourceFlowConfig {
  connectorType: ConnectorType;
  connectorProfileName?: string | null;
  sourceConnectorProperties: SourceConnectorProperties;
  incrementalPullConfig?: IncrementalPullConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SourceConnectorProperties {
  Amplitude?: AmplitudeSourceProperties | null;
  Datadog?: DatadogSourceProperties | null;
  Dynatrace?: DynatraceSourceProperties | null;
  GoogleAnalytics?: GoogleAnalyticsSourceProperties | null;
  InforNexus?: InforNexusSourceProperties | null;
  Marketo?: MarketoSourceProperties | null;
  S3?: S3SourceProperties | null;
  Salesforce?: SalesforceSourceProperties | null;
  ServiceNow?: ServiceNowSourceProperties | null;
  Singular?: SingularSourceProperties | null;
  Slack?: SlackSourceProperties | null;
  Trendmicro?: TrendmicroSourceProperties | null;
  Veeva?: VeevaSourceProperties | null;
  Zendesk?: ZendeskSourceProperties | null;
}

// refs: 3 - tags: input, named, interface, output
export interface AmplitudeSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface DatadogSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface DynatraceSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface GoogleAnalyticsSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface InforNexusSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface MarketoSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface S3SourceProperties {
  bucketName: string;
  bucketPrefix?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SalesforceSourceProperties {
  object: string;
  enableDynamicFieldUpdate?: boolean | null;
  includeDeletedRecords?: boolean | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ServiceNowSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SingularSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SlackSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface TrendmicroSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface VeevaSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface ZendeskSourceProperties {
  object: string;
}

// refs: 3 - tags: input, named, interface, output
export interface IncrementalPullConfig {
  datetimeTypeFieldName?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface DestinationFlowConfig {
  connectorType: ConnectorType;
  connectorProfileName?: string | null;
  destinationConnectorProperties: DestinationConnectorProperties;
}

// refs: 3 - tags: input, named, interface, output
export interface DestinationConnectorProperties {
  Redshift?: RedshiftDestinationProperties | null;
  S3?: S3DestinationProperties | null;
  Salesforce?: SalesforceDestinationProperties | null;
  Snowflake?: SnowflakeDestinationProperties | null;
  EventBridge?: EventBridgeDestinationProperties | null;
  LookoutMetrics?: LookoutMetricsDestinationProperties | null;
  Upsolver?: UpsolverDestinationProperties | null;
  Honeycode?: HoneycodeDestinationProperties | null;
  CustomerProfiles?: CustomerProfilesDestinationProperties | null;
}

// refs: 3 - tags: input, named, interface, output
export interface RedshiftDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string | null;
  errorHandlingConfig?: ErrorHandlingConfig | null;
}

// refs: 15 - tags: input, named, interface, output
export interface ErrorHandlingConfig {
  failOnFirstDestinationError?: boolean | null;
  bucketPrefix?: string | null;
  bucketName?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface S3DestinationProperties {
  bucketName: string;
  bucketPrefix?: string | null;
  s3OutputFormatConfig?: S3OutputFormatConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface S3OutputFormatConfig {
  fileType?: FileType | null;
  prefixConfig?: PrefixConfig | null;
  aggregationConfig?: AggregationConfig | null;
}

// refs: 6 - tags: input, named, enum, output
export type FileType =
| "CSV"
| "JSON"
| "PARQUET"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface PrefixConfig {
  prefixType?: PrefixType | null;
  prefixFormat?: PrefixFormat | null;
}

// refs: 6 - tags: input, named, enum, output
export type PrefixType =
| "FILENAME"
| "PATH"
| "PATH_AND_FILENAME"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type PrefixFormat =
| "YEAR"
| "MONTH"
| "DAY"
| "HOUR"
| "MINUTE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface AggregationConfig {
  aggregationType?: AggregationType | null;
}

// refs: 6 - tags: input, named, enum, output
export type AggregationType =
| "None"
| "SingleFile"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SalesforceDestinationProperties {
  object: string;
  idFieldNames?: string[] | null;
  errorHandlingConfig?: ErrorHandlingConfig | null;
  writeOperationType?: WriteOperationType | null;
}

// refs: 4 - tags: input, named, enum, output
export type WriteOperationType =
| "INSERT"
| "UPSERT"
| "UPDATE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SnowflakeDestinationProperties {
  object: string;
  intermediateBucketName: string;
  bucketPrefix?: string | null;
  errorHandlingConfig?: ErrorHandlingConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface EventBridgeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface LookoutMetricsDestinationProperties {
}

// refs: 3 - tags: input, named, interface, output
export interface UpsolverDestinationProperties {
  bucketName: string;
  bucketPrefix?: string | null;
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}

// refs: 3 - tags: input, named, interface, output
export interface UpsolverS3OutputFormatConfig {
  fileType?: FileType | null;
  prefixConfig: PrefixConfig;
  aggregationConfig?: AggregationConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface HoneycodeDestinationProperties {
  object: string;
  errorHandlingConfig?: ErrorHandlingConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface CustomerProfilesDestinationProperties {
  domainName: string;
  objectTypeName?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Task {
  sourceFields: string[];
  connectorOperator?: ConnectorOperator | null;
  destinationField?: string | null;
  taskType: TaskType;
  taskProperties?: { [key in OperatorPropertiesKeys]: string | null | undefined } | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConnectorOperator {
  Amplitude?: AmplitudeConnectorOperator | null;
  Datadog?: DatadogConnectorOperator | null;
  Dynatrace?: DynatraceConnectorOperator | null;
  GoogleAnalytics?: GoogleAnalyticsConnectorOperator | null;
  InforNexus?: InforNexusConnectorOperator | null;
  Marketo?: MarketoConnectorOperator | null;
  S3?: S3ConnectorOperator | null;
  Salesforce?: SalesforceConnectorOperator | null;
  ServiceNow?: ServiceNowConnectorOperator | null;
  Singular?: SingularConnectorOperator | null;
  Slack?: SlackConnectorOperator | null;
  Trendmicro?: TrendmicroConnectorOperator | null;
  Veeva?: VeevaConnectorOperator | null;
  Zendesk?: ZendeskConnectorOperator | null;
}

// refs: 3 - tags: input, named, enum, output
export type AmplitudeConnectorOperator =
| "BETWEEN"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type DatadogConnectorOperator =
| "PROJECTION"
| "BETWEEN"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type DynatraceConnectorOperator =
| "PROJECTION"
| "BETWEEN"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type GoogleAnalyticsConnectorOperator =
| "PROJECTION"
| "BETWEEN"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type InforNexusConnectorOperator =
| "PROJECTION"
| "BETWEEN"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type MarketoConnectorOperator =
| "PROJECTION"
| "LESS_THAN"
| "GREATER_THAN"
| "BETWEEN"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type S3ConnectorOperator =
| "PROJECTION"
| "LESS_THAN"
| "GREATER_THAN"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "NOT_EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type SalesforceConnectorOperator =
| "PROJECTION"
| "LESS_THAN"
| "CONTAINS"
| "GREATER_THAN"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "NOT_EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ServiceNowConnectorOperator =
| "PROJECTION"
| "CONTAINS"
| "LESS_THAN"
| "GREATER_THAN"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "NOT_EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type SingularConnectorOperator =
| "PROJECTION"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type SlackConnectorOperator =
| "PROJECTION"
| "LESS_THAN"
| "GREATER_THAN"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type TrendmicroConnectorOperator =
| "PROJECTION"
| "EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type VeevaConnectorOperator =
| "PROJECTION"
| "LESS_THAN"
| "GREATER_THAN"
| "CONTAINS"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "NOT_EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type ZendeskConnectorOperator =
| "PROJECTION"
| "GREATER_THAN"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type TaskType =
| "Arithmetic"
| "Filter"
| "Map"
| "Mask"
| "Merge"
| "Truncate"
| "Validate"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type OperatorPropertiesKeys =
| "VALUE"
| "VALUES"
| "DATA_TYPE"
| "UPPER_BOUND"
| "LOWER_BOUND"
| "SOURCE_DATA_TYPE"
| "DESTINATION_DATA_TYPE"
| "VALIDATION_ACTION"
| "MASK_VALUE"
| "MASK_LENGTH"
| "TRUNCATE_LENGTH"
| "MATH_OPERATION_FIELDS_ORDER"
| "CONCAT_FORMAT"
| "SUBFIELD_CATEGORY_MAP"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, enum
export type FlowStatus =
| "Active"
| "Deprecated"
| "Deleted"
| "Draft"
| "Errored"
| "Suspended"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ConnectorEntityField {
  identifier: string;
  label?: string | null;
  supportedFieldTypeDetails?: SupportedFieldTypeDetails | null;
  description?: string | null;
  sourceProperties?: SourceFieldProperties | null;
  destinationProperties?: DestinationFieldProperties | null;
}

// refs: 1 - tags: output, named, interface
export interface SupportedFieldTypeDetails {
  v1: FieldTypeDetails;
}

// refs: 1 - tags: output, named, interface
export interface FieldTypeDetails {
  fieldType: string;
  filterOperators: Operator[];
  supportedValues?: string[] | null;
}

// refs: 1 - tags: output, named, enum
export type Operator =
| "PROJECTION"
| "LESS_THAN"
| "GREATER_THAN"
| "CONTAINS"
| "BETWEEN"
| "LESS_THAN_OR_EQUAL_TO"
| "GREATER_THAN_OR_EQUAL_TO"
| "EQUAL_TO"
| "NOT_EQUAL_TO"
| "ADDITION"
| "MULTIPLICATION"
| "DIVISION"
| "SUBTRACTION"
| "MASK_ALL"
| "MASK_FIRST_N"
| "MASK_LAST_N"
| "VALIDATE_NON_NULL"
| "VALIDATE_NON_ZERO"
| "VALIDATE_NON_NEGATIVE"
| "VALIDATE_NUMERIC"
| "NO_OP"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface SourceFieldProperties {
  isRetrievable?: boolean | null;
  isQueryable?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface DestinationFieldProperties {
  isCreatable?: boolean | null;
  isNullable?: boolean | null;
  isUpsertable?: boolean | null;
  isUpdatable?: boolean | null;
  supportedWriteOperations?: WriteOperationType[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ConnectorProfile {
  connectorProfileArn?: string | null;
  connectorProfileName?: string | null;
  connectorType?: ConnectorType | null;
  connectionMode?: ConnectionMode | null;
  credentialsArn?: string | null;
  connectorProfileProperties?: ConnectorProfileProperties | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface ConnectorConfiguration {
  canUseAsSource?: boolean | null;
  canUseAsDestination?: boolean | null;
  supportedDestinationConnectors?: ConnectorType[] | null;
  supportedSchedulingFrequencies?: ScheduleFrequencyType[] | null;
  isPrivateLinkEnabled?: boolean | null;
  isPrivateLinkEndpointUrlRequired?: boolean | null;
  supportedTriggerTypes?: TriggerType[] | null;
  connectorMetadata?: ConnectorMetadata | null;
}

// refs: 1 - tags: output, named, enum
export type ScheduleFrequencyType =
| "BYMINUTE"
| "HOURLY"
| "DAILY"
| "WEEKLY"
| "MONTHLY"
| "ONCE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ConnectorMetadata {
  Amplitude?: AmplitudeMetadata | null;
  Datadog?: DatadogMetadata | null;
  Dynatrace?: DynatraceMetadata | null;
  GoogleAnalytics?: GoogleAnalyticsMetadata | null;
  InforNexus?: InforNexusMetadata | null;
  Marketo?: MarketoMetadata | null;
  Redshift?: RedshiftMetadata | null;
  S3?: S3Metadata | null;
  Salesforce?: SalesforceMetadata | null;
  ServiceNow?: ServiceNowMetadata | null;
  Singular?: SingularMetadata | null;
  Slack?: SlackMetadata | null;
  Snowflake?: SnowflakeMetadata | null;
  Trendmicro?: TrendmicroMetadata | null;
  Veeva?: VeevaMetadata | null;
  Zendesk?: ZendeskMetadata | null;
  EventBridge?: EventBridgeMetadata | null;
  Upsolver?: UpsolverMetadata | null;
  CustomerProfiles?: CustomerProfilesMetadata | null;
  Honeycode?: HoneycodeMetadata | null;
}

// refs: 1 - tags: output, named, interface
export interface AmplitudeMetadata {
}

// refs: 1 - tags: output, named, interface
export interface DatadogMetadata {
}

// refs: 1 - tags: output, named, interface
export interface DynatraceMetadata {
}

// refs: 1 - tags: output, named, interface
export interface GoogleAnalyticsMetadata {
  oAuthScopes?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface InforNexusMetadata {
}

// refs: 1 - tags: output, named, interface
export interface MarketoMetadata {
}

// refs: 1 - tags: output, named, interface
export interface RedshiftMetadata {
}

// refs: 1 - tags: output, named, interface
export interface S3Metadata {
}

// refs: 1 - tags: output, named, interface
export interface SalesforceMetadata {
  oAuthScopes?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ServiceNowMetadata {
}

// refs: 1 - tags: output, named, interface
export interface SingularMetadata {
}

// refs: 1 - tags: output, named, interface
export interface SlackMetadata {
  oAuthScopes?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface SnowflakeMetadata {
  supportedRegions?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface TrendmicroMetadata {
}

// refs: 1 - tags: output, named, interface
export interface VeevaMetadata {
}

// refs: 1 - tags: output, named, interface
export interface ZendeskMetadata {
  oAuthScopes?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface EventBridgeMetadata {
}

// refs: 1 - tags: output, named, interface
export interface UpsolverMetadata {
}

// refs: 1 - tags: output, named, interface
export interface CustomerProfilesMetadata {
}

// refs: 1 - tags: output, named, interface
export interface HoneycodeMetadata {
  oAuthScopes?: string[] | null;
}

// refs: 2 - tags: output, named, interface
export interface ExecutionDetails {
  mostRecentExecutionMessage?: string | null;
  mostRecentExecutionTime?: Date | number | null;
  mostRecentExecutionStatus?: ExecutionStatus | null;
}

// refs: 3 - tags: output, named, enum
export type ExecutionStatus =
| "InProgress"
| "Successful"
| "Error"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ExecutionRecord {
  executionId?: string | null;
  executionStatus?: ExecutionStatus | null;
  executionResult?: ExecutionResult | null;
  startedAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  dataPullStartTime?: Date | number | null;
  dataPullEndTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface ExecutionResult {
  errorInfo?: ErrorInfo | null;
  bytesProcessed?: number | null;
  bytesWritten?: number | null;
  recordsProcessed?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface ErrorInfo {
  putFailuresCount?: number | null;
  executionMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ConnectorEntity {
  name: string;
  label?: string | null;
  hasNestedEntities?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface FlowDefinition {
  flowArn?: string | null;
  description?: string | null;
  flowName?: string | null;
  flowStatus?: FlowStatus | null;
  sourceConnectorType?: ConnectorType | null;
  destinationConnectorType?: ConnectorType | null;
  triggerType?: TriggerType | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  createdBy?: string | null;
  lastUpdatedBy?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
  lastRunExecutionDetails?: ExecutionDetails | null;
}
