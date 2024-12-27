import { useState } from "react";

const Post = ({ post, handleLike, handleComment }: any) => {
  const [commentText, setCommentText] = useState("");

  const submitComment = () => {
    handleComment(post.id, commentText);
    setCommentText("");
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => handleLike(post.id)}>Like</button>
      <span>{post.likes} Likes</span>

      {/* Comments Section */}
      <div>
        {post.comments.map((comment: any) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>

      {/* Add Comment */}
      <div>
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={submitComment}>Comment</button>
      </div>
    </div>
  );
};
export default Post;
