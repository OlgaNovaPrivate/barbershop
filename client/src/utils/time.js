const createDate = (date, time) => {
  const dateSplit = date.split('.');
  const timeSplit = time.split('.');
  const newDate = new Date(
    `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}T${timeSplit[0]}:${timeSplit[1]}:00Z`
  );
  return newDate;
};

const createDateAndTime = timestamp => {
  const newDate = new Date(timestamp);
  const date = `${(newDate.getDate() < 10 ? '0' : '') + newDate.getDate()}.${
    (newDate.getMonth() + 1 < 10 ? '0' : '') + (newDate.getMonth() + 1)
  }.${newDate.getFullYear()}`;
  const time = `${(newDate.getHours() < 10 ? '0' : '') + newDate.getHours()}.${
    (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes()
  }`;
  return [date, time];
};

const parseDate = (date, time) => {
  const newDate = createDate(date, time);
  return {
    date: newDate.toLocaleDateString('FI-fi'),
    time: newDate.toLocaleTimeString('FI-fi', {
      timeZone: 'UTC',
      hour: '2-digit',
      minute: '2-digit',
    }),
    isPast: new Date() > newDate,
  };
};

export {createDate, parseDate, createDateAndTime};
