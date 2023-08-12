import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Footer, FooterContainer, StyledNavLink } from './components/PagesStyle';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index  element={<HomePage />} />
          <Route index path="/bdayo" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer>
        <FooterContainer>
          <StyledNavLink to="/" end rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/homepage.svg'} alt="LinkedIn" />
          </StyledNavLink>
          <StyledNavLink to="https://github.com/banjodayo39" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/github.svg'} alt="Twitter" />
          </StyledNavLink>
          <StyledNavLink to="/about" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/about.svg'} alt="LinkedIn" />
          </StyledNavLink>
          <StyledNavLink to="https://www.twitter.com/banjo_dayo" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/twitter.svg'} alt="Twitter" />
          </StyledNavLink>
          <StyledNavLink to="https://www.linkedin.com/in/banjo-dayo-samuel/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/linkedin.svg'} alt="LinkedIn" />
          </StyledNavLink>
          <StyledNavLink to="https://banjodayo39.medium.com/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/res/medium.svg'} alt="Medium" />
          </StyledNavLink>
        </FooterContainer>
      </Footer>
    </BrowserRouter>
  );
}

export default App