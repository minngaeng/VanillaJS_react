let state;
export function useState(initialV) {
  if (state === undefined) {
    state = initialV;
  }

  const setState = (newV) => {
    state = newV;
    render();
  };

  return [state, setState];
}

export function Counter() {
  const [count, setCount] = useState(1);

  window.increment = () => {
    setCount(count + 1);
  };

  return `
    <div>
      <strong>${count}</strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}

/**
 * 콜백 함수를 지원하지 못하는 useState
 */
export function TodoApp() {
  const [todos, setTodos] = useState([]);

  window.add = () => {
    const input = document.querySelector('#input');
    const newTodo = input.value.trim();
    setTodos([...todos, newTodo]);
    input.value = '';
  };

  window.deleteTodo = (i) => {
    setTodos(todos.filter((_, index) => index !== i));
    render();
  };

  return `
    <div>
      <h2>TODO LIST</h2>
      <input id="input" type="text" placeholder="할 일을 입력하세요." />
      <button onclick="add()">추가</button>
      <ul>
        ${todos
          .map(
            (el, i) => `
          <div>
          <li id="list">${el}</li><button onclick="deleteTodo(${i})">삭제</button>
          </div>
          `,
          )
          .join(' ')}
      </ul>
    </div>
  `;
}

export function render() {
  const root = document.querySelector('#root');

  root.innerHTML = TodoApp();
}

render();

// 무한루프문제 생각해보기
