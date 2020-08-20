// 2 - 17 단축 속성명 객체 리터럴 코드를 간편하게 작성할 목적으로 만들어진 문법이다.
//사용해서 새로운 객체를 간단하게 만들어보자
const name = 'mike';
const obj = {
  age :  21,
  name,
  getName() {return this.name; },
};

// 새로 만들려는 객체의 속상값 일부가 이미 변수로 존재하면 간단하게
// 변수이름만 적어주면된다 !! 
// 속성값이 함수이면 function 키워드 없이 함수명만 적어도 된다!!

// 2-18
function makePerson1(age, name) {
  return { age: age, name: name,}
}
function makePerson2(age, name) {
  return { age, name,}
}

// person1이 단축 속석명을 사용하지 않은 경우, 2가 사용한 경우이다