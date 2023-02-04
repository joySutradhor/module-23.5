// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে। 


function mmToliter (input) {
    let liter = input / 1000 ;
    return liter ;
}

let convert = mmToliter(1000000);
console.log("Total is :",convert , "liter");