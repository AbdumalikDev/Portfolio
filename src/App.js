import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/projects' component={ProjectScreen} />
      </Fragment>
    </Router>
  );
}

export default App;
