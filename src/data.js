export function setData(data) {

    localStorage.setItem('userData', JSON.stringify(data));

}

export function getData() {

    return JSON.parse(localStorage.getItem('userData'));
}





