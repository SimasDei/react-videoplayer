import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';

const WbnPlayer = props => {
  return (
    <>
      <NightMode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  );
};

export default WbnPlayer;
