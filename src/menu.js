export function showSettingsMenu() {

    if (document.getElementsByClassName('soundSetting')[0].style.display === "none") {

        document.getElementsByClassName('soundSetting')[0].style.display = 'block';
    } else {

        document.getElementsByClassName('soundSetting')[0].style.display = 'none';

    }

}

