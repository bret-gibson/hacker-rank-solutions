//www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = (arr) => {
  let posSum = 0;
  let negSum = 0;
  let zeroes = 0;
  arr.forEach((element) => {
    if (element === 0) {
      zeroes++;
    } else if (element >= 1) {
      posSum++;
    } else if (element < 0) {
      negSum++;
    }
  });
  negSum /= arr.length;
  posSum /= arr.length;
  zeroes /= arr.length;
  console.log(posSum);
  console.log(negSum);
  console.log(zeroes);
};
