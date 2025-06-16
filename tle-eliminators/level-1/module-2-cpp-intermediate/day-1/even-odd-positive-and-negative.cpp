#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, even, odd, positive, negative;
  even = odd = positive = negative = 0;

  cin >> n;

  vector<int> numbers(n);

  for (int i = 0; i < n; i++) {
    cin >> numbers[i];

    if (numbers[i] % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }

    if (numbers[i] > 0) {
      positive += 1;
    } else if (numbers[i] < 0) {
      negative += 1;
    }
  }

  cout << "Even: " << even << endl;
  cout << "Odd: " << odd << endl;
  cout << "Positive: " << positive << endl;
  cout << "Negative: " << negative << endl;
}
