

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

function isBigger (numbers) {
    let biggerNumbers = [];
    for ( let i = 0; i<numbers.length; i++) {
        if (numbers[i]> 80) {
            biggerNumbers.push(numbers[i]);
        }
    }
return biggerNumbers ;
}

let arr = [2 , 4, 44, 56, 656, 543, 3, 5 , 81, 87] ;
let resutlArray = isBigger(arr);
console.log (resutlArray);