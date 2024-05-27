function multiplyAll(arr){
    return (num) => {
        return arr.map((el) => el * num)
    }
}

console.log(multiplyAll([1,2,3])(2))