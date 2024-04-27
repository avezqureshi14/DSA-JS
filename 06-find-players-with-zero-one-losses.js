/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let n = matches.length;
    let mp = new Map();
    for (let match of matches) {
        let winner = match[0];
        let looser = match[1];
        if (!mp.has(winner)) {
            mp.set(winner, { wins: 0, loss: 0 });
        }
        if (!mp.has(looser)) {
            mp.set(looser, { wins: 0, loss: 0 });
        }
        mp.get(winner).wins += 1;
        mp.get(looser).loss += 1;
    }
    let allWinner = [];
    let oneLost = [];
    for (let [player, stats] of mp.entries()) {
        if (stats.loss === 0) {
            allWinner.push(player);
        }
        if (stats.loss === 1) {
            oneLost.push(player);
        }
    }
    let result = [];
    result.push(allWinner);
    result.push(oneLost);
    return result;
};

let matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]

console.log(findWinners(matches));