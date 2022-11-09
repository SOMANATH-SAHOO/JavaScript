CONVERT ARRAY INTO SET TO REMOVE DUPLICATE SSSSSSSSSSSSSSSS

arr = [1, 23, 32, 1, 1, 2];
newrr = [...new Set(arr)]
console.log(newrr)

let n = arry.indexOf(1)

------------------- XXXXXXX--------------------

    PRINT DUPLICATE ELEMENT

arr = [1, 23, 32, 1, 2, 2, 3, 4, 4, 8];
arr2 = [...arr] //try to copy this way other wise by = will affect  parrent

arr2.sort()
for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] == arr2[j]) {
            console.log(arr2[i])
        }
    }
}


------------------- XXXXXXX--------------------

    PRINT DUPLICATE ELEMENT

arr = [1, 23, 32, 1, 2, 2, 3, 4, 4, 8];
arr2 = [...arr] //try to copy this way other wise by = will affect  parrent

arr2.sort()
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != arr2[i + 1]) {
        console.log(arr2[i])
    }
}

------------------- XXXXXXX--------------------

    PRINT DUPLICATE ELEMENT

const arry = [1, 2, 1, 3, 4, 3, 5, 5];

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) != index)
const duplicateElement = toFindDuplicates(arry);
console.log(duplicateElement);

------------------- XXXXXXX--------------------

    SUM OF ALL DISTINCT ELEMENT
const arr = [1, 2, 1, 3, 4, 3, 5, 5];
arr.sort();
let sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
        sum = sum + arr[i]
    }
}

console.log(sum)

------------------- XXXXXXX--------------------

    FIRST AND LAST OCCURANCE OF A NUMBER

let arr = [1, 2, 3, 2, 1]
let position = []
let numis = 1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == numis) {
        position.push(i)
    }
}
console.log(position[0])
console.log(position[position.length - 1])

------------------- XXXXXXX--------------------

    har har sambhu

PRINT FIRST CHARACTER OF EVERY STRING

let str = "Hi This Is Somanath Full Stack Developer"
for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        if (i == 0) {
            console.log(str[i])
        }
        else if (str[i - 1] == " ") {
            console.log(str[i])
        }
    }
}

------------------- XXXXXXX--------------------

    FIND MIN AND MAX FROM ARRAY

let arr = [1, 2, 3, 4, 5];
let min, max;
min = max = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
        min = arr[i];
    }
    if (arr[i > max]) {
        max = arr[i]
    }
}
console.log(min)
console.log(max)

------------------- XXXXXXX--------------------

    REVERSE TOTAL ARRAY

let arr = [1, 2, 3, 4, 5];
let i = 0, j = arr.length - 1, temp
while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr)

------------------- XXXXXXX--------------------

    DATE TO ISO CONVERT

const dateStr = '2022-07-21';

const date = new Date(dateStr);

const iso = date.toISOString();

console.log(iso); // 👉️ "2022-07-21T00:00:00.000Z"

------------------- XXXXXXX--------------------

    OCCURANCE OF ELEMENT IN OBJECT

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};
for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts);

{ '2': 5, '4': 1, '5': 3, '9': 1 }

------------------- XXXXXXX--------------------

    MERGE CONCAT ARRAY

let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let arr2 = [10, 11, 12]
arr = [...arr, ...arr2];
console.log(arr)

MERGE CONCAT ARRAY - 2nd method

let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
let arr2 = [10, 11, 12]
arr.push(...arr2)
console.log(arr)

------------------- XXXXXXX--------------------

    PAIR EQUAL TO GIVEN SUM

let a = [1, 2, 3, 3, 4, 4, 5, 6];
let n = 10;

var left = 0;
var right = a.length - 1;
while (left < right) {
    if (a[left] + a[right] == n) {
        console.log(a[left], a[right]);
        break;
    } else if (a[left] + a[right] > n) {
        right--;
    } else {
        left++;
    }
}

------------------- XXXXXXX--------------------

    ANAGRAM CHECKING MEANS EACH STRING HAVE SAME CHARACTER WITH SAME COUNT

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    console.log(str1);
    console.log(str2);
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringsAnagram("indian", "ndiani")

------------------- XXXXXXX--------------------

    PANGRAM - EACH ALPAHBATE PRESENT OR NOT IN THE STRING

function isPangram(string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}
console.log(isPangram("We promptly judged anti4ue ivory buckles for the next prize"))

------------------- XXXXXXX--------------------

    FIBONASCI SERIES

async function fibo(number) {
    let n1 = 0,
        n2 = 1,
        nextTerm;
    console.log("Fibonacci Series:");

    for (let i = 1; i <= number; i++) {
        await console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
console.log("first");
fibo(20);
console.log("second");
OUTPUT;
// first
// Fibonacci Series:
// 0
// second
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
// 987
// 1597
// 2584
// 4181

------------------- XXXXXXX--------------------

    PALINDROME CHECKER

let str1 = "MOM";

let temp = str1.split('').reverse().join('');
if (str1 == temp)
    console.log("YES PALINDROME")

------------------- XXXXXXX--------------------

    FACTORIAL OF NUMBER

fact = 1;
for (let i = 5; i > 0; i--) {
    fact = fact * i

}
console.log(fact)

------------------- XXXXXXX--------------------


    LEADERS IN ARRAY

let arr = [1, 2, 6, 8, 45, 2, 89];
let i, j

for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] >= arr[i]) {
            break;
        }

    }
    if (j == arr.length) {
        console.log("LEADER IS", arr[i])
    }
}
