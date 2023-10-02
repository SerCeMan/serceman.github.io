import React from 'react';
import "@fontsource/alegreya"

const ImageWithCaption = ({src, alt, caption}) => {
    return (
        <figure style={{textAlign: 'center', paddingBottom: '1.5em'}}>
            <img src={src} alt={alt} style={{maxWidth: '100%'}}/>
            {caption &&
                <figcaption style={{
                    paddingTop: '1em',
                    fontFamily: 'sans-serif',
                    fontSize: '1em',
                    color: '#777'
                }}>{caption}</figcaption>}
        </figure>
    );
};

export default ImageWithCaption;
