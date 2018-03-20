import React from 'react'
import './index.css'

import { HashRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'

import SiderRenderer from './views/sider'
import PageRenderer from './views/page'

const { Header, Content, Footer, Sider } = Layout
export default () => {
    return (
        <div className="rootWrapper">
            <Router>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0
                        }}
                        breakpoint="lg"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type)
                        }}
                    >
                        <div className="logo" />
                        <SiderRenderer />
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content
                            style={{
                                margin: '24px 16px 0',
                                overflow: 'initial'
                            }}
                        >
                            <div
                                style={{
                                    padding: 24,
                                    background: '#fff',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <div className="router-wrapper">
                                    <Route
                                        path="/:id"
                                        component={PageRenderer}
                                    />
                                </div>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            ZhiHu@ZhengFang
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </div>
    )
}