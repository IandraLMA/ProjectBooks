import styles from "./BookDetail.module.css";
import { useState, FormEvent } from "react";
import { Book } from "../../model/Book";
import { useLocation } from "react-router-dom";
const BookDetail = ({ bookList, setBookList }) => {
  const location = useLocation();
  const { state } = location;
  var formTitle = "";
  var formAuthor = "";
  var formDescription = "";
  var formId = "";
  if (state) {
    formTitle = state.from.title;
    formAuthor = state.from.author;
    formDescription = state.from.description;
    formId = state.from.id;
  }

  const [id, setId] = useState(formId);
  const [title, seTitle] = useState(formTitle);
  const [author, setAuthor] = useState(formAuthor);
  const [description, setDescription] = useState(formDescription);
  var [error, setError] = useState("");
  var [success, setSuccess] = useState("");

  const validaCampos = () => {
    let retorno = false;
    if (title.length > 18) {
      setError("O título não pode ser maior que 18 caracteres!");
    } else if (author.length > 30) {
      setError("O nome do autor não pode ser maior que 30 caracteres!");
    } else if (description.length > 30) {
      setError("A descrição não pode ser maior que 30 caracteres!");
    } else {
      retorno = true;
    }
    return retorno;
  };

  const handleSubmit = (e: FormEvent) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    if (validaCampos()) {
      var elemento = {
        id: bookList.length + 1,
        title: title,
        author: author,
        description: description,
      };
      bookList.push(elemento);
      setSuccess("Cadastrado com sucesso!");
    }
  };

  return (
    <>
      <div className={styles.register}>
        {!id && <h1>Cadastrar livros</h1>}
        {!id && <p>Insira as informações do seu livro favorito abaixo:</p>}
        {id && <h1>Visualizar livros</h1>}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={id} />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            disabled={!!id}
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
            disabled={!!id}
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
            disabled={!!id}
            required
            placeholder="Descrição do livro"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {!id && <input type="submit" value="Cadastrar" className="btn" />}
      </form>
    </>
  );
};

export default BookDetail;
