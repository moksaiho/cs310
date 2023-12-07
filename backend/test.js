var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let longest = "";
  const dp = [...new Array(s.length)].map((_) =>
    new Array(s.length).fill(false)
  );

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    longest = s.slice(i, i + 1);
  }

  for (let i = 0; i + 1 <= s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      dp[i][i + 1] = true;
      longest = s.slice(i, i + 2);
    }
  }

  for (let interval = 2; interval <= s.length - 1; interval++) {
    for (let i = 0; i + interval <= s.length - 1; i++) {
      //   if (i == 0 && j == 4) {
      //     console.log(dp[i + 1][j - 1], s[i], s[j]);
      //     console.log(dp);
      //   }
      if (dp[i + 1][i + interval - 1] == true && s[i] == s[i + interval]) {
        dp[i][i + interval] = true;
        console.log([i, i + interval]);
        if (interval + 1 > longest.length) {
          longest = s.slice(i, i + interval + 1);
        }
      }
    }
  }
  console.log(dp);
  return longest;
};

longestPalindrome("aaaaa");
