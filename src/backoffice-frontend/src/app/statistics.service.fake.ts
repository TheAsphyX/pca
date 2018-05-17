import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistics } from './statistics.model';

@Injectable()
export class StatisticsServiceFake {

  constructor() { }

  public getStatistics(): Observable<Statistics> {
    return of(new Statistics(
      1255,
      1323,
      13,
      28,
      102,
      328
    ));
  }

}
