import React, { useState, useEffect } from 'react';

import Pages from './pages';

import './App.css';

function App() {
    const [uset, setUser] = useState(null);
    useEffect(() => {
      //NOTE Use your github username below
      fetch('https://gitconnected.com/v1/portfolio/jebitok-dev')
      .then(res => res,json())
      .then(user => {
        setyUsert(user);
      });
    }, []);

    if (!user) {
      return <div />
    }


  return <Pages user={user} />;   
}

export default App;
