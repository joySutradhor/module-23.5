// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে। 

function mathTable (number){
    if (typeof number != "number"){
        return "Enter valid Number"
    }
    let math = [];
    for ( let i = 1; i<=10; i++){
       math.push(i + "x"+ number +"=" + number * i);
    }
    return math;
}
let result = mathTable(5);
console.log(result);

   


