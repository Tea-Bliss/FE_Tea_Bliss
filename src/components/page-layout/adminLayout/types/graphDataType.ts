export interface DimensionHeader {
  name: string;
}

export interface MetricHeader {
  name: string;
  type: string;
}

export interface DimensionValue {
  value: string;
}

export interface MetricValue {
  value: string;
}

export interface Row {
  dimensionValues: DimensionValue[];
  metricValues: MetricValue[];
}

export interface Metadata {
  currencyCode: string;
  timeZone: string;
}

export interface GraphDataType {
  dimensionHeaders: DimensionHeader[];
  metricHeaders: MetricHeader[];
  rows: Row[];
  rowCount: number;
  metadata: Metadata;
  kind: string;
}
