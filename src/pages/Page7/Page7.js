import React from "react";
import { Button, TextField, Box, Stack } from "@mui/material"
import { useState, useEffect, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

const Page7= ()=>{
  console.log("Page7")
  const [v1, setV1] = useState("A")
  const [v2, setV2] = useState("B")

  let testv = v1+v2

  const updateState1 = () =>{
    Promise.resolve().then(() => {
      setV1("AA")
      setV2("BB")
    });
  }
  
  const updateState2 = () =>{
    setV1("AAA")
    setV2("BBB")
  }

  return (
    <>
      <p>{testv}</p>
      <Button onClick={updateState1}>{v1}-{v2}</Button>
      <Button onClick={updateState2}>{v1}-{v2}</Button>
    </>
  );
}

export default Page7