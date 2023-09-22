// code your solution here
function saturdayFun(text){
 if (text === "bathe my dog"){
    return "This Saturday, I want to bathe my dog!";
 } else {
  return "This Saturday, I want to roller-skate!";
}
}

function mondayWork(text){
     if (text === "work from home"){
       return "This Monday, I will work from home.";
     } else {
       return "This Monday, I will go to the office.";
     }
}
function wrapAdjective(emphasis = "*") {
  return function (adjective = "special") {
    return `You are ${emphasis}${adjective}${emphasis}!`;
  };
}

const result = wrapAdjective("*");
const emphatic = result("a hard worker");
console.log(emphatic);