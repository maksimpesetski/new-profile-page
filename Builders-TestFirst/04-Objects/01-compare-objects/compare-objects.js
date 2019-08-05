const compareObjects = (obj1, obj2) => {

    if (obj1.length !== obj2.length) return false;

    for (let key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    }
    return true
}