// Autogenerated API structures for: AWS IoT Events

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string | null;
  key?: string | null;
  roleArn: string;
  tags?: Tag[] | null;
  evaluationMethod?: EvaluationMethod | null;
}

// refs: 1 - tags: named, input
export interface CreateInputRequest {
  inputName: string;
  inputDescription?: string | null;
  inputDefinition: InputDefinition;
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteDetectorModelRequest {
  detectorModelName: string;
}

// refs: 1 - tags: named, input
export interface DeleteInputRequest {
  inputName: string;
}

// refs: 1 - tags: named, input
export interface DescribeDetectorModelRequest {
  detectorModelName: string;
  detectorModelVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeDetectorModelAnalysisRequest {
  analysisId: string;
}

// refs: 1 - tags: named, input
export interface DescribeInputRequest {
  inputName: string;
}

// refs: 1 - tags: named, input
export interface DescribeLoggingOptionsRequest {
}

// refs: 1 - tags: named, input
export interface GetDetectorModelAnalysisResultsRequest {
  analysisId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListDetectorModelVersionsRequest {
  detectorModelName: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListDetectorModelsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListInputsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}

// refs: 1 - tags: named, input
export interface StartDetectorModelAnalysisRequest {
  detectorModelDefinition: DetectorModelDefinition;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string | null;
  roleArn: string;
  evaluationMethod?: EvaluationMethod | null;
}

// refs: 1 - tags: named, input
export interface UpdateInputRequest {
  inputName: string;
  inputDescription?: string | null;
  inputDefinition: InputDefinition;
}

// refs: 1 - tags: named, output
export interface CreateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration | null;
}

// refs: 1 - tags: named, output
export interface CreateInputResponse {
  inputConfiguration?: InputConfiguration | null;
}

// refs: 1 - tags: named, output
export interface DeleteDetectorModelResponse {
}

// refs: 1 - tags: named, output
export interface DeleteInputResponse {
}

// refs: 1 - tags: named, output
export interface DescribeDetectorModelResponse {
  detectorModel?: DetectorModel | null;
}

// refs: 1 - tags: named, output
export interface DescribeDetectorModelAnalysisResponse {
  status?: AnalysisStatus | null;
}

// refs: 1 - tags: named, output
export interface DescribeInputResponse {
  input?: Input | null;
}

// refs: 1 - tags: named, output
export interface DescribeLoggingOptionsResponse {
  loggingOptions?: LoggingOptions | null;
}

// refs: 1 - tags: named, output
export interface GetDetectorModelAnalysisResultsResponse {
  analysisResults?: AnalysisResult[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDetectorModelVersionsResponse {
  detectorModelVersionSummaries?: DetectorModelVersionSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDetectorModelsResponse {
  detectorModelSummaries?: DetectorModelSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListInputsResponse {
  inputSummaries?: InputSummary[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface StartDetectorModelAnalysisResponse {
  analysisId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration | null;
}

// refs: 1 - tags: named, output
export interface UpdateInputResponse {
  inputConfiguration?: InputConfiguration | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DetectorModelDefinition {
  states: State[];
  initialStateName: string;
}

// refs: 4 - tags: input, named, interface, output
export interface State {
  stateName: string;
  onInput?: OnInputLifecycle | null;
  onEnter?: OnEnterLifecycle | null;
  onExit?: OnExitLifecycle | null;
}

// refs: 4 - tags: input, named, interface, output
export interface OnInputLifecycle {
  events?: Event[] | null;
  transitionEvents?: TransitionEvent[] | null;
}

// refs: 12 - tags: input, named, interface, output
export interface Event {
  eventName: string;
  condition?: string | null;
  actions?: Action[] | null;
}

// refs: 16 - tags: input, named, interface, output
export interface Action {
  setVariable?: SetVariableAction | null;
  sns?: SNSTopicPublishAction | null;
  iotTopicPublish?: IotTopicPublishAction | null;
  setTimer?: SetTimerAction | null;
  clearTimer?: ClearTimerAction | null;
  resetTimer?: ResetTimerAction | null;
  lambda?: LambdaAction | null;
  iotEvents?: IotEventsAction | null;
  sqs?: SqsAction | null;
  firehose?: FirehoseAction | null;
  dynamoDB?: DynamoDBAction | null;
  dynamoDBv2?: DynamoDBv2Action | null;
  iotSiteWise?: IotSiteWiseAction | null;
}

// refs: 16 - tags: input, named, interface, output
export interface SetVariableAction {
  variableName: string;
  value: string;
}

// refs: 16 - tags: input, named, interface, output
export interface SNSTopicPublishAction {
  targetArn: string;
  payload?: Payload | null;
}

// refs: 128 - tags: input, named, interface, output
export interface Payload {
  contentExpression: string;
  type: PayloadType;
}

// refs: 128 - tags: input, named, enum, output
export type PayloadType =
| "STRING"
| "JSON"
| cmnP.UnexpectedEnumValue;

// refs: 16 - tags: input, named, interface, output
export interface IotTopicPublishAction {
  mqttTopic: string;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface SetTimerAction {
  timerName: string;
  seconds?: number | null;
  durationExpression?: string | null;
}

// refs: 16 - tags: input, named, interface, output
export interface ClearTimerAction {
  timerName: string;
}

// refs: 16 - tags: input, named, interface, output
export interface ResetTimerAction {
  timerName: string;
}

// refs: 16 - tags: input, named, interface, output
export interface LambdaAction {
  functionArn: string;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface IotEventsAction {
  inputName: string;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface SqsAction {
  queueUrl: string;
  useBase64?: boolean | null;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface FirehoseAction {
  deliveryStreamName: string;
  separator?: string | null;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface DynamoDBAction {
  hashKeyType?: string | null;
  hashKeyField: string;
  hashKeyValue: string;
  rangeKeyType?: string | null;
  rangeKeyField?: string | null;
  rangeKeyValue?: string | null;
  operation?: string | null;
  payloadField?: string | null;
  tableName: string;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface DynamoDBv2Action {
  tableName: string;
  payload?: Payload | null;
}

// refs: 16 - tags: input, named, interface, output
export interface IotSiteWiseAction {
  entryId?: string | null;
  assetId?: string | null;
  propertyId?: string | null;
  propertyAlias?: string | null;
  propertyValue: AssetPropertyValue;
}

// refs: 16 - tags: input, named, interface, output
export interface AssetPropertyValue {
  value: AssetPropertyVariant;
  timestamp?: AssetPropertyTimestamp | null;
  quality?: string | null;
}

// refs: 16 - tags: input, named, interface, output
export interface AssetPropertyVariant {
  stringValue?: string | null;
  integerValue?: string | null;
  doubleValue?: string | null;
  booleanValue?: string | null;
}

// refs: 16 - tags: input, named, interface, output
export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface TransitionEvent {
  eventName: string;
  condition: string;
  actions?: Action[] | null;
  nextState: string;
}

// refs: 4 - tags: input, named, interface, output
export interface OnEnterLifecycle {
  events?: Event[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface OnExitLifecycle {
  events?: Event[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  key: string;
  value: string;
}

// refs: 6 - tags: input, named, enum, output
export type EvaluationMethod =
| "BATCH"
| "SERIAL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface InputDefinition {
  attributes: Attribute[];
}

// refs: 3 - tags: input, named, interface, output
export interface Attribute {
  jsonPath: string;
}

// refs: 2 - tags: input, named, interface, output
export interface LoggingOptions {
  roleArn: string;
  level: LoggingLevel;
  enabled: boolean;
  detectorDebugOptions?: DetectorDebugOption[] | null;
}

// refs: 2 - tags: input, named, enum, output
export type LoggingLevel =
| "ERROR"
| "INFO"
| "DEBUG"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface DetectorDebugOption {
  detectorModelName: string;
  keyValue?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface DetectorModelConfiguration {
  detectorModelName?: string | null;
  detectorModelVersion?: string | null;
  detectorModelDescription?: string | null;
  detectorModelArn?: string | null;
  roleArn?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  status?: DetectorModelVersionStatus | null;
  key?: string | null;
  evaluationMethod?: EvaluationMethod | null;
}

// refs: 4 - tags: output, named, enum
export type DetectorModelVersionStatus =
| "ACTIVE"
| "ACTIVATING"
| "INACTIVE"
| "DEPRECATED"
| "DRAFT"
| "PAUSED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface InputConfiguration {
  inputName: string;
  inputDescription?: string | null;
  inputArn: string;
  creationTime: Date | number;
  lastUpdateTime: Date | number;
  status: InputStatus;
}

// refs: 4 - tags: output, named, enum
export type InputStatus =
| "CREATING"
| "UPDATING"
| "ACTIVE"
| "DELETING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DetectorModel {
  detectorModelDefinition?: DetectorModelDefinition | null;
  detectorModelConfiguration?: DetectorModelConfiguration | null;
}

// refs: 1 - tags: output, named, enum
export type AnalysisStatus =
| "RUNNING"
| "COMPLETE"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Input {
  inputConfiguration?: InputConfiguration | null;
  inputDefinition?: InputDefinition | null;
}

// refs: 1 - tags: output, named, interface
export interface AnalysisResult {
  type?: string | null;
  level?: AnalysisResultLevel | null;
  message?: string | null;
  locations?: AnalysisResultLocation[] | null;
}

// refs: 1 - tags: output, named, enum
export type AnalysisResultLevel =
| "INFO"
| "WARNING"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface AnalysisResultLocation {
  path?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface DetectorModelVersionSummary {
  detectorModelName?: string | null;
  detectorModelVersion?: string | null;
  detectorModelArn?: string | null;
  roleArn?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  status?: DetectorModelVersionStatus | null;
  evaluationMethod?: EvaluationMethod | null;
}

// refs: 1 - tags: output, named, interface
export interface DetectorModelSummary {
  detectorModelName?: string | null;
  detectorModelDescription?: string | null;
  creationTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface InputSummary {
  inputName?: string | null;
  inputDescription?: string | null;
  inputArn?: string | null;
  creationTime?: Date | number | null;
  lastUpdateTime?: Date | number | null;
  status?: InputStatus | null;
}
