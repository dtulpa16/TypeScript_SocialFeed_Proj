import React from "react";
interface Props {
  post: { post: string; user: string; likes: number };
}
export const Post: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <div>{post.user}</div>
      <div>{post.post}</div>
      <div>{post.likes}</div>
    </div>
  );
};
