import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components start ======//
import ScrollToTop from './components/ScrollToTop';
import Home from './components/HomePage/Home';
//====== below components end ======//

function App() {
  return (
    <Router>
      <>
        <ScrollToTop>
          <Switch>
            {/* //===homepage 路由放最下面===// */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>
  );
}

export default App;
