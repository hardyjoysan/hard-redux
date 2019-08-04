import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component{
  render() {
    console.log(store);
    return (
      
      
      <Provider store={store}>
        <div className="App">
          <Counter/>
          <Buttons/>
        </div>
      </Provider>
      
    )
  }
}

export default App;
