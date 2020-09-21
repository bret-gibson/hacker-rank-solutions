const compareTriplets = (a, b) => {
  let alice = 0;
  let bob = 0;
  let finalArr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
      //added the else if here for if there is a tie
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }
  finalArr.push(alice);
  finalArr.push(bob);
  console.log(finalArr);
  return finalArr;
};

let alice = [5, 6, 7];
let bob = [3, 6, 10];

compareTriplets(alice, bob);

//outputs 1 1 which is correct
