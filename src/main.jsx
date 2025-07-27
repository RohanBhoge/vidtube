import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import VideoProvider from "./context/video/VideoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <VideoProvider>
        <App />
      </VideoProvider>
    </HashRouter>
  </React.StrictMode>
);
