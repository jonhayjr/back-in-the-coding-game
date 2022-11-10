import {useState} from 'react';
import './App.css';

import Header from './components/Header'
import Counter from './components/Counter';
import NameInput from './components/NameInput';

const App = () =>{
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const decreaseCount = () => {
    clearMessage();
    setCount(prevCount => {
      if (prevCount - 1 < 0) {
        setMessage('Count cannot be less than 0.')
        return 0
      }
      return prevCount -1
    })
  }

  const increaseCount = () => {
    clearMessage();
    setCount(prevCount => prevCount + 1)
  }

  const clearMessage = () => {
    setMessage('');
  }

  return (
    <div className="container">
      <Header title="Back in the Game"/>
      <Counter count={count} handleDecrease={decreaseCount} handleIncrease={increaseCount} message={message}/>
      <NameInput/>
    </div>
  );
}

export default App;
