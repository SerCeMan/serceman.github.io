import NextHead from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import {MetaProps} from '../types/layout';

export const WEBSITE_HOST_URL = 'https://serce.me';

const Head = ({customMeta}: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: "SerCe's blog",
    description: 'SerCe\'s blog: Here is my personal blog where I share my ' +
      'thoughts and experiences with different technologies.',
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description"/>
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`}/>
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`}/>
      <meta property="og:type" content={meta.type}/>
      <meta property="og:site_name" content={meta.title}/>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:title" content={meta.title}/>
      {meta.image &&
        <meta property="og:image" content={meta.image}/>}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@SerCeMan"/>
      <meta name="twitter:title" content={meta.title}/>
      <meta name="twitter:description" content={meta.description}/>
      {meta.image &&
        <meta name="twitter:image" content={meta.image}/>}
      {meta.date && (
        <meta property="article:published_time" content={meta.date}/>
      )}
    </NextHead>
  );
};

export default Head;
