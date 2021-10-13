import './App.css';
import {useState, useCallback} from 'react';
import NanoSvg from './NanoSvg.js';
import algoInverted from './AlgoInverted.png';


function App() {
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [hover, setHover] = useState(null)
  const [cursorWidth, setCursorWidth] = useState(0);

  const handleMouseMove = useCallback((event) => {
    const {clientX, clientY} = event;
    setMousePos({x: clientX, y: clientY});
  }, [setMousePos]);

  const handleMouseOver = useCallback((event) => {
    setHover('Hovered');
    setCursorWidth(50);
    //console.log('Hovered');
  }, [setHover])

  const handleMouseOut = useCallback((event) => {
    setHover(null);
    setCursorWidth(40);
    //console.log('Out')
  }, [setHover])

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`cursorDiv ${hover}`}
        style={{
          position: 'absolute',
          width: `${cursorWidth}px`,
          height: `${cursorWidth}px`,
          borderRadius: `${cursorWidth}px`,
          left: mousePos.x - cursorWidth/2,
          top: mousePos.y - cursorWidth/2,
          zIndex: 1,
          backgroundColor: 'none'}}>
      </div>
      <div
        className="SVGContain"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <div
          className="SVGScaleContain"
          style={{width: '35%'}}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          <NanoSvg/>
          <p>
            <span className="artistName">JMEELA - </span>
            <span className="songName">Jmeela</span>
          </p>
          <img style={{width: '70px'}} src={algoInverted}/>
        </div>
      </div>
    </div>
  );
}

export default App;
