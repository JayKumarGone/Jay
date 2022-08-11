

const isAllPass = (N, Arr) => {
  let allPassed = true;
  for (let i = 0; i < N; i++) {
    if (Arr[i] < 32) {
      allPassed = false;
    } else {
      continue;
    }
  }

  if (allPassed) {
    return "YES";
  } else {
    return "NO";
  }
};