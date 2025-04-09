function soma(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw Error('x e y precisam ser numeros')
    }
    return x+y
}

try{    //caso ocorra qualquer eero dentro do try o sistema exibe o que estaem catch
    console.log(soma('a', 2))
}catch(error){
    console.log(error)
}

