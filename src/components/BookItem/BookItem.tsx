import { NavLink } from "react-router-dom";
import styled from "./BookItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Book } from "../../model/Book";

const BookItem = (props: any) => {
  var item = {
    from: {
      id: props.element.id,
      title: props.element.title,
      author: props.element.author,
      description: props.element.description,
    },
  };

  const handleExcluir = (v: string) => {
    props.setBookList((current: any) =>
      current.filter((fruit: Book) => fruit.id !== v)
    );
  };
  return (
    <div className={styled.container_book}>
      <div className={styled.book_photo}>
        <a onClick={() => handleExcluir(props.element.id)}>
          <div className={styled.iconTrash}>
            <FontAwesomeIcon icon={["fas", "trash"]} />
          </div>
        </a>
      </div>
      <div className={styled.container_list_detail}>
        <div className={styled.book_title}>
          <label>{props.element.title}</label>
          <label className={styled.description}>{props.element.author}</label>
          <label className={styled.description}>
            {props.element.description}
          </label>
          <NavLink to="/register" state={item}>
            <input type="submit" value="Visualizar" className="btn white" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
