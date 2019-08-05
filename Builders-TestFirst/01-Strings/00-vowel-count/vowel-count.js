const vowelsCount = (str) => {
    let vowels = 'aeuioAEUIO';
    let count = 0;

    for (let char of str) {
        if (vowels.indexOf(char) > -1) count++;
    }
    return count
}