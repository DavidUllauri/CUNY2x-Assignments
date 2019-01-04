// For each -----------------------------------
function myForEach(arr, callBackFunc) {
  for(i=0; i<arr.length; i++) {
    callBackFunc(arr[i]);
  }
}

// Map -----------------------------------------
function myMap (arr, callBackFunc) {
  var arr2 = [];
  for(i=0; i<arr.length; i++) {
    arr2.push(callBackFunc(arr[i]));
  }
  return arr2;
}

// Filter ---------------------------------------
function myFilter(arr, callBackFunc) {
  var arr2 = [];
  for(i=0;i<x.length; i++) {
    if(callBackFunc(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

// Some ------------------------------------------
function mySome(arr, callBackFunc) {
  for(i=0;i<arr.length; i++) {
    if(callBackFunc(arr[i])) {
      return true;
    }
  }
  return false;
}

// Every ----------------------------------------
function myEvery(arr, callBackFunc) {
  for(i=0;i<arr.length; i++) {
    if(callBackFunc(arr[i]) == false) {
      return false
    }
  }
  return true;
}

// Reduce ----------------------------------------
function myReduce(arr, callBackFunc) {
  for(i=0;i<arr.length; i++) {
    total += callBackFunc(arr[i]);
  }
  return total;
}
