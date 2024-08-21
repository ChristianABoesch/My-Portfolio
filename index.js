const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Open SoundCloud link
function openSoundCloud() {
    window.open("https://soundcloud.com/fantuschia/fantuschia-official-extended-soundtrack", "_blank");
}

// Open first YouTube link
function openYouTube1() {
    window.open("https://youtu.be/EWs4abFyukg", "_blank");
}

// Open second YouTube link
function openYouTube2() {
    window.open("https://youtu.be/MzR7nyjx0J0", "_blank");
}
