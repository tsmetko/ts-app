import { Button } from "@mui/material"
import CList from "../../components/CList"
import { useState, useEffect } from 'react';

const Page1 = ()=>{
    console.log("PAge1")
    const itemss = [{id:"1", name:"Item1"},{id:"2", name:"Item2"},{id:"3", name:"Item3"}]

    const itemss2 = [{id:"1", name:"Item1L2"},{id:"2", name:"Itemaaa2L2"},{id:"3", name:"Iteddm3L22"}]


    const [list1, setList1 ] = useState<boolean|undefined>(true)
    const[displayList, setdisplayList] = useState(itemss);

    const toggle = ()=>{
      
      //option1
      setList1((curr)=>{
        return !curr
      }) 
      

      /* //Opt2
      setList1((curr)=>{
        if(curr){
          setdisplayList(itemss2);
        }else{
          setdisplayList(itemss);
        }
        return !curr
      });*/

    }




    useEffect(()=>{
      //opt1
      if(list1){
        setdisplayList(itemss2);
      }else{
        setdisplayList(itemss);
      }
    },[list1])

    return (
        <>
        {console.log("render Page1")}
            <Button variant="outlined" onClick={toggle}> Toggle</Button>
            <h3>Page 1</h3>
            <CList items={displayList}></CList>
        </>
    )
}

export default Page1