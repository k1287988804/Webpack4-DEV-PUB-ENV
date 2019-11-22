import React from 'react'

export default class Counter extends React.Component{
    static defaultProps = {
        initcount:0
    }
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return <div>
            <h1>这是Counter计数器组件</h1>
            <input type="button" value="+1"/>
            <hr/>
            <h3>当前的数量是：{this.props.initcount}</h3>
        </div>
    }
    

}