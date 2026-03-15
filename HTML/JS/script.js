function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

function status(v,min,max){

    if(v>=min && v<=max) return "normal"

    if((v>=min-5 && v<min) || (v>max && v<=max+5)) return "warning"

    return "danger"
}

function set(id,value,unit,min,max){

let val=document.getElementById(id)
let st=document.getElementById(id+"Status")

val.innerText=value+" "+unit

let s=status(value,min,max)

st.className=s

    if(s=="normal") st.innerText="Норма"
    if(s=="warning") st.innerText="Попередження"
    if(s=="danger") st.innerText="Критично"
}

function updateData(){

    set("temp",rand(60,95),"°C",70,85)
    set("pressure",rand(2,6),"атм",3,5)
    set("gas",rand(0,150),"м³/год",50,120)
    set("smoke",rand(120,250),"°C",150,220)
    set("power",rand(0,2000),"кВт",140,200)
}

let auto=true

let timer=setInterval(updateData,4000)

function toggleAuto(){

auto=!auto

let btn=document.getElementById("autoBtn")

if(auto){
    timer=setInterval(updateData,4000)
    btn.innerText="Авто: Вкл"
}
else{
    clearInterval(timer)
    btn.innerText="Авто: Викл"
}
}

updateData()