import { Button } from "@mui/material"
import CList2 from "../../components/CList2"
import { useState, useEffect } from 'react';

const Page2 = (propess:any)=>{
    console.log("PAge2")
    const itemss = <ol><li>Lisst1</li><li>List2</li><li>List3</li> <li>{propess.name}</li></ol>
    const itemss2 =  <ol><li>List1L2</li><li>List2L2</li><li>List3L2</li></ol>
    const [list1, setList1 ] = useState<boolean|undefined>(true)
    const[displayList, setdisplayList] = useState(itemss);

    const toggle = ()=>{
      console.log("cccc", list1)
      if(list1){
        setdisplayList(itemss2);
      }else{
        setdisplayList(itemss);
      }
      setList1(!list1);
    }

    return (
        <>
        {console.log("render Pageosai12")}
            <Button variant="outlined" onClick={toggle}> Toggle</Button>
            <h3>Page 2</h3>
            <CList2 list={displayList}></CList2>
        </>
    )
}

export default Page2
