// Refactored utility functions
export function formatValue(v: number): string {
  return v.toFixed(2);
}

export function validateInput(input: string): boolean {
  return input.length > 0 && input.length <= 100;
}

export function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): T {
  let timer: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as T;
}
