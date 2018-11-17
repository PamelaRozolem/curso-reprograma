const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroSorteado;
function sorteiaNumeros() {
    min = Math.ceil(0);
    max = Math.floor(100);
    numeroSorteado = Math.floor(Math.random() * (max - min)) + min;
    return numeroSorteado;
  
  }


  function verificacao(nome){
    if(isNaN(nome)  ){
        console.log('so é permitido numeros')
    }
    else if(numeroSorteado == nome){
        console.log("acertou mizeravi");
    }else if(numeroSorteado < nome){
        console.log(`O numero sorteado é menor`)
    }else if(numeroSorteado > nome){
        console.log(`o numero sorteado é maior`)
    }else{
        console.log('errouuu');
    }
}


io.on('line', nome =>{
    console.log(sorteiaNumeros(),nome);
    verificacao(nome);
    io.close();
    
})  





