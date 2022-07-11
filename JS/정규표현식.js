//\d{n} = 10진수 정수 // 대문자는 반대의 의미
const tel = '010-4444-9889'
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel));

// i = 대소문자 구분 안하기
const target = 'Is this all there is?'
const regExp1 = /is/i;
console.log(regExp1.test(target));

//exec = 패턴을 검색하여 첫번재 요소를 배열로 반환 없을시 null
console.log(regExp1.exec(target));

//match = 패턴을 검색하여 모든 매칭 결과(g를 붙일시)를 배열로 반환
const regExp2 = /is/ig;  // i와 g를 같이 사용 가능
console.log(target.match(regExp2));

//. = 임의의 문자 하나
const regExp3 = /.../g;
console.log(target.match(regExp3));

//{최소반복횟수, 최대반복횟수} 
const target1 = 'A AA B BB Aa Bb AAA'
const regExp4 = /A{1,2}/g;
console.log(target1.match(regExp4));
//{최소반복횟수}
const regExp5 = /A{2}/g;
console.log(target1.match(regExp5));

// A|B = A 또는 B를 의미 
const regExp6 = /A|B/g;
console.log(target1.match(regExp6));
// + = 한번이상 반복
const regExp7 = /A+|B+/g;
console.log(target1.match(regExp7));
// [] = 대괄호안은 or과 같이 작용한다
const regExp8 = /[AB]+/g;
console.log(target1.match(regExp8));

// - = 범위를 설정한다
const target2 = 'AA BB Aa Bb ZZ Zz 01 A1 ADF12 12IGJ'
const regExp9 = /[A-Z]+/g;
const regExp10 = /[0-1A-Z]+/g;
console.log(target2.match(regExp9));
console.log(target2.match(regExp10));

//첫자 영문으로 출력하기
const regExp11 = /^[A-Za-z][0-1A-Za-z]+/g;
console.log(target2.match(regExp11));

// \w = 영문 대소문자,숫자,_ 를 의미한다 //W는 반대의 의미
const target3 = 'Aa Bb 12,345 _$$#'
const regExp12 = /[\w,]+/g;
console.log(target3.match(regExp12));

//[^] = 대괄호안에 사용시 not 연산
const regExp13 = /[^0-9]+/g;
console.log(target3.match(regExp13));

// ^ = 시작 $ = 끝
const target4 = 'https://www.naver.com'
const regExp14 = /^https/;
const regExp15 = /com$/;
console.log(regExp14.test(target4));
console.log(regExp15.test(target4));

//url 검색
const url = 'https://naver.com'
console.log(/^https?:\/\//.test(url));
console.log(/^(http||https):\/\//.test(url));

//숫자로만 된 문자열
const target5 = '12345';
console.log(/^\d+$/.test(target5));

// \s = 공백문자
const target6 = ' hi!';
console.log(/^[\s]+/.test(target6));

//id 검사
const id = 'addfw123'
console.log(/^[A-Za-z0-9]{5,10}$/.test(id));
//메일주소 검사
const email= '0802ryu@gmail.com';
let patternEmail = /^[A-Za-z0-9]([-_\.]?[0-9a-zA-Z])*@[A-Za-z0-9]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
