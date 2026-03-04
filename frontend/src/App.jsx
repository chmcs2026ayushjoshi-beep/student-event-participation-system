import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/ParticipationDetailPage";

const App = () => {
  return (
    <div className="min-h-screen bg-base-200" data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/participation/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;