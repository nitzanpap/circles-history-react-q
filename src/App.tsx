import React, { useState } from 'react';
import './App.scss';
import AppLogo from './components/AppLogo/AppLogo';

function App() {
  const [backwardsDisabled, setBackwardsDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [circleElsArr, setCircleElsArr]: any[] = useState([]);
  const [currentIndexInHistory, setCurrentIndexInHistory]: any[] = useState(0);

  const addCircleToScreen = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    setCurrentIndexInHistory(currentIndexInHistory + 1);
    const newCoordinate = { x: e.clientX, y: e.clientY };
    const newCircle = (
      <AppLogo
        id={`circle-${currentIndexInHistory}`}
        key={currentIndexInHistory}
        coordinate={newCoordinate}
      />
      );
    setCircleElsArr([...circleElsArr, newCircle]);
    console.log('Added circle ', currentIndexInHistory);
  };

  const handleBackwards = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(circleElsArr.slice(-1)[0].key);
    const lastShownEl = document.querySelector(
      `#circle-${currentIndexInHistory - 1}`
    ) as HTMLElement;
    console.log(currentIndexInHistory);
    lastShownEl.remove();
    setCurrentIndexInHistory(currentIndexInHistory - 1);
  };

  return (
    <div className="App" onClick={(e) => addCircleToScreen(e)}>
      <section className="history-btn-section">
        <button
          className="history-btn backward-btn"
          disabled={backwardsDisabled}
          onClick={(e) => handleBackwards(e)}
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
