//구구단
// function danProc(min, max){
//     document.write('<table border="1"> <tr>');
//     for(var i = min;i<=max;i++){
//         document.write(`<td>${i}단</td>`);
//     }
//     document.write('</tr>');
//     for(var j=1;j<=9;j++){
//         document.write('<tr>');
//         for(var k=min;k<=max;k++){
//             mul=k*j;
//             document.write(`<td>${k}*${j}=${k*j}</td>`)
//         }
//         document.write('</tr>');
//     }
//     document.write('</table>');
// }
// function dan(){
//     var num = getNum();

//     var minMax1 = minMax(num.num1,num.num2);

//     danProc(minMax1.min,minMax1.max);
// }
// dan();
console.log('구분선');
// 소수구하는 함수
// function getNum(){
//     var num1 ,num2;
//     num1=parseInt(prompt('첫번째 수'));
//     num2=parseInt(prompt('두번째 수'));
//     return {num1:num1,num2:num2};
// }
// function minMax(num1, num2){
//     var min,max;
//     if(num1>num2){
//         max=num1;
//         min=num2;
//     }else{
//         min=num1;
//         max=num2;
//     }
//     return {min:min,max:max};
// }
// function primeProc(min,max){
//     var cnt = 0;
//     document.write(`시작숫자 : ${min}  끝숫자 : ${max} <br>`);
//     for(var i=min; i<=max; i++){
//         for(var j = 2; j<i; j++){
//             if(i%j == 0){
//                 break;
//             }
//         }if(i == j){
//         document.write(`${cnt+1} . ${i}`);
//         document.write('<br/>');
//         cnt++;                    
//         }
// }  
// return cnt;
// }
// function totalCnt(cnt){
//     document.write("총 소수의 갯수 = "+cnt);
// }
// function primeNum(){

//     var num = getNum();

//     var minMax1 = minMax(num.num1,num.num2);

//     totalCnt(primeProc(minMax1.min,minMax1.max));
// }
// primeNum();
console.log('구분선');
// 소수구하기(화살표 함수)
var getNum = () => {
    var num1 ,num2;
    num1=parseInt(prompt('첫번째 수'));
    num2=parseInt(prompt('두번째 수'));
    return {num1:num1,num2:num2};
};

var minMax = (num1, num2) => {
    var min,max;
    if(num1>num2){
        max=num1;
        min=num2;
    }else{
        min=num1;
        max=num2;
    }
    return {min:min,max:max};
};
var primeProc = (min,max) => {
    var cnt = 0;
    document.write(`시작숫자 : ${min}  끝숫자 : ${max} <br>`);
    for(var i=min; i<=max; i++){
        for(var j = 2; j<i; j++){
            if(i%j == 0){
                break;
            }
        }if(i == j){
        document.write(`${cnt+1} . ${i}`);
        document.write('<br/>');
        cnt++;                    
        }
}  
return cnt;
};
var totalCnt = (cnt) => {
    document.write("총 소수의 갯수 = "+cnt);
};
var primeNum = () => {
    var num = getNum();
    var minMax1 = minMax(num.num1,num.num2);
    totalCnt(primeProc(minMax1.min,minMax1.max));
};
primeNum();