import React, { useEffect, useState } from 'react';
import Player from './Player';

const fakeFetch = (url) => new Promise(resolve => setTimeout(() => {
  resolve({
    type: 'video',
    sources: [
      {
        src:
          'https://rawcdn.githack.com/chintan9/Big-Buck-Bunny/e577fdbb23064bdd8ac4cecf13db86eef5720565/BigBuckBunny720p30s.mp4',
        type: 'video/mp4',
        size: 720,
      },
      {
        src:
          'https://rawcdn.githack.com/chintan9/Big-Buck-Bunny/e577fdbb23064bdd8ac4cecf13db86eef5720565/BigBuckBunny1080p30s.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ]
  })
}, 1000));

function App() {
  const [source, setSource] = useState(null);

  const fetchVideoData = async () => {
    const response = await fakeFetch();
    setSource(response);
  }

  useEffect(() => {
    fetchVideoData();
  });

  return (
    <Player
      source={source}
    />
  );
}

export default App;
