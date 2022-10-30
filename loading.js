const loadingPage = document.querySelector('.loading_page')
const span = document.querySelector('span')
const body = document.querySelector('body')
for (let i = 0; i < 101; i++) {
    setTimeout(function loading() {
        span.innerHTML = `${i}`
        },i*i/1.7)
        body.style.overflow = 'hidden'
}
setTimeout(function loadingFin() {
    body.style.overflow = 'auto'
    loadingPage.style.display = 'none'
},6500)
