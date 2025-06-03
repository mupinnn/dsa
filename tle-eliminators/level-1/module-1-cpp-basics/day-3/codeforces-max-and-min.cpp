#include <algorithm>
#include <iostream>
using namespace std;

// @see https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K
int main() {
  int a, b, c;

  cin >> a >> b >> c;

  cout << min({a, b, c}) << " " << max({a, b, c}) << endl;
}
