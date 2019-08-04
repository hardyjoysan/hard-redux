import {createStore} from 'redux';

const initialState = {
    count: 0,
    inputValue: ""
}

const reducer = (state = initialState, action) => {
    
    console.log("reducer", action);

    switch (action.type) {
        case "INCREMENT":
            return Object.assign({}, state, {count: state.count + 1})
        case "DECREMENT":
            return Object.assign({}, state, {count: state.count - 1})
        case "INPUT_CHANGE":
            return Object.assign({}, state, {inputValue: action.text})
    
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;