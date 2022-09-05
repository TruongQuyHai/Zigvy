import { Avatar, Comment, Tooltip } from "antd";
import moment from "moment";

function PostComment({ comment }) {
  const { body, name } = comment;

  return (
    <div>
      <Comment
        author={<span>{name}</span>}
        avatar={
          <Avatar
            src={`https://joeschmoe.io/api/v1/${Math.random() * 1000}`}
            alt="Random Avatar"
          />
        }
        content={<p>{body}</p>}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );
}

export default PostComment;
