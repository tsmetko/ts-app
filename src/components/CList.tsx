interface ListProps {
   items: Array<{id:string|number, name:string}>
}

const CList = ({items}:ListProps )=>{
  console.log("Clist", items)
  return (
      <>
       {console.log("render Clist")}
          <ol>
             {items.map((item) => <li key={item.id}>{item.name}</li>)}
          </ol>
      </>
  )
}

export default CList