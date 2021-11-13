/**
 * Sum All Primes
 *
 * A prime number is a whole number greater than 1 with exactly two divisors:
 * 1 and itself. For example, 2 is a prime number because it is only divisible
 * by 1 and 2 (itself). In contrast, 4 is not prime since it is divisible by 1,
 * 2 and 4.
 *
 * @param {number} num - Any numbers
 * @returns {number} The sum of all prime numbers that are less than
 *                   or equal to `num`.
 */
function sumPrimes(num) {
  // Sieve of Eratosthenes
  // Generate number from 2 to less than or equal to `num`
  const primes = [...Array(num - 1).keys()].map((n) => n + 2);

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] !== false) {
      for (let j = primes[i] * primes[i]; j <= num; j += primes[i]) {
        const idx = primes.indexOf(j);
        primes[idx] = false;
      }
    }
  }

  return primes.filter((n) => n !== false).reduce((acc, curr) => acc + curr, 0);
}

module.exports = sumPrimes;
