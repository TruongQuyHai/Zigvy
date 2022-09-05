import { Divider, Typography } from "antd";
import { useState } from "react";
import PostComment from "../post-comment/post-comment.component";

const { Text } = Typography;

function PostCommentList({ comments }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Text onClick={toggleVisible} style={{ cursor: "pointer" }}>
        {comments.length} replies
      </Text>
      <Divider style={{ marginTop: 4, marginBottom: 4 }} />
      {visible &&
        comments.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
    </>
  );
}

export default PostCommentList;
