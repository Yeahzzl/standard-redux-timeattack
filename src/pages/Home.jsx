import React from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Input navigate={navigate} />
    </div>
  );
}

export default Home;
