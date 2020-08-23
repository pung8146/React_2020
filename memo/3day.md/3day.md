동기 와 비동기
동기 차례 대로 톱니바퀴 같이
비동기 처리시간이 오래걸릴수록 (장 , 단점) 끝나는게 확실히 않군
call back 사용
인자 리턴값 콜백 함수로 실행시켜
콜백지옥

async await
ajax axios
프로미스 (덩어리) -> 리졸브롤 통하여 해석해서 데이터를 받는다.

프로미스를 만들어진 예제보다 ,, 깊이 들어가서 일부러 텀을 둬야될때

토스트펌 toast

비동기 프로미스에 콜백지옥을 해결해보세요 (질문)

기술면접 어느정도

REPL (READ.EVAUL.PRINT.LOOP) 도구 : 자바스크립트 만들고 나서 함수같은거 간단하게 테스트하기위해서

동적임팩트

react / loadable 최적화의 과정 -> 서비스에 속더 개선 // 코드 스플리팅 /

<pre>
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
</pre>

===
Class 는 Hook 이 나오기전까지 속도는 느리지만 , 다양한 기능때문에 사용되었으나
지금은 Hook 이 출시된 이후로 사용되지 않는다.
==
궁금한점 

--save 를 적어줘야됨