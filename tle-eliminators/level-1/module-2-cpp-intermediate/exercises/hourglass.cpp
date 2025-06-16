#include <bits/stdc++.h>
using namespace std;

int main() {
  int height;
  cin >> height;

  int width = (height * 2) % 2 == 0 ? (height * 2) - 1 : height * 2;

  for (int i = 1; i <= height; i++) {
    for (int j = 1; j <= width; j++) {
      if (j < height + i) {
        cout << "#";
      } else {
        cout << "*";
      }
    }

    cout << endl;
  }
}
