/// Bitcoin Address function for type checking

/// 34 - 62 characters

export function fromStr(v: string): BitcoinAddress | undefined{
    if (v.length < 34 || v.length > 62) {
        return undefined;
    }
    return v as BitcoinAddress;
}