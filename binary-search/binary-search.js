"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2);

  if (array.length === 1) {
    //base case

    return target === array[0]; //returning true or false
  }

  if (target <= left[left.length - 1]) {
    return binarySearch(left, target);
  } else if (target >= right[0]) {
    return binarySearch(right, target);
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
