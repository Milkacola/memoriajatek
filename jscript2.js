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

const kepek=["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep6.jpg","kepek/kep7.jpg","kepek/kep8.jpg","kepek/kep9.jpg","kepek/kep10.jpg","kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep6.jpg","kepek/kep7.jpg","kepek/kep8.jpg","kepek/kep9.jpg","kepek/kep10.jpg"];

const hatter="kepek/hatter.jpg";

function init() {
    const jatekter=CLASS("jatekter")[0];
    let txt = "";
    /*for (let index = 0; index < kepek.length; index++) {
        txt += `<div id="kartyak"><img id="kep${index+1}" src="${kepek[index]}" alt="kep${index+1}"></div>`;
        
    }*/

    
    kepek.forEach(function(kep,index){
        txt+=`<div id="kartyak"><img id="${index}" src="${hatter}" alt="kep${index}"></div>`;
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
    let aktualisElem=Number(event.target.id);
    event.target.src=kepek[aktualisElem];

    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);

    if (kivalasztottTomb.length === 2) {
        /*const kepElemTomb=QS(".jatekter #kartyak img");
        kepElemTomb.forEach(function(elem){
            elem.removeEventListener("click",megfordít);
        });*/
        let feltetel=kepek[kivalasztottTomb[0]]===kepek[kivalasztottTomb[1]];
        if (!feltetel) {
            setTimeout(function() {
                kivalasztottTomb.forEach(function(elem){
                    ID(elem).src=hatter;
                })
                kivalasztottTomb.splice(0);//tömb ürítése
            },1000);
        }else{
            kivalasztottTomb.forEach(function(elem){
                ID(elem).style.display="none";
            });
            kivalasztottTomb.splice(0);
        }
    }
}
