import { TwitterTimelineEmbed } from 'react-twitter-embed';
import React from 'react';

const UseTwitter = () => {
  return ( 
      <div className="centerContent">
<div className="selfCenter standardWidth">
<TwitterTimelineEmbed sourceType="profile" userId={1934309676} options={{height: 560}} />
</div>
</div>
   );
}
 
export default UseTwitter;