import React, { useState } from 'react';
import './App.scss';
import AppLogo from './components/AppLogo/AppLogo';

function App() {
  const [backwardsDisabled, setBackwardsDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [circleElsArr, setCircleElsArr]: any[] = useState([]);
  const [currentIndexInHistory, setCurrentIndexInHistory]: any[] = useState(0);

  const addCircleToScreen = (e: React.MouseEvent<HTMLElement>) => {
    const newCoordinate = { x: e.clientX, y: e.clientY };
    setCurrentIndexInHistory(currentIndexInHistory + 1);
    console.log('Added circle ', currentIndexInHistory);
    const newCircle = (
      <AppLogo
        id={`circle-${currentIndexInHistory}`}
        key={currentIndexInHistory}
        coordinate={newCoordinate}
      />
    );
    setCircleElsArr([...circleElsArr, newCircle]);
  };

  const handleBackwards = () => {
    setCircleElsArr([]);
  };

  return (
    <div className="App" onClick={(e) => addCircleToScreen(e)}>
      <section className="history-btn-section">
        <button
          className="history-btn backward-btn"
          disabled={backwardsDisabled}
          onClick={handleBackwards}
        >
          Backward
        </button>
        <button className="history-btn forward-btn" disabled={forwardDisabled}>
          Forward
        </button>
      </section>
      {circleElsArr}
    </div>
  );
}

export default App;
