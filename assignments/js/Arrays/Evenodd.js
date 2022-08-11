const findEvenOdd = (N, Arr) => {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            sumOfEven += Arr[i];
        } else {
            sumOfOdd += Arr[i];
        }
    }
    let newArray = [sumOfEven, sumOfOdd];

    return newArray;
};

findEvenOdd(7, [1, 2, 3, 4, 5, 6, 7]);