import React from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Content = () => (
  <div>
    <div style={{width: '50%', float: 'left'}}>
      <LeftSide />
    </div>
    <div style={{width: '50%', float: 'right'}}>
      <RightSide />
    </div>
  </div>
);

export default Content;
