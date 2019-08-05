const objectifier = (arr) => {
  let obj = {};

  for (let val of arr) {

    let propName = val[0];

    obj[propName] = {};

    let vals = val[1];
  
    for (let i=0; i<vals.length; i++) {
      if (!(i%2)) obj[propName][vals[i]] = vals[i+1]
    }
  }
  return obj
}
