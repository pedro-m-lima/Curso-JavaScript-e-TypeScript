//Strings são indexadas -cada caractere tem 1 index iniciando com 0

let umaString = "Um texto";

//Exibindo apenas 1 range da string. no caso do texto acima é de 0 a 7
console.log(umaString[3]);
/*caso não exista a string sistema vai exibir undefined, 
para isso informar um range a qual não devolva nenhum 
resultado exemplo <console.log(umaString[3])>
*/

/*também pode ser utiliza a função charAt para pregar apenas um range 
A diferenteça é que com charAt caso passe um valor que nao tenha dados, o retorno é igual a null
*/
console.log(umaString.charAt(4));

//Outra função para string é o cocant para realizar uma concatenação, porem utiliznado o + fica bem mais facil (templateStrings).

//com concat
console.log(umaString.concat(' Um lindo dia'));
console.log(umaString+` um lindo dia`);

/*o indexOf auxilia a encontrar um index com base em um texto. 
ele sempre pega o index inicial do texto passado no caso como 
passei a palavra texto ele inicio no X que tem a posição 5 da string
*/
console.log(umaString.indexOf("xto"));

//Também poser ser usado o lastIndexOf que busca o index porem de traz pra frente, a diferença acontece quando eu passo qual a index padrão para iniciar
console.log(umaString.lastIndexOf('xto', 3));

//Descoindo o tamanho da string com length
console.log(umaString.length)

//Expressão regular com match, o g é um tag que deve ser passada pra expressão regular
console.log(umaString.match(/[a-z]/g));

//Expressão regular com search
console.log(umaString.search(/tex/));

/*Expressão regular com replace e substituição de palavras, 
no primeiro abre e fecha expressão é a parte do texto que 
deseja mudar e a segunda expressão é o qual o texto que vai mudar
*/
console.log(umaString.replace("Um", "Outro")); 

console.log(umaString.replace(/Um/, 'Outra')); 

//Substituindo letras utilizar o g para localizar os locais que existe a letra ou a palavra dentro da string
console.log(umaString.replace(/t/g, '#')); 

//Fatiar uma string, separar ela em partes, utilizando slice. o primeiro digito passado é o inicio e o segundo onde deve parar. exemplo, (2,6) inicia na index 2 e para na index 6
console.log(umaString.slice(2,6));

//Tamb´pem é possivel fatiar com numeros negativos, onde sera contado de traz pra frente (-2)
console.log(umaString.slice(-2));

//outra função parecida com slice é a substring. esse é parecido porem sa muito mais codigo, pode usar slice no lugar,
console.log(umaString.substring(umaString.length-5));

// dividindo a string baseado em um caracter
console.log(umaString.split('t')); //eçe remove os t e separa a string em arrays

//deixando tudo em maiusculo (UpperCase) ou minusculo(LowerCase)
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());


