import React, {Component} from 'react';
import {Button, Flex, Icon, InputItem, List, NavBar} from 'antd-mobile';
import {Link, withRouter} from 'react-router-dom';
import '../../App.less';

class AccountRegister extends Component {
    render() {
        const { history } = this.props;
        return (
            <div style={{height: "100%"}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push("/")}
                >用户注册</NavBar>
                <Flex style={{height: "100%"}} direction="column">
                    <Flex style={{flex: 1}}>
                        <div>
                            <h1 style={{color: "#3A6774"}}>Web.IM</h1>
                            <span style={{color: "#3A6774"}}>开启全新聊天体验</span>

                        </div>
                    </Flex>
                    <Flex style={{flex: 1, justifyContent: "flex-end", flexDirection: "column", paddingBottom: 40}}>
                        <List renderHeader={() => {
                            return (
                                <div>
                                    新用户注册
                                </div>
                            );
                        }}>
                            <InputItem>用户名</InputItem>
                            <InputItem>密码</InputItem>
                            <InputItem>确认密码</InputItem>
                        </List>

                    </Flex>
                    <Flex style={{flex: 1, alignItems: "flex-start"}} direction="column">
                        <div>
                            <Button
                                inline
                                type="primary"
                                size="small"
                                style={{
                                    color: "#FFF",
                                    width: 310,
                                    height: 36,
                                    fontSize: 16,
                                    paddingTop: 2,
                                    backgroundColor: "#3A6774"
                                }}>注册</Button>

                        </div>
                        <Link
                            style={{
                                color: "#3A6774",
                                marginTop: 4,
                                fontSize: 12
                            }}
                            to="/register/phone">使用手机号注册</Link>
                    </Flex>
                </Flex>
            </div>
        );
    }
}

export default withRouter(AccountRegister);
