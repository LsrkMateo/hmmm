console.log("bro?, que haces aqui ._.")

let contenedor = document.querySelector(".hola")

let contador = 0;
let video = document.querySelector(".video")
let aviso = document.querySelector(".aviso")
let titulo = document.querySelector(".titulo")
let audio = document.querySelector(".audio")


const mq = matchMedia("(max-width: 768px)"); 

console.log(mq.matches) //el dispositivo tiene menos ancho que 500px, si es ese el caso devuelve true

if (mq.matches){
    aviso.innerHTML = "veo que estas utilizando un celular... <br> utiliza el siguiente boton para jugar. <br> Sin embargo, si visualizas la pagina en pc cambia la experiencia :D"
    aviso.style.fontSize = "20px"


    const boton = document.createElement("button")
    contenedor.appendChild(boton)
    boton.innerHTML = "Presioname :3"
    boton.classList.add("boton_movil")

    const ayuda = document.createElement("p")
    contenedor.appendChild(ayuda)
    ayuda.classList.add("ayuda")
    ayuda.innerHTML = "Pd: ñero ayuda no funciona el botón nose que hacer D: <br> nose porque no funciona jaja, son las 2 de la mañana y tenemos lo de parec <br> nosea pirobo abra esta pagina en computador. <br>  feliz cumpleaños jaskdjas"

} else{
    addEventListener("visibilitychange",()=>{
        contador +=1/2;
        console.log(contador)
        if(contador == 1){
            video.setAttribute("src", "paloma.mp4");
            aviso.innerHTML = "Listo, ahora lo entiendes :D <br> sal de la pagina y vuevle a entrar cuantas veces quieras, <br> diviertete y feliz cumpleaños :D"        
            aviso.setAttribute("style","top: 0; margin-top: 80px;")
            aviso.style.transform = "translateY(-250px)";
            titulo.innerHTML = "😎 FELIZ CUMPLEAÑOS SERGIO 😎"
        } else if (contador == 2){
            video.setAttribute("src", "monos.mp4")
            aviso.innerHTML = "jaja unos monos 💀"
            titulo.innerHTML = "WOOOOO"
            audio.setAttribute("src","lalala.mp4")
        } else if (contador == 3){
            video.setAttribute("src","nugget.mp4")
            aviso.innerHTML = "Bro... este nugget me hizo reflexionar 💀"
            titulo.innerHTML = "➡️⁉️"
        } else if (contador == 4){
            video.setAttribute("src","mario.mp4")
            aviso.innerHTML = "Gracias por ser mi amigo todos estos años, lo quiero mucho"
            titulo.innerHTML = "Weepaaa "
        } else if (contador == 5){
            video.setAttribute("src","patricio.mp4")
            titulo.innerHTML = "PATRICIOOOO"
            aviso.innerHTML =""
        }
})
}



