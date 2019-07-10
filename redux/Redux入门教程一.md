Redux ���Ž̳̣�һ���������÷�
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
React ֻ�� DOM ��һ������㣬������ Web Ӧ�õ�����������������������棬��û�漰��

����ṹ
���֮���ͨ��
���ڴ��͵ĸ���Ӧ����˵����������ǡǡ����ؼ��ġ���ˣ�ֻ�� React û��д����Ӧ�á�

Ϊ�˽��������⣬2014�� Facebook ����� Flux �ܹ��ĸ�������˺ܶ��ʵ�֡�2015�꣬Redux ���֣��� Flux �뺯��ʽ��̽��һ�𣬺ܶ�ʱ���ھͳ�Ϊ�������ŵ�ǰ�˼ܹ���

������ϸ���� Redux �ܹ����������ݽ϶࣬ȫ�ķֳ��������֡������ǵ�һ���֣����ܻ���������÷���



�㡢����ܲ���Ҫ Redux
������ȷһ�㣬Redux ��һ�����õļܹ��������Ƿ��ò��ɡ���ʵ�ϣ���������������Բ�������ֻ�� React �͹��ˡ�

��������˵������һ�仰��

"����㲻֪���Ƿ���Ҫ Redux���Ǿ��ǲ���Ҫ����"

Redux �Ĵ����� Dan Abramov �ֲ�����һ�䡣

"ֻ������ React ʵ�ڽ�����˵����⣬�����Ҫ Redux ��"

��˵��������UI��ǳ��򵥣�û�кܶ໥����Redux ���ǲ���Ҫ�ģ����˷������Ӹ����ԡ�

�û���ʹ�÷�ʽ�ǳ���
�û�֮��û��Э��
����Ҫ�����������������Ҳû��ʹ�� WebSocket
��ͼ�㣨View��ֻ�ӵ�һ��Դ��ȡ����
������Щ�����������Ҫʹ�� Redux��

�û���ʹ�÷�ʽ����
��ͬ��ݵ��û��в�ͬ��ʹ�÷�ʽ��������ͨ�û��͹���Ա��
����û�֮�����Э��
���������������������ʹ����WebSocket
ViewҪ�Ӷ����Դ��ȡ����
������Щ������� Redux �����ó������ཻ����������Դ��

������Ƕȿ���������Ӧ�������³��������Կ���ʹ�� Redux��

ĳ�������״̬����Ҫ����
ĳ��״̬��Ҫ���κεط��������õ�
һ�������Ҫ�ı�ȫ��״̬
һ�������Ҫ�ı���һ�������״̬
�����������ʱ�������ʹ�� Redux ��������״̬�����ߣ�������һ�����ɴ���״̬�Ķ�д������ܿ�ͻ���һ�����顣����Ҫһ�ֻ��ƣ�������ͬһ���ط���ѯ״̬���ı�״̬������״̬�ı仯��

��֮����Ҫ�� Redux �������鵤��������Ӧ��û��ô���ӣ���û��Ҫ��������һ���棬Redux ֻ�� Web �ܹ���һ�ֽ��������Ҳ����ѡ������������

һ��Ԥ��֪ʶ
�Ķ����ģ���ֻ��Ҫ�� React��������� Flux���͸����ˣ���Ƚ��������һЩ��������Ǳ���ġ�

Redux �кܺõ��ĵ����������׵�С��Ƶ��ǰ30������30��������������Ķ����ģ���ȥ�ٷ�������ϸ�о���

�ҵ�Ŀ���ǣ��ṩһ������׶��ġ�ȫ������ż��ο��ĵ���

�������˼��
Redux �����˼��ܼ򵥣������仰��

��1��Web Ӧ����һ��״̬������ͼ��״̬��һһ��Ӧ�ġ�

��2�����е�״̬��������һ���������档

����ؼ�ס�����仰�����������ϸ���͡�

������������� API
3.1 Store
Store ���Ǳ������ݵĵط�������԰�������һ������������Ӧ��ֻ����һ�� Store��

Redux �ṩcreateStore����������������� Store��


import { createStore } from 'redux';
const store = createStore(fn);
��������У�createStore����������һ��������Ϊ���������������ɵ� Store ����

3.2 State
Store��������������ݡ������õ�ĳ��ʱ������ݣ���Ҫ�� Store ���ɿ��ա�����ʱ������ݼ��ϣ��ͽ��� State��

��ǰʱ�̵� State������ͨ��store.getState()�õ���


