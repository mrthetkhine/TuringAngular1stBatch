import {Metric} from "./model/metric.model";
import {Inject, Injectable} from "@angular/core";


export interface AnalyticsImplementation {
  recordEvent(metric: Metric): void;
}
