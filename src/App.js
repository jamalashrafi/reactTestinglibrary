import { useState } from 'react';
import './App.css';

export const removeCamleWithSpaces = name => {
  return name.replace(/\B([A-Z])\B/g, ' $1');
}
function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [changeBtnState, setChangeBtnState] = useState(true);

  return (
    <div className="App">
      <button style={{ backgroundColor: isClicked ? 'red' : 'blue' }} disabled={changeBtnState}
        onClick={() => setIsClicked(!isClicked)}>Click Me!</button>

      <input type="checkbox" onChange={() => setChangeBtnState(!changeBtnState)} />
    </div>
  );
}

export default App;

//onChange={() => setChangeBtnState(!changeBtnState)}
