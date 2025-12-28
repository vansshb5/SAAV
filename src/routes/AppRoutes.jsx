import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Capabilities from "../pages/Capabilities";
import OurCompany from "../pages/OurCompany";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
   <Route path="/industries" element={<Industries />} />
 <Route path="/capabilities" element={<Capabilities />} />
<Route path="/ourcompany" element={<OurCompany />} />
</Routes>
  );
};

export default AppRoutes;
