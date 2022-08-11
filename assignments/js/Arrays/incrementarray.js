
const Inc_Arr = (array, N) => {
  let newArray = [];
  for (let i = 0; i < N; i++) {
    newArray.push(array[i] + 1);
  }
  console.log(newArray.join(" "));
};

Inc_Arr([1, 2, 3, 4, 5], 5);