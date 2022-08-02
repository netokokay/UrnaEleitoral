let prompt = require('prompt-sync')();

let nuloVotos = 0;
let fulaninhoVotos = 0;
let cicraninhoVotos = 0;
let beltraninhoVotos = 0;
let brancoVotos = 0;
let fim = 'n';
let check = 0;
let totalVotos;
let voto;

function ComputaVoto(x) {

    switch (x) {

        case 889:
            fulaninhoVotos = fulaninhoVotos + 1;
            break;

        case 847:
            cicraninhoVotos = cicraninhoVotos + 1;
            break;

        case 515:
            beltraninhoVotos = beltraninhoVotos + 1;
            break;

        case 0:
            brancoVotos = brancoVotos + 1;
            break;

        default:
            nuloVotos = nuloVotos + 1;

    }
}


const candidatos = {
    Fulaninho: 889,
    Cicraninho: 847,
    Beltraninho: 515,
    Branco: 0
}

while (fim === 'n') {
    while (check === 0) {
        voto = parseInt(prompt("Digite seu voto: "));
        if (isNaN(voto)) {
            check = 0;
            console.log("Digite apenas números!!")
        } else {
            check = 1;
        }
    }

    ComputaVoto(voto)
    fim = prompt("Deseja finalizar a votação? Responda 's' para sim e 'n' para não: ")
    if (fim === 'n') {
        check = 0;
    }
}
totalVotos = fulaninhoVotos + cicraninhoVotos + beltraninhoVotos + nuloVotos + brancoVotos;
if (fulaninhoVotos > cicraninhoVotos && fulaninhoVotos > beltraninhoVotos){
    console.log(`O candidato vencedor foi Fulaninho com ${fulaninhoVotos} votos.`)
} else if (cicraninhoVotos > fulaninhoVotos && cicraninhoVotos > beltraninhoVotos){
    console.log(`O candidato vencedor foi Cicraninho com ${cicraninhoVotos} votos.`)
} else if (beltraninhoVotos > fulaninhoVotos && beltraninhoVotos > cicraninhoVotos){
    console.log(`O candidato vencedor foi Beltraninho com ${beltraninhoVotos} votos.`)
}

console.log(``)
console.log(`No total tivemos ${totalVotos} pessoas votando!`)
console.log(``)
console.log(`O candidato Fulaninho teve: ${fulaninhoVotos}`)
console.log(`O candidato Cicraninho teve: ${cicraninhoVotos}`)
console.log(`O candidato Beltraninho teve: ${beltraninhoVotos}`)
console.log(`Tivemos também ${brancoVotos} votos em branco e ${nuloVotos} votos nulo!`)