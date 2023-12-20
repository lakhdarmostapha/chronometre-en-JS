// Déclarer les variables necessaire:

let h,min,s,ms,btn_start,btn_stop,btn_reset,t ,sp


// pointer sur les elements de DOM

sp=document.querySelectorAll('span')
btn_start=document.querySelector('#start')
btn_stop=document.querySelector('#stop')
btn_reset=document.querySelector('#reset')
t;
h=0,min=0,s=0,ms=0

//  ecrie une fonction pour initualiser le compteur:

function update_chrono(){
    ms+=1
    if(ms==10){
        ms=0
        s+=1
    }
    if(s==60){
        s=0
        min+=1
    }
    if(min==60){
        min=0
        h+=1
    }

    sp[0].innerHTML= h +'h:'
    sp[1].innerHTML= min +'min:'
    sp[2].innerHTML= s +'s:'
    sp[3].innerHTML= ms +'ms'


}

// une fonction pour start le chrono:

function start(){
    t=setInterval(update_chrono,100)
    btn_start.disabled = true 
}

function stop(){
    clearInterval(t)
    btn_start.disabled = false
    
}

function reset(){
    h=0,min=0,s=0,ms=0
    sp[0].innerHTML='0h:'
    sp[1].innerHTML='0min:'
    sp[2].innerHTML='0s:'
    sp[3].innerHTML='0ms'
   


}
