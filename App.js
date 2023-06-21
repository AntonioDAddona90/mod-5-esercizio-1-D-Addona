import React, {Component} from 'react'
import NavigationBar from './component/mynav'
import Welcome from './component/welcome';
import Myfooter from './component/myfooter';
import Latesrelease from './component/latest release';
import LifeCycle from './component/lifecycleexample';
import './App.css';
import { Card } from 'react-bootstrap';
 class App extends Component {
  constructor(props) {
    super(props)
  }


  render() { 
    return (
      <>
      <NavigationBar />
      <Welcome/>
      <Card/>
      <LifeCycle/>
      <Latesrelease/>
      <Myfooter/>
      </>
    )
  }
}
export default App;
