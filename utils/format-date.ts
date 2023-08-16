import moment from 'moment';

export const daysAgo = (date: string) => {
  const moment_date = moment(date);

  if (moment_date.isValid()) {
    return moment_date.fromNow();
  }

  return date;
};
