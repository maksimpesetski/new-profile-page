const changeKeys = (arr,num) => {
    var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let final = [];
    let key;
    let currentIdx;

    for (let note of arr) {

      currentIdx = keys.indexOf(note);

      key = currentIdx + num;

      if (key > keys.length) key = key % 12;

      final.push(keys[key]);
    }
    return final
 }