let shiftButton = document.querySelector('.to-work');
let buttonText = document.querySelector('.to-work > p');
let isProject = true;

function textChanger() {
    buttonText.classList.add('hidden');
    setTimeout(() => {
        buttonText.textContent = isProject ? 'назад' : 'проекты';
        isProject = !isProject;

        buttonText.classList.remove('hidden');
    }, 650);
}

shiftButton.addEventListener('click', function(event) {
    let rightDistance = window.innerWidth -  shiftButton.getBoundingClientRect()['right'];

    if (shiftButton.classList.contains('on')) {
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.to-work').classList.remove('scaled');
        document.querySelector('.my-works').classList.add('hidden');

        textChanger();

        shiftButton.style.setProperty('transform', 'none');
        shiftButton.classList.remove('on');
    } else {
        document.querySelector('.content').classList.add('hidden');
        document.querySelector('.to-work').classList.add('scaled');
        document.querySelector('.my-works').classList.remove('hidden');

        textChanger();
      
        shiftButton.style.setProperty('transform', `translateX(${rightDistance + 105}px)`); //removed rotate(180deg)
        shiftButton.classList.add('on');
    }
})