const GetQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //获取参数值的正则表达式
    let urlKeys = window.location.search.substr(1); //获取url传参中？后面的值：id=123&name=小明
    urlKeys = decodeURI(urlKeys); //针对中文乱码的解决方案；decodeURI()解决乱码问题
    let r = urlKeys.match(reg);
    window.console.log(r);
    if (r != null) {
        return r[2];
    } else {
        return null;
    }
}
let id = GetQueryString("id");
let itemData;

const loadXMLDoc = () => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            itemData = JSON.parse(xmlhttp.responseText);
            itemData = itemData[id];
        }
    }
    xmlhttp.open("GET", "../data/list.json", false);
    xmlhttp.send();
}

const loadInf = () => {
    let stars = document.getElementsByClassName('gray-star');
    for (let i = 0; i < itemData.rate; i++) {
        stars[i].classList.add("red-star");
    }
    document.getElementById('j-item-name').innerHTML = itemData.name;
    document.getElementById('j-item-inf').innerHTML = itemData.brief;
    document.getElementsByTagName('img')[0].src = "../" + itemData.imgSrc;
    let buttonText = document.getElementsByClassName('select-button');
    buttonText[0].getElementsByClassName('text-10-black')[0].innerHTML = itemData.priceOfSize1;
    buttonText[0].getElementsByClassName('text-10-black')[1].innerHTML = itemData.priceOfSize2;
    buttonText[0].getElementsByClassName('text-10-black')[2].innerHTML = itemData.priceOfSize3;
    buttonText[1].getElementsByClassName('text-10-black')[1].innerHTML = itemData.priceOfCrust1;
    buttonText[1].getElementsByClassName('text-10-black')[2].innerHTML = itemData.priceOfCrust2;
    buttonText[2].getElementsByClassName('text-10-black')[1].innerHTML = itemData.priceOfTop1;
    buttonText[2].getElementsByClassName('text-10-black')[2].innerHTML = itemData.priceOfTop2;
}
loadXMLDoc();
loadInf();