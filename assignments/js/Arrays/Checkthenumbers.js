const Find_Num = (array, N, M) => {
  let isPresent = false;
  for (let i = 0; i < N; i++) {
    if (array[i] === M) {
      isPresent = true;
      break;
    }
  }
  if (isPresent) {
    return "YES";
  } else {
   return "NO";
  }
};