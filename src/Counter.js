import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    render() {
        return(
            <div>
                <h1>I am a Counter</h1>
                <p>Count: {this.props.count}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);