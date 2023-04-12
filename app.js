const pantalla = document.querySelector("canvas")
const pincel = pantalla.getContext("2d")
let x
let y
let puedoDibujar = false
var radio = 10
let color = "blue"
pincel.fillStyle = "grey"
pincel.fillRect(0, 0, 600, 400)

const colors = ["red", "green", "blue", "pink","purple"]

function generarColores(colors) {
    for (const color in colors) {
        pincel.fillStyle = colors[color]
        pincel.fillRect(50 * color, 0, 50, 50)
    }
}

function seleccionarColor(evento) {
    let x = evento.x - pantalla.offsetLeft
    let y = evento.y - pantalla.offsetTop
    for (const i in colors) {
        if (x > 50 * i && x < 50 * (Number(i) + 1) && y <= 50) {
            color = colors[i]
        }
        
    }
}

function dibujarcirculo(x,y,color) {
    if (puedoDibujar) {
        pincel.fillStyle = color
        pincel.beginPath()
        pincel.arc(x, y, 10, 0, 2 * Math.PI)
        pincel.fill()
    }
}


function habilitarDibujar() {

    puedoDibujar = true;
}

function deshabilitarDibujar() {

    puedoDibujar = false;
}

function puedeDibujar(x,y) {
    if (x > 0 && x < 50 * colors.length && y <= 50) {
        return false
    } else {
        return true
    }
}


function capturarMouse(evento) {
    var x = evento.x - pantalla.offsetLeft
    var y = evento.y - pantalla.offsetTop
    
    if (puedeDibujar(x,y)) {
        dibujarcirculo(x,y,color)
    } 
}


generarColores(colors)

pantalla.onmousemove = capturarMouse
pantalla.onmousedown = habilitarDibujar
pantalla.onmouseup = deshabilitarDibujar
pantalla.onclick = seleccionarColor

