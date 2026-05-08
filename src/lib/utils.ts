import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine Tailwind classes intelligently — shadcn standard.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
