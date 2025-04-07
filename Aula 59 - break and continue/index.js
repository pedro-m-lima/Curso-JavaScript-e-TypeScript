const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i of numeros){
//     let numero = numeros[i]

//     if(numero === 3){
//         console.log("Pula o numero 3 por causa do continue")
//         continue;
//     }

//     console.log(numero)

//     if(numero === 8){
//         console.log("numero 8 encontrado")
//         break;
//     }
// }

let i = 0

while(i < numeros.length){
    let numero = numeros[i]
    i++
    //console.log(numero)
    if(numero === 3){
        console.log("Pula o numero 3 por causa do continue")
        continue;
    }

    console.log(numero)

    if(numero === 8){
        console.log("numero 8 encontrado")
        break;
    }
}