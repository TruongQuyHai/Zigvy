import { Layout, PageHeader, Row } from "antd";
import { Outlet } from "react-router-dom";

import classes from "./default.module.scss";
import Logo from "../../assets/zigvy-logo.webp";

const { Content, Header } = Layout;

function DefaultLayout() {
  return (
    <Layout className={classes.defaultLayout}>
      <Header className={classes.header}>
        <PageHeader
          avatar={{ src: Logo }}
          className={classes.pageHeader}
          title="Zigvy Blog"
        />
      </Header>
      <Content className={classes.content}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default DefaultLayout;
