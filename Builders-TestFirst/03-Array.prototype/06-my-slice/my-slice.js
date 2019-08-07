const mySlice = (arr, start = 0, end = arr.length) => {

    let copy = [];
   
    if (start < 0) start = arr.length + start;
    if (end<0) end = arr.length + end;

    for (let i = start; i < end; i++) copy.push(arr[i]);

    return copy
 }
