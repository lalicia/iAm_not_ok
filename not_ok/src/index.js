import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//imports for React Router as per docs
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import pages here (some examples left)
import WriteOutPage from "./pages/WriteOutPage";
import HappyDosePage from "./pages/HappyDosePage";
import CatGenPage from "./pages/CatGenPage";
import FunnyFeedsPage from "./pages/FunnyFeedsPage";
import IdeasPage from "./pages/IdeasPage";
import ToolsPage from "./pages/ToolsPage";
import RightNowContactsPage from './pages/RightNowContactsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* have not set an index for App as HomePage is rendered through the App function  */}
        <Route path="/writeout" element={<WriteOutPage />} />
        <Route path="/happydose" element={<HappyDosePage />} />
        <Route path="/happydose/catpicgenerator" element={<CatGenPage />} />
        <Route path="/happydose/funnyfeeds" element={<FunnyFeedsPage />} />
        <Route path="/happydose/ideas" element={<IdeasPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/rightnowcontacts" element={<RightNowContactsPage />} />
          {/* These are more examples can be tweaked to what I need: 
          
          <Route path="/css" element={<CssTopic />} />
          <Route path="*" element={<ErrorPage />} />
          */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
