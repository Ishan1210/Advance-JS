//Callback

// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {

//     switch (true){
    
//     case grade == "A":
    
//     console.log("You got an", grade, ": amazing!");
    
//     break;
    
//     case grade =="B":
    
//     console.log("You got a", grade, ": well done!");
    
//     break;
    
//     case grade == "C":
    
//     console.log("You got a", grade, ": alright.");
    
//     break;
    
//     case grade == "D":
    
//     console.log("You got a", grade," hmmm...");
    
//     break;
    
//     default:
    
//     console.log("An", grade, "! What?!");
    
//     }
    
//     }

//     function getGrade(score,callback){
//         let grade;
//         switch (true){
//             case score >= 90:
//                 grade = "A";
//                 break;
//             case score >= 80:
//                 grade = "B";
//                 break;
//             case score >= 70:
//                 grade = "C";
//                 break;
//             case score >= 60:
//                 grade = "D";
//                 break;
//             default:
//                 grade = "F";
//         }
//         callback(grade);
//     }
// getGrade(85, judge);

// setInterval(encourage, 1000);
// function encourage() {
//     console.log("You can do it!");
// }

//PROMISES

// let promise = new Promise(function(resolve, reject){
//     let x=20;
//     if (x>10){
//         resolve(x);}
//     else{
//         reject("x is less than 10");}
//     });
// promise.then(function(value){
//     console.log("Success! x is", value);
// }).catch(function(error){
//     console.log("Error:", error);
// });

// const promise = new Promise((resolve, reject) => {
//     resolve("Success!");
// });
// .then(value=>{
//     console.log(value);
//     return "we"
// })
// .then(value=>{
//     console.log(value);
//     return "are"
// })
// .then(value=>{
//     console.log(value);
//     return "the"
// })
// .then(value=>{
//     console.log(value);
//     return "champions"
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// })



