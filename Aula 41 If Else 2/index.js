let numero = 10;

//Testando apenas se e se não
if(numero >= 0 && numero <=5){
    console.log(`numero esta entre 0 e 5`);
} else{
    console.log(`O numero NÃO esta entre 0 e 5`);
}

// utilizando is e else if

if(numero >= 0 && numero <=5){
    console.log(`numero esta entre 0 e 5`);
} else if (numero >= 6 && numero <=8){
    console.log(`O numero esta entre 6 e 8`);
} else if (numero >= 9 && numero <= 11){
    console.log(`numero enta estre 9 a 11`)
} else {
    console.log(`Número não esta entre 0 e 11`)
}