import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
Redux �涨�� һ�� State ��Ӧһ�� View��ֻҪ State ��ͬ��View ����ͬ����֪�� State����֪�� View ��ʲô������֮��Ȼ��

3.3 Action
State �ı仯���ᵼ�� View �ı仯�����ǣ��û��Ӵ����� State��ֻ�ܽӴ��� View�����ԣ�State �ı仯������ View ���µġ�Action ���� View ������֪ͨ����ʾ State Ӧ��Ҫ�����仯�ˡ�

Action ��һ���������е�type�����Ǳ���ģ���ʾ Action �����ơ��������Կ����������ã�������һ���淶���Բο���


const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
��������У�Action ��������ADD_TODO����Я������Ϣ���ַ���Learn Redux��

����������⣬Action ������ǰ���������顣�ı� State ��Ψһ�취������ʹ�� Action�������������ݵ� Store��

3.4 Action Creator
View Ҫ���Ͷ�������Ϣ���ͻ��ж����� Action���������д������鷳�����Զ���һ������������ Action����������ͽ� Action Creator��


const ADD_TODO = '��� TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
��������У�addTodo��������һ�� Action Creator��

3.5 store.dispatch()
store.dispatch()�� View ���� Action ��Ψһ������


import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
��������У�store.dispatch����һ�� Action ������Ϊ�������������ͳ�ȥ��

��� Action Creator����δ�����Ը�д���¡�


store.dispatch(addTodo('Learn Redux'));
3.6 Reducer
Store �յ� Action �Ժ󣬱������һ���µ� State������ View �Żᷢ���仯������ State �ļ�����̾ͽ��� Reducer��

Reducer ��һ�������������� Action �͵�ǰ State ��Ϊ����������һ���µ� State��


const reducer = function (state, action) {
  // ...
  return new_state;
};
����Ӧ�õĳ�ʼ״̬��������Ϊ State ��Ĭ��ֵ��������һ��ʵ�ʵ����ӡ�


const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});
��������У�reducer�����յ���ΪADD�� Action �Ժ󣬾ͷ���һ���µ� State����Ϊ�ӷ��ļ�����������������߼��������������Ҳ���Ը��� Action �Ĳ�ͬ��ʵ�֡�

ʵ��Ӧ���У�Reducer �������������������ֶ����ã�store.dispatch�����ᴥ�� Reducer ���Զ�ִ�С�Ϊ�ˣ�Store ��Ҫ֪�� Reducer �������������������� Store ��ʱ�򣬽� Reducer ����createStore������


import { createStore } from 'redux';
const store = createStore(reducer);
��������У�createStore���� Reducer ��Ϊ����������һ���µ� Store���Ժ�ÿ��store.dispatch���͹���һ���µ� Action���ͻ��Զ����� Reducer���õ��µ� State��

Ϊʲô����������� Reducer �أ���Ϊ��������Ϊ�����reduce�����Ĳ������뿴��������ӣ�һϵ�� Action ������˳����Ϊһ�����顣


const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 }
];

const total = actions.reduce(reducer, 0); // 3
��������У�����actions��ʾ���������� Action���ֱ��Ǽ�0����1�ͼ�2�������reduce�������� Reducer ������Ϊ�������Ϳ���ֱ�ӵõ����յ�״̬3��

3.7 ������
Reducer ��������Ҫ�������ǣ�����һ����������Ҳ����˵��ֻҪ��ͬ�������룬�ض��õ�ͬ���������

�������Ǻ���ʽ��̵ĸ��������������һЩԼ����

���ø�д����
���ܵ���ϵͳ I/O ��API
���ܵ���Date.now()����Math.random()�Ȳ����ķ�������Ϊÿ�λ�õ���һ���Ľ��
���� Reducer �Ǵ��������Ϳ��Ա�֤ͬ����State���ض��õ�ͬ���� View����Ҳ����Ϊ��һ�㣬Reducer �������治�ܸı� State�����뷵��һ��ȫ�µĶ�����ο������д����


// State ��һ������
function reducer(state, action) {
  return Object.assign({}, state, { thingToChange });
  // ����
  return { ...state, ...newState };
}

// State ��һ������
function reducer(state, action) {
  return [...state, newItem];
}
��ð� State �������ֻ������û���ı�����Ҫ�õ��µ� State��Ψһ�취��������һ���¶��������ĺô��ǣ��κ�ʱ����ĳ�� View ��Ӧ�� State ����һ������Ķ���

3.8 store.subscribe()
Store ����ʹ��store.subscribe�������ü���������һ�� State �����仯�����Զ�ִ�����������


