const get=document.querySelector("#main")
get.remove()
const newHeader= document.createElement('h1') 
newHeader.setAttribute ('id', 'victory')
newHeader.textContent= 'klofnod is the champion'
document.body.append(newHeader)
