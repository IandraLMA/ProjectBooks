import styles from "./Register.module.css";
type Props = {};
import { useState, useEffect, FormEventHandler, FormEvent } from "react";
const Register = (props: Props) => {
  const [title, seTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const book = {
    title,
    author,
    description,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.register}>
        <h1>Cadastrar livros</h1>
        <p>Insira as informações do seu livro favorito abaixo:</p>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Escreva o título do livro"
            value={title}
            onChange={(e) => seTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Autor</span>
          <input
            type="text"
            name="autor"
            required
            placeholder="Escreva o nome do autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          <span>Descrição</span>
          <input
            type="text"
            name="descricao"
            required
            placeholder="Descrição do livro"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Cadastrar" className="btn" />
      </form>
    </>
  );
};

export default Register;
