#include <cstring>
#include <iostream>
using namespace std;

// TODO: still error.
// @see https://codeforces.com/problemset/problem/1800/A
int main() {
  int t, n;
  string s;

  cin >> t;

  for (int i = 1; i <= t; i++) {
    cin >> n >> s;

    char prev;
    bool meow = false;

    for (int j = 0; j < s.size(); j++) {
      meow = true;

      if (j == 0) {
        prev = s[j];
        if (tolower(prev) != 'm') {
          meow = false;
          break;
        }
        continue;
      }

      if (tolower(prev) == 'm' &&
          (tolower(s[j]) == 'e' || tolower(s[j]) == 'm')) {
        prev = s[j];
        continue;
      }

      if (tolower(prev) == 'e' &&
          (tolower(s[j]) == 'o' || tolower(s[j]) == 'e')) {
        prev = s[j];
        continue;
      }

      if (tolower(prev) == 'o' &&
          (tolower(s[j]) == 'w' || tolower(s[j]) == 'o')) {
        prev = s[j];
        continue;
      }

      if (tolower(prev) == 'w' && tolower(s[j]) == 'w') {
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
