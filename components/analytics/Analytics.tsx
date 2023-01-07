import React from 'react';
import Script from "next/script";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const CloudflareAnalytics = (): JSX.Element => {
  return (
    <Script
      src='https://static.cloudflareinsights.com/beacon.min.js'
      data-cf-beacon='{"token": "a7f4e843f6de47398fd9a6ea1da66c09"}'
      strategy="afterInteractive"
    />
  )
}

export default CloudflareAnalytics;
