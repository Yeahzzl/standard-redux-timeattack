import React, { useState } from "react";
import uuid from "react-uuid";
import { styled } from "styled-components";
import TodoCard from "./TodoCard";

function Input({ navigate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [todo, setTodo] = useState([
    {
      id: uuid(),
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      content: "내용2",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목3",
      content: "내용3",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목4",
      content: "내용4",
      isDone: false,
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);

    setTitle("");
    setContent("");
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container>
        <h1>Todo List</h1>
        <form onSubmit={onSubmit}>
          <div>
            <p>제목</p>
            <input type="text" value={title} onChange={titleChangeHandler} />
            <p>내용</p>
            <input type="text" value={title} onChange={contentChangeHandler} />
            <button type="submit">등록</button>
          </div>
        </form>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          상세페이지
        </button>
      </Container>
      <TodoCard todo={todo} setTodo={setTodo} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Input;