import { createStore } from 'redux';
const store = createStore(reducer);

store.subscribe(listener);
��Ȼ��ֻҪ�� View �ĸ��º��������� React ��Ŀ�����������render������setState����������listen���ͻ�ʵ�� View ���Զ���Ⱦ��

store.subscribe��������һ��������������������Ϳ��Խ��������


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
�ġ�Store ��ʵ��
��һ�ڽ����� Redux �漰�Ļ���������Է��� Store �ṩ������������

store.getState()
store.dispatch()
store.subscribe()

import { createStore } from 'redux';
let { subscribe, dispatch, getState } = createStore(reducer);
createStore���������Խ��ܵڶ�����������ʾ State �����״̬����ͨ���Ƿ����������ġ�


let store = createStore(todoApp, window.STATE_FROM_SERVER)
��������У�window.STATE_FROM_SERVER��������Ӧ�õ�״̬��ʼֵ��ע�⣬����ṩ��������������Ḳ�� Reducer ������Ĭ�ϳ�ʼֵ��

������createStore������һ����ʵ�֣������˽�һ�� Store ����ô���ɵġ�


const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
�塢Reducer �Ĳ��
Reducer ������������ State����������Ӧ��ֻ��һ�� State ���󣬰����������ݣ����ڴ���Ӧ����˵����� State ��Ȼʮ���Ӵ󣬵��� Reducer ����Ҳʮ���Ӵ�

�뿴��������ӡ�


const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        statusMessage: payload
      });
    case CHANGE_USERNAME:
      return Object.assign({}, state, {
        userName: payload
      });
    default: return state;
  }
};
��������У����� Action �ֱ�ı� State ���������ԡ�

ADD_CHAT��chatLog����
CHANGE_STATUS��statusMessage����
CHANGE_USERNAME��userName����
����������֮��û����ϵ������ʾ���ǿ��԰� Reducer ������֡���ͬ�ĺ���������ͬ���ԣ����հ����Ǻϲ���һ����� Reducer ���ɡ�


const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
};
��������У�Reducer ���������������С������ÿһ���������ɶ�Ӧ�����ԡ�

����һ��Reducer ���׶���д���ˡ����ң����ֲ���� React Ӧ�õĽṹ���Ǻϣ�һ�� React ������ɺܶ���������ɡ������˵����������� Reducer ��ȫ���Զ�Ӧ��

Redux �ṩ��һ��combineReducers���������� Reducer �Ĳ�֡���ֻҪ��������� Reducer ������Ȼ������������������Ǻϳ�һ����� Reducer��


import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})

export default todoApp;
����Ĵ���ͨ��combineReducers������������ Reducer �ϲ���һ����ĺ�����

����д����һ��ǰ�ᣬ���� State ���������������� Reducer ͬ���������ͬ������Ҫ���������д����


const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})

// ��ͬ��
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
��֮��combineReducers()���ľ��ǲ���һ������� Reducer �������ú������� State �� key ȥִ����Ӧ���� Reducer���������ؽ���ϲ���һ����� State ����

������combineReducer�ļ�ʵ�֡�


const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {}
    );
  };
};
����԰������� Reducer ����һ���ļ����棬Ȼ��ͳһ���롣


import { combineReducers } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
������������
���ڶ� Redux �Ĺ������̣���һ������



���ȣ��û����� Action��


store.dispatch(action);
Ȼ��Store �Զ����� Reducer�����Ҵ���������������ǰ State ���յ��� Action�� Reducer �᷵���µ� State ��


let nextState = todoApp(previousState, action);
State һ���б仯��Store �ͻ���ü���������


// ���ü�������
store.subscribe(listener);
listener����ͨ��store.getState()�õ���ǰ״̬�����ʹ�õ��� React����ʱ���Դ���������Ⱦ View��


function listerner() {
  let newState = store.getState();
  component.setState(newState);
}
�ߡ�ʵ����������
������������һ����򵥵�ʵ����


const Counter = ({ value }) => (
  <h1>{value}</h1>
);

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}/>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
������һ���򵥵ļ�������Ψһ�����þ��ǰѲ���value��ֵ����ʾ����ҳ�ϡ�Store �ļ�����������Ϊrender��ÿ�� State �ı仯���ᵼ����ҳ������Ⱦ��

�������һ��仯��ΪCounter��ӵ����͵ݼ��� Action��


const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
�����Ĵ����뿴���

Redux �Ļ����÷��ͽ��ܵ������һ�ν������ĸ߼��÷����м�����첽������
