import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <Route path='/' component={HomeScreen} exact />
      </Fragment>
    </Router>
  );
}

export default App;
