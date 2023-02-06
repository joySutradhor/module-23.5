
// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 


function showArray (numbers){

let loopArray = [];
for( let i = 0 ; i<arr.length; i++) {
    loopArray.push(arr[i]);
}
return loopArray ;
}

let arr = [2 , 4, 44, 56, 656, 543, 3, 5] ;
let resutlArray = showArray(arr);
console.log (resutlArray);

