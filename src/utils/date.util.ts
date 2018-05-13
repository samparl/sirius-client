import * as moment from 'moment';

export class DateUtil {
  static date(date: any) {
    return date ? moment(new Date(date)).format() : '';
  }
  static utc(date: any) {
    return date ? moment.utc(new Date(date)).format() : '';
  }
}
