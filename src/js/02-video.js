import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = throttle(function (data) {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    }).catch(function(error) {
    });
}, 1000)
    

player.on('timeupdate', onPlay);


const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime) {
    player.setCurrentTime(savedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
}






