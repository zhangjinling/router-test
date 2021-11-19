import React from "react";
import { useLocation } from "react-router-dom";
export default function Message3() {
  let { id, title } = useLocation().state;
  console.log(" useLocation():", useLocation());
  let toHome = () => {
    // Navigate("home");
  };
  return (
    <div>
      id:{id},title:{title}
      <button onClick={toHome}>toHome</button>
    </div>
  );
}
