// Autogenerated API structures for: Amazon Lookout for Metrics

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface ActivateAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}

// refs: 1 - tags: named, input
export interface BackTestAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}

// refs: 1 - tags: named, input
export interface CreateAlertRequest {
  AlertName: string;
  AlertSensitivityThreshold: number;
  AlertDescription?: string | null;
  AnomalyDetectorArn: string;
  Action: Action;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateAnomalyDetectorRequest {
  AnomalyDetectorName: string;
  AnomalyDetectorDescription?: string | null;
  AnomalyDetectorConfig: AnomalyDetectorConfig;
  KmsKeyArn?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateMetricSetRequest {
  AnomalyDetectorArn: string;
  MetricSetName: string;
  MetricSetDescription?: string | null;
  MetricList: Metric[];
  Offset?: number | null;
  TimestampColumn?: TimestampColumn | null;
  DimensionList?: string[] | null;
  MetricSetFrequency?: Frequency | null;
  MetricSource: MetricSource;
  Timezone?: string | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteAlertRequest {
  AlertArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeAlertRequest {
  AlertArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeAnomalyDetectionExecutionsRequest {
  AnomalyDetectorArn: string;
  Timestamp?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
}

// refs: 1 - tags: named, input
export interface DescribeMetricSetRequest {
  MetricSetArn: string;
}

// refs: 1 - tags: named, input
export interface GetAnomalyGroupRequest {
  AnomalyGroupId: string;
  AnomalyDetectorArn: string;
}

// refs: 1 - tags: named, input
export interface GetFeedbackRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeries;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetSampleDataRequest {
  S3SourceConfig?: SampleDataS3SourceConfig | null;
}

// refs: 1 - tags: named, input
export interface ListAlertsRequest {
  AnomalyDetectorArn?: string | null;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAnomalyDetectorsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListAnomalyGroupSummariesRequest {
  AnomalyDetectorArn: string;
  SensitivityThreshold: number;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListAnomalyGroupTimeSeriesRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupId: string;
  MetricName: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListMetricSetsRequest {
  AnomalyDetectorArn?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface PutFeedbackRequest {
  AnomalyDetectorArn: string;
  AnomalyGroupTimeSeriesFeedback: AnomalyGroupTimeSeriesFeedback;
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
export interface UpdateAnomalyDetectorRequest {
  AnomalyDetectorArn: string;
  KmsKeyArn?: string | null;
  AnomalyDetectorDescription?: string | null;
  AnomalyDetectorConfig?: AnomalyDetectorConfig | null;
}

// refs: 1 - tags: named, input
export interface UpdateMetricSetRequest {
  MetricSetArn: string;
  MetricSetDescription?: string | null;
  MetricList?: Metric[] | null;
  Offset?: number | null;
  TimestampColumn?: TimestampColumn | null;
  DimensionList?: string[] | null;
  MetricSetFrequency?: Frequency | null;
  MetricSource?: MetricSource | null;
}

// refs: 1 - tags: named, output
export interface ActivateAnomalyDetectorResponse {
}

// refs: 1 - tags: named, output
export interface BackTestAnomalyDetectorResponse {
}

// refs: 1 - tags: named, output
export interface CreateAlertResponse {
  AlertArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateAnomalyDetectorResponse {
  AnomalyDetectorArn?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateMetricSetResponse {
  MetricSetArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteAlertResponse {
}

// refs: 1 - tags: named, output
export interface DeleteAnomalyDetectorResponse {
}

// refs: 1 - tags: named, output
export interface DescribeAlertResponse {
  Alert?: Alert | null;
}

// refs: 1 - tags: named, output
export interface DescribeAnomalyDetectionExecutionsResponse {
  ExecutionList?: ExecutionStatus[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeAnomalyDetectorResponse {
  AnomalyDetectorArn?: string | null;
  AnomalyDetectorName?: string | null;
  AnomalyDetectorDescription?: string | null;
  AnomalyDetectorConfig?: AnomalyDetectorConfigSummary | null;
  CreationTime?: Date | number | null;
  LastModificationTime?: Date | number | null;
  Status?: AnomalyDetectorStatus | null;
  FailureReason?: string | null;
  KmsKeyArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeMetricSetResponse {
  MetricSetArn?: string | null;
  AnomalyDetectorArn?: string | null;
  MetricSetName?: string | null;
  MetricSetDescription?: string | null;
  CreationTime?: Date | number | null;
  LastModificationTime?: Date | number | null;
  Offset?: number | null;
  MetricList?: Metric[] | null;
  TimestampColumn?: TimestampColumn | null;
  DimensionList?: string[] | null;
  MetricSetFrequency?: Frequency | null;
  Timezone?: string | null;
  MetricSource?: MetricSource | null;
}

// refs: 1 - tags: named, output
export interface GetAnomalyGroupResponse {
  AnomalyGroup?: AnomalyGroup | null;
}

// refs: 1 - tags: named, output
export interface GetFeedbackResponse {
  AnomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetSampleDataResponse {
  HeaderValues?: string[] | null;
  SampleRows?: string[][] | null;
}

// refs: 1 - tags: named, output
export interface ListAlertsResponse {
  AlertSummaryList?: AlertSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAnomalyDetectorsResponse {
  AnomalyDetectorSummaryList?: AnomalyDetectorSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAnomalyGroupSummariesResponse {
  AnomalyGroupSummaryList?: AnomalyGroupSummary[] | null;
  AnomalyGroupStatistics?: AnomalyGroupStatistics | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAnomalyGroupTimeSeriesResponse {
  AnomalyGroupId?: string | null;
  MetricName?: string | null;
  TimestampList?: string[] | null;
  NextToken?: string | null;
  TimeSeriesList?: TimeSeries[] | null;
}

// refs: 1 - tags: named, output
export interface ListMetricSetsResponse {
  MetricSetSummaryList?: MetricSetSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface PutFeedbackResponse {
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateAnomalyDetectorResponse {
  AnomalyDetectorArn?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateMetricSetResponse {
  MetricSetArn?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface Action {
  SNSConfiguration?: SNSConfiguration | null;
  LambdaConfiguration?: LambdaConfiguration | null;
}

// refs: 2 - tags: input, named, interface, output
export interface SNSConfiguration {
  RoleArn: string;
  SnsTopicArn: string;
}

// refs: 2 - tags: input, named, interface, output
export interface LambdaConfiguration {
  RoleArn: string;
  LambdaArn: string;
}

// refs: 2 - tags: input, named, interface
export interface AnomalyDetectorConfig {
  AnomalyDetectorFrequency?: Frequency | null;
}

// refs: 6 - tags: input, named, enum, output
export type Frequency =
| "P1D"
| "PT1H"
| "PT10M"
| "PT5M"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface Metric {
  MetricName: string;
  AggregationFunction: AggregationFunction;
  Namespace?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type AggregationFunction =
| "AVG"
| "SUM"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface TimestampColumn {
  ColumnName?: string | null;
  ColumnFormat?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface MetricSource {
  S3SourceConfig?: S3SourceConfig | null;
  AppFlowConfig?: AppFlowConfig | null;
  CloudWatchConfig?: CloudWatchConfig | null;
  RDSSourceConfig?: RDSSourceConfig | null;
  RedshiftSourceConfig?: RedshiftSourceConfig | null;
}

// refs: 3 - tags: input, named, interface, output
export interface S3SourceConfig {
  RoleArn: string;
  TemplatedPathList?: string[] | null;
  HistoricalDataPathList?: string[] | null;
  FileFormatDescriptor?: FileFormatDescriptor | null;
}

// refs: 4 - tags: input, named, interface, output
export interface FileFormatDescriptor {
  CsvFormatDescriptor?: CsvFormatDescriptor | null;
  JsonFormatDescriptor?: JsonFormatDescriptor | null;
}

// refs: 4 - tags: input, named, interface, output
export interface CsvFormatDescriptor {
  FileCompression?: CSVFileCompression | null;
  Charset?: string | null;
  ContainsHeader?: boolean | null;
  Delimiter?: string | null;
  HeaderList?: string[] | null;
  QuoteSymbol?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type CSVFileCompression =
| "NONE"
| "GZIP"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface JsonFormatDescriptor {
  FileCompression?: JsonFileCompression | null;
  Charset?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type JsonFileCompression =
| "NONE"
| "GZIP"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface AppFlowConfig {
  RoleArn: string;
  FlowName: string;
}

// refs: 3 - tags: input, named, interface, output
export interface CloudWatchConfig {
  RoleArn: string;
}

// refs: 3 - tags: input, named, interface, output
export interface RDSSourceConfig {
  DBInstanceIdentifier: string;
  DatabaseHost: string;
  DatabasePort: number;
  SecretManagerArn: string;
  DatabaseName: string;
  TableName: string;
  RoleArn: string;
  VpcConfiguration: VpcConfiguration;
}

// refs: 6 - tags: input, named, interface, output
export interface VpcConfiguration {
  SubnetIdList: string[];
  SecurityGroupIdList: string[];
}

// refs: 3 - tags: input, named, interface, output
export interface RedshiftSourceConfig {
  ClusterIdentifier: string;
  DatabaseHost: string;
  DatabasePort: number;
  SecretManagerArn: string;
  DatabaseName: string;
  TableName: string;
  RoleArn: string;
  VpcConfiguration: VpcConfiguration;
}

// refs: 1 - tags: input, named, interface
export interface AnomalyGroupTimeSeries {
  AnomalyGroupId: string;
  TimeSeriesId?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface SampleDataS3SourceConfig {
  RoleArn: string;
  TemplatedPathList?: string[] | null;
  HistoricalDataPathList?: string[] | null;
  FileFormatDescriptor: FileFormatDescriptor;
}

// refs: 1 - tags: input, named, interface
export interface AnomalyGroupTimeSeriesFeedback {
  AnomalyGroupId: string;
  TimeSeriesId: string;
  IsAnomaly: boolean;
}

// refs: 1 - tags: output, named, interface
export interface Alert {
  Action?: Action | null;
  AlertDescription?: string | null;
  AlertArn?: string | null;
  AnomalyDetectorArn?: string | null;
  AlertName?: string | null;
  AlertSensitivityThreshold?: number | null;
  AlertType?: AlertType | null;
  AlertStatus?: AlertStatus | null;
  LastModificationTime?: Date | number | null;
  CreationTime?: Date | number | null;
}

// refs: 2 - tags: output, named, enum
export type AlertType =
| "SNS"
| "LAMBDA"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type AlertStatus =
| "ACTIVE"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ExecutionStatus {
  Timestamp?: string | null;
  Status?: AnomalyDetectionTaskStatus | null;
  FailureReason?: string | null;
}

// refs: 1 - tags: output, named, enum
export type AnomalyDetectionTaskStatus =
| "PENDING"
| "IN_PROGRESS"
| "COMPLETED"
| "FAILED"
| "FAILED_TO_SCHEDULE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface AnomalyDetectorConfigSummary {
  AnomalyDetectorFrequency?: Frequency | null;
}

// refs: 2 - tags: output, named, enum
export type AnomalyDetectorStatus =
| "ACTIVE"
| "ACTIVATING"
| "DELETING"
| "FAILED"
| "INACTIVE"
| "BACK_TEST_ACTIVATING"
| "BACK_TEST_ACTIVE"
| "BACK_TEST_COMPLETE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface AnomalyGroup {
  StartTime?: string | null;
  EndTime?: string | null;
  AnomalyGroupId?: string | null;
  AnomalyGroupScore?: number | null;
  PrimaryMetricName?: string | null;
  MetricLevelImpactList?: MetricLevelImpact[] | null;
}

// refs: 1 - tags: output, named, interface
export interface MetricLevelImpact {
  MetricName?: string | null;
  NumTimeSeries?: number | null;
  ContributionMatrix?: ContributionMatrix | null;
}

// refs: 1 - tags: output, named, interface
export interface ContributionMatrix {
  DimensionContributionList?: DimensionContribution[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DimensionContribution {
  DimensionName?: string | null;
  DimensionValueContributionList?: DimensionValueContribution[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DimensionValueContribution {
  DimensionValue?: string | null;
  ContributionScore?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface TimeSeriesFeedback {
  TimeSeriesId?: string | null;
  IsAnomaly?: boolean | null;
}

// refs: 1 - tags: output, named, interface
export interface AlertSummary {
  AlertArn?: string | null;
  AnomalyDetectorArn?: string | null;
  AlertName?: string | null;
  AlertSensitivityThreshold?: number | null;
  AlertType?: AlertType | null;
  AlertStatus?: AlertStatus | null;
  LastModificationTime?: Date | number | null;
  CreationTime?: Date | number | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface AnomalyDetectorSummary {
  AnomalyDetectorArn?: string | null;
  AnomalyDetectorName?: string | null;
  AnomalyDetectorDescription?: string | null;
  CreationTime?: Date | number | null;
  LastModificationTime?: Date | number | null;
  Status?: AnomalyDetectorStatus | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface AnomalyGroupSummary {
  StartTime?: string | null;
  EndTime?: string | null;
  AnomalyGroupId?: string | null;
  AnomalyGroupScore?: number | null;
  PrimaryMetricName?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface AnomalyGroupStatistics {
  EvaluationStartDate?: string | null;
  TotalCount?: number | null;
  ItemizedMetricStatsList?: ItemizedMetricStats[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ItemizedMetricStats {
  MetricName?: string | null;
  OccurrenceCount?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface TimeSeries {
  TimeSeriesId: string;
  DimensionList: DimensionNameValue[];
  MetricValueList: number[];
}

// refs: 1 - tags: output, named, interface
export interface DimensionNameValue {
  DimensionName: string;
  DimensionValue: string;
}

// refs: 1 - tags: output, named, interface
export interface MetricSetSummary {
  MetricSetArn?: string | null;
  AnomalyDetectorArn?: string | null;
  MetricSetDescription?: string | null;
  MetricSetName?: string | null;
  CreationTime?: Date | number | null;
  LastModificationTime?: Date | number | null;
  Tags?: { [key: string]: string | null | undefined } | null;
}
