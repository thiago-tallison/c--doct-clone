export function formatDate(ISODate: string): string {
  const date = new Date(ISODate)

  return new Intl.DateTimeFormat('pt', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}