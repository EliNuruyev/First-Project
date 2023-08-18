var btn = document.querySelector('button')
var colorCode = document.querySelector('.color-code')
var color = document.querySelector('.color')
var hexString='0123456789abcdef'    
var body=document.querySelector('body')

btn.onclick=function(){

    var hexCode='#'
 
    for(let i=0;i<6;i++){

        var index=Math.floor(Math.random()*hexString.length)
        hexCode +=hexString[index]

    }
    colorCode.innerText=hexCode
    color.style.backgroundColor=hexCode
    body.style.backgroundColor=hexCode

}