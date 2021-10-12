#include<bits/stdc++.h>
using namespace std;
#define int long long int
#define fast ios_base :: sync_with_stdio(false),cin.tie(NULL);


const int N = 2e5 + 10;

void solve() {
	int k;
	cin >> k;
	int n = (1 << k) - 1;
	string s;
	cin >> s;
	int cnt[2 * n];
	// diagram

	for (int i = n; i < 2 * n; i++) cnt[i] = 1;
	for (int i = n - 1; i >= 0; i--) {
		if (s[i] == '?') {
			cnt[i] += cnt[2 * i] + cnt[2 * (i + 1) - 1];
		}
		if (s[i] == '1') cnt[i] += cnt[2 * (i + 1) - 1];
		else cnt[i] += cnt[2 * i];
	}

	int q;
	cin >> q;
	while (q--) {
		int nn;
		char pp;
		cin >> nn >> pp;
		s[nn] = pp;
		for (int i = n - nn; i > 0; i /= 2) {
			if (s[i] == '?') {
				cnt[i] += cnt[2 * i] + cnt[2 * (i + 1) - 1];
			}
			if (s[i] == '1') cnt[i] += cnt[2 * (i + 1) - 1];
			else cnt[i] += cnt[2 * i];

		}
		cout << cnt[0] << endl;
	}
}

//////////////////////////////////
//////////////////////////////////

int32_t main() {
	fast
#ifndef ONLINE_JUDGE
	freopen("input.txt", "r", stdin);
	freopen("output.txt", "w", stdout);
#endif
	/*int t;
	cin >> t;
	while (t--)
	*/	solve();

	return 0;

}
