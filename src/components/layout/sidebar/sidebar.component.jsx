import {
  FileOutlined,
  PlaySquareOutlined,
  VideoCameraOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

export const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState("/");
  const onNavigate = ({ key }) => {
    navigate(key);
    setPath(key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Link
        to={"/"}
        className="demo-logo-vertical"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <YoutubeFilled
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "40px",
            color: "red",
            borderRadius: "100%",
          }}
        />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        onClick={onNavigate}
        selectedKeys={[`/${pathname.split("/")[1]}`]}
        items={[
          {
            key: "/",
            icon: <PlaySquareOutlined />,
            label: "Home",
          },

          // {
          //   key: "/users",
          //   icon: <UserOutlined />,
          //   label: "Users",
          // },
          {
            key: "/about",
            icon: <FileOutlined />,
            label: "About",
          },
          {
            key: "/video",
            icon: <VideoCameraOutlined />,
            label: "Videos",
          },
        ]}
      />
    </Sider>
  );
};
