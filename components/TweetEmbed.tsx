import React, {useEffect} from 'react';

export const TweetEmbed = ({children}: {children: React.ReactNode}): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default TweetEmbed;
