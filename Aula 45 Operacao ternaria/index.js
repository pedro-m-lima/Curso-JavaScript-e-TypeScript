// (condicao) ? 'valor para verdadeiro' : 'valor para false'; dependendo da situação podemos utilizar a operação ternaria para validar condicoes
const pontuacaoUsuario = 500; // usuario possui uma pontuação de 1000 pontos.
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

