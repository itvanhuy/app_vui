import React from 'react';
import Avatar from './components/Avatar/Avatar';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="profile-card shadow-lg rounded-3 p-4">
              <Avatar />
              <ProfileInfo />
              <Skills />
              <Hobbies />
              <Contact /> 
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;