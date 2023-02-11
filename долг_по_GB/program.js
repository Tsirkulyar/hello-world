let arr =['Hello', '2', 'world', ':-)'];
let arr2 = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i].length < 4){
        var get = arr2.push(arr[i])
    }
}
console.log(arr2)