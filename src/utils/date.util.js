import moment from 'moment';

export class DateUtil {
  static date(date) {
    return date ? moment(new Date(date)).format() : '';
  }
  static utc(date) {
    return date ? moment.utc(new Date(date)).format() : '';
  }
}
