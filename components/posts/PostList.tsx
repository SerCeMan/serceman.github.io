import React from 'react';
import "@fontsource/alegreya"
import PostLink from "./PostLink";
import {Post} from "../../lib/api";

const PostList = ({posts, listClass}: { posts: Post[], listClass: string }): JSX.Element => {
  return (
    <div className={listClass}>
      <ul className="list-disc">
        {posts.map((post) => (
          <li key={post.title}>
            <PostLink
              post={post}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
