#include <iostream>
using namespace std;

// @see https://codeforces.com/problemset/problem/4/A
int main() {
  int w;

  cin >> w;

  cout << (w == 2 ? "NO" : w % 2 == 0 ? "YES" : "NO") << endl;
}
