const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('Wueno, tu te lo pierdes :(')
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*500);
    const randomY = parseInt(Math.random()*500);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})