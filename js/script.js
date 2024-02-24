'use strict'

const burgerIcn=document.querySelector('.burger')
const burgerSection=document.querySelector('.sec-burger')

burgerIcn.addEventListener('click',()=>{
    burgerSection.classList.toggle('show-burger')
})