#include <bits/stdc++.h>
using namespace std;

long long fib(int n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

vector<long long> memo;
long long fib_memoized(int n) {
  if (n == 1) return 0;
  if (n == 2) return 1;

  if (memo[n] != -1) {
    return memo[n];
  }

  memo[n] = fib_memoized(n - 1) + fib_memoized(n - 2);

  return memo[n];
}

int main() {
  int n;
  cin >> n;

  // cout << fib(n) << endl;

  memo.assign(n + 1, -1);
  cout << fib_memoized(n) << endl;
}
