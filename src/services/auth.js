import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export function useSignUp() {
    const navigate = useNavigate()

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
            .then(res => navigate("/"))
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate();
    const { setToken, setUserId } = useContext(AuthContext);

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
            .then(res => {
                console.log(res)
                setToken(res.data.token);
                setUserId(res.data.idUsuario);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.idUsuario);
                navigate("/home");
            })
            .catch((err) => alert(err.response.data.message));
    }
}