#include <bits/stdc++.h>
using namespace std;

/**
 * Print all possible pairs of integers in an array with distinct integers.
 *
 * Example:
 * n = [1,2,3]
 * result = (1,1), (1,2), (1,3), (2,2), (2,3), (3,3)
 */
int main() {
  int n[3] = {1, 2, 3};
  int sizeN = sizeof(n) / sizeof(n[0]);

  for (int i = 1; i <= sizeN; i++) {
    for (int j = i; j <= sizeN; j++) {
      cout << "(" << i << ", " << j << ")" << endl;
    }
  }
}
