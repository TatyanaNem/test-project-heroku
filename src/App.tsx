import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';

type ShowType = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
}

function App() {
  let [show, setShow] = useState<ShowType[]>([])
  const useShowUp = () => {
          fetch('https://jsonplaceholder.typicode.com/todos')
              .then(response => response.json())
              .then(json => setShow(json))
  }
  const deleteAll = () => {
      setShow([])
  }

  return (
    <div className="App">
      <Button name={'Show me'} callback={useShowUp} />
        <Button name={'Delete all'} callback={deleteAll} />
      <ul>
          {show.map(el => {
              return (
                  <li key={el.id}>
                      <span>{el.userId}</span>
                      <span>{el.title}</span>
                      <input onChange={() => {}} type='checkbox' checked={el.completed}/>
                  </li>
              )
          })}
      </ul>
    </div>
  );
}

export default App;
