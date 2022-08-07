function beautifyDate(dateString) {
  const date = new Date(dateString);
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
  return dateTimeFormat.format(date);
}

export { beautifyDate };
