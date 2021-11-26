import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components start ======//
import ScrollToTop from './components/ScrollToTop';
import Home from './components/HomePage/Home';
//====== above components end ======//

//====== createContext start ======//
import { DataContext } from './utils/context';
//====== createContext end ======//

function App() {
  const [travelData, setTravelData] = useState([]); // 存傳回來的觀光Data

  console.log('App travelData', travelData);

  return (
    <DataContext.Provider value={{ travelData, setTravelData }}>
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
    </DataContext.Provider>
  );
}

export default App;
