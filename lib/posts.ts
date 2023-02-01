import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import {POSTS_PATH} from '../utils/mdxUtils';

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export type MdxPost = {
  kind: "mdx";
  title: string;
  date: string;
  content?: string;
  description: string;
  image?: string;
  slug: string;
}

export type ExternalPost = {
  kind: "external";
  date: string;
  title: string;
  description: string;
  image?: string;
  canonicalLink: string,
}

export type Post = MdxPost | ExternalPost

function getMdxPostBySlug(slug: string, includeContent: boolean): MdxPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);
  return {
    title: data['title'],
    date: data['date'],
    content: includeContent ? content : null,
    description: data['description'],
    image: data['image'],
    slug: realSlug,
    kind: "mdx"
  }
}

function getMdxPosts(includeContent: boolean): MdxPost[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getMdxPostBySlug(slug, includeContent))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

function getExternalPosts(): ExternalPost[] {
  return [{
    kind: "external",
    title: "Enabling real-time collaboration with RSocket",
    date: "2021-05-27",
    description: "This post describes how we empowered our millions of users at Canva " +
      "to collaborate at scale by introducing services that support bidirectional " +
      "streaming using RSocket.",
    canonicalLink: "https://canvatechblog.com/enabling-real-time-collaboration-with-rsocket-92416fe52650",
  }]
}

export function getAllPosts(includeContent = false): Post[] {
  const mdxPosts = getMdxPosts(includeContent) as Post[];
  const externalPosts = getExternalPosts();
  return mdxPosts.concat(externalPosts)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
