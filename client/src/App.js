import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import LoginForm from './components/LoginForm/LoginForm'
import Cookies from 'js-cookies';
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    setSocket(io("http://localhost:5001"));
    const _userId = Cookies.getItem('userId');
    if (_userId) setUserId(_userId);
  }, []);


  return (
    <div>
       <Container>
        <Header socket={socket} userId={userId} setUserId={setUserId} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Outlet context={{ socket, userId }} />
        </Box>
      </Container>

      <LoginForm />
    </div>
  );
}

export default App;
