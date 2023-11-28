const audio = document.querySelectorAll('.audio-player-control');
const playerControls = Array.apply(null, audio);
const radioStationLabels = document.querySelectorAll('.radio-station-label');
const mobileControls = document.querySelectorAll('.mobile-control');

// одновременно может играть только один плеер
playerControls.forEach(control => {
    control.addEventListener('play', e => {
        const playerId = e.target.id;
        const radioType = playerId.split('-')[2];
        document.title = `${radioType} radio`;
        playerControls.forEach(player => {
            player.id !== playerId && player.pause()
        })
    })
})

// лейбл плеера получает возможности play\pause
radioStationLabels.forEach(label => {
    label.addEventListener('click', e => {
        let playerController = e.target.parentElement.lastElementChild;
        playerController.paused ? playerController.play() : playerController.pause();
    })
})

// кнопки управления плеером для мобильнйо версии TODO вынести в js для смартфонов
mobileControls.forEach(control => {
    control.addEventListener('click', e => {
        const button = e.currentTarget;
        const playerAudioController = button.nextElementSibling;

        console.log(button)

        playerAudioController.paused ? playerAudioController.play() : playerAudioController.pause();

        // меняем у текущего
        button.classList.toggle('pause');
        button.classList.toggle('play');

        mobileControls.forEach(controller => {
            if(controller.nextElementSibling.id !== playerAudioController.id) {
                controller.classList.add('play');
                controller.classList.remove('pause');
            }
        })
    })
})