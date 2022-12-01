import React, { useContext } from "react";
import { PostContextType, PostContext, PostArr } from "../App";
import { Post } from "./Post";

export const PostList: React.FC = () => {
  const { posts } = useContext(PostContext) as PostContextType;
  return (
    <div>
      {posts.map((el: PostArr) => (
        <Post post={el} />
      ))}
    </div>
  );
};
