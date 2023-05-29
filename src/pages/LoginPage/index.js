import { Link } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { useLogin } from "../../services/auth";
import useQuickIn from "../../hooks/useQuickIn";

export default function LoginPage() {
    const { form, handleForm } = useForm({ email: "", password: "" });
    const login = useLogin();
    useQuickIn();

    function submitForm(e) {
        e.preventDefault();
        login(form);
    }

    return (
        <LoginContainer>
            <form onSubmit={submitForm}>
                <input
                    required
                    type="email"
                    autoComplete="username"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <button type="submit">Entrar</button>
            </form>

            <Link to="/cadastro">
                Primeira vez? Cadastre-se!
            </Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.section`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`