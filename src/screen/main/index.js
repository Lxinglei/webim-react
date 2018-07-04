import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'messageTab',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            </div>
        );
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="消息"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'messageTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'messageTab',
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
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="通讯录"
                        key="Koubei"
                        // badge={'new'}
                        selected={this.state.selectedTab === 'contactsTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'contactsTab',
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
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="我的"
                        key="Friend"
                        // dot
                        selected={this.state.selectedTab === 'personalTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'personalTab',
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
