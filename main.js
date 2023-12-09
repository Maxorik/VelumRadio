const audio = document.querySelectorAll('.audio-player-control');
const playerControls = Array.apply(null, audio);
const radioStationLabels = document.querySelectorAll('.radio-station-label');
const mobileControls = document.querySelectorAll('.mobile-control');
const clock = document.getElementById('clock');
const weather = document.getElementById('weather');

const api = {
    url: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tomsk?unitGroup=metric&key=',
    key: 'G5KAYAXC9K8M495ZGGRSJMXT3'
}

/** Живой таймер-часы */
const setTime = () => {
    const today = new Date();
    clock.firstElementChild.innerHTML = ('0'+today.getHours()).slice(-2);
    clock.lastElementChild.innerHTML = ('0'+today.getMinutes()).slice(-2);
    document.querySelector('.tik').classList.toggle('tak');
    setTimeout(setTime, 1000);
}

/** Уменьшаем стандартную громкость */
audio.forEach(player => player.volume = 0.5)

/** Тянем погоду */
const getWeather = () => {
    const url = api.url + api.key + '&contentType=json';
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            weather.innerHTML = data.days[0].temp + '°';
        });
}

/** Одновременно может играть только один плеер */
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

/** Лейбл плеера получает возможности play\pause */
radioStationLabels.forEach(label => {
    label.addEventListener('click', e => {
        let playerController = e.target.parentElement.lastElementChild;
        playerController.paused ? playerController.play() : playerController.pause();
    })
})

/** Кнопки управления плеером для мобильнйо версии */
mobileControls.forEach(control => {
    control.addEventListener('click', e => {
        const button = e.currentTarget;
        const playerAudioController = button.nextElementSibling;
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


/** Старт */
setTime();
getWeather();