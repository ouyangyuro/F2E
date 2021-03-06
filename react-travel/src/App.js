import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//====== below components start ======//
import ScrollToTop from './components/ScrollToTop';
//====== above components end ======//

//====== createContext start ======//
import { DataContext } from './utils/context';
//====== createContext end ======//

import './styles/home.scss';

//====== below pages components start ======//
import Home from './components/pages/Home';
import CardDetail from './components/pages/CardDetail';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
//====== above pages components end ======//

function App() {
  const [travelData, setTravelData] = useState(); // 存傳回來的觀光Data

  console.log('App travelData', travelData); //for test FIXME:

  return (
    <DataContext.Provider value={{ travelData, setTravelData }}>
      <Router>
        <>
          <ScrollToTop>
            <div className="container mx-auto">
              <div className="wrap bg-gray-50">
                <div className="grid grid-rows-layout grid-cols-4 min-h-screen">
                  {/* <!-- =========nav start========= --> */}
                  <nav className="row-span-6 auto-cols-max bg-white">
                    <Nav />
                  </nav>
                  {/* <!-- =========nav end========= --> */}

                  <Switch>
                    {/* card detail */}
                    <Route path="/F2E/detail/:id">
                      <main className="row-span-5 col-span-3">
                        <CardDetail />
                      </main>
                    </Route>

                    {/* home */}
                    <Route exact path="/F2E/:theme?">
                      {/* ?代表沒給參數也沒關係 */}
                      <header className="row-span-2 col-span-3">
                        <Header />
                      </header>
                      <main className="row-span-3 col-span-3">
                        <Home />
                      </main>
                    </Route>
                  </Switch>

                  <footer className="row-span-1 col-span-3 mt-6 relative">
                    <Footer />
                  </footer>
                </div>
              </div>
            </div>
          </ScrollToTop>
        </>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
