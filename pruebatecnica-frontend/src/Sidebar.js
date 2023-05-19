import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} theme="light">
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          <Link to="/userlist">Lista de usuario</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}>
          <Link to="/user/graphic">Grafico De Barras</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PieChartOutlined />}>
          <Link to="/userlistExport">Lista de usuario exportados</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;