// Problem:1   radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// 1rad × 180/π
// 1432.39
// 11401.86



function radianToDegree (input){
 let PI = 3.141592653589793238;
 let resultRadian = input * 180 / PI ;
 return resultRadian.toFixed(2) ;

}

let result = radianToDegree (199);
console.log(result);