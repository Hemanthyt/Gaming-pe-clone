import { Routes, Route, useLocation } from "react-router-dom";
import JoinEvent from "./components/JoinEvent/JoinEvent";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import TechnicalController from "./pages/Technical-Controller";
import AboutUs from "./pages/About us";
import ApiIntegration from "./pages/Api-Integration";
import CryptoCurrency from "./pages/Crypto-currency";
import Vision from "./pages/Vision";
import Footer from './components/Footer/footer'
const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/newsletter" && <NavBar />}
      <div className="mt-20">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<JoinEvent />} />
          <Route path="/features/" element={<Features></Features>} />
          <Route path="/technicalconnector" element={<TechnicalController></TechnicalController>} />
          <Route path="/about" element={<AboutUs></AboutUs>} />
          <Route path="/apiintegration" element={<ApiIntegration></ApiIntegration>} />
          <Route path="/cryptocurrency" element={<CryptoCurrency></CryptoCurrency>} />
          <Route path="/oruvision" element={<Vision></Vision>}></Route>
        </Routes>
      </div>

      <div>
        <JoinEvent />
        <Footer />
      </div>
    </>
  );
};

export default App;