// It must return an integer array containing the numbers of times she broke her records.
// Index  is for breaking most points records, and index  is for breaking least points records.

// breakingRecords has the following parameter(s):
// scores: an array of integers

// Input Format
// The first line contains an integer , the number of games.
// The second line contains  space-separated integers describing the respective values of .

// Output Format
// Print two space-seperated integers describing the respective numbers of times the best (highest)
// score increased and the worst (lowest) score decreased.

// Sample Input
// 9 10 5 20 20 4 5 2 25 1

// Sample Output
// 2 4

function breakingRecords(scores) {
  maxi = scores[0];
  mini = scores[0];
  maxCount = 0;
  minCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxi) {
      maxi = scores[i];
      maxCount += 1;
    }
    if (scores[i] < mini) {
      mini = scores[i];
      minCount += 1;
    }
  }
  console.log(`${maxCount}, ${minCount}`);
  return [maxCount, minCount];
}

let score = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(score);

// Outputs 2, 4
