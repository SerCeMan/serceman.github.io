import {Feed} from "feed";
import {getAllPosts, getCanonicalImageURL, getCanonicalURL} from "./posts";
import fs from "fs";
import {AUTHOR_NAME, BLOG_DESCRIPTION, BLOG_TITLE} from "../utils/author";
import {WEBSITE_HOST_URL} from "./paths";

export async function generateRss() {
  const feed = new Feed({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    id: WEBSITE_HOST_URL,
    link: WEBSITE_HOST_URL,
    language: "en",
    image: `${WEBSITE_HOST_URL}/images/me.jpg`,
    favicon: `${WEBSITE_HOST_URL}/favicon.ico`,
    copyright: `Released under CC BY 4.0, ${AUTHOR_NAME}`,
    generator: "awesome",
    author: {
      name: AUTHOR_NAME,
      link: WEBSITE_HOST_URL
    },
  });

  const posts = getAllPosts();
  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: getCanonicalURL(post),
      link: getCanonicalURL(post),
      description: post.description,
      date: new Date(post.date),
      image: getCanonicalImageURL(post),
    });
  });
  fs.writeFileSync("./public/feed.xml", feed.rss2());
}