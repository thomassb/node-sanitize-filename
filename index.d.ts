declare function sanitize(
  input: string,
  options?: {
    replacement?: string | ((substring: string) => string);
    truncateNumber?: integer;
    convertWhiteSpace?: string | ((substring: string) => string);
  }
): string;

export = sanitize;
