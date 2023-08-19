import React from 'react';
import './home.css';
import Faq from './faq';
import bg from '../../../src/Assets/logo-dashboard.png';
import Fitur from './Fitur';
import FiturArtikel from './FiturArtikel';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container flex flex-col">
        <div className="absolute top-15 right-10">
          <img src={bg} className="object-right"></img>
        </div>
        <div className="absolute top-60 left-40 flex flex-col">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-white">
              Jangan Salah Memilih Jalan Konsultasi Sekarang!
            </h1>
          </div>
          <h1 className="text-lg text-yellow-500">
            Konsultasi dengan dosen untuk mendapat jawaban terbaik
          </h1>
        </div>
        <div className="home__content grid">
          <div className="home__img">
            <div className="">
              <Fitur size="small" className="h-50 w-50" />
              <FiturArtikel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
