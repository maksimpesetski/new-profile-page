// function mySplice (arr, start, deleteCount) {

//     let deleted = [];
//     let keep = [];
   
//      if (deleteCount === undefined) deleteCount = arr.length - start;
   
//      for (let i = 0; i < start; i++) keep.push(arr.shift());
   
//      for (let x = 0; x < deleteCount; x++) deleted.push(arr.shift());
   
//      for (let y = arguments.length - 1; y > 2; y--) arr.unshift(arguments[y]);
   
//      for (let j = 0; j < keep.length; j++) arr.unshift(keep.pop());
   
//     return deleted;
//    }

//    const mySlice = (arr, start, end) => {
//     let copy = [];
    
//     if (start < 0) start = arr.length + start;
//     if (end < 0) end = arr.length + end;
  
//       let copy = [];
  
//       if (start<0) start = arr.length + start;
//       if (end<0) end = arr.length + end;
//     // TODO: check your loop, the browser is "hanging" when testem runs, this indicates there is potentially an infinite loop
//     // You increment and i, but your evaluated expression "start < end" doesn't use i, this is the root of your problem.
//     //   for (let i = start; start < end; i++) copy.push(arr[i]);
  
//       for (let i=start; i<end; i++) copy.push(arr[i]);
  
//       return copy
//    }
//     return copy;