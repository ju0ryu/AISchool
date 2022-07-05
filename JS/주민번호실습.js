var personNum = prompt('주민등록번호를 입력하여 주세요');
var number = personNum.replace('-','');
var sum = 0;
var weight = 2;

for(let i = 0; i<number.length-1; i++){
        sum += number[i]*weight;
        weight++;
        if(weight==10){
            weight=2;
        }
}

var checkDigit = (11-(sum%11))%10;
if(number[12] == checkDigit){
    console.log(`${personNum}(O)`);
}else{
    console.log(`${personNum}(X)`);
}
