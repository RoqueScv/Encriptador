function validarTexto(textoIngresado) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (textoIngresado.match(mayusculas) || textoIngresado.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return false;
    } else if (textoIngresado == vacio) {
        alert("Ingrese un mensaje para encriptar");
        return false;
    } else {
        return true;
    }
}

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(textoIngresado) {
    let encriptado = textoIngresado;
    for (const obj in reglas) {
        encriptado = encriptado.replaceAll(obj, reglas[obj]);
    }
    return encriptado;
}
function desencriptar(textoIngresado) {
    let desencriptado = textoIngresado;
    for (const obj in reglas) {
        desencriptado = desencriptado.replaceAll(reglas[obj], obj);
    }
    return desencriptado;
}

let btnEncriptar = document.querySelector("#btn-encriptar");
let btnCopiar = document.querySelector("#btn-copiar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let resultado = document.querySelector("#msg")

btnEncriptar.addEventListener("click", function () {
    let textoIngresado = document.querySelector("#input-texto").value;

    if (validarTexto(textoIngresado)) {
        resultado.value = encriptar(textoIngresado);
        document.querySelector("#btn-copiar").style.display = "inline-block";
    } else {
        document.querySelector("#input-texto").value = "";
    }
});

btnCopiar.addEventListener("click", function () {
    let copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(copiado);
    document.querySelector("#input-texto").value = "";
});

btnDesencriptar.addEventListener("click", function () {
    let textoIngresado = document.querySelector("#input-texto").value;
    resultado.value = desencriptar(textoIngresado);
});