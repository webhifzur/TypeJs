let type = document.querySelector(".typejs")
let count = -1
let typearr = type.dataset.title.split("")

console.log(typearr)
// console.log(typearr.pop())

function typejs(){
    if(count < type.dataset.title.length){
        type.innerHTML += type.dataset.title.charAt(count)
        count++
        typearr = type.innerHTML.split("")
        console.log(typearr)
    }else{
        typearr.pop()
        type.innerHTML = typearr.join("")
        console.log(typearr.length)
        if(typearr.length == 0){
            count = -1
        }
    }
}

let stop = setInterval(function(){
    typejs()
},type.dataset.speed)