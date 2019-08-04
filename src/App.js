import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import {Provider} from 'react-redux';
import store from './store';
import InputMirror from './InputMirror';

class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter/>
          <Buttons/>
          <InputMirror/>
        </div>
      </Provider>
      
    )
  }
}

export default App;
