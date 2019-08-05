const myMap = (arr, func) => {
    let newArr = [];

    for (let val of arr) newArr.push(func(val));

    return newArr
}