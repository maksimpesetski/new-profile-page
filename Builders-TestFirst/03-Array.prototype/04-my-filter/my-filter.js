const myFilter = (arr, func) => {
    let copy = [];

    for (let val of arr) {
        if (func(val)) copy.push(val);
    }

    return copy
}