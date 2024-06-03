let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function tempoPassa(){
    let agora = new Date();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    digitalElement.innerHTML = `${fixZero(hora)}:${fixZero(min)}:${fixZero(seg)}`
    
    let segDeg = ((360 / 60) * seg) - 90
    let minDeg = ((360 / 60) * min) - 90 
    let horaDeg = ((360 / 12) * hora) - 90

    sElement.style.transform = `rotate(${segDeg}deg)`
    mElement.style.transform = `rotate(${minDeg}deg)`
    hElement.style.transform = `rotate(${horaDeg}deg)`

    
};

function fixZero(time) {
    return time < 10 ? '0'+time : time;
}



setInterval((tempoPassa), 1000);
tempoPassa();