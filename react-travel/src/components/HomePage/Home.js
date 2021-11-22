import React from 'react';
import '../../styles/home.scss';

//====== below pages components start ======//
import Main from './pages/Main';
import Nav from './pages/Nav';
import Header from './pages/Header';
import Footer from './pages/Footer';
//====== above pages components end ======//

function Home() {
  return (
    <>
      {/* <!-- body start --> */}
      <div className="container mx-auto">
        <div className="wrap bg-gray-50">
          <div className="grid grid-rows-6 grid-cols-4">
            {/* <!-- =========nav start========= --> */}
            <nav className="row-span-6 auto-cols-max bg-white">
              <Nav />
            </nav>
            {/* <!-- =========nav end========= --> */}

            {/* <!-- =========header start========= --> */}
            <header className="row-span-2 col-span-3">
              <Header />
            </header>
            {/* <!-- =========header end========= --> */}

            {/* <!-- =========main start========= --> */}
            <main className="row-span-3 col-span-3 bg-green-300">
              <Main />
            </main>
            {/* <!-- =========main end========= --> */}

            {/* <!-- =========footer start========= --> */}
            <footer className="row-span-1 col-span-3 relative">
              <Footer />
            </footer>
            {/* <!-- =========footer end========= --> */}
          </div>
        </div>
      </div>
      {/* <!-- body end --> */}
    </>
  );
}

export default Home;
