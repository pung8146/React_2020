동적타입언어?
정적타임언어 -> 자바스크립트에 -> 타임스크립트를 사용하게되었음
prettier.io
-자바스크립트 공부사이트-
2ality.com
javascript.info
리액트 같은 프론트엔드 라이브러리 혹은 프레임워크를 사용하는 이유는
1.UI를 자동업데이트해줌 ? 매번 업데이트해줘야되서 프로그램이 무거워지는데
리액트는 #가상돔에서 변경될 UI의 최소집합을 계산하여 불필요한 UI업데이트가 줄고 성능이 상승됨
알아두어야할것 순수 함수 / 불변 변수
render 함수는 순수 함수로 작성한다.
state은 불변 변수로 관리한다. (이때 여기서 state 은 리액트의 속성값과 상탯값을 의미한다)
그렇기에 render 함수는 인수 state가 변하지 않으면 항상 같은 값을 반환해야한다 {자세한건 4장}
 
https://unpkg.com/react@16/umd/react.development.js (개발환경 사용) / (플랫폼 구분 없이 공통 사용되는 리액트 핵심기능)
https://unpkg.com/react@16.13.1/umd/react.production.min.js (배포환경에 사용 ) / (플랫폼 구분 없이 공통 사용되는 리액트 핵심기능)
https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js (개발환경 사용) / (웹에서만사용)
https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js (배포환경에 사용 ) / (웹에서만사용)

