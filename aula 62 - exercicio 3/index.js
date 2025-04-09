function retNum(num){
    if(typeof num != "number"){
        console.log("teste")
        return num
    }else if (num%3 !== 0 && num%5 !== 0 ){
        console.log(num%3)
        return num
    }else if((num%3 == 0) && (num%5 ==0)){
        return "FizzBuzz"
    }else if(num%3 == 0){
        return "Fizz"
    }else if(num%5 == 0){
        return "Buzz"
    }
}

console.log(retNum(20))
