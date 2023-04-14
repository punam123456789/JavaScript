// var fruits = ["mango", "banana","graps","watermelon"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// console.log(fruits.length)
// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// var flag = false;
// for(var i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
//     if(fruits[i] == "orange"){
//         flag=true;
//     }
// }
// console.log("flag is here -",false)
// if(flag==false){
//     console.log("Orange is not in our array");
// }
// else{
//     console.log("orange is in our array");
// }


// function findMax(arr){
//     var max=arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];

//     }
//     // if(arr[1]>max){
//     //     max=arr[1];
        
//     }
//     return max;
// }
// var arr=[45,78,79,55.234,566];
// console.log(findMax(arr));



function findMin(arr){
    var min=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];

    }
    
        
    }
    return min;
}
var arr=[453,78,79,5,234,566];
console.log(findMin(arr));