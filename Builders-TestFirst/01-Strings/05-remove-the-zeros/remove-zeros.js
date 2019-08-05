const removeZeros = (num) => {
    let str = String(num);
    let final = '';

    if (!num) return NaN;

    for (let char of str) {
        if (char !== '0') final += char;
    }

    return Number(final)
}