import React, { useState, useContext, createContext } from "react";
import "./App.css";
import { PostList } from "./Components/PostList";
export interface PostArr {
  post: string;
  user: string;
  likes: number;
}
export type PostContextType = {
  posts: PostArr[];
};
const PostContext = createContext<PostContextType | null>(null);

export const App: React.FC<React.ReactNode> = () => {
  const [posts, setPosts] = useState<PostArr[]>([
    {
      post: "Test post!",
      user: "dan",
      likes: 0,
    },
    {
      post: "Another test post:D",
      user: "ennin",
      likes: 0,
    },
  ]);

  return (
    <PostContext.Provider value={{posts}}>
      <PostList />
    </PostContext.Provider>
  );
};

export default App;
