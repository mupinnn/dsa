#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, easy, hard;
  easy = hard = 0;

  cin >> n;

  vector<int> problems(n);

  for (int i = 0; i < n; i++) {
    cin >> problems[i];

    if (problems[i] == 0) {
      easy += 1;
    } else {
      hard += 1;
      break;
    }
  }

  if (hard >= 1) {
    cout << "HARD" << endl;
  } else {
    cout << "EASY" << endl;
  }
}
