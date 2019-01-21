import React, { Component } from 'react';
import HomeContainer from './Containers/HomeContainer/index';
import TimetablesContainer from './Containers/TimetablesContainer/index';
import GradesContainer from './Containers/GradesContainer/index';
import FormsContainer from './Containers/FormsContainer/index';
import PersonalDataContainer from './Containers/PersonalDataContainer/index';
import ImportantInformationContainer from './Containers/ImportantInformationContainer/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login/index.js'
import Sidebar from './Components/Sidebar';
import HeaderMenu from './Components/HeaderMenu/inedx.js';

class App extends Component {
  render() {
    return (
      <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <HeaderMenu location={location} />
            <Sidebar location={location} history={history} />
            <main>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/timetables" component={TimetablesContainer} />
            <Route path="/grades" component={GradesContainer} />
            <Route path="/forms" component={FormsContainer} />
            <Route path="/personaldata" component={PersonalDataContainer} />
            <Route path="/importantinfo" component={ImportantInformationContainer} />
            </main>
        </React.Fragment>
    )}
    />
</Router>
    );
  }
}

export default App;
