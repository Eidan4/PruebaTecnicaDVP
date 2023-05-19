import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import ViewUser from './viewUser'
import Home from './Home'
import UserProfile from './UserProfile';
import UserDetails from './UserDetails';
import Graphic from './Graphic';
import ViewUserExport from './viewUserExport';
const { Content } = Layout;


function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: '16px' }}>
            <Routes>
              <Route exact path="/" Component={Home}/>  
              <Route path="/userlist" Component={ViewUser}/>  
              <Route path="/user/:login" Component={UserProfile} />
              <Route path="/userUrl/:username" Component={UserDetails} />
              <Route path="/user/graphic" Component={Graphic} />
              <Route path="/userlistExport" Component={ViewUserExport} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
