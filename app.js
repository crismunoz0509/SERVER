const linesOfCode = ["var Sansa = mislead(Stark,( x ) / -rule(rule(-0.26) - -mislead(protect(TABLE[( -bar(( mislead(Arya + Sansa * rule(betray(COLS),( Sansa )) * --30 / Arya * ( rule() ),ROWS) / protect(90 * -destroy(ROWS,dog - 1 + rule(--0.35,43 - -( 97 ) - 1 - mislead(( Sansa ),( ( destroy(protect(Ygritte + ( COLS ) * ROWS,( betray(dog", "COLS - -0.05,( destroy(COLS) )) ) ) ),rule(-0.18 - ( 28 ),ROWS,dog) + rule(COLS,210.991))][destroy(protect(-130.967 * -87) + ( -( ( TABLE[--Sansa][y] ) ) )) / Hodor]]] : What do we say to the Lord of Death? var Hodor = y var Jon = TABLE[TABLE[TABLE[Arya][ROWS]][Hodor]][( TABLE[0.5][( ( rule(ROWS) ) )] )] var Stark = ( -COLS ) def mislead(){ y += -bar(destroy(-0.39 - COLS - --Hodor))"];
const random_glitch_text = "@#$%&";
let startTL = gsap.timeline();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomCodeLines(numOfLines){

    var txt = 'var Sansa = mislead(Stark,( x ) / -rule(rule(-0.26) - -mislead(protect(TABLE[( -bar(( mislead(Arya + Sansa * rule(betray(COLS),( Sansa )) * --30 / Arya * ( rule() ),ROWS) / protect(90 * -destroy(ROWS,dog - 1 + rule(--0.35,43 - -( 97 ) - 1 - mislead(( Sansa ),( ( destroy(protect(Ygritte + ( COLS ) * ROWS,( betray(dog,( -1 )) )),TABLE[-Sansa][( Jon )] + -10 * -bar(TABLE[-31][( --Jon * (-betray(ROWS - Hodor,-foo(TABLE[foo(ROWS / -1)][ROWS])) ) )],Arya,-( -COLS / foo(--COLS * betray() * -60 - ( COLS / -190.73 )) )) + ( rule(--Sansa,-( COLS ),-TABLE[Jon][( Hodor )]) ) - Ygritte) ) ) / ( bar(( rule(TABLE[---0.41][-( --1 )],protect(( ( Hodor ) ))) ) / TABLE[foo()][TABLE[Ygritte][--46]],ROWS) )))),betray(ROWS,-Ygritte,mislead())) / TABLE[-0.57][58] ) * TABLE[COLS][( -Jon )] + COLS + -Sansa) / rule(-rule(-foo(-( COLS ))),-( dog ) / bar(Sansa)) )][-foo(-0.73 - ( 63 ))])) - -betray(83,( ( bar(ROWS,( ROWS )) ) ),Jon * Sansa) - ( 1 ),dog,dog),-( dog ) * ---300.02 + dog) def rule(dog,dog){ x; y -= 1 } def TABLE[x][j] { 75 } assert ( ( -protect() ) ) :  One can not simply parse himself  def foo(Hodor){ -Stark; COLS - ROWS } assert betray(COLS) :  Winter  is coming assert  ( ROWS ) :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def protect(Ygritte){ Stark *= -86 } assert ( -550.326 ) - TABLE[( COLS )][Arya * -dog] - 80 / Stark :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def TABLE[( betray (-430.408,Stark + bar(Stark,COLS) + ( COLS ) - ( betray(--0.55) ),60.235))) )][k] { Stark /= mislead(x) } var Hodor = -780.817 / Sansa - rule(0.63) def TABLE[rule(( -Hodor ),-( ROWS ))][i] { Hodor *= y; dog -= Ygritte } var Ygritte = -ROWS + ( -Stark / dog ) var x = -mislead(ROWS) def TABLE[-bar(--0.76,Stark,COLS)][k] { 89 } assert -67 :  Nothing burns like the cold.  def TABLE[( -( rule(-( x ) + Ygritte + rule(betray(COLS,Jon - protect(COLS) - --Ygritte * x),mislead()) * x) ) + dog ) * 520.81][i] { if(dog - -( ( x + rule(Hodor,( betray() )) ) ) / -betray(rule(mislead(rule(-0.35,COLS),( bar(rule(ROWS - ( betray(-0.06,-( -TABLE[1][150.5] )) )),Ygritte)  )),( -foo() )) + -y)){ foo(foo(ROWS,-80,-0.08),Ygritte / ( -0.37 )) } else { if(Arya / y * -rule(foo(betray(( -betray(COLS,TABLE[( Stark ) * Sansa][betray(Stark,ROWS,protect(83,y)) + 0.71],-COLS) ),-destroy(-TABLE[ROWS][destroy(-100,COLS,dog)]),ROWS * Hodor + 3)),bar(Arya - protect() * COLS * TABLE[foo(-( ( -( ROWS ) ) ))\
        ya /= ( bar(Sansa) ); Arya *= -( 0.93 ); Ygritte /= protect assert Hodor : "Nothing burns like the cold." assert ROWS : "One can not simply parse himself" assert -TABLE[-0.66][destroy(( --0.68 ),COLS) * TABLE[betray(Stark)][betray(Arya,mislead(mislead(( Ygritte ),dog,COLS),betray() / mislead() + x,-0.9)) / TABLE[-destroy(( foo(-51 / ( COLS ) * COLS,Sansa) ) / ( ( ( mislead(-COLS - -0.05,( destroy(COLS) )) ) ) ),rule(-0.18 - ( 28 ),ROWS,dog) + rule(COLS,210.991))][destroy(protect(-130.967 * -87) + ( -( ( TABLE[--Sansa][y] ) ) )) / Hodor]]] : "What do we say to the Lord of Death?" var Hodor = y var Jon = TABLE[TABLE[TABLE[Arya][ROWS]][Hodor]][( TABLE[0.5][( ( rule(ROWS) ) )] )] var Stark = ( -COLS ) def mislead(){ y += -bar(destroy(-0.39 - COLS - --Hodor)) * -49 }';


    for(var x=0; x <=numOfLines; x++){

        var ul = document.getElementById("coding-text");
        var li = document.createElement("li");
        li.setAttribute('id','hackli');


        linesOfCode.forEach(element => {
            

            for(let i = 0; i < element.length; i++){
                var pixel_len = 22.6;
                var width_of_ul = ul.clientWidth;
                var number_of_spans = width_of_ul / pixel_len;
                if(i < number_of_spans){
                    li.innerHTML += "<span>" + element[i] +"</span>";
                }
            }
        });

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
    startTL.to(".intro", {y: "100%", duration: screendrop, onComplete: hackerText()}, "-=2.5");
    startTL.fromTo(".nav", {opacity: .1, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
    startTL.to(".nav-menu li:first-child", {rotation:1080, duration: 1,})
}



function hackerText() {
    let codeLinesTL = gsap.timeline();
    randomCodeLines(15);

    hackLines = gsap.utils.toArray("#coding-text li");
    gsap.utils.shuffle(hackLines);
    spanArr = gsap.utils.toArray("#hackli span");

    //codeLinesTL.from(hackLines, {opacity: 0, duration: 5, ease: "none", stagger: {amount: 1}});

    document.querySelectorAll("#hackli span").forEach(item => {
        item.addEventListener("mouseover", event =>{
            gsap.effects.hover_glitch(item);
        })
    })
}



//GSAP EFFECTS
var colorInterp = gsap.utils.interpolate("#C00", "#00C");
gsap.registerEffect({
    name:"hover_glitch",
    effect: (targets, config) =>{
        return gsap.to(targets, {color: , ease:"none", duration: 0.7, yoyo: true, repeat: 1, text:{value:random_glitch_text[getRandomInt(4)], delimiter:""}})
    }
});

gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    },
    defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});