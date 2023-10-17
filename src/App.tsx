import './App.css';
import AboutUs from './componet/AboutUs/AboutUs';
import Footer from './componet/Footer/Footer';
import ContactUs from './componet/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componet/Dashboard/Dashboard';
import CSRActivity from './componet/CSRActivity/CSRActivity';
import Services from './componet/Services/Services';
import Certificates from './componet/Certificates/Certificates';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/mgls_mining_company" element={<Dashboard />} />
        <Route path="/mgls_mining_company/about" element={<AboutUs />} />
        <Route path="/mgls_mining_company/services" element={<Services />} />
        <Route path="/mgls_mining_company/certificate" element={<Certificates />} />
        <Route path="/mgls_mining_company/csr-activity" element={<CSRActivity />} />
        <Route path="/mgls_mining_company/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>


}

export default App;
