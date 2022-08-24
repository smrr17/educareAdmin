import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Post() {
  let { lll, id } = useParams();
  let [params, setParams] = useSearchParams();
  console.log(params.getAll("sort"));
  return (
    <div>
      <h1>
        Post-{lll}-{id}
      </h1>
    </div>
  );
}
