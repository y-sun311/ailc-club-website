import React from 'react';
import HeaderComponent from './components/homepage/header.jsx';
import HeroSection from './components/homepage/hero.jsx';
import MembershipSection from './components/homepage/membership.jsx';
function App() {


  return (
    <div className="App">
        <HeaderComponent />
        <HeroSection />
        <MembershipSection/>
    </div>
   
  );
}

export default App;