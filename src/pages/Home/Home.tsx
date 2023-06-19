import BookList from "../BookList/BookList";
import styles from "./Home.module.css";

const Home = ({ bookList, setBookList }: any) => {
  return (
    <>
      <div className={styles.register}>
        <h1>Livros favoritos</h1>
        <p>Faça aqui sua lista de livros favoritos</p>
      </div>
      <BookList bookList={bookList} setBookList={setBookList} />
    </>
  );
};

export default Home;
