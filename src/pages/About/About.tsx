import styles from "./About.module.css";
type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h1>Cadastre para postar</h1>
      <p>Crie seu usuário e cadastre suas histórias</p>
      <form>
        <label>
          <span>nome</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do Usuário"
          />
        </label>
        <label>
          <span>Email</span>
          <input type="text" name="email" required placeholder="Email" />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirma Senha</span>
          <input
            type="password"
            name="confirm-password"
            required
            placeholder="Confirma a sua senha"
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default About;
