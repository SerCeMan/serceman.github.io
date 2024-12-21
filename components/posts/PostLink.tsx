import React, { JSX } from 'react';
import "@fontsource/alegreya"
import {Post} from "../../lib/posts";
import Link from "next/link";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {formatDate} from "../../utils/dates";

const PostLink = ({post}: { post: Post }): JSX.Element => {
  return (
    <div>
      <h4
        className="font-[Alegreya] text-lg py-1">{formatDate(post.date)}</h4>
      {post.kind === "external"
        ? <Link href={post.canonicalLink}>
            <span className="flex flex-row items-center">
            {post.title}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 pl-1"/>
            </span>
        </Link>
        : <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
          {post.title}
        </Link>}
    </div>
  );
};

export default PostLink;
