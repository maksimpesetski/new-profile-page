const properNounFilter = (str) => {
    return str[0] === str[0].toUpperCase() && str.slice(1) === str.slice(1).toLowerCase()
}