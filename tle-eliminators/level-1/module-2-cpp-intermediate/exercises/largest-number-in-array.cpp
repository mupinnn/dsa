#include <bits/stdc++.h>
using namespace std;

int main() {
  int n[5] = {1, 2, 3, 4, 5};
  int sizeN = sizeof(n) / sizeof(n[0]);

  // for (int i = 0; i < sizeN; i++) {
  //   cout << n[i] << endl;
  // }

  // for-each, cool stuff!
  // for (int i : n) {
  //   cout << i << endl;
  // }

  int largest = n[0];

  for (int i = 0; i < sizeN; i++) {
    if (n[i] > largest)
      largest = n[i];
  }

  cout << largest << endl;
}
