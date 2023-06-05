import { useState } from 'react';

// component
import Course from './pages/Course';
import FormSubmit from './pages/FormSubmit';
import StatelessComponent from './pages/StatelessComponent';
import ComposeComponent from './pages/ComposeComponent';
import Props from './pages/Props';
import Button from './components/Button';
import State from './pages/State';
import HandleEvent from './pages/HandleEvent';
import ConditionalRendering from './pages/ConditionalRendering';
import List from './pages/List';
import LifitingStateUp from './pages/LifitingStateUp';
import Form from './pages/Form';
import HookLifecycle from './pages/HookLifecycle';
import StateHook from './pages/StateHook';
import UseReducer from './pages/UseReducer';
import UseEffect from './pages/UseEffect';
import Books from './pages/Books';
import UseRef from './pages/UseRef';

function App() {
  const [count, setCount] = useState(0); // local state
  const number = 11;
  const [forceUpdate, setForceUpdate] = useState(Date.now()); // local state

  console.log('App render')

  function listTodos() {
    return ['todo 1', 'todo 2'];
  }

  // expression
  const renderElement_1 = (
    <>
      <h2>Hello, world!</h2>
      <h2>Hello, world 2!</h2>
    </>
  );

  const renderNumber = () => {
    return (
      <div>Number: {number + 10}</div>
    )
  }

  const user = {
    name: 'John',
    image: 'https://thumbs.dreamstime.com/z/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'
  }

  return (
    <>
      <h1>Vite + React</h1>

      <div>Number: {number + 20}, {listTodos().length}</div>

      {renderElement_1}

      {renderNumber()}

      <div className="card">
        <button 
          onClick={() => {
            setCount((count) => count + 1)
            setForceUpdate(Date.now())
          }}
        >
          count is {count}
        </button>
        <br />

        {/* element must be close tag */}
        <div />
        <input type="text" placeholder="Enter your name" />

        Name: {user.name}
        <img src={user.image} />
        <br />
        <hr />
        <br />
 
        {/* using component in jsx */}
        <Course />

        <FormSubmit key={forceUpdate} />

        <br />
        <h3>Stateless Component</h3>
        <StatelessComponent title="truong" firstName="linh" age="123" />
        <StatelessComponent title="dung" firstName="Thanh" age="321321" />
        <StatelessComponent title="khoi" firstName="dang" age="31231" />

        <br />
        <h3>Compose Component</h3>
        <ComposeComponent />

       
        <br />
        <h3>useRef</h3>
        <UseRef />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default App


/*
pageA -> button 
pageB -> button + 2

*/