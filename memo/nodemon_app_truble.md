## [nodemon] app crashed - waiting for file changes before starting...

문제가 발생하였고 이는 node-server가 여러개 실행 되는 문제였음

시도한방법 1.프로세스 직접관리 들어가서 node-server를 삭제 시도했으나 해결되지않음

해결법
const { Video } = require("../models/Video");
문제되는 코드 에서 실제로 사용되고 있지 않기에 발생하지 않는 문제였음

그래서 주석처리로 임시로 막아둠

결과 문제의 핵심은 첫번째 줄에 있고 그것을 보고 문제를 찾아야됬음
