// if문
// var prom = prompt('점수를 입력하세요');
// var num = Number(prom)
// var kind;

// if(num >=90){
//     kind = '수';
// }else if(num >= 80){
//     kind = '우';
// }else if(num >= 70){
//     kind = '미';
// }else if(num >= 60){
//     kind = '양';
// }else{
//     kind = '가';
// }
// console.log(kind);
// document.write(kind);

//for문
// var num1 = 0;
// for(var i=2; i<=9; i++){
//     console.log(i+"단");
//     for(var j=1; j<=9; j++){
//         num1= i*j;
//         console.log(i+"*"+ j+"= "+num1);
//     }
// }

//while문
var sum = 0;
var i = 1;
while (i<=10){
    sum += i;
    i++;
}
var i = 1;
var k = 0;
while(i<3){
    var j = 1;
    while(j<4){
        console.log("i=",i,"j=",j,"k=",++k);
        j++
    }
    i++
}