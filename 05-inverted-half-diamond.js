function pattern(n) {
    for (let i = 1; i <= n; i++) {
        // Print numbers in decreasing order from n down to n-i+1
        for (let j = n; j >= n - i + 1; j--) {
            process.stdout.write(j + ' ');
        }
        // Move to the next line after each row of the pattern
        process.stdout.write('\n');
    }
}

let n = 4;
pattern(n);
