//pages/sitemap.xml.js

import {WEBSITE_HOST_URL} from "../lib/paths";
import {postUrlPaths} from "../utils/mdxUtils";

function generateSiteMap(postPaths) {
  // language=XML
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${WEBSITE_HOST_URL}</loc>
    </url>
    <url>
      <loc>${WEBSITE_HOST_URL}/blog</loc>
    </url>
    <url>
      <loc>${WEBSITE_HOST_URL}/talks</loc>
    </url>
    ${postPaths.map((path) => {
      return `
       <url>
           <loc>${WEBSITE_HOST_URL}/posts/${escapeXml(path)}</loc>
       </url>
     `;
    })
      .join('')}
  </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

// source:
// https://stackoverflow.com/questions/7918868/how-to-escape-xml-entities-in-javascript
function escapeXml(str) {
  return str.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

export async function getServerSideProps({res}) {
  // We make an API call to gather the URLs for our site
  const postPaths = postUrlPaths;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(postPaths);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;