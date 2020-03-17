const sha1 = require('sha1');
const jsonOriginal = require('./answer.json');
const alfabeto  = "abcdefghijklmnopqrstuvwxyz";

let jsonDecifrado = jsonOriginal;

jsonDecifrado.decifrado = decifraTexto(jsonOriginal.cifrado, jsonOriginal.numero_casas);

jsonDecifrado.resumo_criptografico = criptografiaSHA1(jsonDecifrado.decifrado);

console.log(jsonDecifrado);

//alterar o arquivo answer.json
//criar um post para a URL
//escrever o retorno em um arquivo de log

function criptografiaSHA1(texto){
    return sha1(texto)
}

function decifraTexto(cifrado, numeroCasas){

    const cifradoArray = cifrado.split('');

    let decifrado = [];

    const cifra = retornaCifra(alfabeto, numeroCasas);

    cifradoArray.map((letra) => {
        decifrado.push(converteLetra(letra, cifra));
    })
    return decifrado.join('');
}

function retornaCifra(alfabeto, numeroCasas){

    const arrayAlfabeto = alfabeto.split('');

    let arrayCifra = [];

    for (let index = numeroCasas; index < arrayAlfabeto.length; index++) {
        arrayCifra.push(arrayAlfabeto[index]);
    }

    for (let index = 0; index < numeroCasas; index++){
        arrayCifra.push(arrayAlfabeto[index]);
    }

    return arrayCifra.join('');
}

function converteLetra(letra, cifra){

    let indice = cifra.indexOf(letra);

    if (indice === -1){
        return letra
    } else {
        return alfabeto[indice];
    }
}

