var x = document.getElementById("second")
var y = document.getElementById("minut")
var z = document.getElementById("hour")
var s = 1
var m = 1
var h = 1
function second(){
    x.innerHTML = s
    if(s<60){
        s++
    }
    if(s==60){
        s=1
        minut()
    }
}

function minut(){
    y.innerHTML = m
    if(m<60){
        m++
    }
    if(m==60){
        m=1
        hour()
    }
}

function hour(){
    z.innerHTML = h
    if(h<24){
        h++
    }
    if(h==24){
        h=1
    }
}

function start(){
    time = setInterval(second, 1000)
    str = document.getElementById('btn-start')

    $(document).ready(function(){
        console.log('Hide start button')
        $('#btn-start').hide()
    })
}

function stop(){
    clearTimeout(time)
    $(document).ready(function(){
        console.log('Show start button')
        $('#btn-start').show()
    })
}
