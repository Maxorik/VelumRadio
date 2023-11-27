const mainContainer = document.querySelector('.main-container');
const audio = document.querySelectorAll('.audio-player-control');
const playerControls = Array.apply(null, audio);
const radioStationLabels = document.querySelectorAll('.radio-station-label');
const mobileControls = document.querySelectorAll('.mobile-control');


/** Работа с плеером youtube */
// lofi-player-yt
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('lofi-player-yt', {
        height: '20',
        width: '20',
        videoId: 'jfKfPfyJRdk'
    });
}

document.getElementById('start-btn').addEventListener('click', () => player.playVideo(), false)
document.getElementById('stop-btn').addEventListener('click', () => player.stopVideo(), false)
