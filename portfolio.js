//loading page
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

//burger show & hidden

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
    if(this.window.innerWidth >1100){
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
}else{
    if (window.scrollY > backgroundText[0].offsetTop * 4 && window.scrollY < backgroundText[0].offsetTop * 31) {
        backgroundText[0].style.position = 'fixed'
    } else { backgroundText[0].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 32 && window.scrollY < backgroundText[0].offsetTop * 83) {
        backgroundText[1].style.position = 'fixed'
    } else { backgroundText[1].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 84 && window.scrollY < backgroundText[0].offsetTop * 107) {
        backgroundText[2].style.position = 'fixed'
    } else { backgroundText[2].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 108 && window.scrollY < backgroundText[0].offsetTop * 117) {
        backgroundText[3].style.position = 'fixed'
    } else { backgroundText[3].style.position = 'absolute' }

    if (window.scrollY > backgroundText[0].offsetTop * 118 && window.scrollY < backgroundText[0].offsetTop * 123) {
        backgroundText[4].style.position = 'fixed'
    } else { backgroundText[4].style.position = 'absolute' }
}}
)

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
    let moveX = e.layerX - this.width/2
    let moveY = e.layerY - this.height/2
    this.style.transform = `scale(1.2,1.2) translate(${moveX/5}px,${moveY/5}px) rotateX(${moveX/10}deg) rotateY(${moveY/10}deg)`
}
imgs.forEach(img => {
    img.addEventListener('mousemove', move)
    img.addEventListener('mouseout', function () {
        img.style.transform = ""
    })

});
//light_Box
const lightBox = document.querySelector('.light_box')
const BtnClose = document.querySelector('.light_box_closeBtn')
function closeLightBox(){
    lightBox.style.display = 'none'
}

BtnClose.addEventListener('click',closeLightBox)

const commercialImg = document.querySelectorAll('.commercial .show')

commercialImg.forEach(img => {
    img.addEventListener('click',function() {
        console.log(lightBox.querySelector('.light_box_card >img').src);
        console.log(this.src);
        lightBox.style.display ='block'
        lightBox.querySelectorAll('.light_box_card >img')[0].src = `./portfolio_commercial/HQ_commercial/commercial${this.dataset.num}.jpg`
        lightBox.querySelectorAll('.light_box_card >img')[1].src = this.src
    })
});

const portraitImg = document.querySelectorAll('.portrait .show')

portraitImg.forEach(img => {
    img.addEventListener('click',function() {
        console.log(lightBox.querySelector('.light_box_card >img').src);
        console.log(this.src);
        lightBox.style.display ='block'
        lightBox.querySelectorAll('.light_box_card >img')[0].src = `./portfolio_portrait/HQ_portrait/portrait${this.dataset.num}.jpg`
        lightBox.querySelectorAll('.light_box_card >img')[1].src = this.src
    })
});

const selectionImg = document.querySelectorAll('.selection .show')

selectionImg.forEach(img => {
    img.addEventListener('click',function() {
        console.log(lightBox.querySelector('.light_box_card >img').src);
        console.log(this.src);
        lightBox.style.display ='block'
        lightBox.querySelectorAll('.light_box_card >img')[0].src = `./portfolio_selection/HQ_selection/selection${this.dataset.num}.jpg`
        lightBox.querySelectorAll('.light_box_card >img')[1].src = this.src
    })
});

const recordImg = document.querySelectorAll('.record .show')

recordImg.forEach(img => {
    img.addEventListener('click',function() {
        console.log(lightBox.querySelector('.light_box_card >img').src);
        console.log(this.src);
        lightBox.style.display ='block'
        lightBox.querySelectorAll('.light_box_card >img')[0].src = `./portfolio_record/HQ_record/record${this.dataset.num}.jpg`
        lightBox.querySelectorAll('.light_box_card >img')[1].src = this.src
    })
});