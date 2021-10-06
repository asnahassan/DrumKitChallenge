// Play music by keyboard
window.addEventListener('keydown', (e) => {

    const song = document.querySelector(`audio[id="${e.keyCode}"]`)
    const name = document.querySelector(`.name[id="${e.keyCode}"]`);
    if (!song) return;
    song.currentTime = 0;
    song.play();
    name.classList.add('animate')
            setTimeout( () => name.classList.remove('animate'), 200);
});




// Play music by mouse click
const divs = document.querySelectorAll('.container div');

divs.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse(e)
{   
    const keyCode = this.getAttribute('id');
	const song = document.querySelector(`audio[id="${keyCode}"]`);
	song.currentTime = 0;
	song.play();
	const name = document.querySelector(`.name[id="${keyCode}"]`);
    name.classList.add('animate');
        setTimeout( () => name.classList.remove('animate'), 200);  
}
