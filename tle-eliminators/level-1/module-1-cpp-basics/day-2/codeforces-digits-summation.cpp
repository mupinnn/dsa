#include <iostream>
using namespace std;

// @see https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/F
int main() {
  long long n, m;

  cin >> n >> m;

  cout << (n % 10) + (m % 10) << endl;
}
