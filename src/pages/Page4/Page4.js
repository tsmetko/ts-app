import React from "react";
import { Button, TextField, Box, Stack } from "@mui/material"
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

const Page4 = ()=>{
  const {register, watch, setValue, setFocus} = useForm({})

  const klik = ()=>{
    console.log("klik")
    // console.log(watch("firstName"))
    console.log(watch("firstName"))
  }

  const klik2 = ()=>{
    console.log("klik2")
    console.log(setValue("firstName", "kjdad"))
  }

  const klik3 = ()=>{
    console.log("klik3")
    console.log(setFocus("lastName"))
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log("val", value,"nmame:", name,"type:", type));
    console.log(subscription)
    return () => subscription.unsubscribe();
  }, [watch]);

    return (
        <>
          <Stack spacing={2} direction="row" sx={{ py: 3 }}>
            <Box sx={{ width: '25%' }}>
              <TextField {...register("firstName")}></TextField>
              <TextField {...register("lastName")}></TextField>
              <TextField></TextField>
            </Box>
            <Button onClick={klik}>Klik</Button>
            <Button onClick={klik2}>Klik2</Button>
          </Stack>
        </>
    )
}

export default Page4
