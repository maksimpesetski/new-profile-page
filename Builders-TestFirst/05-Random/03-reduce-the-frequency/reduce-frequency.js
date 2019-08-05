const strFrequency = (arr) => {
  return arr.reduce((obj, val ) => {
    if (obj[val]) obj[val] += 1;
    else obj[val] = 1;

    return obj
  }, {})
} 
