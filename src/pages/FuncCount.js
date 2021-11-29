import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createIncreaseAction } from "../redux/actions/count";

export default function FuncCount() {
  const count = useSelector((state) => state.count);
  const persons = useSelector((state) => state.persons);
  const disPatch = useDispatch();
  return (
    <div>
      和：{count}-renshu:{persons.length}
      <button onClick={() => disPatch(createIncreaseAction(2))}>add + 2</button>
      <div>
        <ul>
          {persons.map((value) => {
            return (
              <li key={value.id}>
                {value.name} -- {value.age}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
