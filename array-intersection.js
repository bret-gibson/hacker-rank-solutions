// Given two arrays, find which values they share and also keep track of
// the count of the number of time the value 5 occurs.

function findIntersection(array1, array2) {
  let fiveCount = 0;
  let intersec = [];
  let array1Obj = {};
  let array2Obj = {};
  array1.forEach((num) => {
    array1Obj[num] = array1Obj[num] + 1 || 1;
  });
  array2.forEach((num) => {
    array2Obj[num] = array2Obj[num] + 1 || 1;
  });
  console.log(array1Obj);
  console.log(array2Obj);

  if (array1Obj["5"] === undefined && array2Obj["5"] !== undefined) {
    fiveCount = array2Obj["5"];
  } else if (array2Obj["5"] === undefined && array1Obj["5"] !== undefined) {
    fiveCount = array2Obj["5"];
  } else if (array2Obj["5"] === undefined && array1Obj["5"] === undefined) {
    fiveCount = 0;
  } else {
    fiveCount = array1Obj["5"] + array2Obj["5"];
  }
  console.log(fiveCount);

  for (let key in array1Obj) {
    if (array2Obj.hasOwnProperty(key)) {
      intersec.push(key);
    }
  }
  console.log(intersec);
  return intersec;
}

let a1 = [1, 2, 3, 4, 6, 7];
let a2 = [1, 9, 46, 8, 3];

findIntersection(a1, a2);
