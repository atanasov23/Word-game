import { getData, setData } from "./data.js";
import { createWinSound, createErrorSound } from "./musicControl.js";
import { html, render } from 'https://unpkg.com/lit-html?module';


const request = await fetch('words.json');
const words = await request.json();
const userData = getData();

if (!getData()) {

    setData(
        {
            level: 1,
            coins: 500,
            index: 0,
            writtenWord: ''
        }
    );

}

let level = userData.level;
let coins = userData.coins;
//let index = Number(userData.index);
//let writtenWord = userData.writtenWord;


export function startGame() {

    let writtenWord = 'ОН';

    let index = 2;

    //localStorage.clear()

    if (coins >= 20) {

        if (window.innerWidth > 600) {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/help33.jpg')";

        } else {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/mobileHelpImage.jpg')";

        }

        document.getElementsByClassName('helpBtn')[0].disabled = false;

    } else {

        if (window.innerWidth > 600) {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/grayLamp.jpg')";

        } else {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/grayLampMobile.jpg')";

        }

        document.getElementsByClassName('helpBtn')[0].disabled = true;

    }

    document.getElementsByClassName('levelContainer')[0].textContent = `ʟᴇᴠᴇʟ: ${level}`;
    document.getElementsByClassName('score')[0].textContent = coins;

    function hideMainView() {

        document.getElementById('main').style.display = "block";

        document.getElementById('title').style.display = "none";

        document.getElementsByClassName('startBtn')[0].style.display = "none";
    }

    function wordsRender() {

        const wordsBar = document.getElementById('wordsBar');
        const wordsTemplate = words[level].split('').map((a, b) => html`<textarea readonly class='words' id=${b}></textarea>`);

        render(wordsTemplate, wordsBar);
    }

    function buttonsRender() {

        const buttonsContainer = document.getElementsByClassName('buttonsContainer')[0];
        const color = ["#3498DB", "#2ECC71", "#F7DC6F", "#BB8FCE", "#D35400", "#D35400"];
        const buttonsTemplate = words[level].split('').sort((a, b) => 0.5 - Math.random()).map((a, b) => html`<button @click=${wordClick} class='wordContainer' id='_${b}'>${a}</button>`);

        render(buttonsTemplate, buttonsContainer);

        [...document.getElementsByClassName('wordContainer')].map((a, b) => a.style.background = `orange`);

    }



    function wordClick(e) {

        const text = e.target.textContent;

        document.getElementById(index).textContent = text;

        writtenWord += text;

        index++;

        if (writtenWord === words[level]) {

            if (level % 5 === 0) {

                coins += 20;

            }

            level++;

            writtenWord = '';

            index = 0;

            setData({ coins, level, index, writtenWord });

            createWinSound().play();
            setWordContainer(true);

            setTimeout(() => startGame(), 1000);

        } else if (index === words[level].length) {

            createErrorSound().play();

            setWordContainer(false);

            setTimeout(() => startGame(), 1000);

            writtenWord = userData.writtenWord;

            index = Number(userData.index);

        }

    }

    hideMainView();
    wordsRender();
    buttonsRender();

    if (window.innerWidth < 900) {


        if (words[level].length === 3) {

            document.getElementById('_0').style.position = 'absolute';
            document.getElementById('_0').style.left = '10%';
            document.getElementById('_0').style.top = '50%';

            document.getElementById('_1').style.position = 'absolute';
            document.getElementById('_1').style.left = '70%';
            document.getElementById('_1').style.top = '50%';

            document.getElementById('_2').style.position = 'absolute';
            document.getElementById('_2').style.left = '40%';
            document.getElementById('_2').style.top = '10%';

        } else if (words[level].length === 4) {

            document.getElementById('_0').style.position = 'absolute';
            document.getElementById('_0').style.left = '10%';
            document.getElementById('_0').style.top = '40%';

            document.getElementById('_1').style.position = 'absolute';
            document.getElementById('_1').style.left = '70%';
            document.getElementById('_1').style.top = '40%';

            document.getElementById('_2').style.position = 'absolute';
            document.getElementById('_2').style.left = '40%';
            document.getElementById('_2').style.top = '10%';

            document.getElementById('_3').style.position = 'absolute';
            document.getElementById('_3').style.left = '40%';
            document.getElementById('_3').style.top = '70%';
        } else if (words[level].length === 5) {

            document.getElementById('_0').style.position = 'absolute';
            document.getElementById('_0').style.left = '6%';
            document.getElementById('_0').style.top = '35%';

            document.getElementById('_1').style.position = 'absolute';
            document.getElementById('_1').style.left = '70%';
            document.getElementById('_1').style.top = '35%';

            document.getElementById('_2').style.position = 'absolute';
            document.getElementById('_2').style.left = '38%';
            document.getElementById('_2').style.top = '8%';

            document.getElementById('_3').style.position = 'absolute';
            document.getElementById('_3').style.left = '20%';
            document.getElementById('_3').style.top = '70%';

            document.getElementById('_4').style.position = 'absolute';
            document.getElementById('_4').style.left = '56%';
            document.getElementById('_4').style.top = '69%';
        } else if (words[level].length === 6) {

            document.getElementById('_0').style.position = 'absolute';
            document.getElementById('_0').style.left = '10%';
            document.getElementById('_0').style.top = '27%';

            document.getElementById('_1').style.position = 'absolute';
            document.getElementById('_1').style.left = '69%';
            document.getElementById('_1').style.top = '27%';

            document.getElementById('_2').style.position = 'absolute';
            document.getElementById('_2').style.left = '40%';
            document.getElementById('_2').style.top = '10%';

            document.getElementById('_3').style.position = 'absolute';
            document.getElementById('_3').style.left = '12%';
            document.getElementById('_3').style.top = '60%';

            document.getElementById('_4').style.position = 'absolute';
            document.getElementById('_4').style.left = '65%';
            document.getElementById('_4').style.top = '60%';

            document.getElementById('_5').style.position = 'absolute';
            document.getElementById('_5').style.left = '40%';
            document.getElementById('_5').style.top = '70%';

        }

    }

    function renderHelpLetters() {

        for (let i = 0; i < index; i++) {

            document.getElementById(i).textContent = words[level][i];

        }
    }

    renderHelpLetters();

}

