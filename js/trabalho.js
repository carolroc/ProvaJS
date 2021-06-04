function pegarDados() {
    pegarDadosNoticias();
    pegarDadosDif();
    pegarDadosSites();
    pegarDadosDramas();
}

function pegarDadosNoticias() {
    //AJAX
    fetch("https://cors-anywhere.herokuapp.com/https://vaiumdorama.com.br/category/noticias/")
        .then(resp => resp.text())
        .then(pg => {
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg,"text/html");
            rasparNoticias(documento);
        })
        .catch(e => document.write(e));
}
function rasparNoticias(documento) {
    var divNo =  document.createElement("div");
    var divDoc = document.getElementById("Noticas");
 
    //documento.querySelectorAll(".bloco-unico").forEach(div => {
    //    div.className = "card";
    //    divNo.appendChild(div);
    //})
    var noticiasAll = documento.querySelectorAll(".bloco-unico");

    document.getElementById("ImgFirst").src = noticiasAll[0].getElementsByTagName("img")[0].src;
    document.getElementById("ImgSecond").src = noticiasAll[1].getElementsByTagName("img")[0].src;
    document.getElementById("ImgThird").src = noticiasAll[2].getElementsByTagName("img")[0].src; 
    document.getElementById("ImgFirst").style.font.fontcolor.name = 'black'; 

    document.getElementById("TFirst").innerText = noticiasAll[0].getElementsByTagName("h2")[0].innerText;
    document.getElementById("TSecond").innerText = noticiasAll[1].getElementsByTagName("h2")[0].innerText;
    document.getElementById("TThird").innerText = noticiasAll[2].getElementsByTagName("h2")[0].innerText;  

    document.getElementById("LFirst").innerText = noticiasAll[0].getElementsByTagName("p")[0].innerText;
    document.getElementById("LSecond").innerText = noticiasAll[1].getElementsByTagName("p")[0].innerText;
    document.getElementById("LThird").innerText = noticiasAll[2].getElementsByTagName("p")[0].innerText;

    divDoc.appendChild(divNo);
}

function pegarDadosSites() {
    //AJAX
    fetch("https://cors-anywhere.herokuapp.com/https://www.techtudo.com.br/listas/2020/12/cinco-aplicativos-para-assistir-a-doramas-online-no-celular.ghtml")
        .then(resp => resp.text())
        .then(pg => {
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg,"text/html");
            rasparSites(documento);
        })
        .catch(e => document.write(e));
}
function rasparSites(documento) {
    var divNo =  document.createElement("div");
    var divDoc = document.getElementById("Sites");
    var h1 = document.createElement("h1");
    h1.innerText = "Onde Assistir?";

    var ele1 = document.getElementById("st1");
    var ele2 = document.getElementById("st2");
    var ele3 = document.getElementById("st3");
    var ele4 = document.getElementById("st4");
    var ele5 = document.getElementById("st5");

    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    var a4 = document.createElement("a");
    var a5 = document.createElement("a");

    ele1.innerText = documento.querySelectorAll(".content-intertitle")[0].innerText;
    ele2.innerText = documento.querySelectorAll(".content-intertitle")[1].innerText;
    ele3.innerText = documento.querySelectorAll(".content-intertitle")[2].innerText;
    ele4.innerText = documento.querySelectorAll(".content-intertitle")[3].innerText;
    ele5.innerText = documento.querySelectorAll(".content-intertitle")[4].innerText;

    
    //ele1.src = "www.google.com";

    ele1.classList.add("list-group-item");
    ele1.classList.add("hvSites");
    a1.href = "https://www.viki.com/?locale=pt";
    a1.appendChild(ele1);

    ele2.classList.add("list-group-item");
    ele2.classList.add("hvSites");
    a2.href = "https://www.kocowa.com/pt_br/main";
    a2.appendChild(ele2);

    ele3.classList.add("list-group-item");
    ele3.classList.add("hvSites");
    a3.href = "https://www.netflix.com/";
    a3.appendChild(ele3);

    ele4.classList.add("list-group-item");
    ele4.classList.add("hvSites");
    a4.href = "https://tv.line.me/";
    a4.appendChild(ele4);

    ele5.classList.add("list-group-item");
    ele5.classList.add("hvSites");
    a5.href = "https://www.crunchyroll.com/pt-br";
    a5.appendChild(ele5);
    

    divNo.classList.add("list-group");

    divDoc.appendChild(h1);
    divNo.appendChild(a1);
    divNo.appendChild(a2);
    divNo.appendChild(a3);
    divNo.appendChild(a4);
    divNo.appendChild(a5);
    divDoc.appendChild(divNo);
}

function pegarDadosDramas() {
    //AJAX
    fetch("https://cors-anywhere.herokuapp.com/https://www.aficionados.com.br/melhores-doramas-romanticos/")
        .then(resp => resp.text())
        .then(pg => {
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg,"text/html");
            rasparDramas(documento);
        })
        .catch(e => document.write(e));
}
function rasparDramas(documento) {
    var count = 0;
    var divNo =  document.createElement("div");
    var divDoc = document.getElementById("Tipos");
    var h1 = document.createElement("h1");
    h1.innerText = "Conheça nosso TOP 25!";

    documento.querySelectorAll("h2").forEach(div => {
        if (count < 25) {
            var divso =  document.createElement("div");
            divso.innerText = documento.querySelectorAll("h2")[count].innerText;
            //divso.appendChild(div);
            divNo.appendChild(divso);
        }
        count++; 
    })
    divDoc.appendChild(h1);
    divDoc.appendChild(divNo);
}

function pegarDadosDif() {
    //AJAX
    fetch("https://cors-anywhere.herokuapp.com/https://www.purebreak.com.br/noticias/dorama-o-que-e-entenda-o-conceito-e-veja-onde-assistir/97887")
        .then(resp => resp.text())
        .then(pg => {
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg,"text/html");
            rasparDif(documento);
        })
        .catch(e => document.write(e));
}
function rasparDif(documento) {
    var divDoc = document.getElementById("Home");
    
    var p = documento.getElementsByTagName("p");
    var pCerta = p[16].innerText;
    var ElementoP = document.createElement("p");
    ElementoP.innerText = pCerta;

    var h1 = documento.getElementsByTagName("h1");
    var h1Certo = h1[0].innerText;
    var ElementoH = document.createElement("h1");
    ElementoH.innerText = h1Certo;


    divDoc.appendChild(ElementoH);
    divDoc.appendChild(ElementoP);
}











//function evento() {
//    document.querySelector("button").addEventListener("click",pegarDados);
//}

window.onload = pegarDados;

//https://vaiumdorama.com.br/category/noticias/
//class="bloco-unico com-tres"
//https://cors-anywhere.herokuapp.com/