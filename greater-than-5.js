// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে। ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10],আউটপুটঃ 3

// function greaterThanFive (input) {
//     let arraysize = [];
//     for (let i = 0; i<input.length; i++){
//        if(input[i]>5){
//         arraysize.push(i);
//        }
//     }
//     return arraysize.length ;
// }

// let inputArray = [-1,2,-3,4,5,6,-7,8,-9,10];
// let result = greaterThanFive (inputArray);
// console.log(result);






// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে। ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10],আউটপুটঃ 3

function greaterThanFive (input){
    
    
    let newArray = [];
    for(let i= 0; i<input.length; i++) {   
        if (input[i]>5){
            newArray.push(input[i]);
        }
    }
    return newArray.length ;

}


let inputArray = [50,-1,2,-3,40,5,6,-7,8,-9,10 , ];
let result = greaterThanFive (inputArray);
console.log(result);


