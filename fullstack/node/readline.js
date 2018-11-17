const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

io.on('line', nome =>{
    console.log("algo", nome);
    io.close();
})