import React from 'react';
import { connect } from 'react-redux';

class Buttons extends React.Component{
    render() {
        return(
            <div>
                <button onClick={this.props.onIncrementClick}>Increment</button>
                <button onClick={this.props.onDecrementClick}>Decrement</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementClick: () => {
            const action = {type: "INCREMENT"};
            dispatch(action);
        },
        onDecrementClick: () => {
            const action = {type: "DECREMENT"};
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Buttons);