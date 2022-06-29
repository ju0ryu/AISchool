// if문
var prom = prompt('점수를 입력하세요');
var num = Number(prom)
var kind;

if(num >=90){
    kind = '수';
}else if(num >= 80){
    kind = '우';
}else if(num >= 70){
    kind = '미';
}else if(num >= 60){
    kind = '양';
}else{
    kind = '가';
}
console.log(kind);
document.write(kind);