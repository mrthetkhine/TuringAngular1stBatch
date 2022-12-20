import {Inject, Injectable} from '@angular/core';
import {AnalyticsImplementation} from "../analytics-implementation";
import {Metric} from "../model/metric.model";

@Injectable({
  providedIn: 'root'
})
export class AnalyticServiceService {

  constructor(@Inject('implementation') private implementation: AnalyticsImplementation) { }

  record(metric: Metric): void
  {
    this.implementation.recordEvent(metric);
  }
}
