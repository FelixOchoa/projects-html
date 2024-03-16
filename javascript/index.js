const nombre = "Juan"
let contador = 0

const contadorHTML = document.querySelector("#contador")
const aumentarHTML = document.querySelector("#aumentar")
const disminuirHTML = document.querySelector("#disminuir")
const bodyHTML = document.querySelector("#body")
const h1Felicidades = document.createElement("h1")

contadorHTML.innerText = contador

console.log(bodyHTML)

aumentarHTML.addEventListener("click", () => {
    contador++
    contadorHTML.innerText = contador

    if (contador > 9) {
        contadorHTML.setAttribute("style", "color: red; font-size: 2rem; font-weight: bold; transform: translateX(40px);")
    }
    if (contador > 19) {
        contadorHTML.setAttribute("style", "color: red; font-size: 2rem; font-weight: bold; transform: translateX(80px);")
    }
})

disminuirHTML.addEventListener("click", () => {
    contador--
    contadorHTML.innerText = contador
})

aumentarHTML.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        contador++
        contadorHTML.innerText = contador
    }
    if (event.key === "ArrowDown") {
        contador--
        contadorHTML.innerText = contador
    }
})

function felicidades() {
    h1Felicidades.innerText = "¡Felicidades!"
    bodyHTML.appendChild(h1Felicidades)
}

const felicidadesArrow = () => {
    h1Felicidades.innerText = "¡Felicidades!"
    bodyHTML.appendChild(h1Felicidades)
}

() => {
}

async function obtenerNombre() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Juan")
        }, 2000)
    })
}

const obtenerNombre = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Juan")
        }, 2000)
    })
}