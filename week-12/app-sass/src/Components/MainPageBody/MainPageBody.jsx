import React from "react";
import "./assets/MainPageBody.css";
import arrow from "./assets/Arrow.svg";

const MainPageBody = () => {
  return (
    <>
      <div className="main-page-body">
        <div className="container">
          <div className="hero">
            <h1>JavaScript</h1>
            <div className="go-to-docs">
              <button>Перейти к документации</button>
            </div>
            <img src={arrow} />
          </div>

          {/*  */}
          <div className="cards">
            <div className="add-theme">
              <button>
                <span>+</span>
                Добавить тему
              </button>
            </div>
            <div className="cards-list">
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
              <div className="card">HTML</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageBody;
