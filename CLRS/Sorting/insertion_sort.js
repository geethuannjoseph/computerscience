"use strict";
function insertionSort(A) {
  for (let i = 1; i < A.length; i++) {
    j = i - 1;
    let key = A[i];
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      j = j - 1;
    }
    A[j + 1] = key;
  }
  console.log("The sorted array is ", A);
}
