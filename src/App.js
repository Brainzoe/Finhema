import React from 'react';
import Header from './components/Header'; // Import Header component
import Home from './pages/Home'; // Import Home component
import SalesApp from './pages/SalesApp'; // Import SalesApp component
import CoreBanking from './pages/CoreBanking'; // Import CoreBanking component
import MobileBanking from './pages/MobileBanking'; // Import MobileBanking component
import TabBanking from './pages/TabBanking'; // Import TabBanking component
import ContactUs from './pages/ContactUs'; // Import ContactUs component
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header /> {/* Include the Header */}

      {/* Main Content with padding to prevent overlap from sticky header */}
      <main className="container "> {/* Adjust padding here */}
        <Home />
        <SalesApp />
        <CoreBanking />
        <MobileBanking />
        <TabBanking />
        <ContactUs />
      </main>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default App;
