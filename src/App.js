import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Layout from "./components/Layout";
import Privacy from "./components/Privacy";
import NewsEvent from "./components/NewsEvent";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/news-event" element={<NewsEvent />} />
      </Routes>
    </Layout>
  );
}

export default App;
