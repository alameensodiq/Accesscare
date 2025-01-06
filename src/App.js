import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Layout from "./components/Layout";
import Privacy from "./components/Privacy";
import NewsEvent from "./components/NewsEvent";
import Faqs from "./components/Faqs/Faqs";
import Donate from "./components/Donate/Donate";
import Services from "./components/Services/Services";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="/news-event" element={<NewsEvent />} />
      </Routes>
    </Layout>
  );
}

export default App;
