import React from 'react';
import Layout from '../components/Layout';
import {getAllPosts, Post} from "../lib/posts";
import {GetStaticProps} from "next";
import PostList from "../components/posts/PostList";

type IndexProps = {
  posts: Post[];
};

export const Blog = ({posts}: IndexProps): JSX.Element => {
  return (
    <Layout>
      <div>
        <div className="container max-w-5xl	mx-auto px-12 py-6 text-base">
          <h1
            style={{
              fontFamily: 'Alegreya',
            }}
            className="text-2xl font-normal">Blog Posts</h1>
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
