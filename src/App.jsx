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
        <h3>Props</h3>
        <Props 
          // title="truong" // string
          age={123} // number
          colors={['red', 'green', 'blue']} // array
          user={{ name: 'John', age: 20 }} // object
          count={count} // number
          isActive // boolean
          isFemale={false} // boolean
          listTodos={listTodos} // function
          renderNumber={renderElement_1} // react node (react component)
          buttonComponent={<Button text="Button Props" />} // react node (react component)
        >
          this a children tony react props
        </Props>


        <br />
        <h3>State</h3>
        <State />

        <br />
        <h3>Handle Event</h3>
        <HandleEvent /> 

        <br />
        <h3>Conditional Rendering</h3>
        <ConditionalRendering />
 
        <br />
        <h3>List</h3>
        <List />

        
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