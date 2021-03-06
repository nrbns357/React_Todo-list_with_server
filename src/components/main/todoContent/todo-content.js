import { render } from "@testing-library/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../../app/store";
import Img from "../asset/img/close.png";
import "./todo-content.css";

const Content = () => {
  const state = useSelector((state) => state); // store를 불러와서 그걸 state에 넣어주고 state.user을 써서 state안에 user정보를 변수에 저장
  const { todos } = state;
  const dispatch = useDispatch();

  render();
  return (
    <div className="contentBox">
      {todos.map((value) => (
        <div className="content" key={value.indexKey}>
          {value.content}
          <img
            alt="closeImg"
            src={Img}
            className="delbtn"
            onClick={() => {
              fetch(`/API/del.php?id=${value.indexKey}`).then((response) => {
                response.status === 200
                  ? dispatch(removeTodo(value.indexKey))
                  : false;
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
