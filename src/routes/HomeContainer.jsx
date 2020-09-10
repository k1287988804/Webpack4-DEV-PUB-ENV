import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

export default class Home extends React.Component {
    static defaultProps = {

    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <HashRouter>
            <div>
                Hello World!
            </div>
        </HashRouter>
    }

}