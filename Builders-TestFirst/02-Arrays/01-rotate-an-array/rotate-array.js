const rotate = (arr, num) => {
    while (num > 0 ) {
        arr.unshift(arr.pop());
        num--;
    }
    return arr
}