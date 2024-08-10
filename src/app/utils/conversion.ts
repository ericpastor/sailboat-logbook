export const metersToFeet = (meters: number): number => {
  return meters * 3.28084
}
const options: Intl.DateTimeFormatOptions = {
  weekday: 'long', // Friday
  year: 'numeric',
  month: 'long', // August
  day: 'numeric', // 9
  hour: 'numeric', // 12
  minute: 'numeric', // 30
  hour12: true, // 12:30 PM
}

export const transformDate = (dateToTransform: Date) => {
  const dateTransformet = new Intl.DateTimeFormat('en-US', options).format(
    dateToTransform
  )
  return dateTransformet
}
