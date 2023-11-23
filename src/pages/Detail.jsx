import React from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      <Detail navigate={navigate} />
    </div>
  );
}

export default Detail;
