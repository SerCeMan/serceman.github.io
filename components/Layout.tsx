import React, { JSX } from 'react';
import {MetaProps} from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Analytics from "./analytics/Analytics";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({children, customMeta}: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta}/>
      <header
        style={{
          backgroundColor: "#f8f8f8"
        }}
        // relative is only needed for shadows to work, so what makes it absolute?
        className="relative shadow-md">
        <div className="max-w-5xl px-8 py-1 mx-auto">
          <div className="flex items-center justify-between">
            <Navigation/>
          </div>
        </div>
      </header>
      <main>
        <div>
          {children}
        </div>
        <Analytics/>
      </main>
    </>
  );
};

export default Layout;
