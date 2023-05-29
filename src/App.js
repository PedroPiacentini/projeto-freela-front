import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/index"
import AuthContext from "./contexts/AuthContext";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"))

  return (
    <PagesContainer>
      <BrowserRouter>
        <AuthContext.Provider value={{ token, setToken, userId, setUserId }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: red;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
