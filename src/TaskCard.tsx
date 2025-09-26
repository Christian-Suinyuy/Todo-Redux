import { useState } from "react"
import { removeTodo, updateTodo } from "./state/listSlice"
import { useDispatch } from "react-redux"

type Details = {
    description: string,
    id: number
}

function Card(details: Details){
    let [current, setCurent] = useState<string>(details?.description)
    let [toEdit, setbuttons] = useState<boolean>(false)

    const dispatch = useDispatch()
    console.log(toEdit)
    
    return (
        <section className="grid grid-cols-[2fr_.5fr] bg-blue-900 text-white items-center mx-3 p-2">
            <textarea  readOnly= {!toEdit ? true : false} value={current} 
                onChange={(e)=>(setCurent(c=> c= e.target.value))} 
                className={`${toEdit ? "bg-slate-100 text-black" : ""} focus:outline-0 text-center`}> </textarea>
            <div id="buttons" className="">
                <div className={`${toEdit ? "hidden": "flex"} gap-7`}>
                    <button className="bg-blue-700 " onClick={()=> dispatch(removeTodo(details.id))} > Delete</button> 
                    <button onClick={()=> setbuttons(b=> !b)} className="bg-blue-700" > Edit</button> 
                </div>
                <div className={`alternative  gap-1 ${toEdit ? "flex" : "hidden"}`}>
                    <button className="bg-blue-700 " onClick={()=> {
                        setCurent(details.description)
                        setbuttons( b=> b= !b )}} > cancel</button> 
                    <button className="bg-blue-700 " onClick={()=>{
                        dispatch(updateTodo({description:current,idx: details.id}))
                        setbuttons( b=> b= !b )
                    }}> save</button> 
                </div>
            </div>
        </section>
    )
}

export default Card