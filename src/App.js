import React from 'react';
import HeaderComponent from './components/homepage/header.jsx';
import HeroSection from './components/homepage/hero.jsx';
import MembershipSection from './components/homepage/membership.jsx';
import Footer from './components/homepage/footer.jsx';
function App() {


  return (
    <>

    <div className="App">
        <HeaderComponent />
        <HeroSection />
        <MembershipSection/>
        <Footer />
    </div>


    </>
   
  );
}

export default App;