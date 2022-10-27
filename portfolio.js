//burger show & hidden

const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const burger = document.querySelector('.burger')
function toggleburger(e) {
    nav.classList.toggle('open')
    nav.classList.contains('open') ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
}

function navshow(e) {
    window.scrollY > header.offsetHeight * 0.9 ? burger.classList.add('active') : burger.classList.remove('active')
}

window.addEventListener('scroll', navshow)

//backgroundtext follow with scrollY
const backgroundText = document.querySelectorAll('h2')
window.addEventListener('scroll', function () {
    if (window.scrollY > backgroundText[0].offsetTop * 4 && window.scrollY < backgroundText[0].offsetTop * 23) {
        backgroundText[0].style.position = 'fixed'
    } else { backgroundText[0].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 24 && window.scrollY < backgroundText[0].offsetTop * 53) {
        backgroundText[1].style.position = 'fixed'
    } else { backgroundText[1].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 54 && window.scrollY < backgroundText[0].offsetTop * 69) {
        backgroundText[2].style.position = 'fixed'
    } else { backgroundText[2].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 70 && window.scrollY < backgroundText[0].offsetTop * 75) {
        backgroundText[3].style.position = 'fixed'
    } else { backgroundText[3].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 76 && window.scrollY < backgroundText[0].offsetTop * 81) {
        backgroundText[4].style.position = 'fixed'
    } else { backgroundText[4].style.position = 'absolute' }
})

//hover video and play
const videos = document.querySelectorAll('video')
videos.forEach(video => {
    video.addEventListener('mouseenter', function () {
        this.play()
    })
});

//picture effect
const imgs = document.querySelectorAll('.show')
function move(e) {
    rotateX = 20 * (e.layerX / this.width)
    rotateY = 20 * (e.layerY / this.height)
    this.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg`
    // console.log(img.style.transform)
}
imgs.forEach(img => {
    img.addEventListener('mousemove', move)
    img.addEventListener('mouseout', function () {
        img.style.transform = ""
    })

});
