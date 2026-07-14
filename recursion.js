// Fibonacci Sequence
const fibs = function(n) {
    if(n <= 0) return [];
    if(n === 1) return [0];

    const result = [0, 1];
    for(let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
};


// Recursive Approach
const fibsRec = function(n) {
    console.log("This was printed recursively");
    
  // Base cases
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Recursive call
  const seq = fibsRec(n - 1);
  
  // Logic: Add the sum of the last two elements to the array
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  
  return seq;
};


// Merge Sort
const mergeSort = function(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index and split the array
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right) 
};

const merge = function(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements from left and right and push the smaller one
    while(i < left.length && right.length) {
        if(left[i]< right[i]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    } 

    // Concatenate any remaining elements (if one array is longer than the other)
    return result.concat(left.slice(i)).concat(right.slice(j));
};

// Testing
console.log(fibs(8));    // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // Prints the log 7 times, returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]