import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isTop,setIsTop] = useState(false);

  useEffect(()=>{
    moveToTop();
  },[])

  function moveToTop(){
    setTimeout(()=>{
        setIsTop(true);
    },1000)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2 className={`title ${isTop ? "top" : ""}`}>Shoe'pify</h2>
      </header>
    </div>
  );
}

export default App;
