const setPropsOnObj = (obj) => {
    obj.x = 7;
    obj['y'] = 8;
    obj.onePlus = function (num) {return num + 1};
}

const setPropsOnArr = (arr) => {
    arr.hello = function () {return "Hello!"};
    arr['full'] = 'stack';
    arr[0] = 5;
    arr['twoTimes'] = function (num) {return num * 2};
}

const setPropsOnFunc = (func) => {
    func.prototype.strFunc = function () {return 'I am a function object, all functions are objects! Function can have their own properties too!'};
    func.year = '20??';
    func.divideByTwo = function (num) {return num / 2};
} 