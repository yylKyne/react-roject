import React, {Component} from 'react';
import logo from "../assets/images/logo.svg";
import morning from "../assets/images/morning.jpg";
import '../assets/style/About.css';


class About extends React.Component {

  constructor(props) {
    super(props);/** 父子组件传值 props*/
    
    this.state = {
      userInfo: "颜羽凌",
      list: ['1','2'],
      list_t: [<h2>1</h2>,<h2>2</h2>]
    }
  }

  render() {
    
    var ListResult = this.list.map(function (val, key) {
      return <li>{val}</li>
    })
    return (
      <div className="About" >
      <h2>{this.state.userInfo}</h2>
      <br />
      <img src={logo} className="About-logo" alt="logo" />
      {/* <img src={require('../assets/images/morning.jpg')} className="About-logo" alt="logo" /> */}
      <img src="https://template2.3dnest.cn/common/img/texture.jpg" className="About-logo" alt="logo" />
        {this.state.list_t}
        
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          {ListResult}
        </ul>
      </div>
    )
  }
}

export default About;
