const linesOfCode = ["<html lang=C.M. class=cristian-munoz><head> <meta charset=UTF-8> <meta http-equiv=X-UA-Compatible content=cristian-MUNOZ> <meta name=munoz content=cristian", 
                     "<div class=munoz row1> <div id=CRISTIAN class=c.m.> <nav><ul><li><a href=cristian title=cristianmunoz>HELLO</a></li><li><a href=munozcristian title=munoz", 
                     "<ul> <li class=CRISTIAN title=munozmunoz><strong>CRISTIANCRISTIAN</strong></li> <li class=munozCRISTIAN title=welcome welcome>SCROLL</li> <li class=layout>",
                     "<header id=cristian> <div id=munoz> <h1><a href=munozmunoz title=CRISTIANMUNOZ>welcome!</a></h1> <h2>cristiancristian, munozmunoz",
                    "<img class=WELCOME src=http://hello.conTINUE.CONtinue/CRISTIAN/munoz/welcome.jpg /> <p><a href=HELLO>scrollscrollscroll</a></p> <img class=CONTINUE src",
                    "<script async src=cristian://www.welcomeweclome.!!!!/scroll/js?id=CRISTIAN></script> <script> continue! = scrolling! || []; CRISMUNOZ",
                    "<meta name=welcome!! content=cristian, SCROLL, continue> <meta name=MUNOZ content=crismunoz> <link rel=munCRISTIAN icon href=cristianmunoz",
                    "<footer class=cristianmunoz id=munozcristian> <div class=SCROLLSCROLL> <hr> <div class=cristianmunoz> <div class=continueSCROLL> <span> </span> </",
                    "<a href=CRISTIAN class=scroll><div class=welCOME><svg xmlns=</span></span><ul class=weLCOME<a href= target=crisTAIN> munoz </a><li ",
                    "<link crossorigin=cristian href=https://MUNoz.crisTIAN.net/welcome/CONTINUE/WELCOME/scrollorcs/sCRoLL.v2.login.CONINUE-cristiAN.css rel=MUNOZ onerror",
                    "<body dir=MUNOZ class=CRISTIAN ScRoLL-munozcris-continue-CRISTIAN HELLO-munoz-scrollscroll-mun-cris SCROLL-munmunmun-ozozoz-cristian style=continue"];

                    const random_glitch_text = ["@", "#", "!", "$", "%", "*", "&", "WELCOME", "HELLO", "(^", "01", "./", "_", "'", "//", "{}", "[]", "+", "-", "?", ">", "<", ","];
const rainbowArray = [ 'rgb(255,0,0)',
'rgb(255,0,42.5)',
'rgb(255,0,85)',
'rgb(255,0,127.5)',
'rgb(255,0,170)',
'rgb(255,0,212.5)',
'rgb(255,0,255)',
'rgb(212.5,0,255)',
'rgb(170,0,255)',
'rgb(127.5,0,255)',
'rgb(85,0,255)',
'rgb(42.5,0,255)',
'rgb(0,0,255)',
'rgb(0,42.5,255)',
'rgb(0,85,255)',
'rgb(0,127.5,255)',
'rgb(0,170,255)',
'rgb(0,212.5,255)',
'rgb(0,255,255)',
'rgb(0,255,212.5)',
'rgb(0,255,170)',
'rgb(0,255,127.5)',
'rgb(0,255,85)',
'rgb(0,255,42.5)',
'rgb(0,255,0)',
'rgb(42.5,255,0)',
'rgb(85,255,0)',
'rgb(127.5,255,0)',
'rgb(170,255,0)',
'rgb(212.5,255,0)',
'rgb(255,255,0)',
'rgb(255,212.5,0)',
'rgb(255,170,0)',
'rgb(255,127.5,0)',
'rgb(255,85,0)',
'rgb(255,42.5,0)' ];
let startTL = gsap.timeline();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomCodeLines(numOfLines){
    let clear_ul = document.getElementById("coding-text");
    clear_ul.innerHTML = "";

    for(var x=0; x <=numOfLines; x++){

        var ul = document.getElementById("coding-text");
        var li = document.createElement("li");
        li.setAttribute('id','hackli');

        let element = linesOfCode[getRandomInt(linesOfCode.length)];
        for(let i = 0; i < element.length; i++){
            var pixel_len = 0;
            if (screen.width >= 1100) {
                pixel_len = 13;
            } else {
                pixel_len = 9;
            }
            var width_of_ul = ul.clientWidth;
            var number_of_spans = width_of_ul / pixel_len;
            if(i < number_of_spans){
                li.innerHTML += "<span>" + element[i] +"</span>";
            }
        }


        ul.appendChild(li);

    }
    
}

function hackerText() {
    let codeLinesTL = gsap.timeline();
    let hackLines = gsap.utils.toArray("#coding-text li");
    gsap.utils.shuffle(hackLines);
    let spanArr = gsap.utils.toArray("#hackli span");
    gsap.utils.shuffle(spanArr);

    let line_scroll_time = 0;

    if(screen.width >= 1100){
        line_scroll_time = screen.width / 550;
        
    }else{
        line_scroll_time = screen.width / 90;
    }

    codeLinesTL.from(spanArr, {duration: line_scroll_time, ease: "none", stagger: .01, text: {value: ""}}, "-=2.8");
}



//GSAP EFFECTS
var nextColor = 0
gsap.registerEffect({
    name:"hover_glitch",
    effect: (targets, config) =>{
        return gsap.fromTo(targets, {color: "white"} ,{onStart: () => {
            if(nextColor < rainbowArray.length){
                nextColor++;
            }else{
                nextColor = 0;
            }
        },color: rainbowArray[nextColor], ease:"none", duration: 0.8, yoyo: true, repeat: 1, text:{value:random_glitch_text[getRandomInt(random_glitch_text.length)], delimiter:""}})
    }
});

function onResize(){
    if (screen.width >= 1100) {
        let ul_height = document.getElementById("coding-text");
        ul_height.innerHTML = "";
        let lines_height = ul_height.clientHeight / 40;
        randomCodeLines(lines_height);
        hackerText();
    } else {
        let ul_height = document.getElementById("coding-text");
        ul_height.innerHTML = "";
        let lines_height = ul_height.clientHeight / 25;
        randomCodeLines(lines_height);
        hackerText();
    }
    document.querySelectorAll("#hackli span").forEach(item => {
        item.addEventListener("mouseover", event =>{
            gsap.effects.hover_glitch(item);
        })
    })
}

window.addEventListener("resize", function() {
    onResize();
})

//Nav bar hover animations
const nav_elements = document.querySelectorAll(".nav-menu li a").forEach(element => {

    let element_txt = `<>` + element.innerHTML + `<>`;
    console.log(element_txt)

    const hover = gsap.to(element, {
        text: element_txt,
        duration: 0.5,
        paused: true,
    });

    element.addEventListener("mouseenter", event => {
        hover.play();
    });
    element.addEventListener("mouseleave", event => {
        hover.reverse();
    });
});