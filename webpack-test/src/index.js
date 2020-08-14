import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container() {
  return React.createElement(
    'div',
    null,
    React.createElement('p', null, '버튼을 클릭해 주세요.'), // 이게 이렇게 쓰는 이유가뭐지?
    React.createElement(Button, { label: '좋아요'}),
    React.createElement(Button, { label: '싫어요'}),
  );
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);