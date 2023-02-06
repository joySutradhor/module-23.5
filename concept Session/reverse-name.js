// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 

function friendsName (name1 , name2) {
    let nameArray = '';
    if (name1.length > name2.length){
        nameArray = nameArray + name1;
    }
    else if (name1.length < name2.length) {  
        nameArray = nameArray + name2;
    }
    let store = "";
    for ( let i = nameArray.length-1 ; i>=0 ; i--){
        store = store + nameArray[i];
    }
    return store;


}
let result = friendsName ('joy sutradhor', "sakib");
console.log("The reverse name is : " + result);
