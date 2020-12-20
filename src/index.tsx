import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
import './index.css'
const Home = () => {
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}
const MyVideo = () => {
    return(
        <div>
            <h1>我的视频</h1>
            <div>
                <p>video1</p>
                <p>video2</p>
                <p>video3</p>
            </div>
        </div>
    )
}
const MyPic = () => {
    return(
        <div>
            <h1>我的图片</h1>
            <div>
                <p>Pic1</p>
                <p>Pic2</p>
                <p>Pic3</p>
            </div>
        </div>
    )
}
const MyResume = () => {
    return(
        <div>
            <h1>我的简历</h1>
            <div>
                <p>react</p>
            </div>
        </div>
    )
}
const AboutMe = () => {
    return (
        <div>
        <h1>关于我</h1> 
        <div className="container">
          <div className="side">
            <ul>
              <li><Link to="/about/video">我的视频</Link></li>
              <li><Link to="/about/picture">我的照片</Link></li>
              <li><Link to="/about/resume">我的简历</Link></li>
            </ul>
           </div>
          <div className="main">
            <Switch>
             <Route path="/about/video" component={MyVideo}/>
             <Route path="/about/picture" component={MyPic}/>
             <Route path="/about/resume" component={MyResume}/>
             <Route component={MyResume}/>
            </Switch>
          </div>
        </div>
   </div>
    )
}
const Other = () => {
    return(
        <div>
            <h1>其他</h1>
        </div>
    )
}
const App = () => {
    return (
        <Router>
          <div>
            <div className="nav">
              <li><Link to="/index">首页</Link></li>
              <li><Link to="/about">关于我</Link></li>
              <li><Link to="/other">其他页面</Link></li>
            </div>
            <div className="content">
              <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/about" component={AboutMe} />
                <Route path="/other" component={Other}/>
                <Route component={Home}/>
              </Switch>
            </div>

          </div>
      </Router>
    )
       
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)