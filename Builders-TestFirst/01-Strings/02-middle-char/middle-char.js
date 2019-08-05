const getMid = (str) => {

    let mid = Math.floor(str.length/2)
    
    if (str.length % 2) return str[mid];
    else return str.slice(mid-1,mid+1);
}
