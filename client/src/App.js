import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Switch>
            <Route path='/' exact Component={Home} />
            <Route path='/questions'  Component={Questions} />
            <Route path='/random'  Component={Random} />
            <Route path='/about'  Component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
