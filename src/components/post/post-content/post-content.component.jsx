import { faker } from "@faker-js/faker";
import { Typography } from "antd";
import moment from "moment";

import classes from "./post-content.module.scss";

const { Paragraph, Text } = Typography;

function PostContent({ content, user }) {
  return (
    <Typography>
      <Text className={classes.author} strong>
        Author: {user.name}
      </Text>
      <Text className={classes.createdAt} type="secondary">
        Created at:{" "}
        {moment(
          faker.date.between(
            "2020-01-01T00:00:00.000Z",
            new Date().toISOString()
          )
        ).fromNow()}
      </Text>
      <Paragraph className={classes.content}>
        {content.length > 100 ? `${content.slice(0, 100)}...` : content}
      </Paragraph>
    </Typography>
  );
}

export default PostContent;
