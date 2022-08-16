import './index.css';
import React from 'react';
interface IProps{ 
  children:  React.ReactNode
}
function App(props:IProps) {
  return (
    <div className="App">
      {
        props.children
      }
    </div>
  );
}

export default App;