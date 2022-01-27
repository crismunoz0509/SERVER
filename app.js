const linesOfCode = ["<html lang=en class=background><head> <meta charset=UTF-8> <meta http-equiv=X-UA-Compatible content=IE=edge> <meta name=viewport content=width=device-width", 
                     "<div class=wrapper row1> <div id=topbar class=clear> <nav><ul><li><a href=/ title=Home>Home</a></li><li><a href=/submit-a-template title=Submit", 
                     "<ul> <li class=authorname title=Templates Author><strong>Bootstrappage</strong></li> <li class=doctype title=Doctype Used>HTML 5</li> <li class=layout>",
                     "<header id=header> <div id=hgroup> <h1><a href=https://www.free-css.com/ title=Free CSS>Free CSS</a></h1> <h2>Free CSS Templates, CSS Layouts &",
                    "<img class=floatleft src=http://www.2020site.org/trees/images/PineNeedles.jpg /> <p><a href=>Lorem ipsum</a></p> <img class=floatright src",
                    "<script async src=https://www.googletagmanager.com/gtag/js?id=UA-732601-15></script> <script> window.dataLayer = window.dataLayer || []; function ",
                    "<meta name=robots content=index, follow, noarchiv> <meta name=googlebot content=noarchive> <link rel=shortcut icon href=/wp-content/themes",
                    "<footer class=site-footer id=lc-footer> <div class=container> <hr> <div class=row> <div class=col-sm-4 copyright> <span> </span> </",
                    "<a href= aria-label=Logo class=header-main__logo><div class=_logo><svg xmlns=</span></span><ul class=header-main__list<a href= target=_self>Must Do Questions</a><li ",
                    "<link crossorigin=anonymous href=https://aadcdn.msftauth.net/ests/2.1/content/cdnbundles/converged.v2.login.min_kfhrfyfy-sm2tmkm5ficcw2.css rel=stylesheet onerror",
                    "<body dir=ltr class=docs-gm docs-homescreen-snackbar-enabled docs-homescreen-material-bar-enabled docs-homescreen-templates-enabled style=margin-right"];

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
//activate landing page
startTL.to(".text", {y:"0%", duration: 1.5,});
function activateLanding(){
    var screendrop;

    if (screen.width > 1000) {
        screendrop = 3
        speed = 0.01;
    }else{
        screendrop = 3
        speed = 15;
    }
    startTL.to(".slider", {y: "100%", duration: screendrop});
    startTL.to(".intro", {y: "100%", duration: screendrop, onComplete: onResize()}, "-=2.5");
    startTL.fromTo(".nav", {opacity: 0, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
    startTL.to(".nav-menu li:first-child", {rotation:1080, duration: 1,})

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
        let lines_height = ul_height.clientHeight / 45;
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

// const nav_about = document.getElementsByClassName("nav-about");
// const nav_logo = document.getElementsByClassName("nav-logo");
// const nav_contact = document.getElementsByClassName("nav-contact");
// const nav_home = document.getElementsByClassName("nav-home");
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