import React from "react";
import { useParams } from "react-router-dom";
export default function Message1(props) {
  let params = useParams();
  console.log("params:", params);
  return (
    <div>
      {params.id}-{params.title}
    </div>
  );
}
