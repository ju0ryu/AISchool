//빈배열 생성
var arr3 = []; 
var arr4 = new Array();

var arr=[1,1,1,1];
var sum= 0;
for(let i=0; i<arr.length; i++){
    sum+=i;
}
console.log(sum);

//배열에 타입 제한이 없음
var arr1 = new Array(1,10.5,'aaa',{name:Lee});
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}
//배열의 새로운 값 추가
arr[4] = 'bbb';
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//배열 삭제
delete arr[4];
console.log(arr.length);
//배열 요소삭제
const arr = [1,2,3];
console.log(arr,length);
console.log(arr);
arr.splice(1,1); // splice(삭제할 인덱스, 삭제할 요소수,삭제위치에 추가할 데이터)
console.log(arr.length);
console.log(arr);

//배열의 메서드
//.isArray - 변수가 arr인지 팔별
//.indexOf
const arr5 = [1,2,2,3,4];
console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(6)); //-1
console.log(arr.indexOf(2,2)); // (찾는데이터, 시작인덱스) 2 
//.push -인덱스의 마지막부분부터 값 추가
const arr6 = [1,2];
let res = arr.push(3,4)
console.log(result);
console.log(arr6);
//.pop -인덱스 끝 요소 추출후 삭제
const arr7 =[1,2];
console.log(arr);
let pop = arr.pop();
console.log(result);
console.log(arr);
//.unshift -배열 가장 앞에 추가 push와 반대
arr.unshift(1,2);
//.shift-배열 가장 앞에서부터 제거 pop과 반대
arr.shift();
//.concat -전달된 값을 배열 마지막에 추가해 새로운 배열로 생성
arr6.concat(arr7);
//.splice - 배열 원하는 위치를 삭제 및 추가
//(삭제할 인덱스 시작점, 삭제할 요소수,삭제위치에 추가할 데이터(생략가능))
arr.splice(1,2,30,40,50);
//.filter - 원하는 중복 특정요소를 삭제할 수 있다
const arr8 = [1,2,3,1,3]
function removeAll(array,item){
    return array.filter(v => v !== item)
}
console.log(removeAll(arr8,2));
//.join - 배열 요소를 문자열로 변환후 전달받은 구분자를 결합하여 반환
const arr9 = [1,2,3,4];
console.log(arr9.join()); //'1,2,3,4'
console.log(arr9.join('')); //'1234'
console.log(arr9.join(':'));
//.reverse - 배열순서를 반대로 뒤집는다
const arr10= [1,2,3,4,5]
const reverse = arr.reverse();
console.log(arr);
//.sort - 배열의 요소를 정렬한다 (오름차순)
const fruits = ['banana','orange','apple'];
fruits.sort();

const points = [10,1,100,5,2,25,10,14]
points.sort((a,b) => a-b);
console.log(points);

const todos = [
    {id: 4, content: 'JavaScript'},
    {id: 1, content: 'HTML'},
    {id: 2, content: 'CSS'}
];
function compare(key){
    return (a,b) =>(a[key] > a[key] ? 1 : (a[key]<b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

//.foreach - 반복처리할 부분을 콜백함수로
const numbers = [1,2,3];
let pows = [];

// for(let i =0; i<numbers.length; i++){
//     powss.push(numbers[i] ** 2);
// }
numbers.forEach(items=>pows.push(item ** 2));
console.log(pows);

//.map - 자신을 호출한 배열의 모든요소를 순회하면 콜백함수 호출
const number = [1,2,3,4];
const roots = number.map(item =>Math.sqrt(item));
console.log(roots);
console.log(number);

//.reduce -자신을 호출한 배열의 모든요소를 순회하면서 콜백함수 호출

var arr11 = [1,2,3,4];
const sum = arr11.reduce((acc,curr,index,array)=>
acc + curr, 0);

console.log(sum);