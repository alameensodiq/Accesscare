import React from "react";
import Navbar from "./Reusable/Navbar"; 
import Footer from "./Reusable/Footer"; 
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
