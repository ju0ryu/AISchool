//기본
var res, score;
score = 100;
res = 20;
var sum = score+res;
console.log(sum);

//객체
var obj={name: 'ryu', address:'광주'}
console.log(obj);
console.log(obj.name);
console.log(obj.address);

//배열
var arr = [1,2,3];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);

//백틱
var a = `ddddd
aaaaaa`;
console.log(a);

//이스케이프 시퀀스
var b = 'aaa\nbbb\tccc'
console.log(b);
var c = "aaa\'bbb\"c\\cc😊"
console.log(c);

//문자열 연결
var first = 'ryu';
var last = 'juyoung';
console.log("my name is " + first + " "+last);
console.log(`my name is ${first} ${last}.`);

//심볼
var key = Symbol('key');
console.log(typeof key); // "key" 
console.log(key); // Symbol "key"

//연산자
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log('a'+'b');
//증감연산
var a = 10;
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//할당연산 증감연산 예제
var b=0;
for (var i = 0; i < 10; i++) {
    b +=i;
}
console.log(b);

//삼항연산
var x=3
var result = x % 2 ? '짝수': '홀수';
console.log(result);

//Math
Math.pow(2,3); // 2**3
