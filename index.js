"use strict"
//variable int.
const para = document.querySelectorAll('.para',)
const para1 = document.querySelectorAll('.para1')
const para2 = document.querySelectorAll('.para2')
//addEvent
document.querySelector('.toggle-btn').addEventListener('click',function(){
document.querySelector('.toggle-btn').classList.toggle('active')
const showYearly =document.querySelectorAll('.anually')
const hideMonth = document.querySelectorAll('.monthly')
console.log(hideMonth)
console.log(showYearly)
for(let x = 0; x < 3; x++){
  showYearly[x].classList.toggle('noAnually')
  hideMonth[x].classList.toggle('noAnually')



}

})
// div1 Basic
document.querySelector('.div1').addEventListener('mouseover', function(){

document.querySelector('.div1').classList.add('divHighLight')
document.querySelector('.button1').classList.add('buttonBackgroundColor')

for(let x =0; x < 4; x++){
  para[x].classList.add('features')

}

})
document.querySelector('.div1').addEventListener('mouseout', function(){
console.log ('mouse')
document.querySelector('.div1').classList.remove('divHighLight')
document.querySelector('.button1').classList.remove('buttonBackgroundColor')
for(let x =0; x < 4; x++){
para[x].classList.remove('features')
}
})

// div2 Professional
document.querySelector('.div2').addEventListener('mouseover', function(){

document.querySelector('.div2').classList.add('divHighLight')
document.querySelector('.button2').classList.add('buttonBackgroundColor')
for(let x =0; x < 4; x++){
para1[x].classList.add('features')
}
})
document.querySelector('.div2').addEventListener('mouseout', function(){
console.log ('mouse')
document.querySelector('.div2').classList.remove('divHighLight')
document.querySelector('.button2').classList.remove('buttonBackgroundColor')
for(let x =0; x < 4; x++){
para1[x].classList.remove('features')
}
})

// div3 Master
document.querySelector('.div3').addEventListener('mouseover', function(){

document.querySelector('.div3').classList.add('divHighLight')
document.querySelector('.button3').classList.add('buttonBackgroundColor')
for(let x =0; x < 4; x++){
para2[x].classList.add('features')
}
})
document.querySelector('.div3').addEventListener('mouseout', function(){
console.log ('mouse')
document.querySelector('.div3').classList.remove('divHighLight')
document.querySelector('.button3').classList.remove('buttonBackgroundColor')
for(let x =0; x < 4; x++){
para2[x].classList.remove('features')
}
})
