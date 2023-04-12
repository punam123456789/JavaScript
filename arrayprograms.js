// var array = [1,2,3,4,5,6,7,8,9,10,22,33];
// array.push("punam");
// array.pop(); //remove element from last
// array.pop();
// array.pop();
// array.shift();//remove element from start
// array.unshift("kunak", "mayuri");
// console.log(array,"array");
// console.log(array.length,"array");

var studentList = ["kunam","punam","anu","snehal","swaraj"] ;
console.log(studentList.length)
for(var i=0;i<studentList.length;i++){
    console.log(studentList[i],i)
}
for(var i=0;i<studentList.length;i++){
    if(studentList[i] == "swaraj"){
    console.log("kunal is in iur data");
}
}
var flagForswaraj = false
for(var i=0;i<studentList.length;i++){
    if(studentList[i] == "swaraj"){
        flagForswaraj   = true;
    console.log("swaraj is in iur data");
}
}

if( flagForswaraj == false){
    console.log("swaraj in notin our db");
}

for(var i=0; i<studentList.length;i++){
    if(studentList[i] == "swaraj" || studentList[i] == "kunal"){
        console.log("swaraj or kunal is in iur data");

    }
}

