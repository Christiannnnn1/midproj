import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import HomePage from './pages/home.jsx'
import AccommodationsPage from "./pages/accomodationpage.jsx"; 
import HotelBooking from "./pages/booking.jsx"; 
import ContactPage from "./pages/contact.jsx"; 






createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <ResortAmenities />
  //   <Card />
  //   <ResortAccommodations />
  //   <AccommodationsPage />
    
  // </StrictMode>,
  <StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accomodationpage" element={<AccommodationsPage />} />
      <Route path="/booking" element={<HotelBooking />} />   
      <Route path="/contact" element={<ContactPage />} /> 
    </Routes>
  </Router>
</StrictMode>
)