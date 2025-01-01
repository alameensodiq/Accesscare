import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GetInvolved from "./components/GetInvolved";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Layout>
  );
}

export default App;
