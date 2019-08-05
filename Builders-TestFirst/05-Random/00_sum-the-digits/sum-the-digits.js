const sumOfDigits = (num=0) =>  {
    let count =0;
    let str = String(num);
    for (let char of str) count += Number(char);

    return count
}