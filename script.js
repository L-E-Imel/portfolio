function showDetailOne() {
    document.getElementById('one').firstChild.style.opacity = '0%';
    document.getElementById('one').lastChild.style.opacity = '100%';
}
let slideElementOne = document.getElementById('one');
slideElementOne.addEventListener('pointerdown', showDetailOne, false);
function hideDetailOne() {
    document.getElementById('one').firstChild.style.opacity = '100%';
    document.getElementById('one').lastChild.style.opacity = '0%';
}
slideElementOne.addEventListener('pointerup', hideDetailOne, false);

function showDetailTwo() {
    document.getElementById('two').firstChild.style.opacity = '0%';
    document.getElementById('two').lastChild.style.opacity = '100%';
}
let slideElementTwo = document.getElementById('two');
slideElementTwo.addEventListener('pointerdown', showDetailTwo, false);
function hideDetailTwo() {
    document.getElementById('two').firstChild.style.opacity = '100%';
    document.getElementById('two').lastChild.style.opacity = '0%';
}
slideElementTwo.addEventListener('pointerup', hideDetailTwo, false);

function showDetailThree() {
    document.getElementById('three').firstChild.style.opacity = '0%';
    document.getElementById('three').lastChild.style.opacity = '100%';
}
let slideElementThree = document.getElementById('three');
slideElementThree.addEventListener('pointerdown', showDetailThree, false);
function hideDetailThree() {
    document.getElementById('three').firstChild.style.opacity = '100%';
    document.getElementById('three').lastChild.style.opacity = '0%';
}
slideElementThree.addEventListener('pointerup', hideDetailThree, false);

function showDetailFour() {
    document.getElementById('four').firstChild.style.opacity = '0%';
    document.getElementById('four').lastChild.style.opacity = '100%';
}
let slideElementFour = document.getElementById('four');
slideElementFour.addEventListener('pointerdown', showDetailFour, false);
function hideDetailFour() {
    document.getElementById('four').firstChild.style.opacity = '100%';
    document.getElementById('four').lastChild.style.opacity = '0%';
}
slideElementFour.addEventListener('pointerup', hideDetailFour, false);

function showDetailFive() {
    document.getElementById('five').firstChild.style.opacity = '0%';
    document.getElementById('five').lastChild.style.opacity = '100%';
}
let slideElementFive = document.getElementById('five');
slideElementFive.addEventListener('pointerdown', showDetailFive, false);
function hideDetailFive() {
    document.getElementById('five').firstChild.style.opacity = '100%';
    document.getElementById('five').lastChild.style.opacity = '0%';
}
slideElementFive.addEventListener('pointerup', hideDetailFive, false);

function showDetailSix() {
    document.getElementById('six').firstChild.style.opacity = '0%';
    document.getElementById('six').lastChild.style.opacity = '100%';
}
let slideElementSix = document.getElementById('six');
slideElementSix.addEventListener('pointerdown', showDetailSix, false);
function hideDetailSix() {
    document.getElementById('six').firstChild.style.opacity = '100%';
    document.getElementById('six').lastChild.style.opacity = '0%';
}
slideElementSix.addEventListener('pointerup', hideDetailSix, false);