import React from 'react';
import "@fontsource/alegreya"
import {Post} from "../../lib/posts";
import {format, parseISO} from "date-fns";
import Link from "next/link";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostLink = ({post}: { post: Post }): JSX.Element => {
  return (
    <div>
      <h4
        style={{
          fontFamily: 'Alegreya',
        }}
        className="text-lg py-1">{format(parseISO(post.date), 'MMMM dd, yyyy')}</h4>
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
