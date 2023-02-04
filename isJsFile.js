// Problem:2   isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 


function isJavaScriptFile (checkFile){
    if (typeof checkFile !== "string"){
        return "Please Give me file name ";
    }
    else if (checkFile.endsWith(".js")){
        return true ;
    }
    else{
        return false ;
    }
}

let result = isJavaScriptFile("joy.js");
console.log(result);