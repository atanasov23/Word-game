import { setData, getData } from "./data.js";
import { createMusic, createSounds } from "./musicControl.js";
import { shuffleWord, deleteWord, wordHelp, startGame } from "./gameControl.js";
import { showSettingsMenu } from "./menu.js";
import { html, render } from 'https://unpkg.com/lit-html?module';

const body = document.querySelector('body');
//const data = getData();

const mainRenderTemplate = html`<div id='title'>🅶🆄🅴🆂🆂 🆃🅷🅴 🆆🅾🆁🅳</div>

<button class ='startBtn' @click=${startGame}>
    <img src="image/playBtnImage.png">
</button>

<div id="main">

    <div class="coin">

        <img  src="image/coin.png">
        <hr>
        <span class='score'>0</span>
    
    </div>

    <div class='soundSetting'>

        <button class='music' onclick=melodyControl()></button>
        <button class='sounds' onclick=stopSounds()></button>

    </div>

    <div id='wordsBar'></div>

    <div class="buttonsContainer"></div>

    <div class='wordsControlButtonsContainer'>

        <button class='deleteBtn' @click=${deleteWord}>X</button>
        <button id="shuffleBtn" @click=${shuffleWord}></button>

    </div>

    <button class="functionBtn helpBtn" @click=${wordHelp}></button>

    <button class='functionBtn settings' @click=${showSettingsMenu}></button>

    <div class='levelContainer'></div>

</main>`

render(mainRenderTemplate, body);
