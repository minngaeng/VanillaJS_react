import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main";

const vdom = React.createElement(App);

// VDOM 구조를 간단화하여 출력하는 함수
function simplifyVDOM(element) {
  if (typeof element === "string") {
    return element;
  }

  if (typeof element.type === "function") {
    // 함수형 컴포넌트의 경우 렌더링 결과를 재귀적으로 처리
    return simplifyVDOM(element.type(element.props));
  }

  const props = { ...element.props };
  if (props.children) {
    props.children = Array.isArray(props.children)
      ? props.children.map(simplifyVDOM)
      : simplifyVDOM(props.children);
  }

  return {
    type: element.type,
    props,
  };
}

// 간단화된 VDOM 구조를 콘솔에 출력
console.log(JSON.stringify(simplifyVDOM(vdom), null, 2));

// 실제 DOM에 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
