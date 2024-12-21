import React from 'react';
import "@fontsource/alegreya"
import PostLink from "./PostLink";
import {Post} from "../../lib/posts";
import Link from "next/link";
import { JSX } from 'react/jsx-runtime';

const PostList = ({posts, listClass, limit}: { posts: Post[], listClass: string, limit?: number }): JSX.Element => {
  const isLimited = posts.length > limit;
  return (
    <div className={listClass}>
      <ul className="list-disc">
        {posts
          .slice(0, limit || posts.length)
          .map((post) => (
            <li key={post.title}>
              <PostLink
                post={post}/>
            </li>
          ))}
      </ul>
      {isLimited
        ? <Link className="text-gray-600 inline-block	pt-2" as={`/blog`} href={`/blog`}>More posts ...</Link>
        : <div/>
      }
    </div>
  );
};

export default PostList;
