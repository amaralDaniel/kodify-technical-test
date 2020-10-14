import React, { useEffect, useState } from 'react';
import Player from './Player';

function App() {
  const [source, setSource] = useState(null);

  const fetchVideoData = async () => {
    const response = await fetch('http://localhost:30001/video/12345');
    const data = await response.json();

    const source = {
      type: 'video',
      sources: data.sources,
    };

    setSource(source);
  }

  useEffect(() => {
    fetchVideoData();
  });

  return (
    <Player
      title="Big Buck Bunny"
      source={source}
    />
  );
}

export default App;
