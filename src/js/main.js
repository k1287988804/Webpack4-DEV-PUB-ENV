import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Counter from './../components/Counter.jsx'


ReactDOM.render(<div>
    <Counter initcount={3}></Counter>,
    <Counter></Counter>
</div>,$('#app')[0])


