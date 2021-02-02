import React, {Component, Fragment} from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFoooter';

class App extends React.Component {
  render(){
    return (
      <Fragment>
        <AppHeader />
        <AppFooter />
      </Fragment>
      )
  }
}

export default App;
