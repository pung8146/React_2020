// [계산된 속성명] 은 객체의 속석명을 동적으로 결정하기위해 나온문법이다
// 2 - 20
function makeObject1(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}
function makeObject2(key , value) {
  return {[key]: value};
}

// 계산된 속성명을 사용하면 같은 함수를 2번 처럼 간결하게 작성할수있다.
// 계산된 속성명은 [컴포넌트의 상태값을 변경할때 ] 유용하게 쓸수있다 (아래코드참고)

//2-21 계산된 속석명을 사용해 컴포넌트 상태값 변경하기
