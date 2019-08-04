import React from 'react';
import { connect } from 'react-redux';

class InputMirror extends React.Component{
    render() {
        return(
            <div>
                <h1>Input Mirror</h1>
                <input type="text" onChange={this.props.onInputChange} value={this.props.inputValue}/>
                <p>{this.props.inputValue}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        inputValue: state.inputValue
    }
}

function mapDispatchToProps(dispatch){
    return{
        onInputChange: (event) => {
            const action = {type: "INPUT_CHANGE", text: event.target.value};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);