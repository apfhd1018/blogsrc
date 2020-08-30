import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [Writer, setWriter] = useState(["코트 추천", "맛집 추천", "언어 추천"]);
  const [Good, setGood] = useState(0);
  const [modal, setmodal] = useState(false);
  const [Select, setSelect] = useState(0);
  const [Input, setInput] = useState("");

  const visible = () => {
    return setmodal(!modal);
  };
  const publish = (e) => {
    return setInput(e.target.value);
  };

  const submit = () => {
    var copiedWriter = [...Writer];
    copiedWriter.unshift(Input); // unshift : array 맨 앞에 자료를 추가하는 문법
    return setWriter(copiedWriter);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {Writer.map((a, n) => {
        return (
          <div className="list" key={n}>
            <h3
              onClick={() => {
                setSelect(n);
              }}
            >
              {a}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input onChange={publish} />
        <button onClick={submit}>저장</button>
      </div>

      <button onClick={visible}>보이기</button>
      {modal === true ? <Modal Writer={Writer} Select={Select} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.Writer[props.Select]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
