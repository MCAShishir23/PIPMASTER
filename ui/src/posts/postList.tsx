import { useState } from "react";
import Post from "./post";

const PostsList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the first post",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post",
      likes: 0,
      comments: [],
    },
  ]);

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post: any) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId: string, commentText: string) => {
    setPosts(
      posts.map((post: any) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), text: commentText },
              ],
            }
          : post
      )
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleLike={handleLike}
          handleComment={handleComment}
        />
      ))}
    </div>
  );
};

export default PostsList;
