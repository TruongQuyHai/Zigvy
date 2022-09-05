import { Pagination, Space } from "antd";
import { useEffect, useState } from "react";

import Post from "../../components/post/post.component";
import { getPosts } from "../../services/post.service";

function Home() {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchPosts = async (page = 1, limit = 10) => {
    const { data, totalCount } = await getPosts(page, limit);
    setPosts(data);
    setTotalCount(totalCount);
  };

  const onPaginationChange = (page, pageSize) => {
    fetchPosts(page, pageSize);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Space direction="vertical" size="large">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination
        total={totalCount}
        showQuickJumper
        showSizeChanger
        onChange={onPaginationChange}
      />
    </Space>
  );
}

export default Home;
