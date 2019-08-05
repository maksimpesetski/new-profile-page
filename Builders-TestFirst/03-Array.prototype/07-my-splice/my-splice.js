function mySplice (arr, start, deleteCount) {

    let deleted = [];
    let keep = [];
   
     if (deleteCount === undefined) deleteCount = arr.length - start;
   
     for (let i = 0; i < start; i++) keep.push(arr.shift());
   
     for (let x = 0; x < deleteCount; x++) deleted.push(arr.shift());
   
     for (let y = arguments.length - 1; y > 2; y--) arr.unshift(arguments[y]);
   
     for (let j = 0; j < keep.length; j++) arr.unshift(keep.pop());
   
    return deleted;
   }