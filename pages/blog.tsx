import React from 'react';
import Layout from '../components/Layout';
import {format, parseISO} from "date-fns";
import Link from "next/link";
import {PostType} from "../types/post";
import {GetStaticProps} from "next";
import {getAllPosts} from "../lib/api";

type IndexProps = {
  posts: PostType[];
};


export const Blog = ({posts}: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - SerCe\'s blog',
      }}
    >
      <div>
        <div className="container max-w-5xl	mx-auto px-12 py-6 text-base">
          <h1>Posts</h1>
          <div className="pl-4">
            <ul className="list-disc">
              {posts.map((post) => (
                <li key={post.title}>
                  <h4
                    style={{
                      fontFamily: 'Alegreya',
                    }}
                    className="text-lg py-1">{format(parseISO(post.date), 'MMMM dd, yyyy')}</h4>
                  <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`} legacyBehavior>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: {posts},
  };
};

export default Blog;
