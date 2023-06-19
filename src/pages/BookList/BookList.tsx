import BookItem from "../../components/BookItem/BookItem";
import { Book } from "../../model/Book";
import styled from "./BookList.module.css";

const BookList = ({ bookList, setBookList }: any) => {
  return (
    <div className={styled.container_list}>
      {bookList.map((item: Book) => (
        <BookItem
          key={item.id}
          element={item}
          setBookList={setBookList}
          booklist={bookList}
        />
      ))}
    </div>
  );
};

export default BookList;
