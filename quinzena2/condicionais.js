/* =================
Exercicio de Interpretação 
==========================*/
// exercicio 1
//(a) Ele testa se o numero digita é imapar ou par, retornando "passou no teste" par ou " não passou no teste para impar".
//(b) para numero pares.
//(c) para numeros imapares.

//exercico 2
//(a) Para retornar o preço da fruta que você deseja
//(b) O preço da fruta maçã é R$ 5
//(c) O preço da fruta pera é R$ 5

//Exercicio 3
//(a) a primeira linha esta pedindo para o usario digitar um numero
//(b) Em ambos os casos daria erro.
//(c)sim, acredito que tenha a variavel let está no lugar errado, provavelmente ali usariamos um Else.

// Exercícios de escrita de código
// exercicio 1

const idade = Number (prompt("Qual a sua idade?"))
 
if (idade >=18){
    console.log ("Você pode dirigir");
     } else {
       (idade <=17)} { 
         console.log ("Você não pode dirigir")
          }
// exercicio 2
// const turnoQueEstuda = prompt ("Qual turno você estuda, digite a primeira letra correspondente")

// if (turnoQueEstuda == "m"){
//     console.log ("Bom dia");
// } else {
//     (turnoQueEstuda == "v")
//         console.log ("Boa tarde") ;
//         {
//             if (turnoQueEstuda == "N");
//         }
            
    
    
// }

//Exercicio 3

let turnoQueEstuda = prompt ("Qual turno você estuda, digite a primeira letra correspondente")
let turno

switch (turnoQueEstuda){
    case "m":
      turno = "Bom dia!"
      break;
    case "v":
      turno= "Boa tarde!"
      break;
    case "n":
      turno = "Boa noite!"
      break;
   
  }
  console.log (turno)

  //exercicio 4

let filme = prompt ("Qual genero de filme você vai assistir?")
let genero


switch (filme){
    case "Aventura":
      genero = "Escolha outro filme :("
      break;
    case "Fantasia":
     genero= "Bom filme!"
      break;
    case "romance":
      genero= "Escolha outro filme :("
      break;
   case "terror":
   genero= "Escolha outro filme :("
   break
  }
  console.log(genero)



  let preco =  Number (prompt("Qual o preço do ingresso?"))
  let valor


switch (preco){
    case 20:
      valor = "Escolha outro filme :("
      break;
    case 14:
     valor= "Bom filme!"
      break;

  }
  console.log (valor)
//  refazer 

 
