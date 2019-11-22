import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';


export default class App extends React.Component{
    static defaultProps ={

    }
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

    return <HashRouter>
    <div>
        <h1>这是网站App的根组件</h1>
        <hr/>
        <Link to="/home">首页</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/movie">电影</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">关于</Link>
        <br/>
        <DatePicker></DatePicker>
        {/* react-router中，通过Route标签当做路由的坑，添加组件 */}
        {/* <Route path="/home" component={Home}></Route>
        <Route path="/movie" component={Movie}></Route>
        <Route path="/about" component={About}></Route> */}
    </div>
    </HashRouter>
    }

}