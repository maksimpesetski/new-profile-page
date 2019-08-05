const myJoin = (arr, sep) => {
    let final = '';

    if (sep === undefined) sep = ',';

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === undefined || arr[i] === null) contimue;
        else if (i === 0) final += arr[i];
        else final += sep + arr[i];
    }
    return final
}
