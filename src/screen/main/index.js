import React, { Component } from 'react';
import { TabBar, NavBar } from 'antd-mobile';
import Message from './Message';
import Contacts from './Contacts';
import Personal from './Personal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'messageTab',
            selectedTabName: '消息',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageIndex) {


        switch (pageIndex) {
            case 0:
                return <Message />
            case 1:
                return <Contacts />
            case 2:
                return <Personal />
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <NavBar
                    style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 999}}
                    rightContent={[
                        this.state.selectedTab === 'contactsTab' ? <span>添加</span> : null
                    ]}
                >{this.state.selectedTabName}</NavBar>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#3A6774"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="消息"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(assets/icon/message.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(assets/icon/message.active.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'messageTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'messageTab',
                                selectedTabName: '消息',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent(0)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(assets/icon/contacts.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(assets/icon/contacts.active.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="通讯录"
                        key="Koubei"
                        // badge={'new'}
                        selected={this.state.selectedTab === 'contactsTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'contactsTab',
                                selectedTabName: '通讯录',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent(1)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(assets/icon/personal.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(assets/icon/personal.active.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="我的"
                        key="Friend"
                        // dot
                        selected={this.state.selectedTab === 'personalTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'personalTab',
                                selectedTabName: '我的',
                            });
                        }}
                    >
                        {this.renderContent(2)}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Main
