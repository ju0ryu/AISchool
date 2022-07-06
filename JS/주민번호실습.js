function inputCheck() { 
    // var personNum = prompt('주민등록번호를 입력하여 주세요');
    // var number = personNum.replace('-','');
    //첫번째 방법
    // let personNum1 = document.inputForm.personNum1.value;
    // let personNum2 = document.inputForm.personNum2.value;
    //두번째 방법
    let personNum1 = form.personNum1.value;
    let personNum2 = form.personNum2.value;

    var number = personNum1 + personNum2;
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
        alert(`${number}(O)`);
    }else{
        alert(`${number}(X)`);
        }
}
