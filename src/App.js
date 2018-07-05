import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Flex} from 'antd-mobile';
import './App.less'

class App extends Component {
  render() {
    return (
        <div className="flex-container">
            <Flex style={{height: "100%"}} direction="column">
                <Flex style={{flex: 1}}>
                    <div>
                        <h1 style={{color: "#FFF"}}>Web.IM</h1>
                        <span style={{color: "#FFF"}}>开启全新聊天体验</span>
                    </div>
                </Flex>
                <Flex style={{flex: 1}}>
                    <Flex.Item>
                        <Link
                            tag="div"
                            to="/register/account">
                            <Button
                                inline
                                type="ghost"
                                size="small"
                                style={{
                                    color: "#FFF",
                                    backgroundColor: "#3A6774"
                                }} inline>注册</Button>
                        </Link>

                    </Flex.Item>
                    <Flex.Item>
                        <Link
                            to="/login/account">
                            <Button
                                inline
                                type="ghost"
                                size="small"
                                style={{
                                    color: "#FFF",
                                    backgroundColor: "#1D1E22"
                                }} inline>登录</Button>
                        </Link>
                    </Flex.Item>
                </Flex>
            </Flex>
        </div>
    );
  }
}

export default App;
