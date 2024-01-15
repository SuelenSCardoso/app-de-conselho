const botao = document.getElementById("botao");
const numeroId = document.querySelector(".advice");
const textoDoConselho = document.querySelector(".conselho");

async function conselho(){
     const resposta = await fetch("https://api.adviceslip.com/advice");
     const conteudo = await resposta.json();
     const adviceId = `A D V I C E #${conteudo.slip.id}`;
     const textAdvice = `"${conteudo.slip.advice}"`;
    
     numeroId.innerHTML = adviceId;
     textoDoConselho.innerHTML = textAdvice;

     console.log(adviceId)
     console.log(textAdvice)
 }

 botao.addEventListener("click", conselho);
 conselho();