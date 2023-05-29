import axios from "axios";
import { useNavigate } from "react-router-dom";

export function getUser() {
    const user = axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, body)
            .then(res => navigate("/"))
            .catch(err => alert(err.response.data))
    }
}

export function useLogin() {
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    return (body) => {
        axios.post(`${process.env.REACT_APP_API_URL}/login`, body)
            .then(res => {
                console.log(res)
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                navigate("/home");
            })
            .catch((err) => alert(err.response.data.message));
    }
}