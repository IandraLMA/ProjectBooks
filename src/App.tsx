import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import BookDetail from "./pages/BookDetail/BookDetail";
import { Book } from "./model/Book";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [bookList, setBookList] = useState<Book[]>([
    {
      id: "1",
      title: "Perdida",
      author: "Carina Rissi",
      description: "Viagem no tempo",
    },
    {
      id: "2",
      title: "A Seleção",
      author: "Kiera Cass",
      description: "A Seleção é a oportunidade de  ..",
    },
  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home bookList={bookList} setBookList={setBookList} />}
            />
            <Route
              path="/register"
              element={
                <BookDetail bookList={bookList} setBookList={setBookList} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
