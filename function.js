// console.log("outside function")

// function add(){
//     var a=1;
//     var b=2;
//     console.log(a+b)
// }
// add();


// function sub(){
//     var a=1;
//     var b=2;
//     console.log(a-b)
// }
// sub();
// function mul(){
//     var a=3;
//     var b=5;
//     console.log(a*b);
// }
// mul();
// function division(){
//     var a=3;
//     var b=5;
//     console.log(a/b);
// }
// division();

// var a = 2;
// var b = 4;
// function multi(parafirst,parasecond){
//     console.log(parafirst * parasecond);

// }
// function add(parafirst,parasecond){
//     console.log(parafirst + parasecond);

// }
// multi(a,b);
// add(a,b);

// var a = 2;
// var b = 4;
// function multi(parafirst,parasecond){
//     return parafirst * parasecond;

// }
// var value = multi(a,b);
// console.log(value, "value");

// var a =23567;
// var b= 6557;
// function greater(first,second){
//     if(first>second){
//         console.log("a is greater");
//         return first;
//     }
//     else{
//         console.log("b is greater");
//         return second;
//     }
//     // return a>b&&b>a;
// }
// var gre =greater(a,b);
// console.log(gre);

// var a = 2;
// var b = 9;
// function greater(a ,b){
//     var bigger;
//     if(a>b){
//         bigger  = a;

//     }
//     else{
//         bigger = b;
//     }
//     bigger=bigger * 2;
//     return bigger;
// }
// var ans=greater(a,b);
// console.log(ans,"ans");

// var a = 123;
// function evenodd(num){
//     if(num%2 ==0){
//         console.log("num is even")
//         return num;
//     }
//     else{
//         console.log("num is odd");
//         return num;
//     }
// }
// var ans = evenodd(a);
// console.log(ans);



// var num1=15;
// var num2=25;
// function biggest(first,second){
// if(first > second){
//     console.log("number one is greater");
//     return first;
// }
// else{
//     console.log("second is greter");
//     return second;
// }
// }
// var ans = biggest(num1,num2);
// console.log(ans);

// var num1=5;
// var num2=10;
// var num3=15;
// function gre(a,b,c){
// if(a>b && a>c){
//     console.log("num1 is greater");
// }
// else if(b>a && b>c){
//     console.log("num2 is greater");

// }
// else{
//     console.log("num3 is greater");
// }
// }
// var ans = gre(num1,num2,num3);
// console.log(ans);


var number = 5;
function range(a){
if(a>=5 && a<=25){
    console.log("number is find");
    return a;
}
else{
    console.log ("number is not found");
    return a;
}
}

var ans = range(number);
console.log(ans);


