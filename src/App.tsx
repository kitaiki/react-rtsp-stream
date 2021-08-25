import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    JSMpeg: any;
  }
}
const { JSMpeg } = window;

function App() {
  const [url] = useState('ws://localhost:9999');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    new JSMpeg.Player(url, { canvas: canvasRef.current });
  }, [url]);

  return (
    <div className="App">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
