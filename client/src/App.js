import React from 'react';
import axios from 'axios';


function App() {
  const makeReq = () => {
    axios.get('/topstories');
  }
  return (
    <div className="App">
      <button onClick={makeReq}>Test</button>
    </div>
  );
}

export default App;
