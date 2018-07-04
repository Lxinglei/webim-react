import React, {Component} from 'react';
import { Flex, Button, InputItem, List, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import { withRouter, Link } from 'react-router-dom';
import '../../App.css';
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
                                    height: 30,
                                    backgroundColor: "#3A6774"
                                }}>注册
                            </Button>

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