import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createIncreaseAction } from "../redux/count_action";

export default function FuncCount() {
  const count = useSelector((state) => state);
  const disPatch = useDispatch();
  return (
    <div>
      和：{count}
      <button onClick={() => disPatch(createIncreaseAction(2))}>add + 2</button>
    </div>
  );
}
