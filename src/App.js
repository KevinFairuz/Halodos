import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Accounts from './components/Login/Accounts';
import Artikel from './components/artikel/Artikel';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Artikel />
      </main>

      <Footer />
    </>
  );
};

export default App;
