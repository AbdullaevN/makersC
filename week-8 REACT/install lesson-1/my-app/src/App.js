import React, { useState } from "react";
import "./App.css";

import Header from "./Component/Header";
import Section from "./Component/Section";
import Arr from "./Component/Arr";
import Footer from "./Component/Footer";
import Input from "./Component/Input";
import View from "./Component/View";

const App = () => {
  // const [num, setTodos] = useState([]);
  // function addTask(task) {
  //   let obj = {
  //     title: task,
  //     id: Date.now(),
  //   };
  // }
  // let todosArr = [...todos, obj];
  // setTodos(setTodos);
  // console.log(todosArr);
  return (
    <div>
      <Header />
      <Section />
      <Footer />
      {/* <h1>{num}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>- </button> */}
      {/* <Input addTask={addTask} />
      <View todos={todos} /> */}
    </div>
  );
};

export default App;
