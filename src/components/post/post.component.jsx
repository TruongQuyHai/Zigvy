import { Card } from "antd";
import { useEffect, useState } from "react";

import PostContent from "./post-content/post-content.component";

import { getUser } from "../../services/user.service";
import { getComments } from "../../services/comment.service";
import PostCommentList from "./post-comment-list/post-comment-list.component";

function Post({ post }) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  const { body, id, title, userId } = post;

  const fetchUser = async () => {
    const userData = await getUser(userId);
    setUser(userData);
  };

  const fetchComments = async () => {
    const commentsData = await getComments(id);
    setComments(commentsData);
  };

  useEffect(() => {
    fetchUser();
    fetchComments();
  }, []);

  return (
    <Card style={{ maxWidth: 768 }} title={title}>
      <PostContent content={body} user={user} />
      <PostCommentList comments={comments} />
    </Card>
  );
}

export default Post;
