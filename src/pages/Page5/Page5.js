import React from "react";
import { Button, TextField, Box, Stack } from "@mui/material"
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

const Page5 = ()=>{
  const [count, setCount] = useState(0);
  console.log("Page 5")
  useEffect(() => {
    console.log("useeffect")
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("2")
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

export default Page5