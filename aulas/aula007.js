//Condicionais são dois tipos (if e o else / switch case)
//If e Else
//Se a hora for maior que 6:00 e menor que 12:00 = Bom Dia!
//Se a hora for maior que 12:00 e menor que 18:00 = Boa Tarde!
//Caso não for nenhum dos casos vai ser = Boa Noite!

// let hora = 19;
// if (hora >= 6 && hora <= 12) {
//     console.log('Bom Dia!')
// }
// else if (hora > 12 && hora <= 18) {
//     console.log('Boa Tarde!')
// }
// else {
//     console.log('Boa Noite!')
// }


//Switch Case 
let permissao; //tipos de pessoas (comum, gerente, diretor)
permissao = 'gerente'

switch (permissao) {
    case 'comum': 
        console.log('Usuário comum...');
        break;
    
    case 'gerente':
        console.log('Usuário é o gerente...');
        break;
    
    case 'diretor':
        console.log('usuário é o diretor...');
        break;
    
    default:
        console.log('Nenhum dos usuários acima...')
}