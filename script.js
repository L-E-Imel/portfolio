

function showDetail(e) {
    el = document.getElementById(e);
    el.firstChild.style.opacity = '0%';
    el.lastChild.style.opacity = '100%';
    el.style.backgroundColor = '#0D7BA6';
    el.style.color = '#F8F9Fd';
    el.className = 'show';
}

function hideDetail(e) {
    el = document.getElementById(e);
    el.firstChild.style.opacity = '100%';
    el.lastChild.style.opacity = '0%';
    el.style.backgroundColor = 'rgba(24, 143, 217, .10)';
    el.style.color = '#0D0402';
    el.className = 'hidden';

}
let hiddenElementOne = document.getElementById('one');
hiddenElementOne.addEventListener('click', function(e){
    e = document.getElementById('one');
    if (e.classList.contains('hidden')) {
        showDetail('one');
    } else if (e.classList.contains('show')) {
        hideDetail('one');
    }
})

let hiddenElementTwo = document.getElementById('two');
hiddenElementTwo.addEventListener('click', function(e){
    e = document.getElementById('two');
    if (e.classList.contains('hidden')) {
        showDetail('two');
    } else if (e.classList.contains('show')) {
        hideDetail('two');
    }
})

let hiddenElementThree = document.getElementById('three');
hiddenElementThree.addEventListener('click', function(e){
    e = document.getElementById('three');
    if (e.classList.contains('hidden')) {
        showDetail('three');
    } else if (e.classList.contains('show')) {
        hideDetail('three');
    }
})

let hiddenElementFour = document.getElementById('four');
hiddenElementFour.addEventListener('click', function(e){
    e = document.getElementById('four');
    if (e.classList.contains('hidden')) {
        showDetail('four');
    } else if (e.classList.contains('show')) {
        hideDetail('four');
    }
})

let hiddenElementFive = document.getElementById('five');
hiddenElementFive.addEventListener('click', function(e){
    e = document.getElementById('five');
    if (e.classList.contains('hidden')) {
        showDetail('five');
    } else if (e.classList.contains('show')) {
        hideDetail('five');
    }
})

let hiddenElementSix = document.getElementById('six');
hiddenElementSix.addEventListener('click', function(e){
    e = document.getElementById('six');
    if (e.classList.contains('hidden')) {
        showDetail('six');
    } else if (e.classList.contains('show')) {
        hideDetail('six');
    }
})