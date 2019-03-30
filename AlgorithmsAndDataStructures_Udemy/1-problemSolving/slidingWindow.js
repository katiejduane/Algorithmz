 // naive solution
 function maxSubArraySum(arr, num) {
     if(num > arr.length){
         return null
     }
     var max = -Infinity;
     for (let i = 0; i < arr.length - num; i++){
        let temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
 }

//  maxSubArraySum([2,6,9,2,1,8,5,6,3], 3)

// refactored solution
function maxSubArraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum -arr[i- num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum2([2,6,9,2,1,8,5,6,3], 3))