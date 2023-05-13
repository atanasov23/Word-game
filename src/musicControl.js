const music = document.getElementsByClassName('music')[0];
const sounds = document.getElementsByClassName('sounds')[0];

export function createMusic() {

    const music = document.createElement("audio");
    music.src = "mp3/audio.mp3";
    music.loop = true;

    return music;
}

export function createSounds() {

    const sounds = document.createElement("audio");
    sounds.src = "mp3/clickSound.wav";

    return sounds;

}

export function createWinSound() {

    const winSound = document.createElement("audio");
    winSound.src = "mp3/win.wav";

    return winSound;

}

export function createErrorSound() {

    const errorSound = document.createElement("audio");
    errorSound.src = "mp3/error.mp3";

    return errorSound;

}

export function musicControl() {

    if (localStorage.getItem('melody') === 'disable') {

        audio.play()

        audio.loop = true

        melody.style.backgroundImage = "url('image/music_off.png')";

        localStorage.setItem('melody', 'enable');

    } else {

        audio.pause();

        audio.currentTime = 0;

        melody.style.backgroundImage = "url('image/music_on.png')";

        localStorage.setItem('melody', 'disable');

    }

}

export function soundsControl() {

    if (localStorage.getItem('sounds') === 'disable') {

        sounds.style.backgroundImage = "url('image/melody_off.png')";

        localStorage.setItem('sounds', 'enable');

        sounds = true;

    } else {

        clickSound.pause()

        clickSound.currentTime = 0;

        sounds.style.backgroundImage = "url('image/melody_on.png')";

        localStorage.setItem('sounds', 'disable');

        sound = false

    }

}
