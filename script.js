const btn = document.querySelector('.btn')
const img = document.querySelector('img')

const url = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', function(){
    fetch(url)
    .then(res=> res.json())
    .then(res =>{
        img.setAttribute('src',res.message)
        img.style.width='300px'
    })
.catch(err => console.log(err))
})
