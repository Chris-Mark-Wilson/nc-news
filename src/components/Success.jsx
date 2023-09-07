export const Success=({msg})=>{
console.log("okay")
   const message=msg?msg:"success"
    return(
        <div className="success"><p>{message}</p></div>
    )
}