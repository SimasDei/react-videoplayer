import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistItem active={active} played={played}>
  </StyledPlaylistItem>
);

export default PlaylistItem;