import React from "react";

function TodoCard({ navigate, todo, setTodo }) {
  const workingList = todo.filter((item) => {
    return !item.isDone;
  });

  const doneList = todo.filter((item) => {
    return item.isDone;
  });

  const deleteBtn = (id) => {
    const deleteCard = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(deleteCard);
  };

  const onToggleBtn = (id) => {};
  setTodo((item) => {
    return item.map((todos) => {
      return todos.id === item.id ? { ...todo, isDone: !todo.isDone } : todo;
    });
  });
  return (
    <div>
      <div>
        <h1>Working</h1>
        {workingList.map((work) => {
          return (
            <div key={work.id}>
              <p>{work.title}</p>
              <p>{work.content}</p>
              <button
                onClick={() => {
                  onToggleBtn(work.id);
                }}
              >
                {work.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteBtn(work.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Done</h1>
        {doneList.map((done) => {
          return (
            <div key={done.id}>
              <p>{done.title}</p>
              <p>{done.content}</p>
              <button
                onClick={() => {
                  onToggleBtn(done.id);
                }}
              >
                {done.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteBtn(done.id);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        홈으로
      </button>
    </div>
  );
}

export default TodoCard;
