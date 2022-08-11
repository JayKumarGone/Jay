

const highAge = (N, Arr) => {
  let newArray = [];
  for (let i = 0; i < N; i++) {
    if (Arr[i] >= 18) {
      newArray.push(Arr[i]);
    }
  }
  // return newArray;
  console.log(newArray);
};

highAge(6, [11, 23, 3, 45, 72, 68]);