const flatten = (arr) => {
    let newArr = [];
    debugger;
    for (let level of arr) {
        if (Array.isArray(level)) {
            newArr = newArr.concat(flatten(level));
        } else {
            newArr.push(level)
        }
    } 
    return newArr
}
