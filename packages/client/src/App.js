import React, { useEffect, useState } from 'react';
import Player from './Player';

function App() {
  const [source, setSource] = useState(null);

  const fetchVideoData = async () => {
    const rawVideoResponse = await fetch('http://172.29.1.201:3002/video/12345');
    const video = await rawVideoResponse.json();

    const rawTokenResponse = await fetch('http://172.29.1.201:3002/video/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sources: video.sources.map(s => s.src),
      }),
    });

    const { sources } = await rawTokenResponse.json();

    const source = {
      type: 'video',
      sources: video.sources.map((s, i) => ({ ...s, src: sources[i] })),
    };

    setSource(source);
  }

  useEffect(() => {
    fetchVideoData();
  }, []);

  return (
    <Player
      title="Big Buck Bunny"
      source={source}
    />
  );
}

export default App;
