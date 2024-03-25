export const formatTime = (date: Date): string => {
  const milliseconds = ("000" + date.getMilliseconds()).slice(-3)
  const seconds = ("00" + date.getSeconds()).slice(-2)
  const minutes = ("00" + date.getMinutes()).slice(-2)

  return `${minutes}:${seconds}:${milliseconds}`
}
