const dateFormatter = (date) => {

  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
}

export default dateFormatter
