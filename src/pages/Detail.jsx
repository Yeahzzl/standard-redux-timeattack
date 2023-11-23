import React from "react";
import { useNavigate } from "react-router-dom";
import TodoCard from "../components/TodoCard";

function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      <TodoCard navigate={navigate} />
    </div>
  );
}

export default Detail;
