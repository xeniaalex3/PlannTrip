import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';

export function formatDateRange(
  range: DateRange | undefined,
  separator: string = ' - ',
  fallback: string = ''
) {
  if (range?.from && range?.to) {
    return `${format(range.from, 'dd/MM/yyyy')}${separator}${format(
      range.to,
      'dd/MM/yyyy'
    )}`;
  }
  return fallback;
}

export function formatSingleDate(
  date: Date | undefined,
  fallback: string = ''
): string {
  if (!date) return fallback
  return format(date, 'dd/MM/yyyy')
}

export function formatDateString(
  date: string,
  fallback: string = ''
): string {
  if (!date) return fallback;
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, 'dd/MM/yyyy');
}