let itemData = [];
let menuItemCount = 1;
let chose = 0;
let menuHead = document.getElementById('menu_Head');
let menuContain = document.getElementById('menu-contain');
let buttons = document.getElementsByTagName('button');

const ClickButton = (n) => {
    // body...
    buttons[chose].classList.remove("button-active");
    chose = n;
    buttons[n].classList.add("button-active");
}
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 580) {
        menuHead.classList.remove("hide");
    } else {
        menuHead.classList.add("hide");
    }
    while (checkLoad("menu-item") && (menuItemCount < itemData.length)) {
        let itemBox = document.createElement("div");
        itemBox.className = "menu-item fade";
        menuContain.appendChild(itemBox);
        let itemHref = document.createElement("a");
        itemHref.href = "pizza-page.html?id=" + menuItemCount;
        itemBox.appendChild(itemHref);
        let itemImg = new Image();
        itemImg.src = "../" + itemData[menuItemCount].imgSrc;
        itemHref.appendChild(itemImg);
        let itemName = document.createElement("h1");
        itemName.className = "text-14-black";
        itemName.innerHTML = itemData[menuItemCount].name;
        itemHref.appendChild(itemName);
        let itemPrice = document.createElement("p");
        itemPrice.className = "text-12-gray";
        itemPrice.innerHTML = "start from" + itemData[menuItemCount].priceOfSize3;
        itemHref.appendChild(itemPrice);
        menuItemCount++;
        console.log("scroll");
    }
});

function checkLoad(className) {
    // body...
    let Items = document.getElementsByClassName(className);
    let LastTop = Items[Items.length - 1].offsetTop;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let PageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (scrollTop + PageHeight > LastTop) {
        return true;
    } else {
        return false;
    }
}

loadXMLDoc = () => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            itemData = JSON.parse(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", "../data/list.json", true);
    xmlhttp.send();
}
loadXMLDoc();