function setWordContainer(boolean) {

    if (boolean) {

        [...document.getElementsByClassName('words')].map(a => a.style.backgroundColor = '#00e673');

        setTimeout(() => [...document.getElementsByClassName('words')].map(a => a.textContent = ''), 1000);


        setTimeout(() => [...document.getElementsByClassName('words')].map(a => a.style.backgroundColor = ''), 1000);

    } else {

        [...document.getElementsByClassName('words')].map(a => a.style.backgroundColor = '#ff0040');

        setTimeout(() => [...document.getElementsByClassName('words')].map(a => a.textContent = ''), 1000);

        setTimeout(() => [...document.getElementsByClassName('words')].map(a => a.style.backgroundColor = ''), 1000);
    }
}


export function deleteWord() {

    const element = document.getElementById(`${index - 1}`);

    if (!element) {

        return;

    }

    element.textContent = '';

    index--;

}

export function wordHelp() {

    if (coins > 20) {

        if (window.innerWidth > 600) {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/help33.jpg')";

        } else {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/mobileHelpImage.jpg')";

        }

        document.getElementsByClassName('helpBtn')[0].disabled = false;

    } else {

        if (window.innerWidth > 600) {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/grayLamp.jpg')";

        } else {

            document.getElementsByClassName('helpBtn')[0].style.backgroundImage = "url('image/grayLampMobile.jpg')";

        }

        document.getElementsByClassName('helpBtn')[0].disabled = true;

    }

    document.getElementById(index).textContent = words[level][index];

    writtenWord += words[level][index];

    coins -= 20;

    index++;

    setData({ coins, level, index, writtenWord });

    document.getElementsByClassName('score')[0].textContent = coins;

    if (writtenWord === words[level]) {

        createWinSound().play();
        setWordContainer(true);
        setTimeout(() => startGame(), 1000);

        writtenWord = '';

        level++;

        index = 0;

        setData({ coins, level, index });

    }

    if (writtenWord.length - 1 === words[level].length - 1 && writtenWord !== words[level]) {

        createErrorSound().play();
        setWordContainer(false);
        setTimeout(() => startGame(), 1000);

        //writtenWord = '';

    }

}

export function shuffleWord() {

    var element = document.getElementsByClassName("buttonsContainer");

    element[0].classList.toggle("main");

    let test = [...document.getElementsByClassName('wordContainer')].sort((a, b) => 0.5 - Math.random());
    //let test2 = [...document.getElementsByClassName('wordContainer')].sort((a, b) => 0.5 - Math.random());

    render(test, document.getElementsByClassName('buttonsContainer')[0]);
    // render(test2, document.getElementsByClassName('buttonsContainer main')[0]);

}