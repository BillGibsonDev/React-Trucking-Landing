
// router
import { Switch , Route } from 'react-router-dom';


// global styles
import GlobalStyles from './GlobalStyles.js';

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

// pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import ApplyPage from './pages/ApplyPage';

function App() {
  return (
    <>
    <GlobalStyles />

    <Nav />

      <Switch>
      <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/AboutPage" exact>
            <AboutPage />
          </Route>
          <Route path="/ContactPage" exact>
            <ContactPage />
          </Route>
          <Route path="/ApplyPage" exact>
            <ApplyPage />
          </Route>
      </Switch>
    
    <Footer />
    </>
  );
}

export default App;
