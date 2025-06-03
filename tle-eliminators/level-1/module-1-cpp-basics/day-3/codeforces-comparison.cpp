#include <iostream>
using namespace std;

// @see https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/V
int main() {
  int a, b;
  char s;

  cin >> a >> s >> b;

  if ((s == '>' && a > b) || (s == '<' && a < b) || (s == '=' && a == b)) {
    cout << "Right";
  } else {
    cout << "Wrong";
  }
}
