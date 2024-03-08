export function fromStr(value: string): TransactionId | undefined {
    if (value.length !== 64) {
      return undefined;
    }
    return value as TransactionId;
  }