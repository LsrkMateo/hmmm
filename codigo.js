"use strict"
let contador = 0;
let video = document.querySelector(".video")
let aviso = document.querySelector(".aviso")
let titulo = document.querySelector(".titulo")
let audio = document.querySelector(".audio")

addEventListener("visibilitychange",()=>{
    contador +=1/2;
    console.log(contador)
    if(contador == 1){
        video.setAttribute("src", "paloma.mp4");
        aviso.innerHTML = "Listo, ahora lo entiendes :D <br> sal de la pagina y vuevle a entrar cuantas veces quieras, diviertete y feliz cumpleaños :D"        
        aviso.setAttribute("style","top: 0; margin-top: 80px;")
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


