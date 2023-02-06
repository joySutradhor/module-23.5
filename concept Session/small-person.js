

// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 


function smallPerson(input) {
    // init  = 30 ;
    let init = input[0]; 
    for (let i = 1; i<input.length; i++) {
        if (input[i].age<init.age){
           init = input[i];
        }
    }
return init;
}

let personObject = [
    { name: 'sakib', age: 30 },
    { name: 'samiul', age: 20 },
    { name: 'sahid', age: 50 },
    { name: 'samin', age: 10 }
] 
let result = smallPerson (personObject);
console.log(result);



