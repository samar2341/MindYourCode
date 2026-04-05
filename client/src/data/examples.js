// All code examples + step traces for the Mind Your Code application

export const examples = [
  {
    id: 'bubble-sort',
    title: 'Bubble Sort Algorithm',
    description: 'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', array);
console.log('Sorted array:', bubbleSort(array));`,
    steps: [
      {
        line: 2,
        title: 'Initialize Variables',
        explanation: 'We get the length of the array and start the outer loop that will run n-1 times.',
        memory: { n: 7, i: 0 }
      },
      {
        line: 3,
        title: 'Outer Loop Start',
        explanation: 'The outer loop controls how many passes we make through the array.',
        memory: { i: 0 }
      },
      {
        line: 4,
        title: 'Inner Loop Start',
        explanation: 'The inner loop compares adjacent elements and swaps if needed.',
        memory: { j: 0 }
      },
      {
        line: 5,
        title: 'Comparison Check',
        explanation: 'Check if current element is greater than the next element.',
        memory: { arr: [64, 34, 25, 12, 22, 11, 90] }
      }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search Algorithm',
    description: 'An efficient algorithm for finding an item from a sorted list of items.',
    code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

// Example usage
const sortedArray = [2, 3, 4, 10, 40];
const target = 10;
console.log('Array:', sortedArray);
console.log('Target:', target);
console.log('Index found:', binarySearch(sortedArray, target));`,
    steps: [
      {
        line: 2,
        title: 'Initialize Pointers',
        explanation: 'Set left pointer to start and right pointer to end of array.',
        memory: { left: 0, right: 4 }
      },
      {
        line: 4,
        title: 'Loop Condition',
        explanation: 'Continue while left pointer is less than or equal to right pointer.',
        memory: { left: 0, right: 4 }
      },
      {
        line: 5,
        title: 'Calculate Mid Point',
        explanation: 'Find the middle index of the current search range.',
        memory: { mid: 2 }
      }
    ]
  }
];

export default examples;