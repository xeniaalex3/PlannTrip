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