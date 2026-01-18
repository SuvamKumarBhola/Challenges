self.onmessage = function (e) {
    const { count } = e.data;
    console.log(`👷 Worker: Starting calculation for ${count} primes...`);

    const startTime = performance.now();
    let primes = [];
    let num = 2;

    while (primes.length < count) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    const endTime = performance.now();

    self.postMessage({
        result: primes[primes.length - 1],
        timeTaken: (endTime - startTime).toFixed(2)
    });
};

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}