const strObj = new String("MBC");
const strObj1 = "KBS"
console.log(strObj);
console.log(strObj[0]);
strObj[0] = 'm'; //문자열을 따로 변환 할 수 없다
console.log(strObj); 
console.log(strObj1);
console.log(strObj1[0]);
strObj[0] = 'k';  //문자열을 따로 변환 할 수 없다
console.log(strObj1); 

console.log(strObj.length);
console.log(strObj1.length); //길이출력가능

const str = '900101-1827382';
console.log(str.indexOf('-')+1); //처음만난 문자의 순서를 출력
console.log(str.charAt(str.indexOf('-')+1)); //선택된 인덱스의 문자 추출
console.log(str.substring(7,14));

const str1 = '      foo         ';
str1.trim();  //불필요한 공백 제거
