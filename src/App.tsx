import React, { useState } from 'react';
import './App.scss';
import AppLogo from './components/AppLogo/AppLogo';

function App() {
  const [backwardsDisabled, setBackwardsDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  return (
    <div className="App">
      <section className="history-btn-section">
        <button className="history-btn backward-btn" disabled={backwardsDisabled}>
          Backward
        </button>
        <button className="history-btn forward-btn" disabled={forwardDisabled}>
          Forward
        </button>
      </section>
      {/* <AppLogo posX={} posY={}/> */}
    </div>
  );
}

export default App;
