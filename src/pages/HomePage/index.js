import { Link } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { useLogin } from "../../services/auth";
import useQuickIn from "../../hooks/useQuickIn";

export default function HomePage() {
    const { form, handleForm } = useForm({ email: "", password: "" });
    const login = useLogin();
    useQuickIn();

    function submitForm(e) {
        e.preventDefault();
        login(form);
    }

    return (
        <LoginContainer>
            <UserContainer>
                <img src="imagem" />
                <div>
                    <div>nome</div>
                    <div>desc</div>
                    <Botoes>
                        <button>Ver seguidores</button>
                        <button>Ver quem eu sigo</button>
                    </Botoes>
                </div>
            </UserContainer>
        </LoginContainer>
    )
}

const Botoes = styled.div`
    display: flex;
    background-color: red;
`

const UserContainer = styled.div`
    width: 90%;
    background-color: green;
    display: flex;
    align-items: center;
    img {
        margin-left: 20px;
        margin-right: 20px;
    }
`

const LoginContainer = styled.section`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
`