interface ListProps2{
   list: any
}

const CList2 = ({list}:ListProps2 )=>{
  console.log("Clist", list)
  return (
      <>
       {console.log("render Clist")}
        {list}
      </>
  )
}

export default CList2