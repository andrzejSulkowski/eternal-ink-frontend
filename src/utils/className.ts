// utils/classNames.ts
export function classNames(
  ...classes: (string | undefined | (() => string | undefined))[]
): string {
  return classes
    .map(cls => (typeof cls === 'function' ? cls() : cls))
    .filter(Boolean)
    .join(' ');
}