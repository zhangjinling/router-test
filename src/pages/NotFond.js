import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFond() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/message/message1/1/2");
  };
  return (
    <div>
      404 not fond
      <div>
        <button onClick={goHome}>go-to-message1</button>
      </div>
    </div>
  );
}
