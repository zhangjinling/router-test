import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFond() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/messages");
  };
  return (
    <div>
      404 not fond
      <div>
        <button onClick={goHome}>go Home</button>
      </div>
    </div>
  );
}
