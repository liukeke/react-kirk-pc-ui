/**
 * Created by Kirk liu on 2018/1/16.
 */
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                button
                <button onClick={() => console.log(1)}>按钮</button>
            </div>
        );
    }
}

export default Button;