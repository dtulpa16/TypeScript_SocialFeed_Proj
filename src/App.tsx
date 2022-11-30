import { useState } from "react";
import "./App.css";
import { PostList } from "./Components/PostList";

function App() {
  const [posts, setPosts] = useState([
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

  return <PostList posts={posts} />;
}

export default App;
