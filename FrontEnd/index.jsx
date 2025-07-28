import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./src/App";
import AuthProvider from "./src/context/Auth/AuthProvider";
import VideoProvider from "./src/context/video/VideoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
