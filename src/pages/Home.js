import React from 'react';
import Navigation from '../components/Navigation';
import Refence from '../components/Refence';
import TopBar from '../components/TopBar';
import Corps from '../components/Corps';

const Home = () => {
    return (

        <div >
        <section className="container">
            <TopBar></TopBar>
            <Navigation></Navigation>
            <Refence></Refence>
            <Corps></Corps>
        </section>
        <section className="containerSecond" id="oeuvre"> 

        </section>
        </div>

    );
};

export default Home;