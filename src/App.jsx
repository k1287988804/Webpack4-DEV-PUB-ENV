import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { DatePicker } from 'antd';
import Home from './routes/HomeContainer.jsx'
import Api from './services/interface.js' 
import 'antd/dist/antd.css';
import style from './css/style.less'


export default class App extends React.Component {
    static defaultProps = {

    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    say = async () =>{
        const res = await Api.raokouling();
        console.log(res);
    }

    render() {

        return <HashRouter>
            <div>
                <h1>这是网站App的根组件</h1>
                <div className={style.bg}></div>
                <hr />
                <Link to="/home">首页</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/movie">电影</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">关于</Link>
                <br />
                <DatePicker></DatePicker>
                <input type="button" onClick={this.say} value="点我"/>
                {/* react-router中，通过Route标签当做路由的坑，添加组件 */}
                <Route path="/home" component={Home}></Route>
            </div>
        </HashRouter>
    }

}