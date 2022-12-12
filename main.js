const mainContainer = document.querySelector('.main-container');
const audio = document.querySelectorAll('.audio-player-control');
const playerControls = Array.apply(null, audio);
const radioStationLabels = document.querySelectorAll('.radio-station-label');

// одновременно может играть только один плеер
playerControls.forEach(control => {
    control.addEventListener('play', e => {
        const playerId = e.target.id;
        const radioType = playerId.split('-')[2];
        mainContainer.style.backgroundImage = `url(img/${radioType}_back.png)`;
        playerControls.forEach(player => {
            player.id !== playerId && player.pause()
        })
    })
})

// лейбл плеера получает возможности play\pause
radioStationLabels.forEach(label => {
    label.addEventListener('click', e => {
        let playerController = e.target.nextElementSibling;
        playerController.paused ? playerController.play() : playerController.pause();
    })
})