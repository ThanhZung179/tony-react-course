import { useState } from 'react';

// component
import Course from './pages/Course';
import FormSubmit from './pages/FormSubmit';
import StatelessComponent from './pages/StatelessComponent';

function App() {
  const [count, setCount] = useState(0);
  const number = 11;

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
        <button onClick={() => setCount((count) => count + 1)}>
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

        <FormSubmit />

        <br />
        <h3>Stateless Component</h3>
        <StatelessComponent title="truong" firstName="linh" age="123" />
        <StatelessComponent title="dung" firstName="Thanh" age="321321" />
        <StatelessComponent title="khoi" firstName="dang" age="31231" />
    
      </div>
    </>
  )
}

export default App
