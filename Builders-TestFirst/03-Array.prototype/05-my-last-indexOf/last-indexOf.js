const myLastIndexOf = (arr, search, start = arr.length) => {

    for ( let i=start; i>0; i--) {
        if (arr[i] === search) return i;
    }
    return -1
}