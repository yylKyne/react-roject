// 组件名称首字母大写
import React, { Component } from 'react';
import '../assets/style/Home.css';

class Home extends Component {

    // 构造函数
    constructor() {
        super(); //继承Component, 关键字 指代父类实例（this）

        //定义数据
        this.state = {
            name: "颜羽凌",
            age: "24",
            userInfo:{
                hobby: "A man like Hu Ge, Huang Zongze~"
            }
        }
    }
//jsx
    render() {
        // return <div className="Home"></div>
        return (
            <div className="Home">
                <h2>react 组件所有的节点要被P标签包含</h2>
                <p>Author: {this.state.name}</p>
                <p>age: {this.state.age}</p>
                <p>hobby: {this.state.userInfo.hobby}</p>
            </div>
        )
    }
}

export default Home;