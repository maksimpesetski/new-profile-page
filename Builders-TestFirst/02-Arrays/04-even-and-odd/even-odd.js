const evenOdd = (arr) => {
    let even = [];
    let odd = [];

    for (let num of arr) {
        if (num%2) odd.push(num);
        else even.push(num);
    }
    return [even, odd]
}