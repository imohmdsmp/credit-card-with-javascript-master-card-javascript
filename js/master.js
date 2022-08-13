let _navItem = document.getElementsByClassName('nav-item')
let _mainCard = document.getElementsByClassName('credit-cart')[0]


function _move(self) {
    self.style.cssText = "transform:translate(-125%, -38%) rotate3d(1,136,0,-20deg) scale(1.5)"
    document.getElementsByClassName('cube')[0].style.cssText = 'top: -11%;transform: rotate3d(4, -7, -8, 200deg);'
    document.getElementsByClassName('cube2')[0].style.cssText = 'top: -11%;transform: rotate3d(4, -7, 8, 180deg);'
    document.getElementsByClassName('cube3')[0].style.cssText = 'top: -11%;transform: rotate3d(5, 0, 10, 90deg);'
    document.getElementsByClassName('form')[0].style.cssText = 'right:80px'
    _navItem[0].style.cssText = 'transform:translateX(-200px);transition:1s;'
    _navItem[1].style.cssText = 'transform:translateX(-200px);transition:1.5s;'
    _navItem[2].style.cssText = 'transform:translateX(-200px);transition:2s;'
    _navItem[3].style.cssText = 'transform:translateX(-200px);transition:2.5s;'
    document.getElementsByTagName('h1')[0].style.cssText = 'transform:translateX(-200px);transition:1.5s;'
    document.getElementById('logo').style.cssText = 'transform:translateX(-200px);transition:1s;'
    document.getElementsByClassName('slogan')[0].style.cssText = 'bottom:-200px'
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    _mainCard.style.cssText = "translate(-50%, -50%) rotate(-15deg)"
    document.getElementsByClassName('cube')[0].style.cssText = 'top: 40%;transform: rotate3d(4, -7, -8, 38deg)'
    document.getElementsByClassName('cube2')[0].style.cssText = 'top: 59%;transform: rotate3d(4, -7, -8, 68deg);'
    document.getElementsByClassName('cube3')[0].style.cssText = 'top: 19%;rotate3d(4, -7, -8, 68deg);'
    document.getElementsByClassName('form')[0].style.cssText = 'right:-80%'
    _navItem[0].style.cssText = 'transform:translateX(0px);transition:1s;'
    _navItem[1].style.cssText = 'transform:translateX(0px);transition:1.5s;'
    _navItem[2].style.cssText = 'transform:translateX(0px);transition:2s;'
    _navItem[3].style.cssText = 'transform:translateX(0px);transition:2.5s;'
    document.getElementsByTagName('h1')[0].style.cssText = 'transform:translateX(0px);transition:1.5s;'
    document.getElementById('logo').style.cssText = 'transform:translateX(0px);transition:1s;'
    document.getElementsByClassName('slogan')[0].style.cssText = 'bottom:20px'
    setTimeout(() => {
        document.getElementsByClassName('done')[0].style.cssText = 'opacity:1;visibility:visible'
        setTimeout(() => {
            document.getElementsByTagName('circle')[0].setAttribute("stroke-dasharray", '0,0')
        }, 600);
    }, 1000);

    setTimeout(() => {
        document.getElementsByClassName('done')[0].style.cssText = 'opacity:0;visibility:hidden'
        document.getElementsByTagName('circle')[0].setAttribute("stroke-dasharray", '30,30')
    }, 4000);


})



function _transformNum(self) {
    let inputValue = self.value
    let _p = document.querySelectorAll('.numbers p')
    if (inputValue != '') {
        if (inputValue.length <= 4) {
            _p[0].innerText = inputValue
        } else if (inputValue.length >= 4 && inputValue.length <= 8) {
            _p[1].innerText = inputValue.substring(4, 8)
        } else if (inputValue.length >= 8 && inputValue.length <= 12) {
            _p[2].innerText = inputValue.substring(8, 12)
        } else if (inputValue.length >= 12) {
            _p[3].innerText = inputValue.substring(12, 16)
        }
    } else {
        for (i = 0; i < _p.length; i++) {
            _p[i].innerText = ''
        }
    }
}


document.getElementById('cardNumber').addEventListener('focus', (event) => {
    event.target.previousElementSibling.style.top = "-20px"
})

document.getElementById('name').addEventListener('focus', (event) => {
    event.target.previousElementSibling.style.top = "-20px"
})


document.getElementById('check').addEventListener('click', () => {
    if (document.getElementById('cardNumber').value != '' && document.getElementById('name').value != '') {
        document.getElementsByClassName('submit')[0].removeAttribute('disabled')
        document.getElementsByClassName('submit')[0].style.cssText = 'background-image:linear-gradient(45deg,#40348e,#a135a5)'
    }
})

function _name(self) {
    let inputName = self.value
    document.getElementById('namein').innerText = inputName
}