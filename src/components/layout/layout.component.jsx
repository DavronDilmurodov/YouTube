import {
  AudioOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Layout as AntLayout, theme } from "antd";
import { useState } from "react";
import { Sidebar } from "./sidebar/sidebar.component";
import { HomeLayout } from "./homeLayout/homeLayout";
const { Header, Content } = AntLayout;

export const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <AntLayout style={{ height: "100%" }}>
        <Sidebar collapsed={collapsed} />
        <AntLayout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
            className="header d-flex"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div
              className=" d-flex w-25 align-items-center position-relative"
              style={{
                marginLeft: "400px",
              }}
            >
              <input
                type="text"
                className="form-control w-100 rounded-5"
                placeholder="Enter a request"
              />
              <span
                className="position-absolute"
                style={{
                  height: "0",
                  fontSize: "20px",
                  top: "-6px",
                  right: "10px",
                  cursor: "pointer",
                }}
              >
                <SearchOutlined
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "-10px",
                    backgroundColor: "gray",
                    padding: "8px",
                    borderRadius: "50%",
                    borderStartStartRadius: "0",
                    borderEndStartRadius: "0",
                  }}
                />
                <AudioOutlined
                  style={{
                    backgroundColor: "gray",
                    padding: "8px",
                    borderRadius: "50%",
                    position: "absolute",
                    fontSize: "20px",
                    right: "-50px",
                    top: "21px",
                  }}
                />
              </span>
            </div>
          </Header>
          <HomeLayout />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </AntLayout>
      </AntLayout>
    </>
  );
};
