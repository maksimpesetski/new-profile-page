const palindrome = (str) => {

    str = str.toLowerCase();

    if (str.length <= 1) return true;
    
    if (str[0] === str[str.length-1]) return palindrome(str.slice(1,-1));

    else return false;
}
