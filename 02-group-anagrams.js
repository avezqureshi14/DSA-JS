/**
 * @param {string[]} strs
 * @return {string[][]}
 */

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

var groupAnagramsII = function (strs) {
    let result = [[]];
    let visited = [];
    for (let i = 0; i < strs.length; i++) {
        let ans = [];
        if (visited[i] !== 1) {
            ans.push(strs[i]);
        }
        visited[i] = 1;
        for (let j = 0; j < strs.length; j++) {
            if (i !== j && visited[j] !== 1) {
                if (isAnagram(strs[i], strs[j])) {
                    visited[j] = 1;
                    ans.push(strs[j]);
                }
            }
        }
        result.push(ans);
    }
    return result;
};

var groupAnagrams = function (strs) {
    let result = [];
    let mp = new Map();
    for (let str of strs) {
        let word = str;
        let sortedWord = word.split('').sort().join('');
        if (!mp.has(sortedWord)) {
            mp.set(sortedWord, []);
        }
        mp.get(sortedWord).push(word);
    }
    for (let i of mp) {
        i.forEach((i) => {
            if (Array.isArray(i)) {
                result.push(i);
            }
        })
    }
    return result;
}



let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs))