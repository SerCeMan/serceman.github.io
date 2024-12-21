import React, {JSX, useEffect} from 'react';

const CanvaEmbed = ({designID}: {designID: string}): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.canva.com/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="canva-embed"
      data-design-id={designID}
      data-height-ratio="0.5625"
      style={{
        padding: '56.2500% 5px 5px 5px',
        background: 'rgba(0,0,0,0.03)',
        borderRadius: '8px'
      }}
    >
    </div>
  );
};

export default CanvaEmbed;
