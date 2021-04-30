import React, {Component} from "react";
import '../assets/style/index.css';
import '../assets/style/Users.css';

/**
 * 绑定属性要注意：
      class 要换成 className
      for 要换成 htmlfor
      style

 */
class Users extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      msg: "如果再也不能見到你，祝你早安，午安，晚安",
      msg_s: "这个世界也许是假的，但并不缺少真心对待我们的人",
      title: "楚门的世界",
      red: "#FF0000",
      style: {
        color: "#FF6347",
        fontSize: "14px",
      }
    }
  }

  render() {
    return (
      <div className="Users">
        <h2 className="red" title={this.state.title}>{this.state.msg}</h2>
        
        <br />
        
        <div className={this.state.red}>{this.state.msg_s}</div>
        <br />
        <label className="label_Prada" htmlFor="Prada">Prada</label>
        <input id="Prada" />
        <br />
        <div style={{ color: "#FF6347", fontSize: "14px" }}>行内样式</div>
        <br />
        <div style={this.state.style}>肖申克的救赎, 行内样式</div>
      </div>
    );
  }
  
}

export default Users;
