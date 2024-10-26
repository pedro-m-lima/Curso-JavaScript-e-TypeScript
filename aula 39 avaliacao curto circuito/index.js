/**
 * && -> false 
 */
/*
em javascript tudo pode ser avaliado em false e true

os valores avalidados em false value são 
0
'' "" ``
null /undefined
NaN

o curto circuito então acontece quando é encontrado um valor false, onde o javascript interrompe todas as demais verificações e exibe o "Valor" da expressão avaliada em false.
//*/

//exemplo onde retorna true
console.log('luiz' && 'Maria') //retorna o valor maria
console.log('luiz' && '' && 'Maria') //Por '' ser validado com false, o sisem deve interromper a validação nele e exibir o valor, no caso um valor em branco
console.log('luiz' && NaN && 'Maria') //trava no validar false, NaN

// outro exemplo com and &&
function falaOi(){
    return 'oi';
}
let vaiExecutar = 'joãozinho';
console.log(vaiExecutar && falaOi()); // dessa forma o será execuada a função
vaiExecutar = false
console.log(vaiExecutar && falaOi()); //Como possuo um um resultado que retorna false, o sistema para ali e nao executa o proximo

//Exemplo com OR ou ||
console.log(false || null || 'João' || true) //ele busca enquanto não possuir um verdadeiro, a hora que existir ele exibe


//nesse exemplo podemos ver claramente o quanto o ou é importante para validações
// ao inves de crirar toda uma estrutura de condcionais
// podemos utilizado para validar que se for um valor true, o sistema pega ele
//caso contrario o sistema exibe a variavel padrao
let corUsuario = null;
let corPadrao = corUsuario || 'red';
console.log(corPadrao);
corUsuario = 'blue';
corPadrao = corUsuario || 'red';
console.log(corPadrao)



const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //neste caso sera exibe o valor string false, pois esta como string e string nao é validado com false


/*//teste
function geraPessoa(nome, idade){
    return {
        nome,
        idade
    }
}

const pessoa1 = geraPessoa("Luiz", 17)

console.log(pessoa1.nome)
//*/
