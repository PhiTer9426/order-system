let chose = [0, 0, 0];
let buttons = document.getElementsByClassName('select-area')[0].getElementsByTagName('button');

const ClickButton = (n) => {
    // body...
    buttons[3 * Math.floor(n / 3) + chose[Math.floor(n / 3)]].classList.remove("button-active");
    chose[Math.floor(n / 3)] = n - 3 * Math.floor(n / 3);
    buttons[n].classList.add("button-active");
}