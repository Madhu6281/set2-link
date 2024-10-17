function removeDuplicates(arr) {
    let uniqueCount = 1; // Start counting from the first element
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        arr[uniqueCount] = arr[i];
        uniqueCount++;
      }
    }
  
    return uniqueCount;
  }
  
  // Example usage:
  const array = [1, 1, 2, 2, 3, 4, 4, 5];
  const newLength = removeDuplicates(array);
  console.log(newLength); // Output: 5
  console.log(array.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
  