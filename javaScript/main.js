const arr = [2, 7, 8, 9, 11, 17, 2, 6, 10, 9, 3, 4, 5, 6];
let beggestMultArr = [null];
let beggest = arr[0] * arr[1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] * arr[i + 1] > beggest) {
    beggest = arr[i] * arr[i + 1];
    // delete beggestMultArr elements
    beggestMultArr = [];
    beggestMultArr.push(arr[i], arr[i + 1]);
  }
}
console.log("the biggest number", beggest);
console.log("the element is", beggestMultArr[0], "*", beggestMultArr[1]);
