import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { parse } from "querystring";
export default function Message2() {
  let location = useLocation();
  let [params] = useSearchParams();
  console.log("params:", params.getAll("a"));
  let locObj = parse(location.search.slice(1));
  console.log("location:", parse(location.search.slice(1)));
  return (
    <div>
      location,{locObj.a}={locObj.b}
    </div>
  );
}
