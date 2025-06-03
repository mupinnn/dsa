#include <iostream>
using namespace std;

// @see https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/L
int main() {
  string f, s1, s2;

  cin >> f >> s1 >> f >> s2;

  cout << (s1 == s2 ? "ARE Brothers" : "NOT") << endl;
}
