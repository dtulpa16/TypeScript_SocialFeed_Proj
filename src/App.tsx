import React, { useState, createContext } from "react";
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
export const PostContext = createContext<PostContextType | null>(null);

export const App: React.FC<React.ReactNode> = () => {
  const [posts, setPosts] = useState<PostArr[]>([
    {
      post: "Test post!",
      user: "Dan",
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
