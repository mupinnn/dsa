#include <iostream>
using namespace std;

// @see https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J
int main() {
  int a, b;

  cin >> a >> b;

  if (a % b == 0 || b % a == 0) {
    cout << "Multiples";
  } else {
    cout << "No Multiples";
  }
}
