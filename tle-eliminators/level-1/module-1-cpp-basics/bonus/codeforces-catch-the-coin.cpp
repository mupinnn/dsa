#include <iostream>
using namespace std;

// @see https://codeforces.com/problemset/problem/1989/A
int main() {
  int n;

  cin >> n;

  for (int i = 0; i < n; i++) {
    int nx, ny;
    int px = 0;
    int py = 0;

    cin >> nx >> ny;

    while (true) {
      if (nx > px) px++;
      if (nx < px) px--;
      if (ny < py) py--;
      if (px == nx) break;

      ny--;
    }

    if (py <= ny) {
      cout << "YES";
    } else {
      cout << "NO";
    }

    cout << endl;
  }
}
