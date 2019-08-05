const underToCamel = (str) => {
    let final = '';

    let arr = str.split("_");
    
    final = arr[0];

    for (let i=1; i<arr.length; i++) final += arr[i].slice(0,1).toUpperCase() +arr[i].slice(1);

    return final
}