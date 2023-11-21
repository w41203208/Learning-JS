import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { _craeteBlobObjectURL } from './service/util';
import workerfunc from './service/worker';

import logo from './logo.svg';
import './App.css';

function App() {
  const [sum, setSum] = useState<number>(0);
  const divRef = useRef<HTMLElement>(null);
  const url = _craeteBlobObjectURL(workerfunc);

  useEffect(() => {}, []);
  const changeColor = (color: string) => {
    divRef.current!.style.backgroundColor = color;
  };
  const addWithThread = () => {
    const worker = new Worker(url!);
    worker!.postMessage([0, 2000000000]);
    worker!.onmessage = (e: any) => {
      const data = e.data;
      setSum(data);
    };
    setTimeout(() => {
      console.log('test set timeout');
    }, 1000);
    console.log('before for');
    doSomething();
    console.log('after for');
  };
  const doSomething = () => {
    for (var j = 0; j < 2000000000; j++) {}
  };
  const closeWorker = () => {
    // worker!.terminate();
  };
  return (
    <div className="App">
      <header className="App-header" ref={divRef}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="btn" onClick={() => addWithThread()}>
          click to run in child thread
        </button>
        <button className="btn" onClick={() => closeWorker()}>
          click to close worekr
        </button>
        <button className="btn" onClick={() => changeColor('salmon')}>
          change background color to salmon
        </button>
        <button className="btn" onClick={() => changeColor('black')}>
          change background color to black
        </button>
        <div>{sum}</div>
        <Routes>
          <Route path="/hi" />
        </Routes>
        <NavLink to={'hi'} style={{ color: 'red' }}>
          Go to hi page
        </NavLink>
      </header>
    </div>
  );
}

export default App;
