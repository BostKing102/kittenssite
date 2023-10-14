import React from "react";
import Leaders from './components/leaders'
import User from './components/user'
import NotFound from "./notFound";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Leaders />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }

export default App;