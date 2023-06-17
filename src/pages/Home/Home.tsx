import { useState } from "react";
import styles from "./Home.module.css";
import BookList from "../BookList/BookList";

type Props = {};
export interface Book {
  title: string;
  author: string;
  description: string;
}
const Home = (props: Props) => {
  const [bookList, setBookList] = useState<Book[]>([
    {
      title: "Perdida",
      author: "Carina Rissi",
      description: "viagem no tempo",
    },
  ]);

  return (
    <>
      <div className={styles.register}>
        <h1>Livros favoritos</h1>
        <p>Faça aqui sua lista de livros favoritos</p>
      </div>
      <div className={styles.container_list}>
        <BookList />
      </div>
    </>
  );
};

export default Home;
