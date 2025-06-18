#include <bits/stdc++.h>
using namespace std;

int main() {
  int x;
  cin >> x;

  if (x == 2) {
    cout << "YES";
    return 0;
  }

  bool isPrime = true;

  for (int i = 2; i < x; i++) {
    if (x % i == 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    cout << "YES";
  } else {
    cout << "NO";
  }

  cout << endl;
}
