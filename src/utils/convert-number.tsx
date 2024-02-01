export const convertNumberInHoursAndMinutes = (number: number) => {
  const hours = Math.floor(number / 60)
  const minutes = number % 60

  const hoursFormated = hours.toString().padStart(2, '0')
  const minutesFormated = minutes.toString().padStart(2, '0')

  return `${hoursFormated}h ${minutesFormated}m`
}
