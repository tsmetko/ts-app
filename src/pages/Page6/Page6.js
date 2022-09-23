import React from "react";
import { Button, TextField, Box, Stack } from "@mui/material"
import { useState, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Todos from "../../components/Todos";

const Page6 = ()=>{
  console.info("Page 6")
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);
  // const addTodo = () => {
  //   console.log("New f")
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Page6