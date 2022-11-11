import React, { ReactElement, SetStateAction, useEffect, useState } from 'react';
import './App.scss';
import AppLogo from './components/AppLogo/AppLogo';

function App() {
  const [backwardsDisabled, setBackwardsDisabled] = useState(false);
  const [forwardDisabled, setForwardDisabled] = useState(true);
  const [circleElsArr, setCircleElsArr]: [ReactElement[], React.Dispatch<SetStateAction<any>>] =
    useState([]);
  const [currentIndexInHistory, setCurrentIndexInHistory]: any[] = useState(0);

  const addCircleToScreen = (e: React.MouseEvent<HTMLElement>) => {
    // Only add circles on the 'App' div.
    if (e.target !== e.currentTarget) return;
    // Create a new circle element
    const newCoordinate = { x: e.clientX, y: e.clientY };
    const newCircle = (
      <AppLogo
        id={`circle-${currentIndexInHistory}`}
        key={currentIndexInHistory}
        coordinate={newCoordinate}
      />
    );
    // Add new circle element to array
    setCircleElsArr([...circleElsArr.slice(0, currentIndexInHistory), newCircle]);
    console.log('Added circle ', currentIndexInHistory);
    setCurrentIndexInHistory(currentIndexInHistory + 1);
  };

  const handleBackwards = (e: React.MouseEvent<HTMLElement>) => {
    setCurrentIndexInHistory(currentIndexInHistory - 1);
    console.log('Removed circle ', currentIndexInHistory - 1);
  };
  const handleForwards = (e: React.MouseEvent<HTMLElement>) => {
    console.log('Added back circle ', currentIndexInHistory);
    setCurrentIndexInHistory(currentIndexInHistory + 1);
  };

  useEffect(() => {
    currentIndexInHistory === 0 ? setBackwardsDisabled(true) : setBackwardsDisabled(false);
    currentIndexInHistory === circleElsArr.length
      ? setForwardDisabled(true)
      : setForwardDisabled(false);
  }, [circleElsArr.length, currentIndexInHistory]);
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
        <button
          className="history-btn forward-btn"
          disabled={forwardDisabled}
          onClick={(e) => handleForwards(e)}
        >
          Forward
        </button>
      </section>
      {circleElsArr.filter((el: any) => el.key < currentIndexInHistory)}
    </div>
  );
}

export default App;
