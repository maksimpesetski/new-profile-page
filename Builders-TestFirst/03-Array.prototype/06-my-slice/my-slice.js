const mySlice = (arr, start, end) => {

    let copy = [];
   
    if (start<0) start = arr.lenght + start;
    if (end<0) end = arr.length + end;

    for (let i=start; start<end; i++) copy.push(arr[i]);

    return copy
 }
