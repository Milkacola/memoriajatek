window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function QS(elem) {
    return document.querySelectorAll(elem);
}

var kepek=["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep6.jpg","kepek/kep7.jpg","kepek/kep8.jpg","kepek/kep9.jpg","kepek/kep10.jpg","kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep6.jpg","kepek/kep7.jpg","kepek/kep8.jpg","kepek/kep9.jpg","kepek/kep10.jpg"];

function init() {
    const jatekter=CLASS("jatekter")[0];
    let txt = "";
    /*for (let index = 0; index < kepek.length; index++) {
        txt += `<div id="kartyak"><img id="kep${index+1}" src="${kepek[index]}" alt="kep${index+1}"></div>`;
        
    }*/

    const hatter="kepek/hatter.jpg";
    kepek.forEach(function(hatter,index){
        txt+=`<div id="kartyak"><img id="${index+1}" src="${hatter}" alt="kep${index+1}"></div>`;
    })

    jatekter.innerHTML=txt;

    const kepElemTomb=QS(".jatekter #kartyak img");
    console.log(kepElemTomb);
    kepElemTomb.forEach(function(elem){
        elem.addEventListener("click",megfordít)
    })
}

const kivalasztottTomb = [];
function megfordít() {
    console.log(event.target);
    let aktualisElem=event.target.id;
    event.target.src=kepek[aktualisElem];

    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);
}
