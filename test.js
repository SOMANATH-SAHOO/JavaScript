// CONVERT ARRAY INTO SET TO REMOVE DUPLICATE 

// arr = [1, 23, 32, 1, 1, 2];
// newrr = [...new Set(arr)]
// console.log(newrr)

// let n = arry.indexOf(1)

// ------------------- XXXXXXX--------------------

//     PRINT DUPLICATE ELEMENT

// arr = [1, 23, 32, 1, 2, 2, 3, 4, 4, 8];
// arr2 = [...arr] //try to copy this way other wise by = will affect  parrent

// arr2.sort()
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = i + 1; j < arr2.length; j++) {
//         if (arr2[i] == arr2[j]) {
//             console.log(arr2[i])
//         }
//     }
// }


// ------------------- XXXXXXX--------------------

//     PRINT DUPLICATE ELEMENT

// arr = [1, 23, 32, 1, 2, 2, 3, 4, 4, 8];
// arr2 = [...arr] //try to copy this way other wise by = will affect  parrent

// arr2.sort()
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] != arr2[i + 1]) {
//         console.log(arr2[i])
//     }
// }

// ------------------- XXXXXXX--------------------

//     PRINT DUPLICATE ELEMENT

// const arry = [1, 2, 1, 3, 4, 3, 5, 5];

// const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) != index)
// const duplicateElement = toFindDuplicates(arry);
// console.log(duplicateElement);

// ------------------- XXXXXXX--------------------

//     SUM OF ALL DISTINCT ELEMENT
// const arr = [1, 2, 1, 3, 4, 3, 5, 5];
// arr.sort();
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//         sum = sum + arr[i]
//     }
// }

// console.log(sum)

// ------------------- XXXXXXX--------------------

//     FIRST AND LAST OCCURANCE OF A NUMBER

// let arr = [1, 2, 3, 2, 1]
// let position = []
// let numis = 1
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == numis) {
//         position.push(i)
//     }
// }
// console.log(position[0])
// console.log(position[position.length - 1])

// ------------------- XXXXXXX--------------------

//     har har sambhu

// PRINT FIRST CHARACTER OF EVERY STRING

// let str = "Hi This Is Somanath Full Stack Developer"
// for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//         if (i == 0) {
//             console.log(str[i])
//         }
//         else if (str[i - 1] == " ") {
//             console.log(str[i])
//         }
//     }
// }

// ------------------- XXXXXXX--------------------

//     FIND MIN AND MAX FROM ARRAY

// let arr = [1, 2, 3, 4, 5];
// let min, max;
// min = max = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i > max]) {
//         max = arr[i]
//     }
// }
// console.log(min)
// console.log(max)

// ------------------- XXXXXXX--------------------

//     REVERSE TOTAL ARRAY

// let arr = [1, 2, 3, 4, 5];
// let i = 0, j = arr.length - 1, temp
// while (i < j) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)

// ------------------- XXXXXXX--------------------

//     DATE TO ISO CONVERT

// const dateStr = '2022-07-21';

// const date = new Date(dateStr);

// const iso = date.toISOString();

// console.log(iso); // 👉️ "2022-07-21T00:00:00.000Z"

// ------------------- XXXXXXX--------------------

//     OCCURANCE OF ELEMENT IN OBJECT

// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};
// for (const num of arr) {
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
// console.log(counts);

// { '2': 5, '4': 1, '5': 3, '9': 1 }

// ------------------- XXXXXXX--------------------

//     MERGE CONCAT ARRAY

// let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let arr2 = [10, 11, 12]
// arr = [...arr, ...arr2];
// console.log(arr)

// MERGE CONCAT ARRAY - 2nd method

// let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// let arr2 = [10, 11, 12]
// arr.push(...arr2)
// console.log(arr)

// ------------------- XXXXXXX--------------------

//     PAIR EQUAL TO GIVEN SUM

// let a = [1, 2, 3, 3, 4, 4, 5, 6];
// let n = 10;

// var left = 0;
// var right = a.length - 1;
// while (left < right) {
//     if (a[left] + a[right] == n) {
//         console.log(a[left], a[right]);
//         break;
//     } else if (a[left] + a[right] > n) {
//         right--;
//     } else {
//         left++;
//     }
// }

// ------------------- XXXXXXX--------------------

//     ANAGRAM CHECKING MEANS EACH STRING HAVE SAME CHARACTER WITH SAME COUNT

// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     console.log(str1);
//     console.log(str2);
//     if (str1 === str2) {
//         console.log("True");
//     } else {
//         console.log("False");
//     }
// }
// checkStringsAnagram("indian", "ndiani")

// //------------------- XXXXXXX--------------------

//  //   PANGRAM - EACH ALPAHBATE PRESENT OR NOT IN THE STRING

// function isPangram(string) {
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     for (let i = 0; i < alphabet.length; i++) {
//         if (strArr.indexOf(alphabet[i]) < 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPangram("We promptly judged anti4ue ivory buckles for the next prize"))

// //------------------- XXXXXXX--------------------

//  //   FIBONASCI SERIES

// async function fibo(number) {
//     let n1 = 0,
//         n2 = 1,
//         nextTerm;
//     console.log("Fibonacci Series:");

//     for (let i = 1; i <= number; i++) {
//         await console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// }
// console.log("first");
// fibo(20);
// console.log("second");
// OUTPUT;
// // first
// // Fibonacci Series:
// // 0
// // second
// // 1
// // 1
// // 2
// // 3
// // 5
// // 8
// // 13
// // 21
// // 34
// // 55
// // 89
// // 144
// // 233
// // 377
// // 610
// // 987
// // 1597
// // 2584
// // 4181

// //------------------- XXXXXXX--------------------

// //   PALINDROME CHECKER

// let str1 = "MOM";

// let temp = str1.split('').reverse().join('');
// if (str1 == temp)
//     console.log("YES PALINDROME")

// //------------------- XXXXXXX--------------------

//  //   FACTORIAL OF NUMBER

// fact = 1;
// for (let i = 5; i > 0; i--) {
//     fact = fact * i

// }
// console.log(fact)

// //------------------- XXXXXXX--------------------


//   //  LEADERS IN ARRAY

// let arr = [1, 2, 6, 8, 45, 2, 89];
// let i, j

// for (let i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[j] >= arr[i]) {
//             break;
//         }

//     }
//     if (j == arr.length) {
//         console.log("LEADER IS", arr[i])
//     }
// }

// //------------------- XXXXXXX--------------------

// // Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 

// const arr=[1,5,7,9,11,2,78,4,2,7]


// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>arr[i+1] && arr[i]>arr[i-1])
//     {
//         console.log(arr[i])
//     }
// }



//  // Find the peak element in the array
//  function findPeak(arr, n)
//  {
  
//    // first or last element is peak element
//    if (n == 1) return 0;
//    if (arr[0] >= arr[1]) return 0;
//    if (arr[n - 1] >= arr[n - 2]) return n - 1;

//    // check for every other element
//    for (var i = 1; i < n - 1; i++)
//    {
    
//      // check if the neighbors are smaller
//      if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) return i;
//    }
//  }

//  // Driver Code
//  var arr = [1, 3, 20, 4, 1, 0];
//  var n = arr.length;
//  document.write("Index of a peak point is " + findPeak(arr, n));


//  //------------------- XXXXXXX--------------------



//  let user = {
//     name: "John Doe",
//     age: 40
//   };
//   if('age' in user)
//   {
//       console.log("YESSSSSSSSSSSSSSSSSSSSS")
//   }
//   console.log('age' in user);

// //------------------- XXXXXXX--------------------

//  // Example: Calculate the distance between two times

// const earlierTime = new Date('2021-11-17T03:19:56.186Z');

// const laterTime = new Date('2021-11-17T03:19:56.186Z');

// // Calculate the time difference in milliseconds
// const timeDiff = laterTime - earlierTime;

// // Convert milliseconds to hours
// const hoursDiff = timeDiff / (1000 * 60 * 60);

// console.log(hoursDiff); // Output: 5.25



// //------------------- XXXXXXX--------------------


// // Assuming the given date is June 1, 2023
// var givenDate = new Date('2023-06-01');

// // Add 10 days to the given date
// var resultDate = new Date(givenDate);
// resultDate.setDate(givenDate.getDate() + 10);

// // Extract the year, month, and day from the result date
// var year = resultDate.getFullYear();
// var month = resultDate.getMonth() + 1; // Months are zero-based, so add 1
// var day = resultDate.getDate();

// // Format the result as a string (YYYY-MM-DD)
// var formattedDate = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');

// console.log("10 days after the given date:", formattedDate);


// /// mili second time gap between two times

// function calculateMillisecondDifference(datetime1, datetime2) {
//     const date1 = new Date(datetime1);
//     const date2 = new Date(datetime2);
  
//     const timeDifferenceInMilliseconds = date2.getTime() - date1.getTime();
  
//     return timeDifferenceInMilliseconds;
//   }
  
//   // Example usage:
//   const datetime1 = '2023-06-12T10:30:00';
//   const datetime2 = '2023-06-12T14:45:00';
  
//   const millisecondDifference = calculateMillisecondDifference(datetime1, datetime2);
//   console.log('Millisecond Difference:', millisecondDifference);
  

//   //minute gap between two times

//   function calculateMinuteDifference(datetime1, datetime2) {
//     const date1 = new Date(datetime1);
//     const date2 = new Date(datetime2);
  
//     const timeDifferenceInMilliseconds = date2 - date1;
//     const minuteDifference = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
  
//     return minuteDifference;
//   }
  
//   // Example usage:
//   const datetime1 = '2023-06-12T10:30:00';
//   const datetime2 = '2023-06-12T14:45:00';
  
//   const minuteDifference = calculateMinuteDifference(datetime1, datetime2);
//   console.log('Minute Difference:', minuteDifference);
  
// //how may minute and second ?

//   function convertMillisecondsToMinutesAndSeconds(milliseconds) {
//     const totalSeconds = Math.floor(milliseconds / 1000);
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
  
//     return { minutes, seconds };
//   }
  
//   // Example usage:
//   const milliseconds = 125000; // Sample milliseconds value
  
//   const { minutes, seconds } = convertMillisecondsToMinutesAndSeconds(milliseconds);
//   console.log('Minutes:', minutes);
//   console.log('Seconds:', seconds);
  

// //how many hours ,min,sec  ? from min

//   function calculateTimeDifference(datetime1, datetime2) {
//     const date1 = new Date(datetime1);
//     const date2 = new Date(datetime2);
  
//     const timeDifferenceInMilliseconds = date2.getTime() - date1.getTime();
  
//     // Convert milliseconds to hours, minutes, and seconds
//     const totalSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;
  
//     return { hours, minutes, seconds };
//   }
  
//   // Example usage:
//   const datetime1 = '2023-06-12T10:30:00';
//   const datetime2 = '2023-06-12T14:45:00';
  
//   const { hours, minutes, seconds } = calculateTimeDifference(datetime1, datetime2);
//   console.log('Time Difference:');
//   console.log('Hours:', hours);
//   console.log('Minutes:', minutes);
//   console.log('Seconds:', seconds);
  


//   1) Get the current date and time:
// const now = Date.now();

// 2) Check if a variable is an array:
// Array.isArray(variable);

// 3) Merge two arrays:
// const newArray = array1.concat(array2);

// 4) Remove duplicates from an array:
// const uniqueArray = [...new Set(array)];

// 5) Sort an array in ascending order:
// array.sort((a, b) => a - b);

// 6) Reverse an array:
// array.reverse();

// 7) Convert string to number:
// const number = parseInt(string);

// 8) Generate a random number between two values:
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// 9) Check if a string contains a substring:
// string.includes(substring);

// 10) Get the length of an object:
// Object.keys(object).length;

// 11) Convert object to array:
// const array = Object.entries(object);

// 12) Check if an object is empty:
// ((typeof object)=="object") && Object.keys(object).length==0;

// 13) Get current URL:
// const currentUrl = window.location.href;

// 14) Redirect to a new URL:
// window.location.replace(url);

// 15) Set a cookie:
// document.cookie = "name=value; expires=date; path=path; domain=domain; secure";

// 16) Check if a cookie exists:
// document.cookie.split(';').some((item) => item.trim().startsWith('name='));

// 17) Remove a cookie:
// document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=path; domain=domain; secure";

// 18) Get the current viewport dimensions:
// const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// 19) Copy text to clipboard:
// navigator.clipboard.writeText(text);
