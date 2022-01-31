/* let flipElement = document.querySelectorAll('flip');
function showDetail() {
    let diamondImg = document.querySelectorAll('flip img');
    let skillName = document.querySelectorAll('flip h3');
    let skillDescr = document.querySelectorAll('flip p');
    diamondImg.display = 'none';
    skillName.display = 'none';
    skillDescr.display = 'display';
    flipElement.style.backgroundColor = 'green';
}
flipElement.onclick = showDetail(); */

function getTarget(evnt) {
    return evnt.target;
};
function showDetail(evnt) {
    target = getTarget(evnt);
    if (target === document.querySelector('ul.h3') || target === document.querySelector('ul.img')) {
        target = target.parentNode;
    };
    target.querySelector('h3').style.display = 'none';
    target.querySelector('img').style.display = 'none';
    target.querySelector('p').style.display = 'contents'; 
};

function removeDetail(evnt) {
    target = getTarget(evnt);
    if (target === document.querySelector('ul.h3') || target === document.querySelector('ul.img')) {
        target = target.parentNode;
        console.log(target);
    };
    target.querySelector('h3').style.display = 'block';
    target.querySelector('img').style.display = 'inline';
    target.querySelector('p').style.display = 'none';
}

let flipElement = document.getElementById('flip');
flipElement.addEventListener('pointerdown', function(evnt) {
    showDetail(evnt);
}, false);

//evnt.preventDefault();

flipElement.addEventListener('pointerup', function(evnt) {
    removeDetail(evnt);
}, false);