

function Unique_Shirts(arr, N) {
  let newArray = arr.sort();
  for (let i = 0; i < newArray.length; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
      if (newArray[i] === newArray[j]) {
        count++;
      }
    }
    if (count > 1) {
      newArray.splice(i, count);
      i = 0;
    }
  }
  return newArray.length;
}

console.log(Unique_Shirts([3, 2, 4, 1, 2, 3], 6));