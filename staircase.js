// Input Format
// A single integer, n, denoting the size of the staircase.

// Output Format
// Print a staircase of size  using # symbols and spaces.

// Sample Input
//   6

// Sample Output
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(stairs) {
  for (let i = 1; i <= stairs; i++) {
    console.log(" ".repeat(stairs - i) + "#".repeat(i));
  }
}
staircase(6);

// Outputs

//        #
//       ##
//      ###
//     ####
//    #####
//   ######
