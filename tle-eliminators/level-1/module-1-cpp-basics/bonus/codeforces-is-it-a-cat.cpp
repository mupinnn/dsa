#include <bits/stdc++.h>
using namespace std;

// @see https://codeforces.com/problemset/problem/1800/A
int main() {
  int t;
  cin >> t;

  for (int i = 0; i < t; i++) {
    int n;
    string s;

    cin >> n >> s;

    string res = "";
    int current = 0;

    while (current < s.size()) {
      char c = tolower(s[current]);
      res += c;

      while (current < s.size() && tolower(s[current]) == c) {
        current++;
      }
    }

    if (res.compare("meow") == 0) {
      cout << "YES";
    } else {
      cout << "NO";
    }

    cout << endl;
  }
}
