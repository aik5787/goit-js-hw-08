import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = throttle(updateTime, 1000);

    function updateTime(data) {
        const seconds = data.seconds;
            localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    }
    

player.on('timeupdate', onPlay);


const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(savedTime || 0);

    







