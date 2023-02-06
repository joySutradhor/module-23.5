

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

function multiplication (input) {
   
    let totalMath = 0 ;
     for(let i = 0; i<input.length; i++ ) {
        let sum = input[i] * input[1]* input[2];
        return totalMath = sum ;
    }
}

let input = [5 , 2 , 8];
let result = multiplication (input);
console.log(result);