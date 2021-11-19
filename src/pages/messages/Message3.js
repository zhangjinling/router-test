import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Message3() {
  let { id, title } = useLocation().state;
  let navicate = useNavigate();
  console.log(" useLocation():", useLocation());
  let toHome = () => {
    navicate("/");
  };
  return (
    <div>
      id:{id},title:{title}
      <button onClick={toHome}>toHome</button>
    </div>
  );
}
