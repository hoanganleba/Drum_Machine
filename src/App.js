import React, { useState } from 'react';
import DrumPad from './DrumPad';
import {data} from './data';
function App() {
  const [display, setDisplay] = useState('Click or press the key')
  function handleDisplay(display) {
    setDisplay(display)
  }
  return (
    <div id="drum-machine">
      <div className="drum-pad-container">
        <h1 id="display">{display}</h1>
        {data.map(item => (
          <DrumPad
            key={item.id}
            id={item.id}
            letter={item.letter}
            src={item.src}
            handleDisplay={handleDisplay.bind(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
