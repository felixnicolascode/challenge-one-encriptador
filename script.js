/* https://github.com/orangecatcode
   Felix N. Morales | Alura Latam
   Edición #5: Challenge ONE
*/

const input = document.querySelector(".input");
const output = document.querySelector(".output")

/*-----------SOBRE EL DESAFÍO-----------*/

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/*---------------ENCRIPTAR TEXTO----------------*/
function btnEncriptar() {
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none";
    input.value = "";

}
function encriptar(entrada) {
    let clave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    entrada = entrada.toLowerCase();
    for (let i = 0; i < clave.length; i++) {
        if (entrada.includes(clave[i][0])) {
            entrada = entrada.replaceAll(clave[i][0], clave[i][1])
        }
    }
    return entrada;
}

/*---------------DESENCRIPTAR TEXTO----------------*/

function btnDesencriptar() {

    const textoEncriptado = desencriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none"

    input.value = "";
}

function desencriptar(entrada) {
    let clave = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    entrada = entrada.toLowerCase();
    for (let i = 0; i < clave.length; i++) {
        if (entrada.includes(clave[i][0])) {
            entrada = entrada.replaceAll(clave[i][0], clave[i][1])
        }
    }
    return entrada;
}


/*---------------COPIAR Y PEGAR----------------*/

function copiar() {
    output.select();
    navigator.clipboard.writeText(output.value);
}


function pegar() {
    document.querySelector('.input').value = output.value;
}

function borrar() {
    document.querySelector('.output').value = "";
    document.querySelector('.input').value = "";
}

/*-----------CARACTERES ESPECIALES Y MAYUSCULAS----------*/
input.addEventListener("input", function borrarCaracteres() {
    let campo = this.value.replace(/[^a-z\s]/g, "");
    this.value = campo;
});
