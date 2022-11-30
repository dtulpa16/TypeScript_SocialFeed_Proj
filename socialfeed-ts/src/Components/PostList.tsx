import React from "react";

interface Props {
  posts: Array<{ post: string; user: string; likes: number }>;
}

export const PostList: React.FC<Props> = ({posts}) => {
  return <div>PostList</div>;
};
