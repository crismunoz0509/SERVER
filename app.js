const tl = gsap.timeline({defaults: {ease: 'sine.out'} });

tl.to(".text", {y:"0%", duration: 1.5});
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
    tl.to(".slider", {y: "100%", duration: screendrop});
    tl.to(".intro", {y: "100%", duration: screendrop}, "-=2.5");
    tl.fromTo(".nav", {opacity: .1, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
    tl.to(".nav-menu li:first-child", {rotation:1080, duration: 1})

    typeWriter();
}


var i = 0;
var speed = 5;
var txt = 'var Sansa = mislead(Stark,( x ) / -rule(rule(-0.26) - -mislead(protect(TABLE[( -bar(( mislead(Arya + Sansa * rule(betray(COLS),( Sansa )) * --30 / Arya * ( rule() ),ROWS) / protect(90 * -destroy(ROWS,dog - 1 + rule(--0.35,43 - -( 97 ) - 1 - mislead(( Sansa ),( ( destroy(protect(Ygritte + ( COLS ) * ROWS,( betray(dog,( -1 )) )),TABLE[-Sansa][( Jon )] + -10 * -bar(TABLE[-31][( --Jon * (-betray(ROWS - Hodor,-foo(TABLE[foo(ROWS / -1)][ROWS])) ) )],Arya,-( -COLS / foo(--COLS * betray() * -60 - ( COLS / -190.73 )) )) + ( rule(--Sansa,-( COLS ),-TABLE[Jon][( Hodor )]) ) - Ygritte) ) ) / ( bar(( rule(TABLE[---0.41][-( --1 )],protect(( ( Hodor ) ))) ) / TABLE[foo()][TABLE[Ygritte][--46]],ROWS) )))),betray(ROWS,-Ygritte,mislead())) / TABLE[-0.57][58] ) * TABLE[COLS][( -Jon )] + COLS + -Sansa) / rule(-rule(-foo(-( COLS ))),-( dog ) / bar(Sansa)) )][-foo(-0.73 - ( 63 ))])) - -betray(83,( ( bar(ROWS,( ROWS )) ) ),Jon * Sansa) - ( 1 ),dog,dog),-( dog ) * ---300.02 + dog) def rule(dog,dog){ x; y -= 1 } def TABLE[x][j] { 75 } assert ( ( -protect() ) ) :  One can not simply parse himself  def foo(Hodor){ -Stark; COLS - ROWS } assert betray(COLS) :  Winter  is coming assert  ( ROWS ) :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def protect(Ygritte){ Stark *= -86 } assert ( -550.326 ) - TABLE[( COLS )][Arya * -dog] - 80 / Stark :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def TABLE[( betray (-430.408,Stark + bar(Stark,COLS) + ( COLS ) - ( betray(--0.55) ),60.235))) )][k] { Stark /= mislead(x) } var Hodor = -780.817 / Sansa - rule(0.63) def TABLE[rule(( -Hodor ),-( ROWS ))][i] { Hodor *= y; dog -= Ygritte } var Ygritte = -ROWS + ( -Stark / dog ) var x = -mislead(ROWS) def TABLE[-bar(--0.76,Stark,COLS)][k] { 89 } assert -67 :  Nothing burns like the cold.  def TABLE[( -( rule(-( x ) + Ygritte + rule(betray(COLS,Jon - protect(COLS) - --Ygritte * x),mislead()) * x) ) + dog ) * 520.81][i] { if(dog - -( ( x + rule(Hodor,( betray() )) ) ) / -betray(rule(mislead(rule(-0.35,COLS),( bar(rule(ROWS - ( betray(-0.06,-( -TABLE[1][150.5] )) )),Ygritte)  )),( -foo() )) + -y)){ foo(foo(ROWS,-80,-0.08),Ygritte / ( -0.37 )) } else { if(Arya / y * -rule(foo(betray(( -betray(COLS,TABLE[( Stark ) * Sansa][betray(Stark,ROWS,protect(83,y)) + 0.71],-COLS) ),-destroy(-TABLE[ROWS][destroy(-100,COLS,dog)]),ROWS * Hodor + 3)),bar(Arya - protect() * COLS * TABLE[foo(-( ( -( ROWS ) ) ))\
    ya /= ( bar(Sansa) ); Arya *= -( 0.93 ); Ygritte /= protect';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("coding-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}