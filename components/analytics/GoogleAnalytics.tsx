import React from 'react';
import Script from "next/script";

const GoogleAnalytics = (): JSX.Element => {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L69QZ613JT"
        strategy="afterInteractive"/>
      <Script
        id="google-analytics"
        strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L69QZ613JT');
        `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;
