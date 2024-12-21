import React, { JSX } from 'react';
import Layout from '../components/Layout';
import {getAllPosts, Post} from "../lib/posts";
import {GetStaticProps} from "next";
import PostList from "../components/posts/PostList";

export const Blog = ({posts}: { posts: Post[] }): JSX.Element => {
  return (
    <Layout>
      <div>
        <div className="container max-w-4xl	mx-auto px-12 py-6 text-base">
          <h1
            className="font-[Alegreya] text-2xl font-normal">Blog Posts</h1>
          <PostList
            listClass="pl-4"
            posts={posts}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {posts},
  };
};

export default Blog;
