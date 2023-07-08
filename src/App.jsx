import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
import MemoComponent from './pages/MemoComponent';
import CustomHook from './pages/CustomHook';
import Product from './pages/Product';
import LoginButton from './components/LoginButton';
import ReduxComponent from './pages/ReduxComponent';
import Login from './pages/TodoApp/Login';
import User from './components/User';
import Todo from './pages/TodoApp/Todo';
import Portals from './pages/Portals';
import UseSafeState from './pages/UseSafeState';

// selectors
import { isAuthSelector } from './reducers/app.selector';

function App() {
  const [count, setCount] = useState(0); // local state
  const number = 11;
  const [forceUpdate, setForceUpdate] = useState(Date.now()); // local state
  const [movie, setMovie] = React.useState({
    title: 'javascript',
    releaseDate: 18
  })
  const isAuth = useSelector(isAuthSelector);


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

  const handleUpdateMovie = React.useCallback(() => {
    console.log('movie: ', movie, count) //0
    setMovie(prevState => ({
      ...prevState,
      title: 'learn angular'
    }))
  }, [movie])

  // useMemo
  // const totalTodos = React.useMemo(() => {
  //   console.log("useMemo")
  //   return Object.keys(movie).length
  // }, [])
  const totalTodos = React.useCallback(() => {
    return Object.keys(movie).length
  }, [])

  console.log('totalTodos: ', { totalTodos })

  // test error boundaries
  // const demoBoundaries = numbers.map(item => item);

  return (
    <>
      <h1>Vite + React</h1>


      <User />

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

        <h3>Props</h3>
        <Props 
          title="123" // string
          age={1} // number
          user={{
            age: 19
          }} // object
          isAuth={true} // boolean
          onClick={() => {}} // function
          renderButton={<Button />} // react element
          renderButtonType={LoginButton} // react type element
        >
            this is children
        </Props>
          

       
        <br />
        <h3>useRef</h3>
        <UseRef />
        <br />
        <h3>Memo hooks</h3>
        <MemoComponent 
          title={movie.title}
          releaseDate={movie.releaseDate}
          handleUpdateMovie={handleUpdateMovie}
        />
        <h3>useMemo</h3>
          {totalTodos()}
        <br />

        <h3>Custom hook</h3>
        <CustomHook />

        <Product />

        <h3>Redux</h3>
        <ReduxComponent firstName="truong" id={123} />
        <br />
        <br />

        <h3>Mini App: Todo with Redux</h3>
        <Login />

        {isAuth && <Todo />}
        <br />

        <h1>Portals</h1>
        <Portals />
        <br />

        <h1>
          UseSafeState just appl for react {"<"} v18
        </h1>
        <UseSafeState />
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