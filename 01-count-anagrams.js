function countCharacters(str) {
    let countMap = new Map();
    for (let i of str) {
        if (countMap.has(i)) {
            countMap.set(i, countMap.get(i) + 1);
        }
        else {
            countMap.set(i, 1);
        }
    }
    return countMap;
}

var isAnagram = function (s, t) {
    let mp = countCharacters(s);
    for (let index of t) {
        if (mp.has(index) && mp.get(index) > 0) {
            mp.set(index, mp.get(index) - 1);
        } else {
            return false;
        }
    }
    return true;
};

let s = "anagram";
let t = "nagaram";
console.log(countCharacters(s));
console.log(countCharacters(t));
console.log(isAnagram(s, t));