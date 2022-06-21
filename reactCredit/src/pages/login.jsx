import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeID = (e) => setUsername(e.target.value);

  const handleChangePW = (e) => setPw(e.target.value);

  const onClickButton = () => {
    axios
      .post(`http://localhost:8080/users/login?username=${username}`)
      .then((res) => {
        setUser(res.data);
        navigate("/");
      });
  };
  return (
    

 

    <div style={{ margin: "150px auto", width: 250 }}>  
      <TextField
        fullWidth
        required
        id="outlined-required"
        label="아이디"
        value={username}
        onChange={handleChangeID}
      />
      <div style={{ height: 15 }} />
      <TextField
        fullWidth
        type="password"
        required
        id="outlined-required"
        label="비밀번호"
        value={pw}
        onChange={handleChangePW}
      />
      <div style={{ height: 15 }} />
      <Button fullWidth variant="contained" onClick={onClickButton}>
        로그인
      </Button>
    

    
    </div>
 
  );
};

export default Login;
