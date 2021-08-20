const enDateForm = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
})
  .format()
  .split(',');
export const currentDay = enDateForm[0];
export const currentDate = `${enDateForm[1]},${enDateForm[2]}`;
