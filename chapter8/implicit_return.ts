function isLargeNumber(value: number): boolean {
    if (value > 1_000_000)
        return true;
    else
        return false;
}