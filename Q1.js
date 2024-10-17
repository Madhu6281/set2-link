function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap elements at start and end
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  
    return arr;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]
  