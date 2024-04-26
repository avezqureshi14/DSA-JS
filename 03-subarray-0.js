var isSubarrayZero = function (arr) {
    let n = arr.length;
    console.log(n);
    for (let i = 0; i < n; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < n; j++) {
            sum = sum + arr[j];
            if (sum === 0) {
                return true;
            }
        }
    }
    return false;
}


let arr = [4, 2, -3, 1, 6];
console.log(isSubarrayZero(arr));