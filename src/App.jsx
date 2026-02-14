import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas } from './components';
import StackSync from './components/StackSync';
import Designs from './components/Designs';
import Valentine from './components/Valentine';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Navbar is always shown */}
        <Navbar />

        <Routes>
          {/*  Home route */}
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />

          {/*  StackSync route */}
          <Route path="/stacksync" element={<StackSync />} />

          {/*  Designs route */}
          <Route path="/designs" element={
            <>
              <Designs />
              <StarsCanvas />
            </>
          } />

          {/*  Valentine route */}
          <Route path="/valentine" element={<Valentine />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
