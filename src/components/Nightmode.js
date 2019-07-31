import React from 'react';

import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({ nightMode, nightModeCallback }) => {
  return (
    <StyledNightmode>
      <span>Nightmode: </span>
      <label htmlFor="nightmodeSwitch" className="switch" />
      <input
        type="checkbox"
        checked={nightMode}
        onChange={nightModeCallback}
        id="nightmodeSwitch"
      />
      <span className="slider round" />
    </StyledNightmode>
  );
};

export default Nightmode;
