let shiftButton = document.querySelector('.to-work');

shiftButton.addEventListener('click', function(event) {
    let rightDistance = window.innerWidth -  shiftButton.getBoundingClientRect()['x'];
    console.log('It was click! and distance are: ', rightDistance);

    if (shiftButton.classList.contains('on')) {
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.my-works').classList.add('hidden');

        shiftButton.innerHTML = '<p>projects</p>';

        shiftButton.style.setProperty('transform', 'none');
        shiftButton.classList.remove('on');
    } else {
        document.querySelector('.content').classList.add('hidden');
        document.querySelector('.my-works').classList.remove('hidden');

        shiftButton.innerHTML = '<p>visit card</p>';
       
        shiftButton.style.setProperty('transform', `translateX(${rightDistance + 5}px)`); //removed rotate(180deg)
        shiftButton.classList.add('on');
    }
})