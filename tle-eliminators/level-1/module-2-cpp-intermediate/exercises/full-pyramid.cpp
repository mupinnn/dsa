#include <bits/stdc++.h>
using namespace std;

// practice more here https://www.geeksforgeeks.org/c/pattern-programs-in-c/
// TODO: simplify
int main() {
  int height;
  cin >> height;

  for (int i = height - i; i >= 0; i--) {
    for (int j = 0; j < height - i - 1; j++) {
      cout << " ";
    }

    for (int k = 0; k < 2 * i + 1; k++) {
      cout << "*";
    }

    cout << endl;
  }

  for (int i = 1; i < height; i++) {
    for (int j = 0; j < height - i - 1; j++) {
      cout << " ";
    }

    for (int k = 0; k < 2 * i + 1; k++) {
      cout << "*";
    }

    cout << endl;
  }
}
