import React from 'react';
import "@fontsource/alegreya"

const Quote = ({quote, attribution}: { quote: string, attribution?: string }): JSX.Element => {
  return (
    <div className="quoteblock">
      <blockquote>
        <div className="paragraph">
          <p>{quote}</p>
        </div>
      </blockquote>
      {attribution != null ?
        <div className="attribution">
          — {attribution}
        </div>
        : <div/>
      }
    </div>);
};

export default Quote;
