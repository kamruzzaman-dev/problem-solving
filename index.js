// 1Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfEvenNumbers(arr) {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
}
const result = sumOfEvenNumbers(numbersArray);

// 2Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
const result1 = isLeapYear(2024);

// 3Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = "aeiou";
  const count = Array.from(str).filter((char) => vowels.includes(char)).length;

  return count;
}
const result2 = countVowels("Hello, World!");

// 4Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const uniqueArray = [];
console.log(uniqueArray);

for (let i = 0; i < arr.length; i++) {
  if (uniqueArray.indexOf(arr[i]) === -1) {  //O(N)
    uniqueArray.push(arr[i]);
  }
}
return uniqueArray;

const uniqueNumbers = filterDuplicates([1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 3]);
console.log("Array with only unique numbers:", uniqueNumbers);

// 5 Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.
function findMaxValue(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }

  return Math.max(...numbers);
}

// Example usage:
const maxValue = findMaxValue([2, 8, 5, 10, 3]);
console.log("Maximum value:", maxValue);


// 6 Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
  { name: 'zaman', grades: [67, 43, 45] },
  { name: 'manik', grades: [32, 97, 77] },
  { name: 'pias', grades: [94, 45, 45] },
];

const averageGrades = (grades) => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

const sortStudentsByAverageGrade = (studentsArray) => {
  return studentsArray.sort((a, b) => {
    const avgA = averageGrades(a.grades);
    const avgB = averageGrades(b.grades);

    return avgB - avgA;
  });
};

const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);


// 7 Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview


const calculateTotalValue = (items) => {
  return items.reduce((total, item) => {
    const itemValue = item.quantity * item.price;
    return total + itemValue;
  }, 0);
};

const items = [
  { quantity: 7, price: 98 },
  { quantity: 4, price: 66 },
  { quantity: 8, price: 33 },
];

console.log('Total:', calculateTotalValue(items));


// 8 Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log('Common Elements:', findCommonElements(array1, array2));
