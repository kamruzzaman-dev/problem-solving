//! Question-01: Create an array of objects representing customers with 'name', 'purchases', and loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases

const arr = [
  { name: "nirbo", purchases: 4, loyaltyPoints: 5 }, //5
  { name: "adfdas", purchases: 54, loyaltyPoints: 6 }, //12
  { name: "nirbhdgfhdo", purchases: 3, loyaltyPoints: 4 }, //4
  { name: "manik", purchases: 3, loyaltyPoints: 100 },
  { name: "pias", purchases: 8, loyaltyPoints: 150 },
  { name: "zaman", purchases: 6, loyaltyPoints: 120 },
  { name: "rasel", purchases: 44, loyaltyPoints: 120 },
  { name: "demo", purchases: 23, loyaltyPoints: 120 },
];

const doubling = arr.filter((item) => {
  if (item.purchases > 5) {
    return (item.loyaltyPoints *= 2);
  }
});

// console.log(doubling);

const customers = [
  { name: "manik", purchases: 3, loyaltyPoints: 100 },
  { name: "pias", purchases: 8, loyaltyPoints: 150 },
  { name: "zaman", purchases: 6, loyaltyPoints: 120 },
  { name: "rasel", purchases: 44, loyaltyPoints: 120 },
  { name: "demo", purchases: 23, loyaltyPoints: 120 },
];

function doubleLoyaltyPoints(customersArray) {
  return customersArray.map((customer) => {
    if (customer.purchases > 5) {
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    }
    return customer;
  });
}

// const transformedCustomers = doubleLoyaltyPoints(customers);

// // Memoize the expensive function
// const memoizedExpensiveOperation = memoize(expensiveOperation);

// // Test the memoized function
// console.log(memoizedExpensiveOperation(5)); // This will perform the expensive operation and cache the result
// console.log(memoizedExpensiveOperation(5)); // This will return the cached result without performin

//! question-03: Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 100, category: "Electronics" },
  { name: "T-shirt", price: 20, category: "Clothing" },
  { name: "Watch", price: 150, category: "Accessories" },
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Jeans", price: 50, category: "Clothing" },
];

function compare(a, b) {
  if (a.category < b.category) {
    return 1;
  }
  if (a.category > b.category) {
    return -1;
  }
  return 0;
}

const categorySort = [...products].sort(compare);
const arr2 = categorySort.sort((a, b) => a.price - b.price);
console.log(categorySort);




// const zzz = [22, 323, 23, 23, 23];
// const result = zzz.sort((a, b) => a - b);

// // Array of products
// const products = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Headphones", price: 100, category: "Electronics" },
//   { name: "T-shirt", price: 20, category: "Clothing" },
//   { name: "Watch", price: 150, category: "Accessories" },
//   { name: "Smartphone", price: 800, category: "Electronics" },
//   { name: "Jeans", price: 50, category: "Clothing" },
// ];

// // Function to sort the array
// function sortProducts(products) {
//   return products.sort((a, b) => {
//     if (a.category < b.category) return -1;
//     if (a.category > b.category) return 1;

//     return b.price - a.price;
//   });
// }

// // Sort the products array
// const sortedProducts = sortProducts(products);

// // Display the sorted array
// console.log(sortedProducts);

// //! Ques 04: find out unique from both array
function findUniqueElements(array1, array2) {
  const uniqueElements = [];

  // array1
  for (const element of array1) {
    // O(n^2)
    if (!array2.includes(element)) {
      uniqueElements.push(element);
    }
  }

  //array2
  for (const element of array2) {
    //O(n^2)
    if (!array1.includes(element)) {
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = findUniqueElements(array1, array2);

console.log(result); // Output: [1, 2, 6, 7]

// ! explain it

function mysteryFunctionX(limitX) {
  const sequenceX = [1];
  for (let x = 1; x <= limitX; x++) {
    sequenceX[x] = x * sequenceX[x - 1];
  }
  return sequenceX;
}

const mysteriousNumberX = 5;
console.log(mysteryFunctionX(mysteriousNumberX));
// // Output: [1, 1, 2, 6, 24, 120]
