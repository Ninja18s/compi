function pattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            i == 0 || i == n - 1 ?
                process.stdout.write('*')
                : j == (n - 1) / 2 ?
                    process.stdout.write('*')
                    : process.stdout.write(' ')
        }
        console.log(' ')
    }
}

const n = 9;

pattern(n);