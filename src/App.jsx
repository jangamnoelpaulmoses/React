import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas } from './components';
import StackSync from './components/StackSync'; // or wherever your StackSync file is

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* ✅ Navbar is always shown */}
        <Navbar />

        <Routes>
          {/* ✅ Home route */}
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

          {/* ✅ StackSync route */}
          <Route path="/stacksync" element={<StackSync />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
