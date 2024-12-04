import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ProductListing from "./Pages/ProductListing/ProductListing";
import React from "react";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            {/* Default route redirects to /products */}
            <Route path="/" element={<Navigate to="/products" replace />} />
            {/* Products route */}
            <Route path="/products" element={<ProductListing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
