// next და prev არის ცვლადები, რომლებიც ინახავს მითითებებს ელემენტებზე კლასებით. შემდეგი და წინა
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
// ირჩევს ყველა ელემენტს კლასით .item და ინახავს მათ items ცვლადში.
    let items = document.querySelectorAll('.item')

// გადააადგილებს პირველ ელემენტს (items[0]) სიის ბოლოში .slide ელემენტის შიგნით
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')

// გადააადგილებს ბოლო ელემენტს (items[items.length - 1]) სიის დასაწყისში .slide ელემენტის შიგნით, ეფექტურად ატრიალებს ელემენტებს უკან.
    document.querySelector('.slide').prepend(items[items.length - 1]) // ზომა = 6
})

