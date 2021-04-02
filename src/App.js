import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectScreen from './screens/ProjectScreen';
import OnlineMarket from './screens/OnlineMarket';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/projects' component={ProjectScreen} />
        <Route path='/onlinemarket' component={OnlineMarket} />
      </Fragment>
    </Router>
  );
}

export default App;
