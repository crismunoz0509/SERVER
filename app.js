const linesOfCode = ["<html lang=en class=background><head> <meta charset=UTF-8> <meta http-equiv=X-UA-Compatible content=IE=edge> <meta name=viewport content=width=device-width", 
                     "", ""];
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

        let element = linesOfCode[getRandomInt(1)];
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
startTL.to(".text", {y:"0%", duration: 1.5, ease: 'sine.out'});
function activateLanding(){
    var screendrop = 0;

    var width = screen.width;
    if (width > 1000) {
        screendrop = 2.5
        speed = 0.01;
    }else{
        screendrop = 2.5
        speed = 15;
    }
    startTL.to(".slider", {y: "100%", duration: screendrop});
    startTL.to(".intro", {y: "100%", duration: screendrop, onComplete: onResize()}, "-=2.5");
    startTL.fromTo(".nav", {opacity: .1, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
    startTL.to(".nav-menu li:first-child", {rotation:1080, duration: 1,})
}



function hackerText() {
    let codeLinesTL = gsap.timeline();
    let hackLines = gsap.utils.toArray("#coding-text li");
    gsap.utils.shuffle(hackLines);
    let spanArr = gsap.utils.toArray("#hackli span");
    gsap.utils.shuffle(spanArr);

    let line_scroll_time = 0;
    let stagger_time = 0;

    if(screen.width >= 1100){
        line_scroll_time = screen.width / 550;
        
    }else{
        line_scroll_time = screen.width / 90;
    }

    codeLinesTL.from(spanArr, {duration: line_scroll_time, ease: "none", stagger: .01, text: {value: ""}}, "-=2.8");
}



//GSAP EFFECTS
var colorInterp = gsap.utils.interpolate("#C00", "#00C");
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
        },color: rainbowArray[nextColor], ease:"none", duration: 0.7, yoyo: true, repeat: 1, text:{value:random_glitch_text[getRandomInt(random_glitch_text.length)], delimiter:""}})
    }
});

gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.fromTo(targets, {duration: config.duration, opacity: 0});
    },
    defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
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
        console.log(lines_height);
        randomCodeLines(lines_height);
        hackerText();
    }
    document.querySelectorAll("#hackli span").forEach(item => {
        item.addEventListener("mouseover", event =>{
            console.log("log");
            gsap.effects.hover_glitch(item);
        })
    })
}

window.addEventListener("resize", function() {
    onResize();
})

