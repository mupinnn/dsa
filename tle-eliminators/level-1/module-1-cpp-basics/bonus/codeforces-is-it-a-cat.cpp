#include <bits/stdc++.h>
using namespace std;

// TODO: still error.
// @see https://codeforces.com/problemset/problem/1800/A
int main() {
  int t, n;
  string s;

  cin >> t;

  for (int i = 0; i < t; i++) {
    cin >> n >> s;
    transform(s.begin(), s.end(), s.begin(), ::tolower);

    char prev;
    bool meow = false;

    for (int j = 0; j < n; j++) {
      meow = true;

      if ((j == 0 && s[j] != 'm') || (j == n - 1 && s[j] != 'w') || n < 4 || s[j] == ' ' || (j > 0 && prev == 'w' && s[j] != 'w')) {
        meow = false;
        break;
      }

      if (j == 0) {
        prev = s[j];
        continue;
      }

      if (prev == 'm' && (s[j] == 'm' || s[j] == 'e')) {
        prev = s[j];
        continue;
      }

      if (prev == 'e' && (s[j] == 'e' || s[j] == 'o')) {
        prev = s[j];
        continue;
      }

      if (prev == 'o' && (s[j] == 'o' || s[j] == 'w')) {
        prev = s[j];
        continue;
      }

      if (prev == 'w' && s[j] == 'w') {
        prev = s[j];
        continue;
      }

      meow = false;
    }

    if (meow) {
      cout << "YES";
    } else {
      cout << "NO";
    }

    cout << endl;
  }
}
