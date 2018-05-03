import React, {Component} from 'react'

export default class TestComp extends Component {
    render() {
        return(
            <div>
                <form action="">
                    <input type="text" placeholder="login"/>
                    <input type="text" placeholder="password"/>
                    <button type="submit">войти</button>
                </form>
            </div>
        )
    }
}