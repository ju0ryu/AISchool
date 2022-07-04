// 파라미터(인수)
//1.형식매개변수(가인수) - 함수를 정의할때 기술
//2.실매개변수(실인수) - 함수를 호출할때 기술

function add(x, y ){
    return x+y;
}
var sum = add(2,5)
console.log(sum);


//함수 리터럴
//함수 이름 생략가능(익명함수)
var f = function(x, y ){
    return x+y;
}; //세미콜론 필수

var res = f(3,5)
console.log(res);

//화살표함수
var f = (x,y) => x+y; 

//호이스팅
//전처리때는 선언문만 먼저 실행됨
console.dir(plus); // O
console.dir(minus); // undefined

console.log(plus(1,2)); // O
console.log(minus(1,2)); // X

//선언문
function plus(x,y) {
    return x+y;
}
//함수 표현식
var minus = function(x,y) {
    return x-y;
};

//함수의 형식매개변수는 함수내에서만 사용가능
//형식매개변수보다 초과된 인수는 무시된다

//즉시 실행 함수
(function(){
    var a = 3;
    var b = 5;
    return a*b;
}());

//일반함수처럼 사용가능
var res = (function(){
    var a = 3;
    var b = 5;
    return a*b;
}());

//매개변수 사용가능
var res = (function(a,b){
    var a = 3;
    var b = 5;
    return a*b;
}(2,3));