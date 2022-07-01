// 형변환
var x = 10;
var str = x.toString();
console.log(typeof str, str); //string 10
console.log(typeof x, x); // int 10

var x = 10+' ';
console.log(typeof x, x); //string 10

var a = '10'
var b = Number(a);
var c =parseInt(a);

console.log('Cat'||'Dog'); //Cat
console.log(false||'Dog'); //Dog
console.log('Cat'||false); //Cat

console.log('Cat'&&'Dog'); //Dog
console.log(false&&'Dog'); //false
console.log('Cat'&&false); //false

//객체 리터럴
// 클래스(class): 객체들이 가지고 있는 공통된 특성과 기능을 정의하는 것을 의미
// class = 특성 + 메소드

//객체(object): 클래스를 이용해 만들어진 실체 ex {name: '주영' ,age: 29}
//object = 특성+메소드

//원시타입 = 정수,실수,문자,논리 한가지 타입만 가지는것

var person = {
    name: "John",
    age: 30,
    sayHello : function(){
        var name = 'ryu'
        console.log(`hello my name is ${this.name} my age is ${this.age}`);
        console.log(`hello my name is ${name}`);
        str =`
        <table border="1" align="center">
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>tel</th>
                    </tr>
                    <tr>
                        <td>${this.name}</td>
                        <td>${this.age}</td>
                        <td>${this.tel}</td>
                    </tr>
                </table>`
        return document.write(str);
    }
    // sayHello(){
    //     console.log(`hello my name is ${this.name} my age is ${this.age}`);
    //     console.log(`hello my name is ${name}`);
    // }
};
console.log(typeof person);
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person["name"]);
console.log(person[`name`]);
// console.log(person.sayHello());

person.tel = '010-0000-0000';
console.log(person);
console.log(person.tel);
person.sayHello();

//삭제
var person = {
    name: "John Doe",
};
console.log(person);

person.age = 20;
console.log(person);

delete person.age;
console.log(person);